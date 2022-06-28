const connection = require('./connection');

// const serialize = (userData) => ({
//   id: userData.id,
//   firstName: userData.first_name,
//   lastName: userData.last_name,
//   email: userData.email,
// });

const create = async (firstName, lastName, email, password) => {
  const query = `INSERT INTO camada_de_model.user
  (first_name, last_name, email, password)
  VALUES (?, ?, ?, ?)`;
  return connection.execute(
    query, [firstName, lastName, email, password],
  ).then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

module.exports = {
  create,
  // serialize,
};