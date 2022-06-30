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

// const getBookByAuthorId = async (authorId) => {
//   const [books] = await connection.execute(
//     `SELECT * 
//       FROM model_example.books 
//       WHERE author_id = ?`,
//     [authorId],
//   );

//   if (books.length === 0) return null;

//   return books.map(serialize);
// };

const getBybookId = async (bookId) => {
  const query = `SELECT *
  FROM model_example.books
  WHERE id = ?`;
  const [books] = await connection.execute(query, [bookId]);

  if (books.length === 0) return null;

  return books.map(serialize);
};

const isValid = async (title, authorId) => {
  if (!title || title < 3) return false;
  if (!authorId) return false;
  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VAlUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAll,
  // getByAuthorId,
  getBybookId,
  isValid,
  create,
};