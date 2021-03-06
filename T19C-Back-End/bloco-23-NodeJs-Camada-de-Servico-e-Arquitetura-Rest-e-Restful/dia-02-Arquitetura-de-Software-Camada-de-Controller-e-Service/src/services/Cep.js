const Cep = require('../models/Cep');
const ViaCep = require('../models/ViaCep');

const REGEX_CEP = /^\d{5}-\d{3}$/gm;

const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (REGEX_CEP.test(cep)) return cep;
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
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

const cepNewFormat = (cep, result) => {
  const { logradouro, bairro, localidade, uf } = result;
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const getById = async (searchedCep) => {
  // Começamos buscando o CEP no banco de dados
  if (!cepIsValid(searchedCep)) {
    return errorMessage('invalidData', 'CEP inválido');
  }
  const treatedCep = searchedCep.replace('-', '');

  const cepId = await Cep.getById(treatedCep);

  // Caso encontremos, retornamos sem consultar a API
  if (cepId) {
    return cepId;
  }

  // Caso o CEP não exista no banco de dados, buscamos na API
  const cepFromApi = await ViaCep.lookupCep(searchedCep);

  // Caso o CEP não exista na API,
  // retornamos um erro dizendo que
  // o CEP não foi encontrado
  if (!cepFromApi) return errorMessage('notFound', 'CEP não encontrado');

  // Aqui monta um objeto com as informaçoes necessarias
  const newCepAPi = cepNewFormat(treatedCep, cepFromApi);

  // Caso o CEP exista na API, pedimos ao model
  // que armazene-o no banco e retornamos
  // o resultado
  return Cep.createCep(newCepAPi);
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