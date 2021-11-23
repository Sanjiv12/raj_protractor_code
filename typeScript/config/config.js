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
const Constants_1 = require("../util/Constants");
const BrowserPlatformConfigurations_1 = require("./BrowserPlatformConfigurations");
const constructVlpUrl_1 = require("../util/constructVlpUrl");
const jsonPath = path.join(process.cwd(), "/dist");
let baseurl = '';
let extractBrowserFromCli = function () {
    let browser = [];
    // Grab the browser parameter from the command line args
    let foundBrowserParam = process.argv.find((arg) => {
        const parts = arg.split(Constants_1.CLI.valueSplitChar);
        const name = parts[0].trim().replace(Constants_1.CLI.params, '');
        return name == Constants_1.CLI.browserPlatformParam;
    });
    // If browser param set, extract the selected browsers
    if (foundBrowserParam && foundBrowserParam.split(Constants_1.CLI.valueSplitChar)) {
        let selectedBrowsers = foundBrowserParam.split(Constants_1.CLI.valueSplitChar)[1];
        browser = selectedBrowsers.split(Constants_1.CLI.browserSplitChar);
    }
    return browser;
};
let generateBrowserConfiguration = function () {
    const selectedBrowser = extractBrowserFromCli();
    let multiCapabilities = [];
    selectedBrowser.forEach((browser) => {
        switch (browser) {
            case Constants_1.JENKINS_OPTIONS.CHROME_ANDROID:
                multiCapabilities.push(BrowserPlatformConfigurations_1.BrowserPlatformConfigurations.ChromeAndroid);
                break;
            case Constants_1.JENKINS_OPTIONS.SAFARI_DESKTOP:
                multiCapabilities.push(BrowserPlatformConfigurations_1.BrowserPlatformConfigurations.SafariDesktop);
                break;
            case Constants_1.JENKINS_OPTIONS.SAFARI_IOS:
                multiCapabilities.push(BrowserPlatformConfigurations_1.BrowserPlatformConfigurations.SafariIOS);
                break;
            case Constants_1.JENKINS_OPTIONS.FIREFOX:
                multiCapabilities.push(BrowserPlatformConfigurations_1.BrowserPlatformConfigurations.Firefox);
                break;
            case Constants_1.JENKINS_OPTIONS.EDGE:
                multiCapabilities.push(BrowserPlatformConfigurations_1.BrowserPlatformConfigurations.Edge);
                break;
            case Constants_1.JENKINS_OPTIONS.CHROME_DESKTOP:
            default:
                multiCapabilities.push(BrowserPlatformConfigurations_1.BrowserPlatformConfigurations.ChromeDesktop);
                break;
        }
    });
    return multiCapabilities;
};
exports.config = {
    // seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    // seleniumAddress: "https://ondemand.us-west-1.saucelabs.com:443/wd/hub",
    //  SELENIUM_PROMISE_MANAGER: false,
    sauceUser: "sso-toyota.tcoe-kimberlee.dixon",
    sauceKey: "aad70988-20cb-4d05-b24e-65bea4dfb0ee",
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
    suites: {
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
        gxpvlp: "../../features/**/gxp-vlp.feature",
        gxpvdp: "../../features/**/gxp-vdp.feature",
        gxpsaves: "../../features/**/gxp-saves.feature",
        dgtopnav: "../../features/dg-top-nav/dg-top-nav-dropdown.feature",
        gxpcreateaccountbanner: "../../features/**/gxp-create-account-banner.feature",
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        reportConfig.createDirectory(jsonPath);
        // Initially set max waiting time to 15 seconds. Selenium applies this globally.
        // Implicit wait allows the page to poll until an element is present or the duration is reached
        protractor_1.browser.driver.manage().timeouts().implicitlyWait(Constants_1.WAIT_TIMES.MAX_DURATION);
        // Load the page
        const vehicleListPage = constructVlpUrl_1.constructVlpUrl();
        yield protractor_1.browser.get(vehicleListPage);
        return yield protractor_1.browser.driver.wait(() => __awaiter(void 0, void 0, void 0, function* () {
            const url = yield protractor_1.browser.driver.getCurrentUrl();
            return /inventory/.test(url);
        }), Constants_1.WAIT_TIMES.TEN_SECONDS);
    }),
    multiCapabilities: generateBrowserConfiguration(),
    // capabilities: {
    // },
    commandTimeout: Constants_1.WAIT_TIMES.TEN_SECONDS,
    maxDuration: Constants_1.WAIT_TIMES.MAX_DURATION,
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
        zipcode: '',
        usemail: '',
        seemail: '',
        cdemail: ''
    },
};
class reportConfig {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
}
exports.reportConfig = reportConfig;
