const Sequelize = require('sequelize')
const db = require('../config/database.js');


const LoansBook = db.define('loansBooks', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId:{
        type: Sequelize.INTEGER.UNSIGNED,
    },
    bookId: {
    type: Sequelize.INTEGER.UNSIGNED,
  },
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataFinal: {
        type: Sequelize.DATE,
        allowNull: true
    }
})

LoansBook.sync({ force: false});





module.exports = LoansBook;