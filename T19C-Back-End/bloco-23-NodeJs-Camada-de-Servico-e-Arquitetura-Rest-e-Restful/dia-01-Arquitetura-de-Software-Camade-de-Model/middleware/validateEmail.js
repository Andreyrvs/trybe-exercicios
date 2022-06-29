const isValid = (req, res, next) => {
  const { email } = req.body;
  const regex = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
  if (!email || email === undefined) {
    return res.status(400).json({
      message: '"email" is not allowed to be empty',
    });
  }
  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

module.exports = isValid;