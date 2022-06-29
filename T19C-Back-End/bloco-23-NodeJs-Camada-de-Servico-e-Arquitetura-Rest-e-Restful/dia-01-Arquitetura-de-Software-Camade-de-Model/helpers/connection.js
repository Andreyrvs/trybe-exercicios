const mysql = require('mysql2/promise');

// No lugar de local host usar ( host: 'backend_Mysql',) é o nome do contêiner que tem o MySQL

const connection = mysql.createPool({
  host: 'backend_Mysql',
  user: 'root',
  password: 'root',
  database: 'camada_de_model',
});

module.exports = connection;