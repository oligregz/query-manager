import { IMedicosAgendas } from "./IMedicosAgendas"

export interface IMedicosAgendasResponse extends IMedicosAgendas {
  mensagem?: string
  medicos?: IMedicosAgendas[]
}
