const books = require('./referencia');

// Faz a verificação estrita entre dois arrays
const assert = require('assert')

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  // books.name
  // books.genre
  // books.author.name

  return books.map((livros) => `${livros.name} - ${livros.genre} - ${livros.author.name}`);

}

console.log(formatedBookNames());
assert.deepStrictEqual(formatedBookNames(), expectedResult);
