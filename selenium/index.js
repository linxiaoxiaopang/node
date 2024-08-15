const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const {whileWait, waitTimeByNum} = require('./utils');

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
    await driver.get('https://www.zhengdingyunshang.com/#/login');
    await new Promise(resolve => setTimeout(resolve, 20000))
    console.log(1)
    await driver.get('https://www.zhengdingyunshang.com/#/design/designContainer?protoId=72&productId=4562501')
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
    await driver.get('https://www.zhengdingyunshang.com/#/design/index')
    await new Promise(resolve => setTimeout(resolve, 200))
    await driver.get('https://www.zhengdingyunshang.com/#/design/designContainer?protoId=72')
    await new Promise(resolve => setTimeout(resolve, 20000))

    // 查找 searchIcon 元素并点击
    let searchIcon = await driver.findElement(By.css('.cate-and-search-component .el-icon-search')) // 根据实际情况更改选择器
    await searchIcon.click()

    // 查找 input 元素并输入文本
    let inputElement = await driver.findElement(By.css('.cate-and-search-component .search input'))
    await inputElement.sendKeys('haoma')
    // let isClicked = false
    // await new Promise(resolve => setTimeout(resolve, 500))
    // while (!isClicked) {
    //   // 点击图片
    //   await new Promise(resolve => setTimeout(resolve, 200))
    //   try {
    //     let img = await driver.findElement(By.css('.hover-pic-popup-component .autoImgComponent')) // 根据实际情况更改选择器
    //     await img.click()
    //     isClicked = true
    //   } catch {
    //
    //   }
    // }

    await whileWait(async () => {
      try {
        await driver.findElement(By.css('.loading-wrapper'))
        return false
      } catch {
        return true
      }
    })

    await new Promise(resolve => setTimeout(resolve, 20))
    // 查找所有具有相同 class 的元素
    let designs = await driver.findElements(By.css('.designContainerHeader .design')); // 根据实际情况更改 class 名称
    designs[1].click()
    await new Promise(resolve => setTimeout(resolve, 200))
    // 点击模式切换按钮
    let submitBtn = await driver.findElement(By.css('.el-message-box__btns .el-button--primary')) // 根据实际情况更改选择器
    await submitBtn.click()
    await new Promise(resolve => setTimeout(resolve, 200))
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

    await new Promise(resolve => setTimeout(resolve, 3000))

    // 查找所有具有相同 class 的元素
    let nextStepBtn = await driver.findElement(By.css('.done-btn-wrapper .el-button--primary')); // 根据实际情况更改 class 名称
    nextStepBtn.click()

    await new Promise(resolve => setTimeout(resolve, 200))
    // 查找所有具有相同 class 的元素
    let saveBtn = await driver.findElement(By.css('.save-component-dialog_custom-class .el-button--primary')); // 根据实际情况更改 class 名称
    saveBtn.click()

  } finally {
    // 关闭浏览器
    // await driver.quit();
  }
})();
