const {DataTypes} = require('sequelize')
const sequelize = require('./db')
module.exports = sequelize.define('Admin', {
    // 在这里定义模型属性
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {

    // 这是其他模型参数
})
