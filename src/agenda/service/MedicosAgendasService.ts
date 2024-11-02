import { formatDate } from "../../utils/formatDate" 
import { IMedicosAgendas } from "../interface/IMedicosAgendas" 
import { MedicosAgendasDTO } from "../dto/MedicosAgendasDTO"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"

export class MedicosAgendasService {

  public getAll(): Object {
    const medicosAgendasFormatted: IMedicosAgendas[] = this.formatData(
      MedicosAgendasDTO.getAllMedicosAgendas()
    )

    return { medicos: medicosAgendasFormatted }
  }
  
  public removeMedicoAgenda(medicoId: number): IMedicosAgendas[] {
    return MedicosAgendasDTO.removeMedicoAgenda(medicoId)
  }

  public updateMedicoAgenda(medico: IMedicoAgenda): IMedicoAgenda[] | IMedicoAgenda {
    return MedicosAgendasDTO.updateMedicoAgenda(medico)
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
