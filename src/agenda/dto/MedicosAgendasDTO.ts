import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import { medicosAgendasMock } from "../mocks/medicosAgendasMock"
import { formatDate } from "../../utils/formatDate"
import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"

export class MedicosAgendasDTO implements IMedicosAgendas {
  constructor(
    public id: number,
    public nome: string,
    public especialidade: string,
    public horarios_disponiveis: string[]
  ) { }


  static getAllMedicosAgendas(): IMedicosAgendas[] {
    return medicosAgendasMock
  }

  static getMedicoAgendaById(medicoId: number): IMedicosAgendas | Object {
    const medicoAgenda: IMedicosAgendas | undefined = medicosAgendasMock.find(
      (medico) => { medico.id === medicoId }
    )

    return !medicoAgenda ? {} : medicoAgenda
  }

  static hasTimetableAvailable(data_horario: string, medicoId: number): Boolean {
    const medicoAgenda = this.getMedicoAgendaById(medicoId) as IMedicosAgendas

    if ( !medicoAgenda || !medicoAgenda.hasOwnProperty("id") ) return false

    const timetableIsAvailable: Boolean = medicoAgenda.horarios_disponiveis.includes(
      formatDateStringForISO8601(data_horario)
    )
    
    return timetableIsAvailable
  }
}
