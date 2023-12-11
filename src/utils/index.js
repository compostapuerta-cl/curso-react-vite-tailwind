/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} Total Price
 */
const totalPrice = (products) => {
  const total = products.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  return total
}

/**
 * @param {Date} date
 * @returns {String} Formatted date
 */
const formatDate = (date) => {
  date = new Date(date)
  const [day, month, year, hour, minutes] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ]

  return `${day}/${month}/${year} ${hour}:${minutes}`
}

export { totalPrice, formatDate }
