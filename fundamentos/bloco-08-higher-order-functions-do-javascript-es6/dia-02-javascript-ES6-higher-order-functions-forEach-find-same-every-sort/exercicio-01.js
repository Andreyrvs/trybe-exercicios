const books = require('./referencia');

function authorBornIn1947(arr, nascida) {
  // escreva aqui o seu código
  return arr.find((element) => element.author.birthYear === nascida).author.name
}

console.log(authorBornIn1947(books, 1947));