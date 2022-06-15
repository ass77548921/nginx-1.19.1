const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: '408410669',
    user: 'root',
    password: '55123',
    database: 'data'
});

module.exports = pool.promise();

 
  
  
