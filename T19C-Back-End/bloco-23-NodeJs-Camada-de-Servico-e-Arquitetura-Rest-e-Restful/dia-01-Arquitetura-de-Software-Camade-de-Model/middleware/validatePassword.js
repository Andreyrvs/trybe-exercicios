const isValid = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: '"password" is not allowed to be empty',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
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