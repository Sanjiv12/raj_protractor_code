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
const mspFilterPage_1 = require("../pages/mspFilterPage");
const vlpFilterPage_1 = require("../pages/vlpFilterPage");
const vdpPage_1 = require("../pages/vdpPage");
const chai_1 = require("chai");
const assertion_1 = require("../util/assertion");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let vdpPage = new vdpPage_1.VdpPage();
cucumber_1.When('User selects a vehicle', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    // vlpFilterPage.appCard.first().click();        
}));
cucumber_1.Then('User should be navigated to Vehicle Details page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    // expect(await browser.getCurrentUrl()).to.contain('vin=');    
}));
cucumber_1.Then('Default tab is Lease', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.tabDefault.getAttribute('aria-selected')).to.eventually.equal('true');
}));
cucumber_1.Then('Cash down is 10% of listed price', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.price.getText().then((value) => __awaiter(void 0, void 0, void 0, function* () {
        let cprice = parseInt((value.replace('$', '')).replace(',', '')) * .1;
        console.log('cprice = ' + cprice);
        vdpPage.cashDown.getText().then((cashdown) => {
            console.log('cdown before= ' + cashdown);
            let cdown = parseInt((cashdown.replace('$', '')).replace(',', ''));
            console.log('cdown = ' + cdown);
            return chai_1.expect(cdown).to.equal(Math.ceil(cprice));
        });
    }));
}));
cucumber_1.Then('Default Annual Mileage is 12000 miles', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.annualMileageDefault.getAttribute('ng-reflect-checked')).to.eventually.equal('true');
}));
cucumber_1.Then('Default Credit Rating is Excellent', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.creditRatingDefault.getText()).to.eventually.equal('Excellent Credit (720-850)');
}));
cucumber_1.Then('Default Terms are displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    return vdpPage.termsDefault.each((ele, i) => {
        assertion_1.Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.', '36 mos.', '48 mos.', '60 mos.']);
    });
}));
cucumber_1.Then('Default Term is selected', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.termSelectedDefault.getAttribute('ng-reflect-checked')).to.eventually.equal('true');
}));
cucumber_1.Given('User is in Vehicle Details page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    yield protractor_1.browser.driver.sleep(5 * 1000);
    // await browser.get("?dealerCd=24022&source=t1");
    // await browser.driver.sleep(10*1000);
    // browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    // await browser.driver.sleep(5*1000);
    // // mspFilterPage.appcardButton.each((ele,i) => {
    // //     ele.getText().then((text) =>{
    // //         if(text.includes('Available', 0)){
    // //             console.log('appcard text - '+ text);
    // //             ele.click().catch((err) => {});                
    // //         }            
    // //     }).catch((err) => {})
    // // }).catch((err) => {});
    // browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    // await browser.driver.sleep(5*1000);
    // browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    // await browser.driver.sleep(10*1000);
    // browser.actions().mouseMove(mspFilterPage.appcardButton.first()).click().perform();
    // //mspFilterPage.appcardButton.first().click();
    // await browser.driver.sleep(10*1000);
    // vlpFilterPage.appCard.first().click();    
}));
cucumber_1.When('User selects Finance', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    // vdpPage.tabFinance.click();      
}));
cucumber_1.Then('Default Finance Credit Rating is Excellent', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //return Assertion.expect(vdpPage.creditRatingFinance.getText()).to.eventually.equal('Excellent Credit (720-850)');
}));
cucumber_1.Then('Default Finance Terms are displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return vdpPage.termsDefault.each((ele, i) => {
        assertion_1.Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.', '36 mos.', '48 mos.', '60 mos.', '72 mos.']);
    });
}));
cucumber_1.Then('Default Term selected is 60 Months', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.termSelectedFinance.getAttribute('ng-reflect-checked')).to.eventually.equal('true');
}));
cucumber_1.When('User selects Lease', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
}));
cucumber_1.When('User updates Mileage', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //vdpPage.annualMileageOption1.click();     
}));
cucumber_1.Then('System should call the Payment service and update the payment terms', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    //return expect((await vdpPage.paymentOptionsList).length).to.be.gt(0);
}));
