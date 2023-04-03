const mysql = require('mysql2');
const conf = require('dotenv').config().parsed;

async function connectToDatabase() {
  try {
    const conn = await mysql.createPool({
      host: conf.HOSTNAME,
      user: conf.USERNAME,
      password: conf.PASSWORD,
      database: conf.DATABASE,
      port: conf.DB_PORT
    }).promise();

    console.log('Conexão com o banco de dados estabelecida com sucesso');
    return conn;
  } catch (err) {
    console.error('Erro ao conectar com o banco de dados', err);
    throw err;
  }
}

module.exports = connectToDatabase();
