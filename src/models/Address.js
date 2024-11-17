const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Address = db.define('address', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
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
/*
Address.associate = (models) => {
  Address.belongsTo(models.User, {
    foreignKey: 'user_id', as: 'users'
  })
}
*/
module.exports = Address;