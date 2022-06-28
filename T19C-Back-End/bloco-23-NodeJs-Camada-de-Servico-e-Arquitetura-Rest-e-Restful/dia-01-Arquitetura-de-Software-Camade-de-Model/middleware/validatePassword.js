const isValid = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: '"password" não pode ser vazia',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" deve ter pelo menos 6 caracteres',
    });
  }
  if (typeof password !== 'string') {
    return res.status(400).json({
      message: '"password" deve ser uma string',
    });
  }
  next();
};
module.exports = isValid;