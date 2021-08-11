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
    chai_1.expect(yield protractor_1.browser.getCurrentUrl()).to.contain('vin=');
}));
cucumber_1.Then('Default tab is Lease', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    return assertion_1.Assertion.expect(vdpPage.tabDefault.getAttribute('aria-selected')).to.eventually.equal('true');
}));
cucumber_1.Then('Cash down is 10% of listed price', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.price.getText().then((value) => __awaiter(void 0, void 0, void 0, function* () {
        let cprice = parseInt((value.replace('$', '')).replace(',', '')) * .1;
        //console.log('cprice = '+ cprice);
        vdpPage.cashDown.getAttribute('aria-valuetext').then((cashdown) => {
            // console.log('cdown before= '+ cashdown);
            // let cdown : number = parseInt(cashdown);
            // console.log('cdown = '+ cdown);
            return assertion_1.Assertion.expect(parseInt(cashdown)).to.equal(Math.ceil(cprice));
        });
    }));
}));
cucumber_1.Then('Default Annual Mileage is 12000 miles', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.annualMileageDefault.getAttribute('class')).to.eventually.contain('mat-radio-checked');
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
    return assertion_1.Assertion.expect(vdpPage.termSelectedDefault.getAttribute('class')).to.eventually.contain('mat-radio-checked');
}));
cucumber_1.Given('User is in Vehicle Details page', () => __awaiter(void 0, void 0, void 0, function* () {
    //await browser.get('?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    protractor_1.browser.driver.manage().deleteAllCookies();
    yield protractor_1.browser.get(protractor_1.browser.params.url + '?dealerCd=' + protractor_1.browser.params.dealerCd + '&source=' + protractor_1.browser.params.source);
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    yield protractor_1.browser.driver.sleep(5 * 1000);
    protractor_1.browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    yield protractor_1.browser.driver.sleep(2 * 1000);
    // browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    yield protractor_1.browser.driver.sleep(5 * 1000);
    protractor_1.browser.executeScript("window.scrollBy(0,250)");
    protractor_1.browser.executeScript('arguments[0].click()', mspFilterPage.appcardButton.first());
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    yield protractor_1.browser.driver.sleep(2 * 1000);
    // browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    yield protractor_1.browser.driver.sleep(5 * 1000);
    protractor_1.browser.executeScript('arguments[0].click()', vlpFilterPage.appCard.first());
}));
cucumber_1.When('User selects Finance', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    vdpPage.tabFinance.click();
}));
cucumber_1.Then('Default Finance Credit Rating is Excellent', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.creditRatingFinance.getText()).to.eventually.equal('Excellent Credit (720-850)');
}));
cucumber_1.Then('Default Finance Terms are displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return vdpPage.termsDefault.each((ele, i) => {
        // ele.getText().then((val) => {
        //     console.log('Term['+i+'] - '+val);
        // })        
        assertion_1.Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.', '36 mos.', '48 mos.', '60 mos.', '72 mos.']);
    });
}));
cucumber_1.Then('Default Term selected is 60 Months', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.termSelectedFinance.getAttribute('class')).to.eventually.contain('mat-radio-checked');
}));
cucumber_1.When('User selects Lease', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
}));
cucumber_1.When('User updates Mileage', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.annualMileageOption1.click();
}));
cucumber_1.Then('System should call the Payment service and update the payment terms', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    return chai_1.expect((yield vdpPage.paymentOptionsList).length).to.be.gt(0);
}));
cucumber_1.When('User selects Cash', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    vdpPage.tabCash.click();
}));
