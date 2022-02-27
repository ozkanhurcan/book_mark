const sequelize = require('../utils/database')
const { Sequelize, DataTypes } = require('sequelize')

const tokenTypes = {
    REFRESH: 'refresh',
    ACCESS: 'access'
}

const Token = sequelize.define('Token', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM(tokenTypes.REFRESH),
        allowNull: false,
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    blacklisted: {
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

module.exports = {
    Token, tokenTypes
}