const sequelize = require('../utils/database')
const { Sequelize, DataTypes } = require('sequelize');
const { Book } = require('./books');
const { Bookmark } = require('./bookmarks');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
})

User.belongsToMany(Book, { through: Bookmark, foreignKey: 'user_id'});
Book.belongsToMany(User, { through: Bookmark, foreignKey: 'book_id' });

module.exports = {
  User
}
