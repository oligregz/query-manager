import { formatDate } from "./formatDate"

export const formatDatesISOToString = (isoDates: string[]): string[] => {
  return isoDates.map((isoDate) => {
    return formatDate(isoDate)
  })
}