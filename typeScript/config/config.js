"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportConfig = exports.config = void 0;
const protractor_1 = require("protractor");
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const jsonPath = path.join(process.cwd(), "/dist");
exports.config = {
    //  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //  SELENIUM_PROMISE_MANAGER: false,
    sauceUser: "sso-toyota.tcoe-kimberlee.dixon",
    sauceKey: "aad70988-20cb-4d05-b24e-65bea4dfb0ee",
    // sauceUser:"sso-toyota.tcoe-raghunath.goteti",
    // sauceKey:"a1aaa34b-ba44-4bc7-a94c-f79aa068e60f",
    baseUrl: "https://qa.smartpath.tldealersystems.com/inventory?dealerCd=24022&source=t1",
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        // require: ["../../**/*.js", '../../**/*.js'],
        require: ["../../typeScript/stepdefinitions/**/*.step.js", "../../typeScript/util/*.js"],
        // require: [
        // path.resolve(process.cwd(), "../../**/*.js")
        // ],
        format: 'json:dist/results.json',
        strict: true
    },
    specs: [
        //"../../features/**/mspHome.feature"
        "../../features/**/mspFilter.feature",
        //"../../features/**/vlpFilter.feature"
        "../../features/**/vdpPaymentDefaults.feature"
        //"../../features/**/vdpTradeIn.feature"
        //"../../features/**/vdpAccessory.feature"
        //"../../features/**/vdpProtectionProductsWIP.feature"
    ],
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.driver.manage().deleteAllCookies();
        //browser.manage().window().setSize(1400, 1000);
        //await browser.get(config.baseUrl);
        protractor_1.browser.waitForAngularEnabled(false);
        reportConfig.createDirectory(jsonPath);
        //await browser.get("https://tcom_login:D!n0s@Ur@qa.smartpath.toyota.com/inventory?dealerCd=24022&source=t1");
        yield protractor_1.browser.get("https://tcom_login:D!n0s@Ur@qa.smartpath.tldealersystems.com/inventory?dealerCd=24022&source=t1");
        // let alert = browser.switchTo().alert();
        // (await alert).dismiss();
        //  await browser.driver.sleep(1*10000);
        //  await browser.driver.findElement(by.id("idToken1")).sendKeys('BDDT5');
        //  await browser.driver.findElement(by.id("idToken2")).sendKeys('Toyota06');
        //  await browser.driver.findElement(by.id("tandC")).click();
        //  await browser.driver.findElement(by.id("loginButton_0")).click();
        // 
        // wait until login is done
        // that means when we are on summary page
        //
        return yield protractor_1.browser.driver.wait(() => __awaiter(void 0, void 0, void 0, function* () {
            const url = yield protractor_1.browser.driver.getCurrentUrl();
            return /inventory/.test(url);
        }), 100000);
    }),
    multiCapabilities: [{
            browserName: 'chrome',
            shardTestFiles: true,
            platformName: 'windows',
            maxInstances: 30,
            version: '81.0',
            chromeOptions: {
                args: ["--incognito"]
            },
            metadata: {
                app: {
                    name: 'MST-C',
                    version: '1.0.0'
                },
                browser: {
                    name: "chrome",
                    version: "87.0.4044.122"
                },
                device: 'N/A',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            },
        }],
    commandTimeout: 10000,
    maxDuration: 12000,
    maxInstances: 30,
    seleniumVersion: "3.142.7",
    chromedriverVersion: "2.43",
};
class reportConfig {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
}
exports.reportConfig = reportConfig;
