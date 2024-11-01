const handleError = (error: Error, customMessage: string) => {
  console.error(`${customMessage}: ${error.message}`)
}