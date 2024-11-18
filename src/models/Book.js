const Sequelize = require('sequelize');
const db = require('../config/database.js');
const LoansBook = require('./LoansBook.js');


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
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

Book.sync({ force: false });

Book.hasMany(LoansBook, {
    foreignKey: 'bookId', 
});
LoansBook.belongsTo(Book);
module.exports = Book;