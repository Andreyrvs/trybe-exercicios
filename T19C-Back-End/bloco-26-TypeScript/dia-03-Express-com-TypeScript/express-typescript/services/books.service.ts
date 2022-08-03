// ./services/books.service.ts

import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { NotFoundError } from 'restify-errors';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book: Book): Promise<Book> {
    return this.model.create(book)
  }

  public async update(id: number, book: Book): Promise<void> {
    const bookfound = await this.model.getById(id);
    if (!bookfound) {
      throw new NotFoundError('NotFoundError')
    }

    return this.model.update(id, book);
  }

  public async remove(id: number): Promise<void> {
    const bookfound = await this.model.getById(id);
    if (!bookfound) {
      throw new NotFoundError("NotFoundError");
    }

    this.model.remove(id);
  }
}

export default BookService;