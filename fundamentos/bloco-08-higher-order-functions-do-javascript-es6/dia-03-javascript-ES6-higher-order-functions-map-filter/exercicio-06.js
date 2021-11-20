const books = require('./referencia');

// Faz a verificação estrita entre dois arrays
const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const currentYear = new Date().getFullYear();

  return books
  .filter((livro) =>  currentYear - livro.releaseYear > 60 )
  .map((livro) => livro.name)
}

console.log(oldBooks());
assert.deepStrictEqual(oldBooks(), expectedResult);
