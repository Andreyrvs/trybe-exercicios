const books = require('./referencia');

// Faz a verificação estrita entre dois arrays
const assert = require('assert')

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.map((livros) => {
    const ficcao = 'Ficção Científica'
    const fantasia ='Fantasia'

    if (livros.genre === ficcao && livros.genre === fantasia) return livros.author.name
  });
}

console.log(fantasyOrScienceFictionAuthors());
// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
