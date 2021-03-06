const { Book } = require('../models');

const create = async ({ title, author, pageQuantity, publisher }) => {
  const result = await Book.create({ title, author, pageQuantity, publisher });

  if (!result) return null;

  return result;
}

const destroy = async (id) => {
  const isValid = getById(id);

  if (!isValid || isValid === undefined) return null

  const result = await Book.destroy({ where: { id } });

  if (!result) return null;

  return result;
}

const getAll = async () => {
  const result = await Book.findAll({
    order: [
      ["title", "ASC"],
    ]
  });

  if (!result || result.length === 0) return null

  return result;
}

const getById = async (id) => {
  const result = await Book.findByPk(id)

  if (!result) return null;

  return result;
}

const getByAuthor = async (author) => {
  const result = await Book.findAll({
    where: { author: author },
    order: [
      ["title", "ASC"]
    ]
  });

  if (!result) return null;

  return result;
}

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [result] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  )

  return result
}

module.exports = {
  create,
  destroy,
  getAll,
  getById,
  getByAuthor,
  update,
}