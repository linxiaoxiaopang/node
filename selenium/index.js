const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('path')
const RE_DESIGN_URL = 'https://www.zhengdingyunshang.com/#/design/designContainer?protoId=72&productId=4562501'
const USER_NAME = 'superb'
const USER_PASSWORD = '2022@zhengdingZD'
const picList = [['76468770664341'], ['CT24081604'], ['081601m'], ['JYPAI1711']]
const { whileWait, waitTimeByNum, getSystemUrls } = require('./utils')
  // superb / 2022@zhengdingZD
  // 创建 WebDriver 实例
;(async function example() {
  // 设置 Chrome 浏览器选项
  let options = new chrome.Options()
  options.addArguments('start-maximized') // 启动时最大化窗口
  console.log(1)
  // 初始化 WebDriver
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()
  console.log(2)
  try {
    const urlList = getSystemUrls(RE_DESIGN_URL)
    // 打开网页
    driver.get(urlList.login)
    //登录
    // const userName = await querySelector('[uiid="zd-name"]')
    // userName.sendKeys(USER_NAME)
    // const password = await querySelector('[uiid="zd-pwd"]')
    // password.sendKeys(USER_PASSWORD)
    //跳转到topic页面
    const currentUrl0 = urlList.login
    await whileWait(async () => {
      let currentUrl1 = await driver.getCurrentUrl()
      return currentUrl0 != currentUrl1
    })

    console.log(1)
    await driver.get(urlList.reDesign)
    await pageLoaded()
    await waitTimeByNum(3000)
    const designData = await driver.executeScript(`
           let element = document.querySelector('.designContainerPage')
           console.log('element', element);
           const fabricList = element.__vue__.fabricList
           return fabricList.map(item => {
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
    // console.log('designData', designData)
    await driver.get(urlList.topic)
    await waitTimeByNum(200)
    await driver.get(urlList.design)

    await pageLoaded()

    for (let i = 0; i < picList.length; i++) {

      let designsEls = await querySelectorAll('.designContainerHeader .design')
      if (designsEls.length > 1) {
        const chunkDesignEl = designsEls[1]
        let classAttribute = await chunkDesignEl.getAttribute('class')
        // 检查是否包含特定的 active 激活样式，检测是否是专业设计高亮
        let isChunkDesignActive = classAttribute.indexOf('active') >= 0
        if (isChunkDesignActive) {
          await designsEls[0].click()
          await whileWait(async () => {
            let submitBtn = await querySelector('.el-message-box__btns .el-button--primary')
            if (!submitBtn) return false
            await submitBtn.click()
            return true
          })
        }
      }

      const picTitleList = picList[i]
      // 查找 searchIcon 元素并点击
      let pictureTitleElement = await querySelector('.cate-and-search-component .search input')
      if (!pictureTitleElement) {
        let searchIcon = await querySelector('.cate-and-search-component .el-icon-search')
        await searchIcon.click()
        // 查找 input 元素并输入文本
        pictureTitleElement = await querySelector('.cate-and-search-component .search input')
      }
      let firstPicTitle = ''
      for (let j = 0; j < picTitleList.length; j++) {
        const picTitle = picTitleList[j]
        if(!firstPicTitle) firstPicTitle = picTitle
        await pictureTitleElement.clear()
        await pictureTitleElement.sendKeys(picTitle)
        //点击图片
        await whileWait([
            () => {
              return querySelector('.uploadDesignPicComponent .loading-wrapper')
            },
            async () => {
              return !(await querySelector('.uploadDesignPicComponent .loading-wrapper'))
            }
          ]
        )
        await waitTimeByNum(20)
        //点击图片
        const img = await querySelector('.hover-pic-popup-component .autoImgComponent')
        if (!img) continue
        await img.click()
        await waitTimeByNum(20)
      }

      //画布加载渲染
      await canvasRendered()

      // 获取一键定制，专业定制按钮
      if (designsEls.length > 1) {
        designsEls[1].click()
        // 点击模式切换按钮
        await whileWait(async () => {
          let submitBtn = await querySelector('.el-message-box__btns .el-button--primary')
          if (!submitBtn) return false
          await submitBtn.click()
          return true
        })
        await canvasRendered()
      }

      //根据模板数据更新画布数据
      await driver.executeScript(`
           let element = document.querySelector('.designContainerPage')
           console.log('element', element);
           const fabricList = element.__vue__.fabricList
           fabricList.map((item, index) => {
             const canvas = item.canvas
             const os = canvas.getObjects()
             console.log('os', os)
             os.map((sItem, sIndex) => {
                const formDataList = ${JSON.stringify(designData)}
                const formData = formDataList[index][sIndex]
                if(!formData) {
                  canvas.remove(sItem)
                } else {
                   sItem.setOptions({
                       left: formData.left,
                       top: formData.top,
                       scaleX: formData.scaleX,
                       scaleY: formData.scaleY,
                       flipX: formData.flipX,
                       flipY: formData.flipY,
                       angle: formData.angle
                   })
                }
                canvas.renderAll()
                canvas.$cacheFrontDesignData = null
             })
           })
        `)

      //下一步
      const nextStepBtn = await querySelector('.done-btn-wrapper .el-button--primary')
      nextStepBtn.click()

      await waitTimeByNum(200)

      //露白弹窗 继续定制
      const keepDesignBtn = await querySelector('.el-message-box__btns .el-button--default')
      if (keepDesignBtn) {
        await keepDesignBtn.click()
        await waitTimeByNum(200)
      }

      //输入前缀
      await whileWait(async () => {
        const skuPrefixEl = await querySelector('[uiid="zd-skuPrefix"]')
        if (skuPrefixEl) {
          await skuPrefixEl.sendKeys(firstPicTitle)
          return true
        }
        return false
      })

      //保存定制
      const saveBtn = await querySelector('.save-component-dialog_custom-class .el-button--primary')
      saveBtn.click()

      let keepToDesignEl = null
      await whileWait(async () => {
        const isError = await querySelector('.el-form-item__error')
        if (isError) return true
        keepToDesignEl = await querySelector('.uiid-zd-success-cancel')
        if (keepToDesignEl) return true
        return false
      })
      //保存成功
      if (keepToDesignEl) {
        keepToDesignEl.click()
      } else {
        await driver.get(urlList.topic)
        await waitTimeByNum(200)
        await driver.get(urlList.design)
        await pageLoaded()
      }
    }
  } finally {
    // 关闭浏览器
    // await driver.quit();
  }

  async function querySelector(selector) {
    try {
      return await driver.findElement(By.css(selector))
    } catch {
      console.log('获取不到元素')
      return null
    }
  }

  async function querySelectorAll(selector) {
    try {
      return await driver.findElements(By.css(selector))
    } catch {
      return []
    }
  }

  async function pageLoaded() {
    await whileWait(async () => {
      return await driver.executeScript(`
                let element = document.querySelector('.designContainerPage')
                if (!element) return false
                const context = element.__vue__
                console.log('context.loading', context.loading)
                return !context.loading
            `
      )
    })
  }

  async function canvasRendered() {
    await whileWait(async () => {
      return await driver.executeScript(`
                console.log('canvasRendered')
                let element = document.querySelector('.designContainerPage')
                if (!element) return false
                const context = element.__vue__
                console.log('context.loading', context.loading)
                return !context.loading
            `
      )
    })
  }
})()

