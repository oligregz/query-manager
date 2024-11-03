import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { AgendamentoService } from "../service/AgendamentoService"
import { IAgendamentoParams } from "../interface/IAgendamentoParams"
import { IAgendamento } from "../interface/IAgendamento"
import { IAgendamentoResponse } from "../interface/IAgendamentoResponse"
import { MedicosAgendasService } from "../../agenda/service/MedicosAgendasService"
import { handleError } from "../../errors/handleError"

export const setAgendamento = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

    const medicosAgendasService = new MedicosAgendasService()
    const agendamentoService = new AgendamentoService(medicosAgendasService)
    
    const agendamentoBody: IAgendamentoParams = JSON.parse(event.body!)    
    const savedAgendamento: IAgendamentoResponse = agendamentoService.setAgendamento(agendamentoBody)
    
    const successMenssagem: string = "Agendamento realizado com sucesso"
    if (savedAgendamento.menssagem !== successMenssagem) {
      return {
        statusCode: 400,
        body: JSON.stringify(savedAgendamento)
      }
    }

    return {
      statusCode: 201,
      body: JSON.stringify(savedAgendamento)
    }
    

  } catch (error) {
    handleError(error, 'Erro ao realizar agendamento')
  }
}

export const listAgendamentos = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

    const medicosAgendasService = new MedicosAgendasService()
    const agendamentoService = new AgendamentoService(medicosAgendasService)

    const agendamentos: IAgendamento[] = agendamentoService.listAgendamentos()

    return {
      statusCode: 200,
      body: JSON.stringify(agendamentos)
    }
  } catch (error) {
    handleError(error, 'Erro ao listar agendamentos')
  }
}