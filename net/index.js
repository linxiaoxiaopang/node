const net = require('net')
const { parseTemplate } = require('./utils')
const socket = net.createConnection({
  host: 'www.baidu.com',
  port: '80'
}, () => {
  socket.write(`GET / HTTP/1.1
  `)
})
socket.setEncoding('utf-8')
let res = ''
let header = null
let contentLength = 0
socket.on('data', (chunk) => {
  if (!res) {
    const templateRes = parseTemplate(chunk)
    header = templateRes.header
    contentLength = header['Content-Length']
  }
  res = `${res}${chunk}`
  const bufferData = Buffer.from(res)
  if (bufferData.length >= contentLength) {
    socket.end()
  }
})
socket.on('end', () => {
  console.log('contentLength', contentLength)
  const bufferData = Buffer.from(res)
  console.log('bufferDataLength', bufferData.length)
  console.log('res', res.length)
  console.log('请求完成')
})

