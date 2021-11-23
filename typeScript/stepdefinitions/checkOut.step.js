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
const vdpPage_1 = require("../pages/vdpPage");
const createAccountPage_1 = require("../pages/createAccountPage");
const assertion_1 = require("../util/assertion");
const digitalGarageTopNav_1 = require("../dg-features/digitalGarageTopNav");
const navMenu_1 = require("../pages/navMenu");
let vdpPage = new vdpPage_1.VdpPage();
let caPage = new createAccountPage_1.CreateAccountPage();
let topNav = new digitalGarageTopNav_1.DigitalGarageTopNav();
let createAccountPage = new createAccountPage_1.CreateAccountPage();
let navMenu = new navMenu_1.NavMenu();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 10000;
function hasNotPreviouslyLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return protractor_1.browser.driver.getCurrentUrl().then((url) => {
            return url.includes('account.toyota.com');
        });
    });
}
cucumber_1.When(/User Signs In \"?(.*?)\" \"?(.*?)\"/, (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgLoginButton.click();
    if (yield hasNotPreviouslyLoggedIn()) {
        yield caPage.userName.sendKeys(email ? email : protractor_1.browser.params.caemailreg);
        yield caPage.nextStepButton.click();
        yield caPage.userPwd.sendKeys(password ? password : protractor_1.browser.params.capwdreg);
        yield caPage.signInButton.click();
cucumber_1.Then('System should navigate the user to Review Deal page', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(yield protractor_1.browser.getCurrentUrl()).to.contain('inventory/review');
}));
cucumber_1.Then('System should display Enter Zip Code modal', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.zipCodeModal.isDisplayed()).to.eventually.be.true;
}));
cucumber_1.When('User does not confirm Zip code in Enter Zip Code modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.closeZipCodeModal.click();
}));
cucumber_1.Then('System should display Confirm your residential zip to proceed CTA at the bottom', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Edit Zip in Price details - Taxes & Fees highlighted in Red text', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.zipTaxDesc.getCssValue('color')).to.eventually.equal('rgba(235, 10, 30, 1)');
}));
cucumber_1.Then('Display Next button in disabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.false;
}));
cucumber_1.When('User clicks on Confirm your residential zip to proceed CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.confirmZipText.click();
}));
cucumber_1.When('User enters a valid Zip code in Enter Zip Code modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.zipCodeModalInput.clear();
    yield vdpPage.zipCodeModalInput.sendKeys(protractor_1.browser.params.zipcode);
}));
cucumber_1.When('User clicks on Done in Zip Code Modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.zipCodeModalDoneBtn.click();
}));
cucumber_1.Then('System should display updated Zip Code in Review Deal page as part of Taxes & Fees', () => __awaiter(void 0, void 0, void 0, function* () {
    return vdpPage.startPurchaseWaitSpinner.isDisplayed().then(() => {
        protractor_1.browser.driver.wait(protractor_1.protractor.until.elementIsNotVisible(vdpPage.startPurchaseWaitSpinner));
        return assertion_1.Assertion.expect(vdpPage.reviewDealZipCode.getText()).to.eventually.contain(protractor_1.browser.params.zipcode);
    }).catch(() => {
        return assertion_1.Assertion.expect(vdpPage.reviewDealZipCode.getText()).to.eventually.contain(protractor_1.browser.params.zipcode);
    });
}));
cucumber_1.Then('System should NOT display Confirm your residential zip to proceed CTA at the bottom', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((vdpPage.confirmZipText.isDisplayed())).to.eventually.be.false;
}));
cucumber_1.Then('Display Next button in enabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((vdpPage.chsFinanceBtn.isEnabled())).to.eventually.be.true;
}));
cucumber_1.When('User clicks on Edit Details CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.editDetailsBtn.click();
}));
cucumber_1.When('User clicks on Next: Choose Financing CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.chsFinanceBtn.click();
}));
cucumber_1.Then('System should display Apply for Credit page with I have financing selected by default', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.ownFinance.getAttribute('class')).to.eventually.contain('selected');
}));
cucumber_1.When('User clicks on I want financing', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.tfsFinance.click();
}));
cucumber_1.Then('System should display Apply financing modal', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vdpPage.tfsFinance.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on Accept in the Apply financing modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.acceptApplyFinanceModalBtn.click();
}));
cucumber_1.Then('System should display authorization disclaimer below I want financing in selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.contain('mat-checkbox-checked');
}));
cucumber_1.When('User clicks on Not now in the Apply financing modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.notNowApplyFinanceModalBtn.click();
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.notNowApplyFinanceModalBtn);
}));
cucumber_1.Then('System should display authorization disclaimer below I want financing in de-selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.not.contain('mat-checkbox-checked');
}));
