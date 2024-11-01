import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"
import { IAgendamento } from "../interface/IAgendamento"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { agendamentosMock } from "../mocks/agendamentosMock"

export class AgendamentoDTO implements IAgendamento {

  constructor(
    public id: number,
    public medico_id: number,
    public paciente_nome: string,
    public data_horario: string
  ) { }

  static getAllAgendaemntos(): IAgendamento[] | undefined {
    const agendamentos: IAgendamento[] | undefined = agendamentosMock

    return agendamentos
  }

  static getAgendamentoById(id: number): IAgendamento | undefined {
    const agendamento: IAgendamento | undefined = agendamentosMock
    .find(agendamentoParam => agendamentoParam.id === id)

    return agendamento
  }
  
  static setAgendamento(agendamento: IAgendamento) {
  
    const maxId: number = this.getMaxId() + 1

    agendamentosMock.push({
      ...agendamento,
      id: maxId
    })
  }

  static hasAgendamento(agendamentoParam: IAgendamentoParams): IAgendamento | undefined {
    const hasAgendamento: IAgendamento | undefined = agendamentosMock.find((agendamento) => {
      agendamentoParam.medico_id === agendamento.medico_id
      && formatDateStringForISO8601(agendamentoParam.data_horario) === agendamento.data_horario
      && agendamentoParam.paciente_nome === agendamento.paciente_nome
    })
    return hasAgendamento
  }

  static getMaxId(): number {
    return agendamentosMock.reduce((maxId, agendamento) => 
      agendamento.id > maxId ? agendamento.id : maxId, 0
    )
  }

}