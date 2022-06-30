const Author = require('../models/Author');

const createBook = async (title, bookId) => {
  const author = await Author.findById(bookId);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  return Author.createBook(title, bookId);
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!middleName || typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

module.exports = {
  isValid,
  createBook,
};