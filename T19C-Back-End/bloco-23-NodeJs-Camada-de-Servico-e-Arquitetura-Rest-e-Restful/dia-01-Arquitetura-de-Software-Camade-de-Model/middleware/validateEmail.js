const isValid = (req, res, next) => {
  const { email } = req.body;
  const regex = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
  if (!email || email === undefined) {
    return res.status(400).json({
      message: '"email" é obrigatorio',
    });
  }
  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" invalido! Formado deve ser: "email@email.com',
    });
  }
  next();
};

module.exports = isValid;