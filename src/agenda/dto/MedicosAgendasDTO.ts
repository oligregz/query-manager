import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import { medicosAgendasMock } from "../mocks/medicosAgendasMock"
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

  static getMedicoAgendaById(medicoId: number): IMedicosAgendas | undefined {
    const medicoAgenda: IMedicosAgendas | undefined = medicosAgendasMock.find(medico =>  medico.id === medicoId)
    
    return medicoAgenda 
  }

  static hasTimetableAvailable(data_horario: string, medicoId: number): Boolean {
    const medicoAgenda = this.getMedicoAgendaById(medicoId) as IMedicosAgendas

    if ( !medicoAgenda ) return false

    const formattedDateToISO8601 = formatDateStringForISO8601(data_horario)
    const timetableIsAvailable: Boolean = medicoAgenda.horarios_disponiveis.includes(formattedDateToISO8601)
    
    return timetableIsAvailable
  }

  static removeAvailableHour(time: string, medicoId: number): boolean {

    const medicoAgenda = this.getMedicoAgendaById(medicoId) as IMedicosAgendas;
  
    if (!medicoAgenda) return false;
  
    const index = medicoAgenda.horarios_disponiveis.indexOf(time);
  
    if (index !== -1) {
      medicoAgenda.horarios_disponiveis.splice(index, 1);
      return true
    }
  
    return false
  }
}
