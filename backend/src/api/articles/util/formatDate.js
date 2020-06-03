const formatDateStr = date => {
  const monthStr = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const parts = date.split('/').map(Number)
  const dateFormat = new Date('20' + parts[2], parts[1] - 1, parts[0])

  const day = dateFormat.getDate().toString()
  const month = (dateFormat.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
  const year = dateFormat.getFullYear()

  return monthStr[month] + ' ' + day
}

const formatDate = date => {
  const day = date.getDate().toString()
  const month = (date.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
  const year = date.getFullYear()

  return day + '/' + month + '/' + year
}

module.exports = { formatDateStr, formatDate }
