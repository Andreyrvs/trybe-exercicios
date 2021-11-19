const books = require('./referencia');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const ordemAlfabetica = books.map((generos) => {
    if (generos.genre === 'Ficção Científica' && generos.genre === 'Fantasia') {
      return generos.author
    }
  });
  return ordemAlfabetica
}

console.log(fantasyOrScienceFictionAuthors());
