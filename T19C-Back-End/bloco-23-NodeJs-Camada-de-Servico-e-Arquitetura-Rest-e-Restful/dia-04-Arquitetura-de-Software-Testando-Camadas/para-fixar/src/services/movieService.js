const MoviesModel = require('../models/movieModel');

// eslint-disable-next-line valid-typeof
const existTypeOf = (params, type) => (!params || typeof params !== type);

const isValid = (title, directedBy, releaseYear) => {
  if (existTypeOf(title, 'string')) return false;
  if (existTypeOf(directedBy, 'string')) return false;
  if (existTypeOf(releaseYear, 'number')) return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};