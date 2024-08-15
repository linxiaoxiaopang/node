const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const {whileWait, waitTimeByNum} = require('./utils');
// superb / 2022@zhengdingZD
// 创建 WebDriver 实例
(async function example() {
    // 设置 Chrome 浏览器选项
    let options = new chrome.Options();
    options.addArguments('start-maximized'); // 启动时最大化窗口

    // 初始化 WebDriver
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build()

    try {
        // 打开网页
        await driver.get('https://www.zhengdingyunshang.com/#/login')
        let currentUrl = await driver.getCurrentUrl()
        await whileWait(async () => {
            let currentUrl1 = await driver.getCurrentUrl()
            return currentUrl1 != currentUrl
        })
        console.log(1)
        await driver.get('https://www.zhengdingyunshang.com/#/design/designContainer?protoId=72&productId=4562501')
        await pageLoaded()
        await waitTimeByNum(3000)
        let designData = await driver.executeScript(`
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
        await driver.get('https://www.zhengdingyunshang.com/#/design/index')
        await waitTimeByNum(200)
        await driver.get('https://www.zhengdingyunshang.com/#/design/designContainer?protoId=72')

        await pageLoaded()
        // 查找 searchIcon 元素并点击
        let searchIcon = await driver.findElement(By.css('.cate-and-search-component .el-icon-search')) // 根据实际情况更改选择器
        await searchIcon.click()

        // 查找 input 元素并输入文本
        let inputElement = await driver.findElement(By.css('.cate-and-search-component .search input'))
        await inputElement.sendKeys('76468770664341')
        //点击图片
        await whileWait([
                async () => {
                    try {
                        await driver.findElement(By.css('.uploadDesignPicComponent .loading-wrapper'))
                        return true
                    } catch {
                        return false
                    }
                },
                async () => {
                    try {
                        await driver.findElement(By.css('.uploadDesignPicComponent .loading-wrapper'))
                        return false
                    } catch {
                        return true
                    }
                }
            ]
        )
        await waitTimeByNum(20)
        //点击图片
        let img = await driver.findElement(By.css('.hover-pic-popup-component .autoImgComponent')) // 根据实际情况更改选择器
        await img.click()
        await canvasRendered()

        // 查找所有具有相同 class 的元素
        try {
            let designs = await driver.findElements(By.css('.designContainerHeader .design')); // 根据实际情况更改 class 名称
            designs[1].click()
            // 点击模式切换按钮
            await whileWait(async () => {
                try {
                    let submitBtn = await driver.findElement(By.css('.el-message-box__btns .el-button--primary')) // 根据实际情况更改选择器
                    await submitBtn.click()
                    return true
                } catch {
                    return false
                }
            })
            await canvasRendered()
        } catch {
        }
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
                console.log('formData', formData)
                sItem.setOptions({
                   left: formData.left,
                   top: formData.top,
                   scaleX: formData.scaleX,
                   scaleY: formData.scaleY,
                   flipX: formData.flipX,
                   flipY: formData.flipY,
                   angle: formData.angle
                })
                canvas.renderAll()
                canvas.$cacheFrontDesignData = null
             })
           })
        `)


        // 查找所有具有相同 class 的元素
        let nextStepBtn = await driver.findElement(By.css('.done-btn-wrapper .el-button--primary'))
        nextStepBtn.click()

        await waitTimeByNum(200)

        try {
            let keepDesignBtn = await driver.findElement(By.css('.el-message-box__btns .el-button--default')) // 根据实际情况更改选择器
            await keepDesignBtn.click()
            await waitTimeByNum(200)
        } catch {
        }

        // 查找所有具有相同 class 的元素
        let saveBtn = await driver.findElement(By.css('.save-component-dialog_custom-class .el-button--primary'))
        saveBtn.click()

    } finally {
        // 关闭浏览器
        // await driver.quit();
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

