module.exports = (req, res, next) => {
  const { infos } = req.body;
  if (!infos) {
    return res.status(400).json({ message: 'O campo infos é obrigatório' })
  }
  next()
}