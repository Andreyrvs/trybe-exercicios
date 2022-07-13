const BooksService = require('../services/BooksService')

const getall = async (req, res) => {
  try {
    const result = await BooksService.getAll()

    if (!result) {
      return res.status(404).json({ message: "Not Found" })
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error(error);

    return res.status(500).end()
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

    return res.status(500).end()
  }
}

module.exports = {
  getall,
  getById,
}