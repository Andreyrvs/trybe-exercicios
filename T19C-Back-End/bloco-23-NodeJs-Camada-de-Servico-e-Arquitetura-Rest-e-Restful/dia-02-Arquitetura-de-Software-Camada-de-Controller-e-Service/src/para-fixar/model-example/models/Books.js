const connection = require('./connection');

const serialize = (bookId) => ({
  bookId: bookId.id,
  title: bookId.title,
  authorId: bookId.author_id,
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

const create = async (title, authorId) => {
  const query = `INSERT INTO model_example.books 
  (title, author_id) 
  VAlUES (?, ?)`;

  const [row] = await connection.execute(query, [title, authorId]);

  const result = {
    id: row.insertId,
    title,
    authorId,
  };
  return result;
};

module.exports = {
  getAll,
  getBybookId,
  create,
};