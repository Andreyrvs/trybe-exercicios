import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
})