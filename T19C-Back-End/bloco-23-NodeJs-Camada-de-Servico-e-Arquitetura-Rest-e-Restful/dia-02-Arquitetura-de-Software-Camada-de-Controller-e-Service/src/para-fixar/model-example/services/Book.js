// services/Book.js

const Book = require('../models/Books');

const createBook = async (title, bookId) => Book.create(title, bookId);

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