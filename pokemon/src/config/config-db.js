//Conexion local de base de datos mysql, usando workbench -- conexion local 

const mysql  = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  database: 'ejercicio7', 
  user     : 'root',
  password : 'password6',
  insecureAuth : true
});
connection.connect();

module.exports = connection; 


//conexion para mssql
/*
const sql = require('mssql');
const express = require('express');
const app = express();

var config = {
    "user": "",
    "password": "",
    "server": "",
    "database": "",
    "options": {
        "encrypt": false,
        "trustServerCertificate": true
    }
};

sql.connect(config, (err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos:', err);
    } else {
        console.log('Conexion exitosa a SQL Server');
    }
});

module.exports = sql;
*/