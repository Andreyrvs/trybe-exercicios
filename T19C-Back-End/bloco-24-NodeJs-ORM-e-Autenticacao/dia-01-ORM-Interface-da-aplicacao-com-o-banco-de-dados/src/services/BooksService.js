const { Book } = require('../models');

const getAll = async () => {
  const result = await Book.findAll();

  if (!result) return null

  return result;
}

const getById = async (id) => {
  const result = await Book.findByPk(id)

  if (!result) return null;

  return result;
}

module.exports = {
  getAll,
  getById,
}