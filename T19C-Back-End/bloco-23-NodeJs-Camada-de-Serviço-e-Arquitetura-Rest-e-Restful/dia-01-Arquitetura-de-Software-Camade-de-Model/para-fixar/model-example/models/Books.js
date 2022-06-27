const connection = require('./connection');

const serialize = (bookId) => ({
  bookId: bookId.id,
  title: bookId.title,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * from model_example.books',
  );
  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    `SELECT * 
      FROM model_example.books 
      WHERE author_id = ?`,
    [authorId],
  );

  if (books.length === 0) return null;

  return books.map(serialize);
};

const findBook = async (bookId) => {
  const query = `SELECT *
  FROM model_example.books
  WHERE id = ?`;
  const [books] = await connection.execute(query, [bookId]);

  if (books.length === 0) return null;

  return books.map(serialize);
};

module.exports = {
  getAll,
  getByAuthorId,
  findBook,
};