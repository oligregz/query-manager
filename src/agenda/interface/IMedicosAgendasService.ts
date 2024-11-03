import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"

export interface IMedicosAgendasService {
  listMedicosAgendas(): IMedicosAgendas[]
  getMedicoAgendaById(medicoId: number): IMedicosAgendas
  hasTimetableAvailable(data_horario: string, medicoId: number): boolean
  removeMedicoAgenda(medicoId: number): IMedicosAgendas[]
  updateMedicoAgenda(medico: IMedicoAgenda): IMedicoAgenda[] | IMedicoAgenda
}