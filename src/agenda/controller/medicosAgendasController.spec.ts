import { APIGatewayProxyEvent } from "aws-lambda"
import { listMedicosAgendas } from "./medicosAgendasController"
import { eventTestMock } from "../mocks/event"
import { handleError } from "../../errors/handleError"

jest.mock("../../errors/handleError")

describe("entity: medicos | layer: controller | file: medicosAgendasController.ts", () => {
  describe("[success]", () => {
    it("[1] - should return a list of medical agendas", async () => {
      const event: APIGatewayProxyEvent = eventTestMock
  
      const { statusCode, body } = await listMedicosAgendas(event)
      const result = {
        statusCode,
        body: JSON.parse(body)
      }
  
      expect(!!result.statusCode).toBeTruthy()
      expect(result.statusCode).toBe(200)
      expect(!!result.body.medicos).toBeTruthy()
      expect(result.body.medicos.length > 0).toBeTruthy()
    })
  })

  describe("[fail]", () => {
    it("[1] - should handle errors and return 500", async () => {

      const errorMessage: string = "Erro ao listar documentos"

      try {
        listMedicosAgendas({} as any)
        throw new Error(errorMessage)

      } catch (error) {
        const handledError = handleError(error)
        console.log(handledError)

        expect((error as Error).message).toBe(errorMessage)

        expect(handleError).toHaveBeenCalledWith(error)
        expect(handleError).toHaveBeenCalled()
      }
    })
  })
})
