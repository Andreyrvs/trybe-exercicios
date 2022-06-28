const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const User = require('./models/User');
const validatePassword = require('./middleware/validatePassword');
const validateEmail = require('./middleware/validateEmail');
const validateUser = require('./middleware/validateUser');

app.post('/user', validatePassword, validateEmail, validateUser, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const newUser = await User.create(firstName, lastName, email, password);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

const port = 3000;
app.listen(port, () => console.log(`Aplicação ouvino na porta: ${port}!`));