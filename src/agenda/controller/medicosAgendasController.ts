import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { MedicosAgendasService } from "../service/MedicosAgendasService"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"
import { handleError } from "../../errors/handleError"
import { IMedicosAgendas } from "../interface/IMedicosAgendas"

const medicosAgendasService = new MedicosAgendasService()

export const listMedicosAgendas = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const agendas: { medicos: IMedicosAgendas[] } = {
      medicos: medicosAgendasService.listMedicosAgendas()
    }

    return {
      statusCode: 200,
      body: JSON.stringify(agendas)
    }
  } catch (error) {
    handleError(error, "Erro ao listar documentos")
  }
}

export const removeMedicoAgenda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const medicoId: number = parseInt(event.pathParameters.id)

    const medicos: object = medicosAgendasService.removeMedicoAgenda(medicoId)

    return {
      statusCode: 200,
      body: JSON.stringify(medicos)
    }
  } catch (error) {
    handleError(error, "Erro ao remover documento")
  }
}

export const updateMedicoAgenda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body: IMedicoAgenda = JSON.parse(event.body!)
    const medicos: object = medicosAgendasService.updateMedicoAgenda(body)

    return {
      statusCode: 200,
      body: JSON.stringify(medicos)
    }
  } catch (error) {
    handleError(error, "Erro ao atualizar documento")
  }
}

