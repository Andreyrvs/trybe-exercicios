const isValid = (req, res, next) => {
  const { lastName } = req.body;
  if (!lastName || lastName === undefined) {
    return res.status(400).json({
      message: '"lastName" is required',
    });
  }
  if (lastName.length < 1) {
    return res.status(400).json({
      message: '"firstName" is not allowed to be empty',
    });
  }
  next();
};

module.exports = isValid;