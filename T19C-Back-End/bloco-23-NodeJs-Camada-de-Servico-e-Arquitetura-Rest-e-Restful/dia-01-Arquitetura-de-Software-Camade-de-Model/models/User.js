const connection = require('../helpers/connection');

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
});

const getNewAuthor = ({ id, firstName, lastName, email }) => ({
  id,
  firstName,
  lastName,
  email,
});

const create = async (firstName, lastName, email, password) => {
  const query = `INSERT INTO camada_de_model.user
  (first_name, last_name, email, password)
  VALUES (?, ?, ?, ?)`;
  return connection.execute(
    query, [firstName, lastName, email, password],
  ).then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM camada_de_model.user');
  return rows;
};

const findById = async (id) => {
  const query = `SELECT * FROM camada_de_model.user
  WHERE id = ?`;
  const [userId] = await connection.execute(query, [id]);

  if (userId.length === 0) return null;

  const { firstName, lastName, email } = userId.map(serialize)[0];
  return getNewAuthor({
    id,
    firstName,
    lastName,
    email,
  });
};

const update = async (id, firstName, lastName, email) => {
  const query = `UPDATE camada_de_model.user
  SET first_name = ?, last_name = ?, email = ?
  WHERE id = ?`;
  await connection.execute(query, [firstName, lastName, email, id]);

  const result = { id, firstName, lastName, email };

  return result;
};

module.exports = {
  create,
  getAll,
  findById,
  update,
};