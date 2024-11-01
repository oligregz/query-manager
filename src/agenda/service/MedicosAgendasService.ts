import { formatDate } from "../../utils/formatDate" 
import { IMedicosAgendas } from "../interface/IMedicosAgendas" 
import { MedicosAgendasDTO } from "../dto/MedicosAgendasDTO"

export class MedicosAgendasService {

  public getAll(): Object {
    const medicosAgendasFormatted: IMedicosAgendas[] = this.formatData(
      MedicosAgendasDTO.getAllMedicosAgendas()
    )

    return { medicos: medicosAgendasFormatted }
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

  public removeMedico(medicoId: number): IMedicosAgendas[] {
    return MedicosAgendasDTO.removeMedico(medicoId)
  }
}
