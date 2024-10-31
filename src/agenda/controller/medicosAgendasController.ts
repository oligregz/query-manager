import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { IMedicoAgenda } from "../interface/IMedicoAgenda"
import { MedicoAgendaService } from "../service/MedicoAgendaService"

const medicosAgendasService = new MedicoAgendaService()

export const getAllMedicosAgendas = (): IMedicoAgenda[] => {
  const medicosAgendas: IMedicoAgenda[] = medicosAgendasService.getAll()

  if (!medicosAgendas) return []
  return medicosAgendas
}

export const listAgendas = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const agendas: IMedicoAgenda[] = getAllMedicosAgendas()

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
