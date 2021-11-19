const books = require('./referencia');

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

function nameAndAge() {
  // escreva seu código aqui
  // books.author.name
  // books.releaseYear - books.author.birthYear
  
  return books.map((element) => `${element.author.name} ${element.releaseYear - element.author.birthYear}`)
    .sort((a, b) => a - b);

}

console.log(nameAndAge());
