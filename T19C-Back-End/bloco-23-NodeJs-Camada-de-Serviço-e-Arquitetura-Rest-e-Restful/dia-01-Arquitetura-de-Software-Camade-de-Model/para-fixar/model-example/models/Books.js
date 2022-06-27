const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * from model_example.books',
  );
  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

const getBybookId = async (bookId) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?';
  const [books] = await connection.execute(query, [bookId]);

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

module.exports = {
  getAll,
  getBybookId,
};