const { URL } = require('url');
const urlString0 = 'https://www.zhengdingyunshang.com/#/design/designContainer?protoId=72&productId=4562501'
const urlString1 = 'https://www.zhengdingyunshang.com/design/designContainer?protoId=72&productId=4562501'
// console.log('URL', URL)
// console.log('origin', URL.parse(url))




// 示例 URL
// const urlString = 'https://example.com/#/path/to/page?query=123';

// 创建 URL 对象
// const url = new URL(urlString);
//
// console.log('url', url)
// // 提取 hash 部分
// const hash = url.hash;
// console.log('Hash:', hash); // 输出: '#/path/to/page?query=123'
//
// // 如果需要去掉 hash 的 # 部分
// const cleanHash = hash.substring(1);
// console.log('Clean Hash:', cleanHash); // 输出: '/path/to/page?query=123'
//
// // 如果需要解析 hash 部分的 query 参数
// const queryString = cleanHash.split('?')[1] || '';
// const queryParams = new URLSearchParams(queryString);
//
// console.log('queryParams', queryParams)
// console.log('Query Parameters:');
// for (const [key, value] of queryParams.entries()) {
//   console.log(`${key}: ${value}`);
// }

// const res = parseUrl(urlString)
// console.log('res', res)

// function parseUrl(urlString) {
//   const url = new URL(urlString)
//   const { origin, hash, searchParams, href, pathname } = url
//   const res = {
//     href,
//     origin
//   }
//   const isHash = pathname == '/' && hash
//   if (!isHash) {
//     res.rootUrl = `${origin}/`
//     res.pathname = pathname
//     res.searchParams = searchParams
//     res.mode = 'history'
//   } else {
//     const cleanHash = hash.substring(1)
//     let [hashPathname, queryString] = cleanHash.split('?')
//     const queryParams = new URLSearchParams(queryString)
//     res.rootUrl = `${origin}/#/`
//     res.pathname = `/#${hashPathname}`
//     res.searchParams = queryParams
//     res.mode = 'hash'
//   }
//   res.searchParamsObj = {}
//   for (const [key, value] of res.searchParams) {
//     res.searchParamsObj[key] = value
//   }
//
//   res.originAndPathname = `${res.origin}${res.pathname}`
//   return res
// }
//
//
// function getSystemUrls(urlString) {
//   const { rootUrl, searchParamsObj, originAndPathname } = parseUrl(urlString)
//   return {
//     login: `${rootUrl}login`,
//     design: `${originAndPathname}?protoId=${searchParamsObj.protoId}`,
//     reDesign: `${originAndPathname}?protoId=${searchParamsObj.protoId}&productId=${searchParamsObj.productId}`
//   }
// }
// console.log('getSystemUrls(urlString0)',getSystemUrls(urlString0))
// console.log('getSystemUrls(urlString1)',getSystemUrls(urlString1))

