const Book = require('../models/Book');

const getAll = async () => {
  const result = await Book.findAll();

  return result;
}

module.exports = {
  getAll,
}