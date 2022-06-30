// hello-msc/models/connection.js

const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: 'root',
  database: 'model_example',
});

module.exports = connection;