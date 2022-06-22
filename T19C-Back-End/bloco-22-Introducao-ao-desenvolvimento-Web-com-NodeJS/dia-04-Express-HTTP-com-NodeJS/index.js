const express = require('express');
const app = express();
const applicationPort = 3031

app.get('/', function (req, res) {
  res.status(200).send({message: "foi"})
})

app.listen(applicationPort, () => {
  console.log(`Aplicação escutando na porta ${applicationPort}`);
})