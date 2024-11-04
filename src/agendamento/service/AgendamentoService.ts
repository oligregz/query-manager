import { IAgendamento } from "../interface/IAgendamento"
import { AgendamentoDTO } from "../dto/AgendamentoDTO"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { formatDatesISOToString } from "../../utils/formatDatesISOToString"
import { formatDate } from "../../utils/formatDate"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse"
import { IMedicosAgendasService } from "../../agenda/interface/IMedicosAgendasService"
import { IMedicoAgenda } from "../../agenda/interface/IMedicoAgenda"
import { formatAgendamentoData } from "../../utils/formatAgendamentoData"
import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"

export class AgendamentoService {

  private medicosAgendasService: IMedicosAgendasService

  constructor(medicosAgendasService: IMedicosAgendasService) {
    this.medicosAgendasService = medicosAgendasService
  }

  public setAgendamento(agendamentoBody: IAgendamentoParams): IAgendamentoResponse {

    // 1) valida se médico existe
    const medicoAgendas: IMedicoAgenda = this.medicosAgendasService.getMedicoAgendaById(agendamentoBody.medico_id)
    if ( !medicoAgendas.nome ) return { menssagem: "Médico não encontrado" }
    
    // 2) valida se o médico tem disponibilidade para o horário passado
    const scheduleIsAvailable: boolean = this.medicosAgendasService.hasTimetableAvailable(
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
    const hasAgendamento: boolean = AgendamentoDTO.hasAgendamento(agendamentoBody)
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

    if ( !savedAgendamento || "menssagem" in savedAgendamento) {
      return { menssagem: "Erro ao salvar o agendamento." }
    }


    // 6) atualiza agenda do médico
    const dataHorarioAgendamentoSaved = formatDateStringForISO8601(savedAgendamento.data_horario)

    const updatedAgenda: string[] = medicoAgendas.horarios_disponiveis.filter((horarioAvailable) => {
      return horarioAvailable !== dataHorarioAgendamentoSaved
    })
    
    const medicoAgendaBodyUpdated: IMedicoAgenda = {
      id: agendamentoBody.medico_id,
      nome: medicoAgendas.nome,
      especialidade: medicoAgendas.especialidade,
      horarios_disponiveis: updatedAgenda
    }

    this.medicosAgendasService.updateMedicoAgenda(medicoAgendaBodyUpdated)

    // 7) valida se a agenda do médico foi atualizada
    const currentAgenda: string[] = this.medicosAgendasService
      .getMedicoAgendaById(agendamentoBody.medico_id)
      .horarios_disponiveis

    const medicoAgendaIsUpdated: boolean = JSON.stringify(currentAgenda) === JSON.stringify(updatedAgenda)
    
    if ( !medicoAgendaIsUpdated ) return {
      menssagem: "Erro ao atualizar agenda do médico"
    }

    return {
      menssagem: "Agendamento realizado com sucesso",
      agendamento: formatAgendamentoData(savedAgendamento as IAgendamento)
    }
  }

  public listAgendamentos(): IAgendamento[] {
    const agendamentos: IAgendamento[] = AgendamentoDTO.listAgendamentos()

    const agendamentosFormatted: IAgendamento[] = agendamentos.map((agendamento) => ({
      ...agendamento,
      data_horario: formatDate(agendamento.data_horario)
    }))

    return agendamentosFormatted
  }

}

