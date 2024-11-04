import { APIGatewayProxyEvent } from "aws-lambda"

interface ExtendedAPIGatewayProxyEvent extends APIGatewayProxyEvent {
  version?: string
}

export const eventTestMock: ExtendedAPIGatewayProxyEvent = {
  body: JSON.stringify({
    medico_id: 1,
    paciente_nome: "teste2",
    data_horario: "2024-10-05 10:00"
  }),
  headers: {
    "content-type": "application/json",
    "user-agent": "PostmanRuntime/7.42.0",
    accept: "*/*",
    "postman-token": "69387816-498b-45c0-9d03-c0a9fa13ef64",
    host: "localhost:3000",
    "accept-encoding": "gzip, deflate, br",
    connection: "keep-alive",
    "content-length": "93"
  },
  multiValueHeaders: {
    "content-type": ["application/json"],
    "user-agent": ["PostmanRuntime/7.42.0"],
    accept: ["*/*"],
    "postman-token": ["69387816-498b-45c0-9d03-c0a9fa13ef64"],
    host: ["localhost:3000"],
    "accept-encoding": ["gzip", "deflate", "br"],
    connection: ["keep-alive"],
    "content-length": ["93"]
  },
  isBase64Encoded: false,
  path: "/agendamentos",
  pathParameters: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  requestContext: {
    accountId: "offlineContext_accountId",
    apiId: "offlineContext_apiId",
    authorizer: { jwt: {} },
    domainName: "offlineContext_domainName",
    domainPrefix: "offlineContext_domainPrefix",
    httpMethod: "POST",
    identity: {
      accessKey: null,
      accountId: "offlineContext_accountId",
      caller: null,
      clientCert: null,
      sourceIp: "127.0.0.1",
      user: "",
      userAgent: "PostmanRuntime/7.42.0",
      userArn: "",
      cognitoAuthenticationProvider: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      apiKey: "",
      apiKeyId: "",
      cognitoAuthenticationType: null,
      principalOrgId: null
    },
    path: "/agendamentos",
    stage: "$default",
    requestId: "offlineContext_resourceId",
    requestTime: "04/Nov/2024:09:15:17 -0300",
    requestTimeEpoch: 1730722517278,
    resourceId: "offlineContext_resourceId",
    resourcePath: "/agendamentos",
    protocol: "HTTP/1.1"
  },
  resource: "/agendamentos",
  stageVariables: null,
  version: "2.0",
  httpMethod: ""
}
