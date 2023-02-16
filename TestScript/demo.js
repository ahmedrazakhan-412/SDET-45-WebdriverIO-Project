import { remote } from 'webdriverio'

const browser = await remote({
    capabilities: {
        browserName: 'chrome'
    }
})

await browser.url('https://webdriver.io')
