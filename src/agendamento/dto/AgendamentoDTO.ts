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
      && agendamentoParam.data_horario === agendamento.data_horario
      && agendamentoParam.paciente_nome === agendamento.paciente_nome
    })
    return hasAgendamento
  }

  static getMaxId = (): number => {
    return agendamentosMock.reduce((maxId, agendamento) => 
      agendamento.id > maxId ? agendamento.id : maxId, 0)
  }
}