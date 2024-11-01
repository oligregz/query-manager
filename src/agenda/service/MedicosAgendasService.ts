import { formatDate } from "../../utils/formatDate" 
import { IMedicosAgendas } from "../interface/IMedicosAgendas" 
import { MedicosAgendasDTO } from "../dto/MedicosAgendasDTO"

export class MedicosAgendasService {

  public getAll(): IMedicosAgendas[] {
    const medicosAgendasFormatted: IMedicosAgendas[] = this.formatData(
      MedicosAgendasDTO.getAllMedicosAgendas()
    )

    return medicosAgendasFormatted
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
