import BookModel from './Book';
import connection from './connection';

const main = async () => {
  const bookModel = new BookModel(connection)

  const books = await bookModel.getAll()
  console.log(books);
  
}

main()