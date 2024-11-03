import { IAgendamento } from "../interface/IAgendamento"
import agendamentosMockDataJSON from "./agendamentos.json"
import * as path from 'path'

export const agendamentosMock: IAgendamento[] = agendamentosMockDataJSON

const filePath = path.join(__dirname, 'agendamentos.json')
const filePathDefault = path.join(__dirname, 'agendamentosDefault.json')

export const agendamentosMockFilePath: string = filePath
export const agendamentosMockDefaultFilePath: string = filePathDefault
