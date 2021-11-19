const books = require('./referencia')


function smallerName(arr) {
  let nameBook;
  // escreva aqui o seu código
  arr.forEach(element => {
    element.name.length ? 0 : 1
  });
  // Variável nameBook que receberá o valor do menor   nome;
  return nameBook;
 }

 console.log(smallerName(books));