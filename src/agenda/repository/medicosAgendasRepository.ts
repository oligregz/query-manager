
import {  medicosAgendasMockFilePath, medicosAgendasMockDefaultFilePath } from "../mocks/medicosAgendasMock"
import * as fs from 'fs'
import { handleError } from "../../errors/handleError"
import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import { IMedicosAgendasResponse } from "../interface/IMedicosAgendasResponse"

export function readMedicos() {
  try {

    const data = fs.readFileSync(medicosAgendasMockFilePath, 'utf-8')
    return JSON.parse(data)

  } catch (error) {
    handleError(error, 'Erro ao ler os médicos')
    return []
  }
}

export function saveMedicos(medicos: IMedicosAgendas[]): void {
  try {
    fs.writeFileSync(medicosAgendasMockFilePath, JSON.stringify(medicos, null, 2), 'utf-8')
  } catch (error) {
    handleError(error, 'Erro ao salvar médicos')
  }
}

export function listMedicos(): IMedicosAgendas[] {
  try {
    const medicos: IMedicosAgendas[] = readMedicos()
    if ( !medicos ) return []

    return  medicos

  } catch (error) {
    handleError(error, 'Erro ao listar médicos')
  }
}

export function removeMedico(id: number): IMedicosAgendas[] {
  try {
    const medicos: IMedicosAgendas[] = readMedicos()
    if (!medicos) return []

    const updatedMedicos = medicos.filter(medico => medico.id !== id)

    saveMedicos(updatedMedicos)

    return updatedMedicos

  } catch (error) {
    handleError(error, 'Erro ao remover médico')
    return []
  }
}
