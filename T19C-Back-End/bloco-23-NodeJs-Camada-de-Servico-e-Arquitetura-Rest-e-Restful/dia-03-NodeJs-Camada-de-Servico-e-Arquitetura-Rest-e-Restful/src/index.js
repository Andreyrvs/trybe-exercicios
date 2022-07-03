const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

const { API_PORT } = process.env;
app.listen(API_PORT, () => {
  console.log('App listening on port 3000!');
});