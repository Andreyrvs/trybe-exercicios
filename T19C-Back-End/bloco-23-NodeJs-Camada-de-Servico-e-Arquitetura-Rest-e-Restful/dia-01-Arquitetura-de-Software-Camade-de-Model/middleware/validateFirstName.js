const isValid = (req, res, next) => {
  const { firstName } = req.body;
  if (firstName.length < 1) {
    return res.status(400).json({
      message: '"firstName" is not allowed to be empty',
    });
  }
  if (!firstName || firstName === undefined) {
    return res.status(400).json({
      message: '"firstName" is required',
    });
  }
  next();
};

module.exports = isValid;