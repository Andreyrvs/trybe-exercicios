const express = require('express')
const bodyParser = require('body-parser');

const PORT = 3001
const app = express();
app.use(bodyParser.json());

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;
  if (!productName) {
    return res.status(400).json({ "message": "O campo producName é obrigatório" })
  }
  if (productName.length < 4) {
    return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" })
  }

})

app.listen(PORT, () => console.log(`Aplicação escutando na porta ${PORT}`))