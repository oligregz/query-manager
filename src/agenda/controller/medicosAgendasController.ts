import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { MedicosAgendasService } from "../service/MedicosAgendasService"

const medicosAgendasService = new MedicosAgendasService()

export const getAllMedicosAgendas = (): Object=> {
  const medicosAgendas: Object  = medicosAgendasService.getAll()
  if (!medicosAgendas) return []

  return medicosAgendas
}

export const listAgendas = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const agendas: Object = getAllMedicosAgendas()

    return {
      statusCode: 200,
      body: JSON.stringify(agendas),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro ao obter as agendas' }),
    }
  }
}
