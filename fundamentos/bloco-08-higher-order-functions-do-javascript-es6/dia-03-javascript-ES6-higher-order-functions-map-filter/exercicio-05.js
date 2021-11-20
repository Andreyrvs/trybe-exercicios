const books = require('./referencia');

// Faz a verificação estrita entre dois arrays
const assert = require('assert');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const generosrRequeridos = ['Ficção Científica', 'Fantasia'];

  return books
    .filter((livros) => generosrRequeridos.includes(livros.genre))
    .map((livros) => livros.author.name)
    .sort();
}

console.log(fantasyOrScienceFictionAuthors());
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
