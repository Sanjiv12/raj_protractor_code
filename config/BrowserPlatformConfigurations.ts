export const BrowserPlatformConfigurations = {
    ChromeAndroid: {
        appiumVersion: '1.20.2',
        deviceName: 'Android Emulator',
        deviceOrientation: 'portrait',
        "shardTestFiles": true,
        "maxInstances": 15,
        browserName: 'Chrome',
        platformVersion: '8.0',
        platformName: 'Android',
        chromeOptions: {
            args: ["--incognito"]
        },
    },
   SafariIOS: {
        appiumVersion: '1.20.1',
        deviceName: 'iPhone Simulator',
        deviceOrientation: 'portrait',
       "shardTestFiles": true,
       "maxInstances": 15,
        browserName: 'Safari',
        platformVersion: '14.3',
        platformName: 'iOS'
    },
    // Selenium's delete cookies function doesn't work how we need it to in private browsers for Firefox
    // Thus, tests are conducted in regular rather than private Firefox
    Firefox:         {
        "browserName": 'firefox',
        "shardTestFiles": true,
        "maxInstances": 15,
        "version": '88.0',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        "restartBrowserBetweenTests": true,
        "prefs": {
            "browser.cache.disk.enable": false,
            "browser.cache.memory.enable": false,
            "browser.cache.offline.enable": false,
            "network.http.use-cache": false,
            "network.cookie.thirdparty.sessionOnly": true
        }
    },
    Edge: {
        "browserName": 'MicrosoftEdge',
        "shardTestFiles": true,
        "maxInstances" : 15,
        "version": '90',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        "edgeOptions": {
            args: ["--InPrivate"]
        }
    },
    SafariDesktop: {
        browserName: 'safari',
        browserVersion: '14.0',
        platformName: 'macOS',
        platformVersion: '11.0',
        "sauce:options": {
        }
    },
    ChromeDesktop: {
        "browserName": 'chrome',
        "shardTestFiles": true,
        "maxInstances" : 15,
        "version": '88.0',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        chromeOptions: {
            args: ["--incognito"]
        },

    }}
