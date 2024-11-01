import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { AgendamentoService } from "../service/AgendamentoService"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { IAgendamento } from "../interface/IAgendamento"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse "

export const setAgendamento = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    
    const successMessage: string = "Agendamento realizado com sucesso"
    const agendamentoBody = JSON.parse(event.body!) as IAgendamentoParams
    const agendamentoService = new AgendamentoService()
    const agendamento: IAgendamentoResponse = agendamentoService.setAgendamento(agendamentoBody)

    if (agendamento.messagem !== successMessage) {
      return {
        statusCode: 400,
        body: JSON.stringify(agendamento)
      }
    }
    return {
      statusCode: 201,
      body: JSON.stringify(agendamento)
    }
    

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
        message: 'Erro ao realizar agendamento :/'
      })
    }
  }
}

export const getAllAgendamentos = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

    const agendamentoService = new AgendamentoService()

    const agendamentos: IAgendamento[] = agendamentoService.getAllAgendamentos()

    return {
      statusCode: 200,
      body: JSON.stringify(agendamentos)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
        message: 'Erro ao realizar agendamento :/'
      })
    }
  }
}