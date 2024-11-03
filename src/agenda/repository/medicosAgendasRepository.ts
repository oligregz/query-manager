
import {  medicosAgendasMockFilePath } from "../mocks/medicosAgendasMock"
import * as fs from 'fs'
import { handleError } from "../../errors/handleError"
import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"

export function readMedicosAgendas() {
  try {
    const data = fs.readFileSync(medicosAgendasMockFilePath, 'utf-8')

    return JSON.parse(data)

  } catch (error) {
    handleError(error, 'Erro ao ler os médicos')
  }
}

export function saveMedicosAgendas(medicos: IMedicoAgenda[]): void {
  try {
    fs.writeFileSync(medicosAgendasMockFilePath, JSON.stringify(medicos, null, 2), 'utf-8')

  } catch (error) {
    handleError(error, 'Erro ao salvar médicos')
  }
}

export function listMedicosAgendas(): IMedicosAgendas[] {
  try {
    const medicos: IMedicosAgendas[] = readMedicosAgendas()
    if ( !medicos ) return []

    return  medicos

  } catch (error) {
    handleError(error, 'Erro ao listar médicos')
  }
}

export function removeMedicoAgenda(medicoId: number): IMedicosAgendas[] {
  try {
    const medicos: IMedicosAgendas[] = listMedicosAgendas()
    if ( !medicos ) return []

    const updatedMedicos = medicos.filter(medico => medico.id !== medicoId)

    saveMedicosAgendas(updatedMedicos)

    return updatedMedicos

  } catch (error) {
    handleError(error, 'Erro ao remover médico')
  }
}

export function getMedicoAgendaById(medicoId: number): IMedicosAgendas {
  try {
    const medicos: IMedicosAgendas[] = listMedicosAgendas()


    const medico: IMedicosAgendas = medicos.find(medico => medico.id === medicoId)

    return medico

  } catch (error) {
    handleError(error, 'Erro ao remover médico')
  }
}

export function updateMedicoAgenda(medicoParam: IMedicoAgenda ): IMedicoAgenda[] | IMedicoAgenda {
  try {
    const medicos: IMedicosAgendas[] = listMedicosAgendas()

    if ( !medicos ) return {
      mensagem: "Médicos não encontrados"
    }

    const updatedMedicos: IMedicoAgenda[] = medicos.map((medico) => {
      if ( medico.id === medicoParam.id ) {
        return {
          ...medico,
          ...medicoParam
        }
      }
      return medico
    }) 

    saveMedicosAgendas(updatedMedicos)

    return getMedicoAgendaById(medicoParam.id)

  } catch (error) {
    handleError(error, 'Erro ao remover médico')
  }
}
