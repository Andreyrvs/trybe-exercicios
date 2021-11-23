const books = require('./reference-02-03-04');
const assert = require('assert');

const expectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

function reduceNames() {
  // escreva seu código aqui
  const concatAuthor = books.reduce((acumulador, valorAtual, index, array) => {
    if (index === array.length -1) return `${acumulador} ${valorAtual.author.name}.`;
    return `${acumulador} ${valorAtual.author.name},`
  }, '');

  return concatAuthor.trim();
}

console.log(reduceNames());

assert.deepStrictEqual(reduceNames(), expectedResult)
