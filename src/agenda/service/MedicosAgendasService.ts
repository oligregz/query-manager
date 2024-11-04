import { IMedicosAgendas } from "../interface/IMedicosAgendas" 
import { MedicosAgendasDTO } from "../dto/MedicosAgendasDTO"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"
import { formatMedicosAgendasData } from "../../utils/formatMedicosAgendasData"
import { IMedicosAgendasService } from "../interface/IMedicosAgendasService"

export class MedicosAgendasService implements IMedicosAgendasService {

  public listMedicosAgendas(): IMedicosAgendas[] {
    const medicosAgendasFormatted: IMedicosAgendas[] = formatMedicosAgendasData(
      MedicosAgendasDTO.getAllMedicosAgendas()
    )

    return medicosAgendasFormatted 
  }
  
  public removeMedicoAgenda(medicoId: number): IMedicosAgendas[] {
    return MedicosAgendasDTO.removeMedicoAgenda(medicoId)
  }

  public updateMedicoAgenda(medico: IMedicoAgenda): IMedicoAgenda[] | IMedicoAgenda {
    return MedicosAgendasDTO.updateMedicoAgenda(medico)
  }

  public getMedicoAgendaById(medicoId: number): IMedicosAgendas {
    const medico: IMedicosAgendas = MedicosAgendasDTO.getMedicoAgendaById(medicoId)
    return medico
  }

  public hasTimetableAvailable(data_horario: string, medicoId: number): boolean {
    const hasTimetableAvailable: boolean = MedicosAgendasDTO
      .hasTimetableAvailable(data_horario, medicoId)

    return hasTimetableAvailable
  }

}
