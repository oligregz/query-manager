import { IAgendamento } from "./IAgendamento"

export interface IAgendamentoResponse {
  messagem: string
  agendamento?: IAgendamento
  horarios_disponiveis?: string[]
}
