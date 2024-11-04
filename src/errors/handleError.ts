export const handleError = (error: Error, customMessage?: string, statusCode?: number) => {
  // console.error(`Error: ${error}`)
  return {
    statusCode: statusCode || 500,
    body:{
      message: customMessage,
      error: error.message
    }
  }
}