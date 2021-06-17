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
const createAccountPage_1 = require("../pages/createAccountPage");
const navMenu_1 = require("../pages/navMenu");
const chai_1 = require("chai");
let createAccountPage = new createAccountPage_1.CreateAccountPage();
let navMenu = new navMenu_1.NavMenu();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 10000;
// Signed Out Scenario
// Uses Given Statement from VDP or VLP
cucumber_1.When('User clicks the Top Nav Dropdown Menu icon', () => __awaiter(void 0, void 0, void 0, function* () {
    // Perform click action
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
}));
cucumber_1.Then('The Top Nav Menu Dropdown should be visible', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-component-menu-dropdown has class 'dg-open'
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.getAttribute('class')).to.contain('dg-open');
}));
cucumber_1.Then('The Profile Icon should be in Selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-dropdown-icon has class 'dg-selected-icon'
    chai_1.expect(yield navMenu.profileIcon.$('.dg-menu-dropdown-icon img').getAttribute('class')).to.contain('dg-selected-icon');
}));
cucumber_1.Then('Deals Linkout should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-saves-page-linkout is present
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-deals-page-linkout').isPresent()).to.be.true;
}));
cucumber_1.Then('Deals Linkout should have Correct Text', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-saves-page-linkout has correct text
    let correctText = "Buy Online";
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-deals-page-linkout .dg-component-menu-text').getText()).to.equal(correctText);
}));
cucumber_1.Then('Deals Linkout should link to Deals Page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-deals-page-linkout').click().then(() => {
        protractor_1.browser.getCurrentUrl().then((url) => {
            chai_1.expect(url).to.include('/my-deals?'
                + 'dealerCd=' + protractor_1.browser.params.dealerCd
                + '&source=' + protractor_1.browser.params.source);
        });
        protractor_1.browser.navigate().back();
    });
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
}));
cucumber_1.Then('Saves Linkout should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-saves-page-linkout is present
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').isPresent()).to.be.true;
}));
cucumber_1.Then('Saves Linkout should have Correct Text', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-saves-page-linkout has correct text
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    let correctText = "My Saves";
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout .dg-component-menu-text').getText()).to.equal(correctText);
}));
cucumber_1.Then('Saves Linkout should link to Saves Page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click().then(() => {
        protractor_1.browser.getCurrentUrl().then((url) => {
            chai_1.expect(url).to.include('/saves?'
                + 'dealerCd=' + protractor_1.browser.params.dealerCd
                + '&source=' + protractor_1.browser.params.source);
        });
        protractor_1.browser.navigate().back();
    });
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
}));
cucumber_1.Then('Owners Linkout should not be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-owners-page-linkout is present
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').isPresent()).to.be.false;
}));
cucumber_1.Then('Temporary Saved Items Message should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-message is the correct text
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    navMenu.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message').then((messages) => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.expect(yield messages[0].getText()).to.equal('These saved items are temporary.');
        chai_1.expect(yield messages[1].getText()).to.equal('Create an account to permanently save your selections.');
    }));
}));
cucumber_1.Then('Create Account Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-register-btn exists
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-register-btn').isPresent()).to.be.true;
}));
cucumber_1.Then('Sign In Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-login-btn exists
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-login-btn').isPresent()).to.be.true;
}));
// Signed In Scenario
// Uses Given Statement from VDP or VLP
cucumber_1.When('User clicks the Top Nav Dropdown Menu icon and Signs In', () => __awaiter(void 0, void 0, void 0, function* () {
    // Click Profile Icon
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    yield navMenu.profileIcon.click();
    // Sign in User
    const username = "";
    const password = "";
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-login-btn').click();
    yield protractor_1.browser.driver.wait(until.visibilityOf(createAccountPage.userName), MAX_TIME_WAIT, 'Username Element taking too long to appear in the DOM');
    yield createAccountPage.userName.sendKeys(username);
    yield createAccountPage.logonBtn.click();
    yield protractor_1.browser.driver.wait(until.visibilityOf(createAccountPage.userPwd), MAX_TIME_WAIT, 'Password Element taking too long to appear in the DOM');
    yield createAccountPage.userPwd.sendKeys(password);
    yield createAccountPage.signInBtn.click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
    // Open Dropdown Menu
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
}));
cucumber_1.Then('Owners Linkout should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-owners-page-linkout is present
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').isPresent()).to.be.true;
}));
cucumber_1.Then('Owners Linkout should have Correct Text', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-owners-page-linkout has correct text
    let correctText = "My Vehicles";
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout .dg-component-menu-text').getText()).to.equal(correctText);
}));
cucumber_1.Then('Owners Linkout should link to Owners Page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Click Owners Linkout, Switch Tabs, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').click().then(() => {
        protractor_1.browser.getAllWindowHandles().then((handles) => {
            protractor_1.browser.driver.switchTo().window(handles[1]);
            protractor_1.browser.getCurrentUrl().then((url) => {
                chai_1.expect(url).to.include('/owners');
            });
            protractor_1.browser.driver.close();
            protractor_1.browser.driver.switchTo().window(handles[0]);
        });
    });
}));
cucumber_1.Then('Account Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-account-btn exists
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-account-btn').isPresent()).to.be.true;
}));
cucumber_1.Then('Sign Out Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-logout-btn exists
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-logout-btn').isPresent()).to.be.true;
    navMenu.dgComponentMenuDropdownDesktop.$('#dg-logout-btn').click();
}));
