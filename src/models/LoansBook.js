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

LoansBook.isAvailable = async (bookId, dataInicio) => {
    const existingLoan = await LoansBook.findOne({
      where: {
        bookId: bookId,
        dataFinal: {
            [Sequelize.Op.gte]: dataInicio,
        }
      }
    });

    return existingLoan === null;
}

module.exports = LoansBook;