import { browser, Config ,$,by} from "protractor";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
import {JENKINS_OPTIONS, CLI, WAIT_TIMES} from "../util/Constants"
import {BrowserPlatformConfigurations} from "./BrowserPlatformConfigurations";
import { constructVlpUrl } from "../util/constructVlpUrl";

const jsonPath = path.join(process.cwd(), "/dist");
let baseurl ='';

let extractBrowserFromCli = function() {
    let browser = [];
    // Grab the browser parameter from the command line args
    let foundBrowserParam = process.argv.find((arg) => {
        const parts = arg.split(CLI.valueSplitChar);
        const name = parts[0].trim().replace(CLI.params, '');
        return name == CLI.browserPlatformParam;
    });
    // If browser param set, extract the selected browsers
    if (foundBrowserParam && foundBrowserParam.split(CLI.valueSplitChar)) {
        let selectedBrowsers = foundBrowserParam.split(CLI.valueSplitChar)[1];
        browser = selectedBrowsers.split(CLI.browserSplitChar);
    }
    return browser;
};


let generateBrowserConfiguration = function() {
    const selectedBrowser = extractBrowserFromCli();
    let multiCapabilities = [];
    selectedBrowser.forEach((browser) => {
        switch(browser) {
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
        case JENKINS_OPTIONS.CHROME_DESKTOP:default:
            multiCapabilities.push(BrowserPlatformConfigurations.ChromeDesktop);
            break;
        }
    })
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
        browser.waitForAngularEnabled(false);
        reportConfig.createDirectory(jsonPath);
        // Initially set max waiting time to 15 seconds. Selenium applies this globally.
        // Implicit wait allows the page to poll until an element is present or the duration is reached
        browser.driver.manage().timeouts().implicitlyWait(WAIT_TIMES.MAX_DURATION);
        // Load the page
        const vehicleListPage = constructVlpUrl();
        await browser.get(vehicleListPage);
        return await browser.driver.wait(async() => {
            const url = await browser.driver.getCurrentUrl();
            return /inventory/.test(url);
        }, WAIT_TIMES.TEN_SECONDS);
    },
    multiCapabilities: generateBrowserConfiguration(),
    // capabilities: {
    // },

    commandTimeout: WAIT_TIMES.TEN_SECONDS,
    maxDuration: WAIT_TIMES.MAX_DURATION,
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
