const express = require('express');

const BooksController = require('./controllers/BooksController')

const app = express();

app.use(express.json());

app.get('/books', BooksController.getall)
app.get('/books/:id', BooksController.getById)

module.exports = app