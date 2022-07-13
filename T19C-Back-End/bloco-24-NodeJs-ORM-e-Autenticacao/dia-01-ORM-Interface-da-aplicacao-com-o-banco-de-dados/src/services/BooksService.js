const { Book } = require('../models');

const create = async ({ title, author, pageQuantity }) => {
  const result = await Book.create({ title, author, pageQuantity });

  if (!result) return null;

  return result;
}

const getAll = async () => {
  const result = await Book.findAll();

  if (!result || result.length === 0) return null

  return result;
}

const getById = async (id) => {
  const result = await Book.findByPk(id)

  if (!result) return null;

  return result;
}

const update = async (id, { title, author, pageQuantity }) => {
  const [result] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  )

  return result
}

module.exports = {
  create,
  getAll,
  getById,
  update,
}