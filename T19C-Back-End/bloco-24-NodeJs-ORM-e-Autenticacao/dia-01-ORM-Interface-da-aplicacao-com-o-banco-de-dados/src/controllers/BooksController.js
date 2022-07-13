const BooksService = require('../services/BooksService');

const create = async (req, res) => {
  try {

    const { title, author, pageQuantity } = req.body;

    const result = await BooksService.create({ title, author, pageQuantity });

    if (!result) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    return res.status(201).json(result);

  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Something went wrong' }).end()
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await BooksService.destroy(id)

    if (!result) {
      return res.status(404).json({ message: 'Id not found' })
    }

    return res.status(200).json({ message: 'destroyed book' })
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Something went wrong' }).end()
  }
}

const getall = async (__req, res) => {
  try {
    const result = await BooksService.getAll()

    if (!result) {
      return res.status(404).json({ message: "Not Found" })
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Something went wrong' }).end()
  }
}

const getById = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await BooksService.getById(id)

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Something went wrong' }).end()
  }
}

const update = async (req, res) => {
  try {

    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const result = await BooksService.update(id, { title, author, pageQuantity });

    if (!result) {
      return res.status(404).json({ message: 'Book not found!' });
    }

    return res.status(200).json({ message: 'Book updated!' })
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Something went wrong' }).end();
  }

}

module.exports = {
  create,
  destroy,
  getall,
  getById,
  update,
}