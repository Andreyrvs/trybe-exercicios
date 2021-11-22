const books = require('./reference-02-03-04')
const assert = require('assert')


const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  const reducer = (acc, number) => acc + number;
  return books.map((elemento) => elemento.author.name)
  .reduce(reducer)
}


console.log(reduceNames());


// assert.deepStrictEqual(reduceNames(), expectedResult)