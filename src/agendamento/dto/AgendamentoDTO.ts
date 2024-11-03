import { IAgendamento } from "../interface/IAgendamento"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse"
import  * as AgendamentoRepository  from "../repository/agendamentoRepository"

export class AgendamentoDTO implements IAgendamento {

  constructor(
    public id: number,
    public medico_id: number,
    public paciente_nome: string,
    public data_horario: string
  ) { }

  static listAgendamentos(): IAgendamento[] {
    const agendamentos: IAgendamento[] = AgendamentoRepository.listAgendamentos()

    return agendamentos
  }

  static getAgendamentoById(agendamentoId: number): IAgendamento | IAgendamentoResponse {
    const agendamento: IAgendamento = AgendamentoRepository
    .getAgendamentoById(agendamentoId)

    return agendamento
  }

  static setAgendamento(agendamentoParam: IAgendamentoParams): IAgendamento {
    const newAgendamento = AgendamentoRepository.setAgendamento(agendamentoParam)

    return newAgendamento
  }

  static getMaxId(): number {
    const maxId = AgendamentoRepository.getMaxId()
    return maxId
  }
  
  static hasAgendamento(agendamentoParam: IAgendamentoParams): boolean{
    const hasAgendamento = AgendamentoRepository.hasAgendamento(agendamentoParam)

    return hasAgendamento
  }
}