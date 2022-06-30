const Cep = require('../models/Cep');

const REGEX_CEP = /^\d{5}-\d{3}$/gm;
// /^[0-9]{5}-[0-9]{3}$/gm;

const getById = async (cep) => {
  if (!REGEX_CEP.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }
  const treatedCep = cep.replace('-', '');

  const result = await Cep.getById(treatedCep);

  if (!result) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return result;
};

module.exports = {
  getById,
};