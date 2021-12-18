import { date } from 'quasar'

const formatDate = (dateString: string) => {
  return date.formatDate(dateString, 'MMMM YYYY')
}

export { formatDate }
