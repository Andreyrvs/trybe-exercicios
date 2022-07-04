const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);
app.get('/movies/:id', MovieController.findById);

const PORT = process.env.API_PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));