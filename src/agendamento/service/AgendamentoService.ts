import { IAgendamento } from "../interface/IAgendamento"
import { agendamentosMock } from "../mocks/agendamentosMock"
import { medicosAgendasMock } from "../../agenda/mocks/medicosAgendasMock"
import { AgendamentoDTO } from "../dto/AgendamentoDTO"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"

export class AgendamentoService {

  public setAgendamento(agendamentoBody: IAgendamentoParams): Object {
    const hasAgendamento = AgendamentoDTO.hasAgendamento(agendamentoBody)

    if (hasAgendamento) {
      return {
        message: "Agendamento já existe",
        agendamento: this.formatData(hasAgendamento)
      }
    }

    const newAgendamento = {
      ...agendamentoBody,
      id: AgendamentoDTO.getMaxId() + 1
    } as IAgendamento

    AgendamentoDTO.setAgendamento(newAgendamento)

    return {
      message: "Agendamento realizado com sucesso",
      agendamento: this.formatData(newAgendamento)
    }
  }

  public formatData(agendamento: IAgendamento): IAgendamento {
    return {
      ...agendamento,
      data_horario: formatDateStringForISO8601(agendamento.data_horario)
    }
  }
}

