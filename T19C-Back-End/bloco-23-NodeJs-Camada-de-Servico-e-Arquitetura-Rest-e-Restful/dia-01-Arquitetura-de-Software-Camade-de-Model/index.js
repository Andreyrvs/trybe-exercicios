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
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
});

app.get('/user', async (_req, res) => {
  try {
    const allUsers = await User.getAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
});

app.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findById(id);

    if (!findUser) {
      return res.status(404).json({ message: 'User not Found' });
    }

    return res.status(200).json(findUser);
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const result = await User.update(id, firstName, lastName, email);

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
});

const port = 3000;
app.listen(port, () => console.log(`Aplicação ouvino na porta: ${port}!`));