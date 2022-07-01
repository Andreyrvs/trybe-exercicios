// services/Book.js

const Book = require('../models/Books');

const createBook = async (title, authorId) => {
  if (title && authorId) {
    const result = await Book.create(title, authorId);
    return result;
  }
  return [];
};

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.getBybookId(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }

  return book;
};

module.exports = {
  getAll,
  findById,
  createBook,
};