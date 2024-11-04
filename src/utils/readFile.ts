import * as fs from "fs"
import { handleError } from "../errors/handleError"

export const readFile = async (pathFile: string) => {
  try {
    const data = await fs.readFileSync(pathFile, "utf-8")

    return JSON.parse(data)

  } catch (error) {
    handleError(error, "Erro ao ler arquivo")
  }
}