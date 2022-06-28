const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.post('/user', (req, res) => res.send('Hello World!'));

const port = 3000;
app.listen(port, () => console.log(`Aplicação ouvino na porta: ${port}!`));