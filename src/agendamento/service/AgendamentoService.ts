import { IAgendamento } from "../interface/IAgendamento"
import { AgendamentoDTO } from "../dto/AgendamentoDTO"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"
import { MedicosAgendasDTO } from "../../agenda/dto/MedicosAgendasDTO"
import { formatDatesISOToString } from "../../utils/formatDatesISOToString"
import { formatDate } from "../../utils/formatDate"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse "

export class AgendamentoService {

  public setAgendamento(agendamentoBody: IAgendamentoParams): IAgendamentoResponse {
    const hasMedicoAgenda = MedicosAgendasDTO.getMedicoAgendaById(agendamentoBody.medico_id)
    if ( !hasMedicoAgenda ) return { messagem: "Médico não encontrado" }
    
    // 2) o médico tem disponibilidade para o horário passado
    const scheduleIsAvailable: Boolean = MedicosAgendasDTO.hasTimetableAvailable(
      agendamentoBody.data_horario,
      agendamentoBody.medico_id
    )

    if ( !scheduleIsAvailable ) {
      return {
        messagem: "Horário não disponível",
        horarios_disponiveis: formatDatesISOToString(hasMedicoAgenda.horarios_disponiveis)
      }
    }

    // 3) valida se o agendamento já existe
    const hasAgendamento: IAgendamento | undefined = AgendamentoDTO.hasAgendamento(agendamentoBody)
    if ( hasAgendamento ) return { messagem: "Agendamento já existe" }

    // 4) cria novo agendamento
    const newAgendamento = {
      ...agendamentoBody,
      id: AgendamentoDTO.getMaxId() + 1
    } as IAgendamento

    AgendamentoDTO.setAgendamento(newAgendamento)

    // 5) verifica se agendamento foi salvo
    const savedAgendamento: IAgendamento | undefined = AgendamentoDTO.getAgendamentoById(newAgendamento.id)
    if ( !savedAgendamento ) {
      return { messagem: "Erro ao salvar o agendamento." }
    }

    return {
      messagem: "Agendamento realizado com sucesso",
      agendamento: this.formatData(savedAgendamento)
    }
  }

  public formatData(agendamento: IAgendamento): IAgendamento {
    return {
      ...agendamento,
      data_horario: formatDateStringForISO8601(agendamento.data_horario)
    }
  }

  public getAllAgendamentos(): IAgendamento[] {
    const agendamentos: IAgendamento[] = AgendamentoDTO.getAllAgendaemntos()

    const agendamentosFormatted: IAgendamento[] = agendamentos.map((agendamento) => ({
      ...agendamento,
      data_horario: formatDate(agendamento.data_horario)
    }))

    return agendamentosFormatted
  }

}

