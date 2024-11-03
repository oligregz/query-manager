import { agendamentosMockFilePath } from "../mocks/agendamentosMock"
import * as fs from 'fs'
import { IAgendamento } from "../interface/IAgendamento"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { formatDateStringForISO8601 } from "../../utils/formatDateStringForISO8601"
import { handleError } from "../../errors/handleError"

export function readAgendamentos(): IAgendamento[] {
  try {
    const data = fs.readFileSync(agendamentosMockFilePath, 'utf-8')

    return JSON.parse(data)

  } catch (error) {
    handleError(error, 'Erro ao ler arquivo de agandamentos')
  }
}

export function saveAgendamentos(agendamentos: IAgendamento[]): void {
  try {
    fs.writeFileSync(agendamentosMockFilePath, JSON.stringify(agendamentos, null, 2), 'utf-8')

  } catch (error) {
    handleError(error, 'Erro ao salvar agendamentos')
  }
}

export function listAgendamentos(): IAgendamento[] {
  try {
    const agendamentos: IAgendamento[] = readAgendamentos()
    if ( !agendamentos ) return []

    return agendamentos

  } catch (error) {
    handleError(error, 'Erro ao listar agendamentos')
  }
}

export function getAgendamentoById(agendamentoId: number): IAgendamento {
  try {
    const agendamentos: IAgendamento[] = listAgendamentos()

    const agendamento: IAgendamento = agendamentos
    .find(agendamentoParam => agendamentoParam.id === agendamentoId)

    return agendamento

  } catch (error) {
    handleError(error, 'Erro ao buscar agendamento')
  }
}

export function setAgendamento(agendamentoParam: IAgendamentoParams): IAgendamento {
  try {
    const agendamentos: IAgendamento[] = listAgendamentos()
    const maxId: number = this.getMaxId() + 1

    const newAgendamento: IAgendamento = {
      ...agendamentoParam,
      id: maxId
    }

    agendamentos.push(newAgendamento)

    saveAgendamentos(agendamentos)

    const savedAgendamento: IAgendamento = getAgendamentoById(newAgendamento.id)

    return savedAgendamento

  } catch (error) {
    handleError(error, 'Erro ao buscar médico')
  }
}

export function getMaxId(): number {
  try {
    const agendamentos: IAgendamento[] = listAgendamentos()

    return agendamentos.reduce((maxId, agendamento) => 
      agendamento.id > maxId ? agendamento.id : maxId, 0
    )

  } catch (error) {
    handleError(error, 'Erro ao buscar maior id')
  }
}

export function hasAgendamento(agendamentoParam: IAgendamentoParams): Boolean {
  try {
    const agendamentos: IAgendamento[] = listAgendamentos()

    const hasAgendamento: Boolean = agendamentos.some((agendamento) => {
      agendamentoParam.medico_id === agendamento.medico_id
      && formatDateStringForISO8601(agendamentoParam.data_horario) === agendamento.data_horario
      && agendamentoParam.paciente_nome === agendamento.paciente_nome
    })

    if ( !hasAgendamento ) return false

    return true

  } catch (error) {
    handleError(error, 'Erro ao buscar agendamento')
  }
}
