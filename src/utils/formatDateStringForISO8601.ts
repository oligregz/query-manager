export const formatDateStringForISO8601 = (dateString: string): string => {
  const date = new Date(dateString)

  date.setDate(date.getDate() + 2)
  date.setMinutes(date.getMinutes() + 30)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}
