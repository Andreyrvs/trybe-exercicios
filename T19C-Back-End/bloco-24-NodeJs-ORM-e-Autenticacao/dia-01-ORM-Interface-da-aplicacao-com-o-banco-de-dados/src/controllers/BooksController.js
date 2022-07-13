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

module.exports = {
  getall,
}