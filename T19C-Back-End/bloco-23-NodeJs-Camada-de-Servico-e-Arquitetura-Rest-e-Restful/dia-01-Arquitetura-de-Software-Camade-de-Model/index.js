const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const User = require('./models/User');
const validatePassword = require('./middleware/validatePassword');
const validateEmail = require('./middleware/validateEmail');

app.post('/user', validatePassword, validateEmail, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    await User.create(first_name, last_name, email, password);
    res.status(201).json({ message: 'Usuario Criado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

const port = 3000;
app.listen(port, () => console.log(`Aplicação ouvino na porta: ${port}!`));