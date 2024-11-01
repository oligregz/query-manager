import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { AgendamentoService } from "../service/AgendamentoService"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { IAgendamento } from "../interface/IAgendamento"

export const setAgendamento = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

    const agendamentoBody = JSON.parse(event.body!) as IAgendamentoParams

    const agendamentoService = new AgendamentoService()

    const agendamento: Object = agendamentoService.setAgendamento(agendamentoBody)

    return {
      statusCode: 200,
      body: JSON.stringify(agendamento)
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro ao realizar agendamento :/' })
    }
  }
}