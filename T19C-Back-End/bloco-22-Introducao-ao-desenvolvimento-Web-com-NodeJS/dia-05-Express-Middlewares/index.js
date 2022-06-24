const express = require('express')
const bodyParser = require('body-parser');
const validateProducName = require('./middlewares/validateProducName')
const validateInfo = require('./middlewares/validateInfo')
const validateSaleDate = require('./middlewares/validateSaleDate')
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod')
const validateSignup = require('./middlewares/validateSignup')
const authMiddleware = require('./middlewares/authMiddleware')

const crypto = require('crypto');

const PORT = 3001
const app = express();
app.use(bodyParser.json());

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/sales',
authMiddleware, validateProducName, validateInfo, validateSaleDate, validateWarrantyPeriod,
(req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso" })
})

app.post('/signup', validateSignup, (req, res) => {
  return res.status(201).json({ "token": `${generateToken()}` })
})

app.listen(PORT, () => console.log(`Aplicação escutando na porta ${PORT}`))