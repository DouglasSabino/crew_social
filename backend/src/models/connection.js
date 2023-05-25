const mysql = require('mysql2/promise');
require('dotenv').config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSwORD, MYSQL_DATABASE } = process.env; 

const db = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSwORD,
    database: MYSQL_DATABASE
  });
  
  module.exports = { db };
