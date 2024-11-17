const Sequelize = require('sequelize');
const db = require('../config/database.js');
const User = require('./User.js');

const Address = db.define('address', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER.UNSIGNED,
  },
  rua: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Address.sync({force: false});



module.exports = Address;