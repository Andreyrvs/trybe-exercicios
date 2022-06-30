const connection = require('../helpers/connection');

const getById = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

  const [rows] = await connection.execute(query, [cep]);

  if (rows.length === 0) return null;

  console.log('model', rows);
  return rows;
};

module.exports = {
  getById,
};