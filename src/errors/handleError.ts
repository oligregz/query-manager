export const handleError = (error: Error, customMessage: string | undefined) => {
  console.error('Error:', error)
  return {
    statusCode: 500,
    body: JSON.stringify({
      message: customMessage,
      error: error.message
    })
  }
}