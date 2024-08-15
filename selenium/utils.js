async function whileWait(callbackList, interval = 300) {
  if (!callbackList) return true
  if(!Array.isArray(callbackList)) {
    callbackList = [callbackList]
  }
  for(let i = 0; i < callbackList.length; i++) {
    let isFinished = false
    const callback = callbackList[i]
    while (!isFinished) {
      isFinished = await callback()
      await waitTimeByNum(interval)
    }
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
