const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
  },
  console.log(`You are now connected to the employees database.👋`)
);

module.exports = connection;