const Joi = require('joi');

const Cep = require('../services/Cep');

const getById = async (req, res, next) => {
  const { cep } = req.params;

  const result = await Cep.getById(cep);

  if (result.error) return next(result.error);

  return res.status(200).json(result);
};

const createCep = async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString,
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await Cep.createCep(req.body);

  if (newCep.error) return next(newCep.error);

  return res.status(201).json(newCep);
};

module.exports = {
  getById,
  createCep,
};