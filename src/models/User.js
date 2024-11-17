const Sequelize = require('sequelize');
const db = require('../config/database.js');
const bcrypt = require('bcryptjs');

const User = db.define('user', {
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

User.sync({force: false});

User.encryptPWD = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

User.comparePWD = async(password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
};

/*
User.associate = (models) => {
  User.hasOne(models.Address, {
    foreignKey: 'user_id', as: 'address'
  })
}
*/
module.exports = User;
