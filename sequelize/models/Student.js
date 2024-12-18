const {DataTypes} = require('sequelize')
const sequelize = require('./db')
module.exports = sequelize.define('Student', {
    // 在这里定义模型属性
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // 这是其他模型参数
})

