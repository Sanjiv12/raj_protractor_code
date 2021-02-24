import { browser, Config ,$,by} from "protractor";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";

const jsonPath = path.join(process.cwd(), "/dist");

export const config: Config = {

    //  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //  SELENIUM_PROMISE_MANAGER: false,
     
    sauceUser:"sso-toyota.tcoe-bishwadeep.pal",
    sauceKey:"fee6d21b-e2ec-4765-9424-fa9353d7e8bd",

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
        //"../../features/**/mspFilter.feature",
        //"../../features/**/vlpFilter.feature"
        //"../../features/**/vdpPaymentDefaults.feature"
        //"../../features/**/vdpTradeIn.feature"
        //"../../features/**/vdpAccessory.feature"
        //"../../features/**/vdpProtectionProductsWIP.feature"
        "../../features/**/vdpVehicleInformation.feature",
        //"../../features/**/leadForms.feature",
    ],
    
    onPrepare: async() => {
        //browser.ignoreSynchronization = true;
        browser.manage().window().maximize(); 
        browser.driver.manage().deleteAllCookies(); 
        //browser.manage().window().setSize(1920, 1080);
        browser.waitForAngularEnabled(false);
        reportConfig.createDirectory(jsonPath);
        //await browser.get("https://tcom_user:@1L!gaT0r@qa.smartpath.toyota.com/inventory?dealerCd=24022&source=t1");
        await browser.get("https://tcom_user:@1L!gaT0r@qa.smartpath.tldealersystems.com/inventory?dealerCd=24022&source=t1");
        // 
        // wait until login is done
        // that means when we are on summary page
        //
    
        return await browser.driver.wait(async() => {
            const url = await browser.driver.getCurrentUrl();
            return /inventory/.test(url);
        }, 100000);
    },
    capabilities: {
         "browserName": 'chrome',
        // "version": '87.0',
        // "platform": 'Windows 10',
        // "screenResolution": '1920x1080',
        chromeOptions: {
            args: ["--incognito"]
        },       
    },
    commandTimeout: 10000,
    maxDuration: 12000,
    maxInstances: 30,
    //seleniumVersion: "3.142.7",
    //chromedriverVersion: "2.43",
};

export class reportConfig {
    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
}