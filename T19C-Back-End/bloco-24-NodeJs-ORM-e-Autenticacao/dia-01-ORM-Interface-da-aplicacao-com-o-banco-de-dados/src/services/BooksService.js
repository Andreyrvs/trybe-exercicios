const { Book } = require('../models');

const create = async ({ title, author, pageQuantity }) => {
  const result = Book.create({ title, author, pageQuantity });

  if (!result) return null;

  return result;
}

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
  create,
  getAll,
  getById,
}