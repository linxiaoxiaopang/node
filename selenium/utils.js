async function whileWait(callbackList, interval = 300) {
  if (!callbackList) return true
  if (!Array.isArray(callbackList)) {
    callbackList = [callbackList]
  }
  for (let i = 0; i < callbackList.length; i++) {
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

function parseUrl(urlString) {
  const url = new URL(urlString)
  const { origin, hash, searchParams, href, pathname } = url
  const res = {
    href,
    origin
  }
  const isHash = pathname == '/' && hash
  if (!isHash) {
    res.rootUrl = `${origin}/`
    res.pathname = pathname
    res.searchParams = searchParams
    res.mode = 'history'
  } else {
    const cleanHash = hash.substring(1)
    let [hashPathname, queryString] = cleanHash.split('?')
    const queryParams = new URLSearchParams(queryString)
    res.rootUrl = `${origin}/#/`
    res.pathname = `/#${hashPathname}`
    res.searchParams = queryParams
    res.mode = 'hash'
  }
  res.searchParamsObj = {}
  for (const [key, value] of res.searchParams) {
    res.searchParamsObj[key] = value
  }

  res.originAndPathname = `${res.origin}${res.pathname}`
  return res
}


function getSystemUrls(urlString) {
  const { rootUrl, searchParamsObj, originAndPathname } = parseUrl(urlString)
  return {
    login: `${rootUrl}login`,
    topic: rootUrl,
    design: `${originAndPathname}?protoId=${searchParamsObj.protoId}`,
    reDesign: `${originAndPathname}?protoId=${searchParamsObj.protoId}&productId=${searchParamsObj.productId}`
  }
}

//创建随机id
function createRandomNum  () {
  return Date.now().toString(16) + Math.random().toString(16).slice(2, 8)
}

module.exports = {
  whileWait,
  waitTimeByNum,
  parseUrl,
  getSystemUrls,
  createRandomNum
}
