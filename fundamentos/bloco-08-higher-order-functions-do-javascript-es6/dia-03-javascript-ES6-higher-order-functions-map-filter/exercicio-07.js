const books = require('./referencia')

// Faz a verificação estrita entre dois arrays
const assert = require('assert')

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((livros) => (
    livros.author.name.split(' ')
    .filter((letra) => letra.endsWith('.')).length === 3 ))
    .name
}

console.log(authorWith3DotsOnName());
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);