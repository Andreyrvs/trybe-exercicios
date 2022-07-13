const BooksService = require('../services/BooksService')

const getall = async () => {
  const result = await BooksService.getAll()

  return result;
}

module.exports = {
  getall,
}