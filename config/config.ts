import { browser, Config ,$,by} from "protractor";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";

const jsonPath = path.join(process.cwd(), "/dist");

export const config: Config = {

    //  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //  SELENIUM_PROMISE_MANAGER: false,
     
    sauceUser:"sso-toyota.tcoe-kimberlee.dixon",
    sauceKey:"aad70988-20cb-4d05-b24e-65bea4dfb0ee",

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
    
    onPrepare: async() => {
        //browser.ignoreSynchronization = true;
        browser.manage().window().maximize(); 
        browser.driver.manage().deleteAllCookies(); 
        //browser.manage().window().setSize(1400, 1000);
        //await browser.get(config.baseUrl);
        browser.waitForAngularEnabled(false);
        reportConfig.createDirectory(jsonPath);
        //await browser.get("https://tcom_login:D!n0s@Ur@qa.smartpath.toyota.com/inventory?dealerCd=24022&source=t1");
        await browser.get("https://tcom_login:D!n0s@Ur@qa.smartpath.tldealersystems.com/inventory?dealerCd=24022&source=t1");
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
    
        return await browser.driver.wait(async() => {
            const url = await browser.driver.getCurrentUrl();
            return /inventory/.test(url);
        }, 100000);
    },
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
            app:{
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
    // Here the magic happens
    // plugins: [{
    //     package: 'protractor-multiple-cucumber-html-reporter-plugin',
    //     options:{
    //         automaticallyGenerateReport: true,
    //         //automaticallyGenerateReport: false,
    //         removeExistingJsonReportFile: false,
    //         removeOriginalJsonReportFile: false,
    //         customData: {
    //             title: 'Management Console',
    //             data: [
    //                 {label: 'Project', value: 'Management Console Daily Build'},
    //                 {label: 'Release', value: '16.6'}, // manual starter
    //                 {label: 'Cycle', value: 'Sprint-2'},
    //                 {label: 'Execution Start Time', value: (new Date()).toLocaleString()},
    //             ]
    //         },
    //         pageTitle:'Management Console Test Report',
    //         reportName:'Management Console Test Report',
    //         pageFooter:'<div><p></p></div>',
    //         displayDuration:true,
    //         durationInMS:false,
    //     }
    // }]
};

export class reportConfig {
    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
}
