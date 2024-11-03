import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { MedicosAgendasService } from "../service/MedicosAgendasService"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"
import { handleError } from "../../errors/handleError"

const medicosAgendasService = new MedicosAgendasService()

export const listMedicosAgendas = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const agendas: Object = {
      medicos: medicosAgendasService.listMedicosAgendas()
    }

    return {
      statusCode: 200,
      body: JSON.stringify(agendas)
    }
  } catch (error) {
    handleError(error, 'Erro ao listar documentos')
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
    handleError(error, 'Erro ao remover documento')
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
    handleError(error, 'Erro ao atualizar documento')
  }
}

