const books = require('./reference-02-03-04')
const assert = require('assert')


const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(acc, number) {
  // escreva seu código aqui

  const reducer = acc + number

  return books.filter((el) => el.author.name)
}


const test = books.reduce() 
console.log(reduceNames());

// 
// assert.deepStrictEqual(reduceNames(), expectedResult)