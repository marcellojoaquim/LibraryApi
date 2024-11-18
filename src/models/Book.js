const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Book = db.define('books', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  autor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  anoPublicacao: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

Book.sync({force: false});

module.exports = Book;