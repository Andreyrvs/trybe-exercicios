const Cep = require('../services/Cep');

const getById = async (req, res, next) => {
  try {
    const { cep } = req.params;

    const result = await Cep.getById(cep);

    if (result.error) return next(result.error);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).end();
  }
};

module.exports = {
  getById,
};