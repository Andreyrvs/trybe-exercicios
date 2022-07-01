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

const errorMessage = (code, message) => ({
  error: {
    code,
    message,
  },
});

const cepIsValid = (cep) => REGEX_CEP.test(cep);

const getById = async (cep) => {
  if (!cepIsValid(cep)) {
    return errorMessage('invalidData', 'CEP inválido');
  }
  const treatedCep = cep.replace('-', '');

  const result = await Cep.getById(treatedCep);

  if (!result) return errorMessage('notFound', 'CEP não encontrado');

  const newResult = getNewCepById(cep, result);
  return newResult;
};

const createCep = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');
  const exintingCep = await Cep.getById(cep);

  if (exintingCep) return errorMessage('alreadyExists', 'CEP já existente');

  const result = await Cep.createCep({ cep, logradouro, bairro, localidade, uf });

  return getNewCep(cep, result);
};

module.exports = {
  getById,
  createCep,
};