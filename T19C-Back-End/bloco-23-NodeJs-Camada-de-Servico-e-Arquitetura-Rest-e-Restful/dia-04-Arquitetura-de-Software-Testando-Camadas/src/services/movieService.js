const MoviesModel = require('../models/movieModel');

// eslint-disable-next-line valid-typeof
const existTypeOf = (params, type) => (!params || typeof params !== type);

const isValid = (title, directedBy, releaseYear) => {
  if (existTypeOf(title, 'string')) return false;
  if (existTypeOf(directedBy, 'string')) return false;
  // eslint-disable-next-line sonarjs/prefer-single-boolean-return
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

const findById = async (id) => {
  const movieData = await MoviesModel.getById(id);

  if (!movieData) return null;
  return movieData;
};

module.exports = {
  create,
  findById,
};