const books = require('./referencia');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (authorBorn) => authorBorn.author.birthYear >= 1901 && authorBorn.author.birthYear <= 2000
  );
}

console.log(everyoneWasBornOnSecXX());
