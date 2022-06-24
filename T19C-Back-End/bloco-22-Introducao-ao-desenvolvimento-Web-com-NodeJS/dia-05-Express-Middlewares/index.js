const express = require('express')
const bodyParser = require('body-parser');
const validateProducName = require('./middlewares/validateProducName')
const validateInfo = require('./middlewares/validateInfo')
const validateSaleDate= require('./middlewares/validateSaleDate')

const PORT = 3001
const app = express();
app.use(bodyParser.json());

app.post('/sales', validateProducName, validateInfo, validateSaleDate, (req, res) => {
  res.status(201).json({ message: 'Sale created successfully!' })
})

app.listen(PORT, () => console.log(`Aplicação escutando na porta ${PORT}`))