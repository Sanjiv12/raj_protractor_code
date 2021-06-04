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
cucumber_1.When('User clicks on Start Purchase', () => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('Inside step param1 - '+ browser.params.param1);
    yield protractor_1.browser.driver.sleep(15 * 1000);
    vdpPage.startPurchase.click();
}));
cucumber_1.Then('System should navigate to Create Account Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(yield protractor_1.browser.getCurrentUrl()).to.contain('account?dealerCd=');
}));
cucumber_1.Then('Display the Email text box', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountEmail.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display the First name text box', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountFirstName.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display the Last name text box', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountLastName.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display the Phone number text box', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountPhone.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display the Password text box', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountPassword.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Google Social Login', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountGoogleButton.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Facebook Social Login', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountFbButton.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Apple Social Login', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountAppleButton.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Create Account CTA as disabled', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield caPage.createAccountButton.isEnabled()).valueOf()).to.be.false;
}));
cucumber_1.When('User does not enter valid values for Email, Name, Phone and Password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountEmail);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountFirstName);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountLastName);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountPhone);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountPassword);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountButton);
}));
cucumber_1.Then('System should display the first name text box in error state for create account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(caPage.createAccountFirstName.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.Then('System should display the last name text box in error state for create account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(caPage.createAccountLastName.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.Then('System should display the email text box in error state for create account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(caPage.createAccountEmail.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.Then('System should display the phone text box in error state for create account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(caPage.createAccountPhone.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.When('User starts entering password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    caPage.createAccountPassword.sendKeys('Validate123');
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountFirstName);
}));
cucumber_1.Then('System should validate the mandatory conditions and display ones which are satisfied with a tick mark', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect((yield caPage.passwordError.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User enters First and Last name registered previously', () => __awaiter(void 0, void 0, void 0, function* () {
    caPage.createAccountFirstName.sendKeys(protractor_1.browser.params.fname);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    caPage.createAccountLastName.sendKeys(protractor_1.browser.params.lname);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.When('User enters Phone registered previously', () => __awaiter(void 0, void 0, void 0, function* () {
    caPage.createAccountPhone.sendKeys(protractor_1.browser.params.caphonenew);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.When('User enters a valid password', () => __awaiter(void 0, void 0, void 0, function* () {
    caPage.createAccountPassword.sendKeys(protractor_1.browser.params.capwdnew);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.When('User enters an email id registered previously', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    caPage.createAccountEmail.sendKeys(protractor_1.browser.params.caemailreg);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.When('User clicks on Create Account', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.executeScript("arguments[0].click()", caPage.createAccountButton);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.Then('System should display Sign In page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(caPage.accountAlreadyReg.getText()).to.eventually.contain('Sign In');
}));
cucumber_1.When('User enters an email id not registered previously', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    caPage.createAccountEmail.sendKeys(protractor_1.browser.params.caemailnew);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.When('User enters First and Last name not registered previously', () => __awaiter(void 0, void 0, void 0, function* () {
    caPage.createAccountFirstName.sendKeys(protractor_1.browser.params.fname);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    caPage.createAccountLastName.sendKeys(protractor_1.browser.params.lname);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.When('User enters Phone not registered previously', () => __awaiter(void 0, void 0, void 0, function* () {
    caPage.createAccountPhone.sendKeys(protractor_1.browser.params.caphonenew);
    yield protractor_1.browser.driver.sleep(1 * 1000);
}));
cucumber_1.Then('System should display Check your mail page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(caPage.checkEmail.getText()).to.eventually.contain('Check Your Email');
}));
