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
const createAccountPage_1 = require("../pages/createAccountPage");
const assertion_1 = require("../util/assertion");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let vdpPage = new vdpPage_1.VdpPage();
let caPage = new createAccountPage_1.CreateAccountPage();
cucumber_1.When('User Signs In', () => __awaiter(void 0, void 0, void 0, function* () {
    // await browser.get("https://tcom_user:@1L!gaT0r@qa.smartpath.tldealersystems.com/inventory/details?dealerCd=24022&vin=JTEBU5JR6L5768172&source=t3&zipcode=63141");
    // await browser.driver.sleep(10*1000);
    // browser.driver.manage().deleteAllCookies();
    // browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    // await browser.driver.sleep(5*1000);
    yield protractor_1.browser.driver.sleep(15 * 1000);
    //console.log('text --- '+(await (vdpPage.rightPaneMenu.getText())).valueOf());
    if ((yield (vdpPage.rightPaneMenu.getText())).valueOf().toLowerCase().includes('sign in')) {
        console.log('In here');
        protractor_1.browser.actions().mouseMove(vdpPage.signInBtn).perform();
        yield protractor_1.browser.driver.sleep(2 * 1000);
        protractor_1.browser.actions().click(vdpPage.signInBtn).perform();
        yield protractor_1.browser.driver.sleep(7 * 1000);
        caPage.userName.sendKeys(protractor_1.browser.params.caemailreg);
        yield protractor_1.browser.driver.sleep(2 * 1000);
        protractor_1.browser.executeScript("arguments[0].click()", caPage.logonBtn);
        yield protractor_1.browser.driver.sleep(5 * 1000);
        caPage.userPwd.sendKeys(protractor_1.browser.params.capwdreg);
        yield protractor_1.browser.driver.sleep(2 * 1000);
        protractor_1.browser.executeScript("arguments[0].click()", caPage.signInBtn);
        yield protractor_1.browser.driver.sleep(10 * 1000);
    }
}));
cucumber_1.Then('System should navigate the user to Review Deal page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    return assertion_1.Assertion.expect(yield protractor_1.browser.getCurrentUrl()).to.contain('inventory/review');
}));
cucumber_1.Then('System should display Enter Zip Code modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.zipCodeModal.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User does not confirm Zip code in Enter Zip Code modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.closeZipCodeModal);
}));
cucumber_1.Then('System should display Confirm your residential zip to proceed CTA at the bottom', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Edit Zip in Price details - Taxes & Fees highlighted in Red text', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.zipTaxDesc.getCssValue('color')).to.eventually.equal('rgba(235, 10, 30, 1)');
}));
cucumber_1.Then('Display Next button in disabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.false;
}));
cucumber_1.When('User clicks on Confirm your residential zip to proceed CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.confirmZipText);
}));
cucumber_1.When('User enters a valid Zip code in Enter Zip Code modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    vdpPage.zipCodeModalInput.clear();
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vdpPage.zipCodeModalInput.sendKeys(protractor_1.browser.params.zipcode);
}));
cucumber_1.When('User clicks on Done in Zip Code Modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.zipCodeModalDoneBtn);
}));
cucumber_1.Then('System should display updated Zip Code in Review Deal page as part of Taxes & Fees', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    return assertion_1.Assertion.expect(vdpPage.reviewDealZipCode.getText()).to.eventually.contain(protractor_1.browser.params.zipcode);
}));
cucumber_1.Then('System should NOT display Confirm your residential zip to proceed CTA at the bottom', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.false;
}));
cucumber_1.Then('Display Next button in enabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on Edit Details CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.editDetailsBtn);
}));
cucumber_1.When('User clicks on Next: Choose Financing CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.chsFinanceBtn);
}));
cucumber_1.Then('System should display Apply for Credit page with I have financing selected by default', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ownFinance.getAttribute('class')).to.eventually.contain('selected');
}));
cucumber_1.When('User clicks on I want financing', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.tfsFinance);
}));
cucumber_1.Then('System should display Apply financing modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.tfsFinance.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on Accept in the Apply financing modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.acceptApplyFinanceModalBtn);
}));
cucumber_1.Then('System should display authorization disclaimer below I want financing in selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.contain('mat-checkbox-checked');
}));
cucumber_1.When('User clicks on Not now in the Apply financing modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.notNowApplyFinanceModalBtn);
}));
cucumber_1.Then('System should display authorization disclaimer below I want financing in de-selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.not.contain('mat-checkbox-checked');
}));
