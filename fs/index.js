const os = require('os')
const path = require('path')
const fs = require('fs')

class File {
  constructor(filePath) {
    this.filePath = filePath
    this.name = ''
    this.ext = ''
    this.size = 0
    this.isFile = false
    this.createTime = ''
    this.content = ''
  }

  static async exist(filePath) {
    try {
      const absolutePath = this.getAbsolutePath(filePath)
      await fs.promises.stat(absolutePath)
      return true
    } catch (err) {
      if (err.code == 'ENOENT') {
        return false
      }
      throw new Error(err)
    }
  }

  static getAbsolutePath(filePath) {
    const isAbsolute = path.isAbsolute(filePath)
    if (isAbsolute) return filePath
    return path.resolve(process.cwd(), filePath)
  }

  static async getFileInfo(filePath) {
    const absolutePath = this.getAbsolutePath(filePath)
    if (!this.exist(absolutePath)) {
      console.log('文件不存在')
      return false
    }
    const res = await fs.promises.stat(absolutePath)
    const { size, birthtime: createTime } = res
    const isFile = !res.isDirectory()
    const name = path.basename(absolutePath)
    const ext = path.extname(absolutePath)
    let content = ''
    if (isFile) {
      content = await fs.promises.readFile(absolutePath, 'utf-8')
    }
    return {
      content,
      filePath: absolutePath,
      name,
      ext,
      size,
      isFile,
      createTime
    }
  }

  async init() {
    const res = await File.getFileInfo(this.filePath)
    const { name, ext, size, isFile, createTime, content } = res
    this.name = name
    this.ext = ext
    this.size = size
    this.isFile = isFile
    this.createTime = createTime
    this.content = content
    return this
  }

  async getChildren() {
    const filePath = this.filePath
    if (this.isFile) return []
    const filePaths = await fs.promises.readdir(filePath)
    const allRes = []
    const pArr = filePaths.map(async childPath => {
      const file = new File(path.join(this.filePath, childPath))
      await file.init()
      if (!file.isFile) {
        const res = await file.getChildren()
        allRes.push(...res)
      }
      return file
    })
    const files = await Promise.all(pArr)
    allRes.push(...files)
    return allRes.reverse()
  }
}

async function demo(filePath) {
  const file = new File(filePath)
  await file.init()
  const res = await file.getChildren()
  console.log('res', res)
}

// console.log('os', os.homedir())
// console.log('os.EOL', os.EOL)
// console.log('process.cwd', process.cwd())
// demo(path.resolve(__dirname, '../fs'))
demo('../fs')
