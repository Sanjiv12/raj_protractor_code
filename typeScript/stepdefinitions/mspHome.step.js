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
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
let url, logoutUrl;
cucumber_1.Given('User is not in MST-C', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.manage().window().maximize();
    //
    // to make sure redirect is done and we are on the main page
    //
    // await browser.driver.wait(async() => {
    //     url = await browser.driver.getCurrentUrl();
    //     //console.log("url", url);
    //     return /summary/.test(url);
    // }); 
    //
    // to make sure data is loaded
    //
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.When('User enters the MST-C url in the browser', () => __awaiter(void 0, void 0, void 0, function* () {
    // browser.executeScript("document.getElementById('con-app-navbar-dealer-name').click();");
    yield protractor_1.browser.driver.sleep(5 * 1000);
    // browser.executeScript("document.getElementById('con-app-logout-div').click();");
}));
cucumber_1.Then('User should be taken to the MST-C home page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
}));
