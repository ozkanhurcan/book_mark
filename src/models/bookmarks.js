const sequelize = require('../utils/database')
const { Sequelize, DataTypes } = require('sequelize')
const { Book } = require('./books')


const Bookmark = sequelize.define('user_bookmarks', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'book_id'
    }
}, {
    timestamps: false
})

module.exports = { Bookmark }
