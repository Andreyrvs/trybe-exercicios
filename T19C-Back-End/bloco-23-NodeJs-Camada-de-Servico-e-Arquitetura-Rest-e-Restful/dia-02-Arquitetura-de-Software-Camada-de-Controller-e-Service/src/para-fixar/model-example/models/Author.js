const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT * FROM model_example.authors',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const getAuthorById = async (id) => {
  const query = `SELECT * 
  FROM model_example.authors
  WHERE id = ? `;
  const [authorData] = await connection.execute(query, [id]);
  console.log('Models', authorData);
  if (authorData.length === 0) return null;

  // const { firstName, middleName, lastName } =
  return authorData.map(serialize);

  // return getNewAuthor({
  //   id,
  //   firstName,
  //   middleName,
  //   lastName,
  // });
};

const createAuthor = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  getAuthorById,
  createAuthor,
};