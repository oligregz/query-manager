import { handleError } from "../errors/handleError"
import { readFile } from "./readFile"
import { saveFile } from "./saveFile"

export const resetMockData = async (changedFilePath: string, filePathDefault: string): Promise<void> => {
  try {
    const defaultFileContent = await readFile(filePathDefault)

    return await saveFile(changedFilePath, defaultFileContent)
  } catch (error) {
    handleError(error)
  }
}
