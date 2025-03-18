export const parseDate = (dateString: string): Date | null => {
  if (!dateString) return null

  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [year, month, day] = dateString.split('-').map(Number)
    return new Date(Date.UTC(year, month - 1, day))
  }

  if (/^\d{4}-\d{2}-\d{2}:\d{2}:\d{2}:\d{2}$/.test(dateString)) {
    const [date, time] = dateString.split(':')
    const [year, month, day] = date.split('-').map(Number)
    const [hour, minute, second] = time.split(':').map(Number)
    return new Date(Date.UTC(year, month - 1, day, hour, minute, second))
  }

  return null
}
