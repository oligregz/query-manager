import { IMedicoAgenda } from "../interface/IMedicoAgenda";

export class MedicoAgendaDTO implements IMedicoAgenda {
  constructor(
    public id: number,
    public nome: string,
    public especialidade: string,
    public horarios_disponiveis: string[]
  ) { }
}
