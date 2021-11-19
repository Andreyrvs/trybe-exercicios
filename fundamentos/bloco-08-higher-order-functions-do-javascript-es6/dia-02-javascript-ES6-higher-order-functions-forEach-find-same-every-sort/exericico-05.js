const books = require('./referencia');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (born) => born.author.birthYear >= 1901 && born.author.birthYear <= 2000
  );
}

console.log(everyoneWasBornOnSecXX());
