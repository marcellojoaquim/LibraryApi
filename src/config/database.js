const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;

const connection = new Sequelize(
  dbName, 
  dbUser, 
  dbPassword, 
  {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql'
  });

  module.exports = connection;