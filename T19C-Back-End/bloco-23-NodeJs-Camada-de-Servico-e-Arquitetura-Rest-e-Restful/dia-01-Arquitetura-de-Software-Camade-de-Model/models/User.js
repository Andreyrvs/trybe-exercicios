const connection = require('./connection');

// const serialize = (userData) => ({
//   id: userData.id,
//   firstName: userData.first_name,
//   lastName: userData.last_name,
//   email: userData.email,
// });

const create = async (firstName, lastName, email, password) => connection.execute(
  `INSERT INTO camada_de_model.user
  (first_name, last_name, email, password)
  VALUES
  (?, ?, ?, ?)`, [firstName, lastName, email, password],
);

module.exports = {
  create,
  // serialize,
};