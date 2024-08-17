const templateStr = `chunk HTTP/1.1 200 OK                                                                                                                         
Accept-Ranges: bytes                                                                                                                          
Cache-Control: no-cache                                                                                                                       
Connection: keep-alive                                                                                                                        
Content-Length: 9508                                                                                                                          
Content-Type: text/html                                                                                                                       
Date: Thu, 15 Aug 2024 02:08:16 GMT                                                                                                           
P3p: CP=" OTI DSP COR IVA OUR IND COM "                                                                                                       
P3p: CP=" OTI DSP COR IVA OUR IND COM "                                                                                                       
Pragma: no-cache                                                                                                                              
Server: BWS/1.1                                                                                                                               
Set-Cookie: BAIDUID=74D1B88F4AF8FF8AFB508C5AC6D0FCF1:FG=1; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com 
Set-Cookie: BIDUPSID=74D1B88F4AF8FF8AFB508C5AC6D0FCF1; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: PSTM=1723687696; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: BAIDUID=74D1B88F4AF8FF8AC70C0FF90AA6CF79:FG=1; max-age=31536000; expires=Fri, 15-Aug-25 02:08:16 GMT; domain=.baidu.com; path=/; version=1; comment=bd
Traceid: 172368769629232220267817135831379307374
Vary: Accept-Encoding
X-Ua-Compatible: IE=Edge,chrome=1
X-Xss-Protection: 1;mode=block

<!DOCTYPE
`

function parseTemplate(template) {
  const templateArr = template.split('\n\n')
  const [headerStr, body] = templateArr
  const splitData = headerStr.split('\n')
  const topLine = splitData.shift()
  const header = splitData.reduce((prev, cur) => {
    const [key, val] = cur.split(': ')
    prev[key] = val
    return prev
  }, {})
  return {
    topLine,
    header,
    body
  }
}
// const res = parseTemplate(templateStr)
// console.log('res', res.header['Content-Length'])
// console.log('templateStr', templateStr)

module.exports = {
  parseTemplate
}
