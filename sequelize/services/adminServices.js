const Admin = require('../models/Admin')

exports.addAdmin = async function (adminObj) {
    const admin = Admin.build(adminObj)
    const res = await admin.save()
    return res.toJSON()
}

exports.updateAdmin = async function (id, adminObj) {
    const admin = await Admin.findByPk(id)
    return await admin.update(adminObj)
}


exports.deleteAdmin = async function (id) {
    const admin = await Admin.findByPk(id)
    return await admin.destroy()
}
