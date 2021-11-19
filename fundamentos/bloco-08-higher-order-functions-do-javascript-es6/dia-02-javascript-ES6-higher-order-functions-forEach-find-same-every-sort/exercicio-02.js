const books = require('./referencia')


function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
      nameBook = element.name
    }

  })
  // Variável nameBook que receberá o valor do menor   nome;
  return nameBook;
 }

 console.log(smallerName());
