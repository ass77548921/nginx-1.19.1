const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({ 
    host:'localhost', 
    user: 'root', 
    password: '55123',
    database: 'data'
  })

module.exports = pool.promise();