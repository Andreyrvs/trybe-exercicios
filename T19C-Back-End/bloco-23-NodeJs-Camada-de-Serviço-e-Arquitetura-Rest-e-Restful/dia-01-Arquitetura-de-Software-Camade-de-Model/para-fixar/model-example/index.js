const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/authors/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id);
  if (!books) return res.status(404).json({ message: 'not found' });
  res.status(200).json(books);
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
});