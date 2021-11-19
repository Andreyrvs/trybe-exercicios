const books = require('./referencia');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1989)
}

console.log(someBookWasReleaseOnThe80s());