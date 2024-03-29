import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Book from '../interfaces/book.interface';

const properties = ['title', 'price', 'author', 'isbn'];

function validateProperties(book:Book): [boolean, string | null] {
  for (let index = 0; index < properties.length; index += 1) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[index])) {
      return [false, properties[index]];
    }
  }
  return [true, null];
}

function validateValues(book: Book): [boolean, string | null] {
  const entries = Object.entries(book);

  for (let index = 0; index < entries.length; index += 1) {
    const [property,  value] = entries[index];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationBook(req: Request, res: Response, next: NextFunction) {
  const book: Book = req.body;

  let [valid, property] = validateProperties(book);

  if(!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(book);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  next();
}


export default validationBook;