const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const createAuthor = async (firstName, middleName, lastName) => {
  if (firstName && middleName && lastName) {
    const result = await Author.create(firstName, middleName, lastName);
    return result;
  }
  return [];
};

const findAuthorById = async (authorID) => {
  const author = await Author.getAuthorById(authorID);
  console.log('services', author);
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }
  return author;
};

module.exports = {
  findAuthorById,
  getAll,
  createAuthor,
};