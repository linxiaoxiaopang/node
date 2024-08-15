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
    // await driver.get('https://www.zdcustom.com/designContainer?protoId=1312&productId=4560192')
    // await new Promise(resolve => setTimeout(resolve, 20000))
    //
    // let fabricList = await driver.executeScript(`
    //    let element = document.querySelector('.designContainerPage');
    //    const fabricList = element.__vue__.fabricList;
    //    const canvas = fabricList[0].canvas
    //    const os = canvas.getObjects()
    //    return os
    // `);
    // console.log('fabricList', fabricList)

    // let designData = await driver.executeScript(`
    //    let element = document.querySelector('.designContainerPage');
    //    const fabricList = element.__vue__.fabricList
    //    console.log('fabricList', fabricList)
    //    return fabricList.map(item => {
    //       const canvas = item.canvas
    //       return canvas.getObjects()
    //    })
    // `)
    // console.log('designData', designData)
     await driver.get('https://www.zdcustom.com/designContainer?protoId=1312')
     await new Promise(resolve => setTimeout(resolve, 10000))
     await driver.executeScript(`
       let element = document.querySelector('.designContainerPage');
       console.log('element', element);
       const fabricList = element.__vue__.fabricList;
       const canvas = fabricList[0].canvas
       fabricList.map((item, index) => {
         const canvas = item.canvas
         const os = canvas.getObjects()
         os.map((sItem, sIndex) => {
           const formData = ${designData}[index][sIndex]
            sItem.setOptions({
             left: formData.left,
             top: formData.top,
             scaleX: formData.scaleX,
             scaleY: formData.scaleY
            })
            canvas.renderAll()
         })
       })
       return element.__vue__.fabricList
    `)
  } finally {
    // 关闭浏览器
    // await driver.quit();
  }
})();
