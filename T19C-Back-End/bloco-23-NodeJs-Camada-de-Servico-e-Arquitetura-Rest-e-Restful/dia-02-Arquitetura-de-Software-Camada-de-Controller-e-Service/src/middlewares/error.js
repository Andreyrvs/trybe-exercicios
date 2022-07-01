module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  if (err.code) {
    const statusByErrorCode = {
      invalidData: 400,
      notFound: 404,
      alreadyExists: 409,
    };

    const status = statusByErrorCode[err.code] || 500;

    return res.status(status).json(err);
  }
  console.error(err);
  res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
};