const fs = require('fs')
const path = require('path')
const fileName = path.resolve(__dirname, './a/a.txt')
const fileName1 = path.resolve(__dirname, './a/a1.txt')
const fileName2 = path.resolve(__dirname, './a/a2.txt')
const fileName3 = path.resolve(__dirname, './a/a3.txt')
const fileName4 = path.resolve(__dirname, './a/a4.txt')

async function readAll() {
  const rs = fs.createReadStream(fileName)
  rs.on('data', () => {
    console.log(111111)
  })
}

function writeAll() {
  const rs = fs.createWriteStream(fileName)
  let i = 0;
  while (i < 1024 * 1024 * 10) {
    rs.write('a')
    i++
  }
}

async function copy1() {
  console.time('copy1')
  const content = await fs.promises.readFile(fileName)
  await fs.promises.writeFile(fileName1, content)
  console.timeEnd('copy1')
  console.log('复制完成')
}

async function copy2() {
  const rs = fs.createReadStream(fileName)
  const ws = fs.createWriteStream(fileName2)
  console.time('copy2')
  rs.on('data', (chunk) => {
    ws.write(chunk)
  })
  rs.on('end', () => {
    console.timeEnd('copy2')
    console.log('复制完成')
  })
}

async function copy3() {
  const rs = fs.createReadStream(fileName)
  const ws = fs.createWriteStream(fileName3)
  console.time('copy3')
  rs.on('data', (chunk) => {
    const flag = ws.write(chunk)
    if (!flag) rs.pause()
  })
  ws.on('drain', () => {
    console.log('resume')
    rs.resume()
  })
  rs.on('end', () => {
    console.timeEnd('copy3')
    console.log('复制完成')
  })
}

async function copy4() {
  const rs = fs.createReadStream(fileName)
  const ws = fs.createWriteStream(fileName4)
  console.time('copy4')
  ws.on('pipe', (src) => {
    console.log('src', src)
  })
  rs.pipe(ws)
  rs.on('end', () => {
    console.timeEnd('copy4')
    console.log('复制完成')
  })
}
// writeAll()
// readAll()
// copy1()
// copy2()
// copy3()
copy4()
