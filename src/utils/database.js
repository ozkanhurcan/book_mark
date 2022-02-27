const { Sequelize } = require('sequelize');

const testSequlaizeConnection = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
console.log(process.env.DATABASE_DB)
const sequelize = new Sequelize('book_mark', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
})

testSequlaizeConnection(sequelize)

module.exports = sequelize