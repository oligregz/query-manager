import { IMedicoAgenda } from "../interface/IMedicoAgenda";
import { medicosAgendasMock } from "../mocks/medicosAgendasMock";

export class MedicoAgendaService {
  public getAll(): IMedicoAgenda[] {
    return medicosAgendasMock
  }
}