require('dotenv').config();

/*
Para inicializar o banco de teste, rode os seguintes comandos, 
passando a variável de ambiente que deseja usar (no nosso caso, NODE_ENV=test):

NODE_ENV=test npx sequelize-cli db:create
NODE_ENV=test npx sequelize-cli db:migrate
NODE_ENV=test npx sequelize-cli db:seed:all

Caso queira remover o banco para começar novamente, utilize:

NODE_ENV=test npx sequelize-cli db:drop
*/

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'fixar',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'orm_assoc_test_db',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
