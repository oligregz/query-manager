import { IMedicosAgendas } from "../agenda/interface/IMedicosAgendas"
import { formatDate } from "./formatDate"

export const formatMedicosAgendasData = (medicosAgendasData: IMedicosAgendas[]): IMedicosAgendas[] => {
  const formattedData = medicosAgendasData.map((medicoAgendas: IMedicosAgendas) => {
    return {
      ...medicoAgendas,
      horarios_disponiveis: medicoAgendas.horarios_disponiveis.map((horario_disponivel) => {
        return formatDate(horario_disponivel) 
      })
    }
  })

  return formattedData
}