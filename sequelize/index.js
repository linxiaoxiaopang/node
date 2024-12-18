// require('./models/sync')
const adminServices = require('./services/adminServices')
;(async function test() {
    // const res = await adminServices.addAdmin({
    //     loginId: 'superb1',
    //     loginPwd: 'Test1234567'
    // })

    // const res = await adminServices.updateAdmin(2,{
    //     loginId: 'superb',
    //     loginPwd: 'Test1234567'
    // })

    const res = await  adminServices.deleteAdmin(3)
    console.log('res', res)
}())
