import { IMedicosAgendas } from "../interface/IMedicosAgendas"
import medicosAgendasMockDataJSON from "./medicos.json"
import * as path from 'path'

export const medicosAgendasMock: IMedicosAgendas[] = medicosAgendasMockDataJSON

const filePath = path.join(__dirname, 'medicos.json')
const filePathDefault = path.join(__dirname, 'medicosDefault.json')

export const medicosAgendasMockFilePath: string = filePath
export const medicosAgendasMockDefaultFilePath: string = filePathDefault