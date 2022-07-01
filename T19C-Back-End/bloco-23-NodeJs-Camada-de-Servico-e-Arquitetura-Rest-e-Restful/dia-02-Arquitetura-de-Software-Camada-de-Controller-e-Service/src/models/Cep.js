const connection = require('../helpers/connection');

const getById = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

  const [rows] = await connection.execute(query, [cep]);

  if (rows.length === 0) return null;

  return rows;
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
  VALUES (?,?,?,?,?)`;

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = {
  getById,
  createCep,
};