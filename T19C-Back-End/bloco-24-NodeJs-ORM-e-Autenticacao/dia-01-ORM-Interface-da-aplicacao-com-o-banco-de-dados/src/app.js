const express = require('express');

const BooksController = require('./controllers/BooksController')

const app = express();

app.use(express.json());

app.get('/books', BooksController.getall)
app.get('/books/:id', BooksController.getById)
app.get('/author/', BooksController.getByAuthor)
app.post('/books', BooksController.create)
app.put('/books/:id', BooksController.update)
app.delete('/books/:id', BooksController.destroy)


module.exports = app