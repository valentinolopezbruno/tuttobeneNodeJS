const mysql = require('mysql2/promise');
import config from "./../config";


let jConexion = {
    host:"localhost", 
    user:"root", 
    password:"", 
    database:"tuttobene2"
}

const connection = mysql.createConnection(jConexion);


const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};