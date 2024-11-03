import { IAgendamento } from "../interface/IAgendamento"
import { AgendamentoDTO } from "../dto/AgendamentoDTO"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { formatDatesISOToString } from "../../utils/formatDatesISOToString"
import { formatDate } from "../../utils/formatDate"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse"
import { IMedicosAgendasService } from "../../agenda/interface/IMedicosAgendasService"
import { IMedicoAgenda } from "../../agenda/interface/IMedicoAgenda"
import { formatAgendamentoData } from "../../utils/formatAgendamentoData"

export class AgendamentoService {

  private medicosAgendasService: IMedicosAgendasService

  constructor(medicosAgendasService: IMedicosAgendasService) {
    this.medicosAgendasService = medicosAgendasService
  }

  public setAgendamento(agendamentoBody: IAgendamentoParams): IAgendamentoResponse {

    const medicoAgendas: IMedicoAgenda = this.medicosAgendasService.getMedicoAgendaById(agendamentoBody.medico_id)
    if ( !medicoAgendas.hasOwnProperty('nome') ) return { menssagem: "Médico não encontrado" }
    
    // 2) o médico tem disponibilidade para o horário passado
    const scheduleIsAvailable: Boolean = this.medicosAgendasService.hasTimetableAvailable(
      agendamentoBody.data_horario,
      agendamentoBody.medico_id
    )

    if ( !scheduleIsAvailable ) {
      return {
        menssagem: "Horário não disponível",
        horarios_disponiveis: formatDatesISOToString(medicoAgendas.horarios_disponiveis)
      }
    }

    // 3) valida se o agendamento já existe
    const hasAgendamento: Boolean = AgendamentoDTO.hasAgendamento(agendamentoBody)
    if ( hasAgendamento ) return { menssagem: "Agendamento já existe" }

    // 4) cria novo agendamento
    const newAgendamento: IAgendamento = {
      ...agendamentoBody,
      id: AgendamentoDTO.getMaxId() + 1
    }

    AgendamentoDTO.setAgendamento(newAgendamento)

    // 5) verifica se agendamento foi salvo
    const savedAgendamento: IAgendamento | IAgendamentoResponse = AgendamentoDTO
    .getAgendamentoById(newAgendamento.id)

    if ( !savedAgendamento || 'menssagem' in savedAgendamento) {
      return { menssagem: "Erro ao salvar o agendamento." }
    }

    return {
      menssagem: "Agendamento realizado com sucesso",
      agendamento: formatAgendamentoData(savedAgendamento as IAgendamento)
    }
  }


  public getAllAgendamentos(): IAgendamento[] {
    const agendamentos: IAgendamento[] = AgendamentoDTO.listAgendamentos()

    const agendamentosFormatted: IAgendamento[] = agendamentos.map((agendamento) => ({
      ...agendamento,
      data_horario: formatDate(agendamento.data_horario)
    }))

    return agendamentosFormatted
  }

}

