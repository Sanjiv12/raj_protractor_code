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

    baseUrl: "https://qa.smartpath.tldealersystems.com/inventory?dealerCd=24022&source=t1",


    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        require: ["../../typeScript/stepdefinitions/**/*.step.js", "../../typeScript/util/*.js"],
        format: 'json:dist/results.json',
        strict: true
   },
    specs: [
        //"../../features/**/mspHome.feature"
        "../../features/**/mspFilter.feature",
        //"../../features/**/vlpFilter.feature"
        //"../../features/**/vdpPaymentDefaults.feature"
        //"../../features/**/vdpTradeIn.feature"
        //"../../features/**/vdpAccessory.feature",
        //"../../features/**/vdpProtectionProducts.feature",
        //"../../features/**/vdpVehicleInformation.feature",
        "../../features/**/unlockSavingsLeadForms.feature",
        "../../features/**/sendEstimateLeadForms.feature",
        "../../features/**/contactDealerLeadForms.feature",        
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
        "shardTestFiles": true,
        "maxInstances" : 15,
        "version": '88.0',
        "platform": 'Windows 10',
        "screenResolution": '1920x1080',
        chromeOptions: {
            args: ["--incognito"]
        },       
    },
    commandTimeout: 10000,
    maxDuration: 12000,
    //maxSessions: 30,
    seleniumVersion: "3.141.59",
};

export class reportConfig {
    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
}