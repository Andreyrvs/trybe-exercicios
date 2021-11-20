const books = require('./referencia');

// Faz a verificação estrita entre dois arrays
const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const currentYear = new Date().getFullYear();

  return books.fill((livros) => {
    const idadeLivro = currentYear - livros.releaseYear;
    if (idadeLivro >= 60) livros.name;
  });
}

assert.deepStrictEqual(oldBooks(), expectedResult);
