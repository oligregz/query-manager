import * as medicosAgendasPathMocks from "../agenda/mocks/medicosAgendasMock"
import * as agendamentosPathMocks from "../agendamento/mocks/agendamentosMock"
import { handleError } from "../errors/handleError"
import { resetMockData } from "./resetMockData"

export const resetTotalData = async () => {
  try {
    await resetMockData(
      agendamentosPathMocks.agendamentosMockFilePath,
      agendamentosPathMocks.agendamentosMockDefaultFilePath
    )
    await resetMockData(
      medicosAgendasPathMocks.medicosAgendasMockFilePath,
      medicosAgendasPathMocks.medicosAgendasMockDefaultFilePath
    )

  } catch (error) {
    handleError(error, "Erro ao resetar todos os dados")
  }
}

(async () => {
  await resetTotalData()
})()