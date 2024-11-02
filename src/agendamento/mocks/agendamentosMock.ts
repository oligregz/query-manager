import { IAgendamento } from "../interface/IAgendamento"
import agendamentosMockDataJSON from "./agendamentos.json"
import * as path from 'path'

export const agendamentosMock: IAgendamento[] = agendamentosMockDataJSON

const filePath = path.join(__dirname, 'medicos.json')
const filePathDefault = path.join(__dirname, 'medicos.json')

export const agendamentosMockFilePath: string = filePath
export const agendamentosMockDefaultFilePath: string = filePathDefault
