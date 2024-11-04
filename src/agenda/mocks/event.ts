import { APIGatewayProxyEvent } from "aws-lambda"

export const eventTestMock: APIGatewayProxyEvent = {
  body: null,
  cookies: [],
  headers: {
    "user-agent": "PostmanRuntime/7.42.0",
    accept: "*/*",
    "postman-token": "be1e725d-4ce1-4de9-99bb-e9165279b9c2",
    host: "localhost:3000",
    "accept-encoding": "gzip, deflate, br",
    connection: "keep-alive"
  },
  isBase64Encoded: false,
  pathParameters: null,
  queryStringParameters: null,
  rawPath: "/agendas",
  rawQueryString: "",
  requestContext: {
    accountId: "offlineContext_accountId",
    apiId: "offlineContext_apiId",
    authorizer: { jwt: {} },
    domainName: "offlineContext_domainName",
    domainPrefix: "offlineContext_domainPrefix",
    http: {
      method: "GET",
      path: "/agendas",
      protocol: "HTTP/1.1",
      sourceIp: "127.0.0.1",
      userAgent: "PostmanRuntime/7.42.0"
    },
    requestId: "offlineContext_resourceId",
    routeKey: "GET /agendas",
    stage: "$default",
    time: "03/Nov/2024:23:38:40 -0300",
    timeEpoch: 1730687920118
  },
  routeKey: "GET /agendas",
  stageVariables: null,
  version: "2.0"
} as any