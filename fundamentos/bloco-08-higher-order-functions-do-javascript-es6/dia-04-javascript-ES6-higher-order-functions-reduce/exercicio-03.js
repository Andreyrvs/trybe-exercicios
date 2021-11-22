const books = require('./reference-02-03-04');
const assert = require('assert')

const expectedResult = 43;

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  // escreva seu código aqui
  const reducer = (acumulador, valorAtual) => acumulador + valorAtual / acumulador;
  return books.map((el) => el.releaseYear - el.author.birthYear).reduce(reducer)
}


console.log(averageAge())
// assert.deepStrictEqual(averageAge(), expectedResult)