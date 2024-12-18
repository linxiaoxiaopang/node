const fs = require('fs')
const data = require('./mockData')
const Mock = require('mockjs')


function mapData(data) {
    let tmp = null
    if (data.type === 'object') {
        tmp = {}
        const keys = Object.keys(data.properties)
        for (let key of keys) {
            const val = data.properties[key]
            tmp[formatKey(key, val)] = mapData(val)
        }
    } else if (data.type === 'array') {
        tmp = []
        tmp[0] = mapData(data.items)
    } else {
        tmp = formatVal(data)
    }
    return tmp
}

const list = {
    integer: {
        key(key, row) {
            const {description = ''} = row
            if (description.indexOf('主键') >= 0) {
                return `${key}|+1`
            }
            return key
        },
        val(row) {
            const {description = ''} = row
            if (description.indexOf('主键') >= 0) {
                return 1
            }
            return ' @integer(1, 100)'
        }
    },

    number: {
        key(key, row) {
            return key
        },
        val(row) {
            const {format} = row
            const formatList = {
                float: '@float(1, 100, 2, 2)',
                double: '@float(1, 100, 8, 8)'
            }
            return formatList[format] || formatList.float
        }
    },

    string: {
        key(key, row) {
            return key
        },
        val(row) {
            return '@string(10)'
        }
    },

    boolean: {
        key(key, row) {
            return key
        },
        val(row) {
            return '@boolean' ? 1 : 0
        }
    },

    array: {
        key(key, row) {
            return `${key}|10-20`
        },
        val(row) {
            return []
        }
    }
}

function formatKey(key, row) {
    const {type} = row
    const fn = list[type] && list[type].key
    if (fn) {
        return fn(key, row)
    }
    return key
}

function formatVal(row) {
    const {type} = row
    const fn = list[type] && list[type].val
    if (fn) {
        return fn(row)
    }
    return ''
}

const tmpData = mapData(data)
// console.log('tmpData', JSON.stringify(tmpData))


const data1 = Mock.mock(tmpData)

fs.writeFileSync('example.json', JSON.stringify(data1))
