const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

require('dotenv').config();

const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

const Cep = require('./controllers/Cep');

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong!' }));
app.get('/cep/:cep', rescue(Cep.getById));

app.use(errorMiddleware);

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log(`Aplicação escutando a porta: ${port}!`));