import { browser, Config ,$,by} from "protractor";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";

const jsonPath = path.join(process.cwd(), "/dist");
let baseurl ='';

export const config: Config = {

    //  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //  SELENIUM_PROMISE_MANAGER: false,
     
    sauceUser:"sso-toyota.tcoe-raghunath.goteti",
    sauceKey:"a1aaa34b-ba44-4bc7-a94c-f79aa068e60f",

    //baseUrl: 'baseurl',

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        require: ["../../typeScript/stepdefinitions/**/*.step.js", "../../typeScript/util/*.js"],
        format: 'json:dist/results.json',
        strict: true,
        
   },
    suites:{
        createaccount: "../../features/**/createAccount.feature",
        mspfilter: "../../features/**/mspFilter.feature",
        vlpfilter: "../../features/**/vlpFilter.feature",
        vdpvehicleinfo: "../../features/**/vdpVehicleInformation.feature",
        vdpprotectionproducts: "../../features/**/vdpProtectionProducts.feature",
        vdpaccessory: "../../features/**/vdpAccessory.feature",
        vdppaymentdefaults: "../../features/**/vdpPaymentDefaults.feature",     
        unlocksavingsleadforms: "../../features/**/unlockSavingsLeadForms.feature",
        sendestimateleadforms: "../../features/**/sendEstimateLeadForms.feature",
        contactdealerleadforms: "../../features/**/contactDealerLeadForms.feature",
        checkout: "../../features/**/checkOut.feature",
    },
    
    onPrepare: async() => {
        browser.manage().window().maximize(); 
        browser.driver.manage().deleteAllCookies(); 
        browser.waitForAngularEnabled(false);
        reportConfig.createDirectory(jsonPath);
        await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
        //baseurl = browser.params.url;
        // 
        // wait until login is done
        // that means when we are on summary page
        //
    
        return await browser.driver.wait(async() => {
            const url = await browser.driver.getCurrentUrl();
            return /inventory/.test(url);
        }, 100000);
    },
    multiCapabilities: [
        {
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
        // {
        //     "browserName": 'firefox',
        //     "shardTestFiles": true,
        //     "maxInstances" : 15,
        //     //"version": '88.0',
        //     "platform": 'Windows 10',
        //     "screenResolution": '1920x1080',
        //     "moz:firefoxOptions": {
        //         args: ["--incognito"]
        //     },         
        // }
    ],
    // capabilities: {            
    // },
    
    commandTimeout: 10000,
    maxDuration: 12000,
    //maxSessions: 30,
    seleniumVersion: "3.141.59",
    params: {
        url: '',
        dealerCd: '',
        source: '',
        fname: '',
        lname: '',
        caemailreg: '',
        capwdreg: '',
        caemailnew: '',
        capwdnew: '',
        caphonenew: '',
        zipcode:'',
        usemail:'',
        seemail:'',
        cdemail:''
    },    
};

export class reportConfig {
    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
}