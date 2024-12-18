const sequelize = require('./db')
const Admin = require('./Admin')
const Class = require('./Class')
const Student = require('./Student')
Class.hasMany(Student)
Student.hasOne(Class)



// sequelize.sync({
//     force: true
// }).then(() => {
//     console.log('同步完成')
// })
