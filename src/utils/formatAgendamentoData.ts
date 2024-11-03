import { IAgendamento } from "../agendamento/interface/IAgendamento"
import { formatDateStringForISO8601 } from "./formatDateStringForISO8601"

export const formatAgendamentoData = (agendamento: IAgendamento): IAgendamento => {
  return {
    ...agendamento,
    data_horario: formatDateStringForISO8601(agendamento.data_horario)
  }
}