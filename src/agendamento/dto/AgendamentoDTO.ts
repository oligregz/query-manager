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
    return AgendamentoRepository.listAgendamentos()
  }

  static getAgendamentoById(agendamentoId: number): IAgendamento | IAgendamentoResponse {
    return AgendamentoRepository.getAgendamentoById(agendamentoId)
  }

  static setAgendamento(agendamentoParam: IAgendamentoParams): IAgendamento {
    return AgendamentoRepository.setAgendamento(agendamentoParam)

  }

  static getMaxId(): number {
    return AgendamentoRepository.getMaxId()
  }
  
  static hasAgendamento(agendamentoParam: IAgendamentoParams): boolean{
    return AgendamentoRepository.hasAgendamento(agendamentoParam)
  }
}