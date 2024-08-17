const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

// 创建 WebDriver 实例
(async function example() {
  // 设置 Chrome 浏览器选项
  let options = new chrome.Options();
  options.addArguments('start-maximized'); // 启动时最大化窗口

  // 初始化 WebDriver
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // 打开网页
    await driver.get('https://www.zdcustom.com/login');
    console.log(1)
    await driver.get('https://www.zdcustom.com/designContainer?protoId=444&productId=4562186')
    await new Promise(resolve => setTimeout(resolve, 20000))

    let designData = await driver.executeScript(`
       let element = document.querySelector('.designContainerPage');
       console.log('element', element);
       const fabricList = element.__vue__.fabricList;
       return  fabricList.map(item => {
        const canvas = item.canvas
        const os = canvas.getObjects()
        return os.map(sItem => {
          return {
            left: sItem.left,
            top: sItem.top,
            scaleX: sItem.scaleX,
            scaleY: sItem.scaleY,
            flipX: sItem.flipX,
            flipY: sItem.flipY,
            angle: sItem.angle
          }
        })
       })
    `)
    await driver.get('https://www.zdcustom.com/designContainer?protoId=444')
    await new Promise(resolve => setTimeout(resolve, 20000))
    await driver.executeScript(`
       let element = document.querySelector('.designContainerPage');
       console.log('element', element);
       const fabricList = element.__vue__.fabricList;
       const canvas = fabricList[0].canvas
       fabricList.map((item, index) => {
         const canvas = item.canvas
         const os = canvas.getObjects()
         os.map((sItem, sIndex) => {
           const formDataItem = ${JSON.stringify(designData)}
           const formData = formDataItem[index][sIndex]
            sItem.setOptions({
               left: formData.left,
               top: formData.top,
               scaleX: formData.scaleX,
               scaleY: formData.scaleY,
               flipX: sItem.flipX,
               flipY: sItem.flipY,
               angle: sItem.angle
            })
            canvas.$cacheFrontDesignData = null
            canvas.renderAll()
         })
       })
    `)
  } finally {
    // 关闭浏览器
    // await driver.quit();
  }
})();
