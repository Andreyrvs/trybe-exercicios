const books = require('./referencia');

const assert = require('assert')

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

// escreva seu código aqui
// books.author.name
// books.releaseYear - books.author.birthYear
// const pessoaMaisJovem = books.map((element) => {
//   const idadeDoAutor = element.releaseYear - element.author.birthYear
//   const ordenaArray = books.sort((idadeDoAutorA, idadeDoAutorB) => idadeDoAutorA - idadeDoAutorB)
  
//   `${element.author.name} ${idadeDoAutor}`
// });
// return pessoaMaisJovem
function nameAndAge() {
    
  return books.map((livro) => ({
    author: livro.author.name,
    age: livro.releaseYear - livro.author.birthYear,
  })).sort((a, b) => a - b)
}


assert.deepStrictEqual(nameAndAge(), expectedResult);
// console.log(nameAndAge());

