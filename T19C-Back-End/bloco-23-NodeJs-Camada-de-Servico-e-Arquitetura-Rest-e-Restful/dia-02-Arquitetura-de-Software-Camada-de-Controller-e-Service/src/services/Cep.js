const Cep = require('../models/Cep');

const REGEX_CEP = /^\d{5}-\d{3}$/gm;

const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (REGEX_CEP.test(cep)) return cep;

  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCepById = (cep, result) => {
  // Desestrutua o array e depois o objeto onde estão as informaçoes

  const [{ logradouro, bairro, localidade, uf }] = result;
  return {
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

// Formata os campos para exibição
const getNewCep = (cep, result) => {
  // Desestrutua o array e depois o objeto onde estão as informaçoes

  const { logradouro, bairro, localidade, uf } = result;
  return {
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

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
  const newResult = getNewCepById(cep, result);
  return newResult;
};

const createCep = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const exintingCep = await Cep.getById(rawCep);

  if (exintingCep) {
    return {
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
  }
  const cep = rawCep.replace(/-/ig, '');
  const result = await Cep.createCep({ cep, logradouro, bairro, localidade, uf });

  const newResult = getNewCep(cep, result);
  return newResult;
};

module.exports = {
  getById,
  createCep,
};