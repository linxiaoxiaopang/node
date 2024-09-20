const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('library', 'root', 'Test123456', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: null
})

module.exports = sequelize
