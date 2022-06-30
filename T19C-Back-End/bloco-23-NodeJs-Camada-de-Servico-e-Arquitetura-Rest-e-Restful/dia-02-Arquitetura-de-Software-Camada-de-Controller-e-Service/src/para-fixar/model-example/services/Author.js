const Author = require('../models/Author');

const getAll = async () => Author.getAll();

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

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!middleName || typeof middleName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;

//   return true;
// };

module.exports = {
  // isValid,
  findAuthorById,
  getAll,
};