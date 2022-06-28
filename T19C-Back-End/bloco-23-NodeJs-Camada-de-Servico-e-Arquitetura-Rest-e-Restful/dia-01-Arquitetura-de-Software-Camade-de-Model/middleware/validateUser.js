const isValid = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName || firstName === undefined) {
    return res.status(400).json({
      message: '"firstName" é obrigatorio',
    });
  }
  if (!lastName || lastName === undefined) {
    return res.status(400).json({
      message: '"lastName" é obrigatorio',
    });
  }
  next();
};

module.exports = isValid;