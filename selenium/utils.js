async function whileWait(callback, interval = 300) {
  if (!callback) return true
  let isFinished = false
  while (!isFinished) {
    isFinished = await callback()
    await waitTimeByNum(interval)
  }
}

async function waitTimeByNum(num) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, num)
  })
}

module.exports = {
  whileWait,
  waitTimeByNum
}
