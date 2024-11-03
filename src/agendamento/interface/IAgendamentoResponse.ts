import { IAgendamento } from "./IAgendamento"

export interface IAgendamentoResponse {
  menssagem?: string
  agendamento?: IAgendamento
  horarios_disponiveis?: string[]
}
