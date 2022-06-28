const connection = require('./connection');

// const serialize = (userData) => ({
//   id: userData.id,
//   firstName: userData.first_name,
//   lastName: userData.last_name,
// });

const isValid = async (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return null;
  if (typeof password === 'string' || password < 6) return null;
};

const create = async (firstName, lastName, email, password) => connection.execute(
  `INSERT INTO camada_de_model.user
  (first_name, last_name, email, password)
  VALUES
  (?, ?, ?, ?)`, [firstName, lastName, email, password],
);

module.exports = {
  create,
  isValid,
};