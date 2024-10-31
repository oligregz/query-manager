import { IMedicosAgendas } from "../interface/IMedicosAgendas"

export class MedicoAgendaDTO implements IMedicosAgendas {
  constructor(
    public id: number,
    public nome: string,
    public especialidade: string,
    public horarios_disponiveis: string[]
  ) { }
}
