import * as fs from "fs"
import { handleError } from "../errors/handleError"

export const saveFile = async (path: string, content: object) => {
  try {

    return await fs.writeFileSync(path, JSON.stringify(content, null, 2), "utf-8")

  } catch (error) {
    handleError(error, "Erro ao salvar arquivo")
  }
}