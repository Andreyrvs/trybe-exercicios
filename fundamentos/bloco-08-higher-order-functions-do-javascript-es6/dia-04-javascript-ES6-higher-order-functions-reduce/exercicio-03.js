const books = require('./reference-02-03-04');
const assert = require('assert')

const expectedResult = 43;

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  // escreva seu código aqui
  let tamanho = books.length
  const livro = books.reduce((acumulador, valorAtual) => acumulador.releaseYear - valorAtual.author.birthYear, 0)
  return livro / tamanho
}


console.log(averageAge())
// assert.deepStrictEqual(averageAge(), expectedResult)