const mysql = require('mysql2/promise');
require('dotenv').config();
// No lugar de local host usar ( host: 'backend_Mysql',) é o nome do contêiner que tem o MySQL

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = connection;