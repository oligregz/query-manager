import * as fs from "fs"
import { handleError } from "../errors/handleError"

export const readFile = async (pathFile: string): Promise<object> => {
  try {

    const data: string = await fs.readFileSync(pathFile, "utf-8")
    return JSON.parse(data)

  } catch (error) {
    handleError(error, "Erro ao ler arquivo")
  }
}