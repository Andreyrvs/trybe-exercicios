const books = require('./reference-02-03-04');
const assert = require('assert')

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
  // escreva seu código aqui

  const maiorLivro = (acumulador, valorAtual) => (
    (valorAtual > acumulador) ? valorAtual : acumulador
  );
  
  return books.reduce(maiorLivro)

}

console.log(longestNamedBook());
assert.deepStrictEqual(longestNamedBook(), expectedResult)