import { APIGatewayProxyResult } from "aws-lambda"

export const handler = async ():
  Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Olá, seja bem-vindo(a) a  Query Manager API !" })
  }
}