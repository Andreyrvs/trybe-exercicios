const books = require('./reference-02-03-04');
const assert = require('assert')

const expectedResult = 43;

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  // escreva seu código aqui
  return books.map((el) => el.releaseYear - el.author.birthYear)
}
const someReducer = (acc, number) => acc + number;
const reducer = books.reduce(averageAge, 0)

console.log(reducer)
// assert.deepStrictEqual(averageAge(), expectedResult)