"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserPlatformConfigurations = void 0;
exports.BrowserPlatformConfigurations = {
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
    Firefox: {
        "browserName": 'firefox',
        "shardTestFiles": true,
        "maxInstances": 15,
        "version": '88.0',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        "restartBrowserBetweenTests": true,
    },
    Edge: {
        "browserName": 'MicrosoftEdge',
        "shardTestFiles": true,
        "maxInstances": 15,
        "version": '90',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        "edgeOptions": {
            args: ["--inprivate"]
        },
    },
    SafariDesktop: {
        browserName: 'safari',
        browserVersion: '14.0',
        platformName: 'macOS',
        platformVersion: '11.0',
        "sauce:options": {}
    },
    ChromeDesktop: {
        "browserName": 'chrome',
        "shardTestFiles": true,
        "maxInstances": 15,
        "version": '88.0',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        chromeOptions: {
            args: ["--incognito"]
        },
    }
};
