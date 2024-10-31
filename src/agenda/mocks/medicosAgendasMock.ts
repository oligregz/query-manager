import { IMedicoAgenda } from "../interface/IMedicosAgendas";

export const medicosAgendasMock: IMedicoAgenda[] = [
  {
    id: 1,
    nome: "Dr. João Silva",
    especialidade: "Cardiologista",
    horarios_disponiveis: [
      "2024-10-05T09:00:00",
      "2024-10-05T10:00:00",
      "2024-10-05T11:00:00"
    ]
  },
  {
    id: 2,
    nome: "Dra. Maria Souza",
    especialidade: "Dermatologista",
    horarios_disponiveis: [
      "2024-10-06T14:00:00",
      "2024-10-06T15:00:00"
    ]
  },
  {
    id: 3,
    nome: "Dr. Carlos Pereira",
    especialidade: "Ortopedista",
    horarios_disponiveis: [
      "2024-10-07T08:00:00",
      "2024-10-07T09:30:00",
      "2024-10-07T11:00:00"
    ]
  },
  {
    id: 4,
    nome: "Dra. Ana Clara Oliveira",
    especialidade: "Pediatra",
    horarios_disponiveis: [
      "2024-10-08T10:00:00",
      "2024-10-08T11:30:00",
      "2024-10-08T13:00:00"
    ]
  },
  {
    id: 5,
    nome: "Dr. Ricardo Almeida",
    especialidade: "Neurologista",
    horarios_disponiveis: [
      "2024-10-09T15:00:00",
      "2024-10-09T16:00:00",
      "2024-10-09T17:30:00"
    ]
  }
]
