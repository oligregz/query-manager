import { formatDate } from "../../utils/formatDate" 
import { IMedicosAgendas } from "../interface/IMedicosAgendas" 
import { medicosAgendasMock } from "../mocks/medicosAgendasMock"

export class MedicosAgendasService {

  public getAll(): IMedicosAgendas[] {
    return this.formatData(medicosAgendasMock)
  }

  public formatData(medicosAgendasData: IMedicosAgendas[]): IMedicosAgendas[] {
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
}
