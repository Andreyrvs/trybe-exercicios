const UserBookService = require('../services/UserBookService');

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await UserBookService.getById(id);

    if (!result) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(result);
  } catch (error) {
     console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getById,
};