const Sequelize = require('sequelize');
const db = require('../config/database.js');
const bcrypt = require('bcryptjs');
const Address = require('./Address.js');
const LoansBook = require('./LoansBook.js');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.encryptPWD = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

User.comparePWD = async(password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
};

User.hasOne(Address, {
  foreignKey: 'userId',
})
Address.belongsTo(User)

User.hasOne(LoansBook, {
  foreignKey: 'userId', 
});
LoansBook.belongsTo(User);

module.exports = User;
