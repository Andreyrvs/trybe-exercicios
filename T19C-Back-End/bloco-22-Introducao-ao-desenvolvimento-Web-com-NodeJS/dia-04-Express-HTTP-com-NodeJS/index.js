const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json())

const applicationPort = 3031

app.get('/ping', function (_req, res) {
  res.status(200).json({ message: "pong" })
})

app.post('/hello', function (req, res) {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` })
})

app.listen(applicationPort, () => {
  console.log(`Aplicação escutando na porta ${applicationPort}`);
})