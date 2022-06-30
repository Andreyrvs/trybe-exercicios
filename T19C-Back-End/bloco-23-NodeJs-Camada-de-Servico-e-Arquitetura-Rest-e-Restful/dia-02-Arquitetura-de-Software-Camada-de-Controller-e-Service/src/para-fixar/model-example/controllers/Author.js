const Joi = require('joi');
const Author = require('../services/Author');

const getAll = async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findAuthorById = async (req, res, next) => {
  const { id } = req.params;
  console.log('controllers');
  const author = await Author.findAuthorById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
};

const createAuthor = async (req, res, next) => {
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    middleName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  })
    .validate(req.body);

  if (error) return next(error);

  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);
  console.log(newAuthor);
  if (newAuthor.error) return next(newAuthor.error);

  res.status(201).json(newAuthor);
};

module.exports = {
  getAll,
  findAuthorById,
  createAuthor,
};