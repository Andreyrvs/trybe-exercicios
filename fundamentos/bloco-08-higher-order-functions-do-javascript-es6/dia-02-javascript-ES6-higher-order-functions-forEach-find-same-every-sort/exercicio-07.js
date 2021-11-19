const books = require('./referencia');

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => {
    book.author.birthYear === book.author.birthYear
  })
}

console.log(authorUnique());
