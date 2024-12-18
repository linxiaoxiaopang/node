const path = require('path')
const express = require('express')
const app = express()
app.use((req, res, next) => {
  console.log(Date.now(), '===', req.url)
  const url = req.url
  if (url.endsWith('a.js')) {
    setTimeout(() => {
      next()
    }, 8000)
  } else if (url.endsWith('.js')) {
    setTimeout(() => {
      next()
    }, 2000)
  } else if (url.endsWith('0.css')){
    setTimeout(() => {
      next()
    }, 300)
  } else if (url.endsWith('1.css')){
    setTimeout(() => {
      next()
    }, 2000)
  }  else {
    next()
  }
})

app.use((req, res, next) => {
  console.log('end ===', Date.now(), '===', req.url)
  next()
})

app.use(express.static(path.resolve(__dirname, './public')))
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('listen 3000')
})
