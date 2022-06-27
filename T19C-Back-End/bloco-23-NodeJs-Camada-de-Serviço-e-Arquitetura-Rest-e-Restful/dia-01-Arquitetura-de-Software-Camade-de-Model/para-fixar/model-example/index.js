const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getBybookId(id);
  // const findBook = books.find((book) => book.id === id);

  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
});