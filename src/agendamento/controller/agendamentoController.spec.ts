import { APIGatewayProxyEvent } from "aws-lambda"
import { setAgendamento } from "./agendamentoController"
import { handleError } from "../../errors/handleError"
import { eventTestMock } from "../mocks/event"
import { resetTotalData } from "../../utils/resetTotalData"

jest.mock("../../errors/handleError")

describe("entity: medicos | layer: controller | file: agendamentosController", () => {

  const event: APIGatewayProxyEvent = eventTestMock

  afterAll(async () => {
    jest.clearAllMocks()
    await resetTotalData()
  })

  describe("[success]", () => {
    it("[1] - should add appointment", async () => {

      const { body, statusCode } = await setAgendamento(event)
      const result = {
        statusCode,
        body: JSON.parse(body)
      }

      expect(!!result.statusCode).toBeTruthy()
      expect(!!result.body).toBeTruthy()
      expect(result.statusCode).toEqual(201)
      expect(result.body.agendamento.id).toEqual(6)
      expect(result.body.agendamento.medico_id).toEqual(1)
      expect(result.body.agendamento.data_horario).toEqual("2024-10-05 10:00")
    })

    it("[2] - should return error if save existing schedule", async () => {

      const warnMessage: string = "Horário não disponível"
      const { body, statusCode } = await setAgendamento(event)
      const result = {
        statusCode,
        body: JSON.parse(body)
      }

      expect(result.statusCode).toEqual(400)
      expect(!!result.statusCode).toBeTruthy()
      expect(!!result.body).toBeTruthy()
      expect(!!result.body.menssagem).toBeTruthy()
      expect(!!result.body.horarios_disponiveis).toBeTruthy()
      expect(result.statusCode).toEqual(400)
      expect(Array.isArray(result.body.horarios_disponiveis)).toBeTruthy()
      expect(result.body.menssagem).toEqual(warnMessage)

      await resetTotalData()
    })
  })

  describe("[fail]", () => {
    it("[1] - should handle errors and return 500", async () => {

      const errorMessage: string = "Erro ao realizar agendamento"

      try {
        throw new Error(errorMessage)

      } catch (error) {
        handleError(error)

        expect((error as Error).message).toBe(errorMessage)

        expect(handleError).toHaveBeenCalledWith(error)
        expect(handleError).toHaveBeenCalled()
      }
    })
  })
})
