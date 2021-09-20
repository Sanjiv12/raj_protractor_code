import { browser, Config ,$,by} from "protractor";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
import {PLATFORMS,JENKINS_OPTIONS,CLI} from "../util/Constants"
import {BrowserPlatformConfigurations} from "./BrowserPlatformConfigurations";

const jsonPath = path.join(process.cwd(), "/dist");
let baseurl ='';

let extractBrowserFromCli = function() {
    let browser = JENKINS_OPTIONS.ALL; // Default to 'All' if nothing found
    let foundParam = process.argv.find((arg) => {
        const parts = arg.split(CLI.splitChar);
        const name = parts[0].trim().replace(CLI.params, '');
        return name == CLI.browserPlatformParam;
    });
    if (foundParam && foundParam.split(CLI.splitChar)) {
        browser = foundParam.split(CLI.splitChar)[1];
    }
    return browser;
};
let browserSupportsBasicAuth = function(browser) {
    return browser !== JENKINS_OPTIONS.SAFARI_DESKTOP && browser !== JENKINS_OPTIONS.SAFARI_IOS;
}
let generateBrowserConfiguration = function() {
    const selectedBrowser = extractBrowserFromCli();
    let multiCapabilities = [];
    switch(selectedBrowser) {
        case JENKINS_OPTIONS.CHROME_DESKTOP:
            multiCapabilities.push(BrowserPlatformConfigurations.ChromeDesktop);
            break;
        case JENKINS_OPTIONS.CHROME_ANDROID:
            multiCapabilities.push(BrowserPlatformConfigurations.ChromeAndroid);
            break;
        case JENKINS_OPTIONS.SAFARI_DESKTOP:
            multiCapabilities.push(BrowserPlatformConfigurations.SafariDesktop);
            break;
        case JENKINS_OPTIONS.SAFARI_IOS:
            multiCapabilities.push(BrowserPlatformConfigurations.SafariIOS);
            break;
        case JENKINS_OPTIONS.FIREFOX:
            multiCapabilities.push(BrowserPlatformConfigurations.Firefox)
            break;
        case JENKINS_OPTIONS.EDGE:
            multiCapabilities.push(BrowserPlatformConfigurations.Edge);
            break;
        case JENKINS_OPTIONS.ALL_SUBPROD:
            for (const [browser, capability] of Object.entries(BrowserPlatformConfigurations)) {
                if (browserSupportsBasicAuth(browser)) {
                    multiCapabilities.push(capability);
                }
            }
            break;
        case JENKINS_OPTIONS.ALL:default:
            for (const [, capability] of Object.entries(BrowserPlatformConfigurations)) {
                multiCapabilities.push(capability);
            }
            break;
    }
    return multiCapabilities;
}


export const config: Config = {

    // seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    // seleniumAddress: "https://ondemand.us-west-1.saucelabs.com:443/wd/hub",
    //  SELENIUM_PROMISE_MANAGER: false,
     
    sauceUser:"sso-toyota.tcoe-kimberlee.dixon",
    sauceKey:"aad70988-20cb-4d05-b24e-65bea4dfb0ee",

    // sauceUser:"sso-toyota.tcoe-raghunath.goteti",
    // sauceKey:"a1aaa34b-ba44-4bc7-a94c-f79aa068e60f",

    baseUrl: "https://qa.smartpath.tldealersystems.com/inventory?dealerCd=24022&source=t1",

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
    multiCapabilities: generateBrowserConfiguration(),
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
