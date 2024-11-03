import { IAgendamento } from "../agendamento/interface/IAgendamento"
import { formatDate } from "./formatDate"

export const formatAgendamentoData = (agendamento: IAgendamento): IAgendamento => {
  return {
    ...agendamento,
    data_horario: formatDate(agendamento.data_horario)
  }
}