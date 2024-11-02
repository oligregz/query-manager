import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { MedicosAgendasService } from "../service/MedicosAgendasService"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"

const medicosAgendasService = new MedicosAgendasService()

export const listMedicosAgendas = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const agendas: Object = medicosAgendasService.getAll()

    return {
      statusCode: 200,
      body: JSON.stringify(agendas)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro ao editar tentar editar o documento :/',
        error: error.message
      })
    }
  }
}

export const removeMedicoAgenda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const medicoId: number = parseInt(event.pathParameters.id)
    const medicos: Object = medicosAgendasService.removeMedicoAgenda(medicoId)

    return {
      statusCode: 200,
      body: JSON.stringify(medicos)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro ao editar tentar editar o documento :/',
        error: error.message
      })
    }
  }
}

export const updateMedicoAgenda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body: IMedicoAgenda = JSON.parse(event.body!)
    const medicos: Object = medicosAgendasService.updateMedicoAgenda(body)

    return {
      statusCode: 200,
      body: JSON.stringify(medicos)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro ao editar tentar editar o documento :/',
        error: error.message
      })
    }
  }
}

