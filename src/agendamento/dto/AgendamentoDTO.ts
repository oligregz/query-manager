import { IAgendamento } from "../interface/IAgendamento"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse"
import  * as AgendamentosRepository  from "../repository/agendamentosRepository"

export class AgendamentoDTO implements IAgendamento {

  constructor(
    public id: number,
    public medico_id: number,
    public paciente_nome: string,
    public data_horario: string
  ) { }

  static listAgendamentos(): IAgendamento[] {
    const agendamentos: IAgendamento[] = AgendamentosRepository.listAgendamentos()

    return agendamentos
  }

  static getAgendamentoById(agendamentoId: number): IAgendamento | IAgendamentoResponse {
    const agendamento: IAgendamento | IAgendamentoResponse = AgendamentosRepository
    .getAgendamentoById(agendamentoId)

    return agendamento
  }

  static setAgendamento(agendamentoParam: IAgendamentoParams): IAgendamento {
    const newAgendamento = AgendamentosRepository.setAgendamento(agendamentoParam)

    return newAgendamento
  }

  static getMaxId(): number {
    const maxId = AgendamentosRepository.getMaxId()
    return maxId
  }
  
  static hasAgendamento(agendamentoParam: IAgendamentoParams): Boolean{
    const hasAgendamento = AgendamentosRepository.hasAgendamento(agendamentoParam)

    return hasAgendamento
  }
}