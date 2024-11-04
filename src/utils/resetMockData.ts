import { handleError } from "../errors/handleError"
import { readFile } from "./readFile"
import { saveFile } from "./saveFile"

export const resetMockData = async (changedFilePath: string, filePathDefault: string) => {
  try {

    const changedFile = await readFile(changedFilePath)

    const defaultFileContent = await readFile(filePathDefault)
    console.log(typeof defaultFileContent)

    return saveFile(changedFilePath, defaultFileContent)
  } catch (error) {
    handleError(error)
  }
}
