const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Aplicação ouvino na porta: ${port}!`));