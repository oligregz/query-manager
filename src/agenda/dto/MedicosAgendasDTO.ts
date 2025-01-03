import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"
import * as MedicosAgendasRepository from "../repository/medicosAgendasRepository"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"

export class MedicosAgendasDTO implements IMedicosAgendas {
  constructor(
    public id: number,
    public nome: string,
    public especialidade: string,
    public horarios_disponiveis: string[]
  ) { }

  static listMedicosAgendas(): IMedicosAgendas[] {
    return MedicosAgendasRepository.listMedicosAgendas()
  }

  static getMedicoAgendaById(medicoId: number): IMedicosAgendas {
    return MedicosAgendasRepository.getMedicoAgendaById(medicoId) 
  }

  static hasTimetableAvailable(data_horario: string, medicoId: number): boolean {

    const medicoAgenda = this.getMedicoAgendaById(medicoId) as IMedicosAgendas
    if ( !medicoAgenda ) return false

    const formattedDateToISO8601 = formatDateStringForISO8601(data_horario)
    const timetableIsAvailable: boolean = medicoAgenda.horarios_disponiveis.includes(formattedDateToISO8601)

    return timetableIsAvailable
  }

  static removeAvailableHour(time: string, medicoId: number): boolean {

    const medicoAgenda = this.getMedicoAgendaById(medicoId) as IMedicosAgendas
  
    if (!medicoAgenda) return false
  
    const index = medicoAgenda.horarios_disponiveis.indexOf(time)
  
    if (index !== -1) {
      medicoAgenda.horarios_disponiveis.splice(index, 1)
      return true
    }
  
    return false
  }

  static removeMedicoAgenda(medicoId: number): IMedicosAgendas[] {
    return MedicosAgendasRepository.removeMedicoAgenda(medicoId)
  }

  static updateMedicoAgenda(medicoParam: IMedicoAgenda): IMedicoAgenda[] | IMedicoAgenda {
    return MedicosAgendasRepository.updateMedicoAgenda(medicoParam)
  }
}
