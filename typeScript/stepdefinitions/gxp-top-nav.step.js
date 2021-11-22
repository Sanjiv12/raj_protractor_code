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
const console_1 = require("console");
let createAccountPage = new createAccountPage_1.CreateAccountPage();
let navMenu = new navMenu_1.NavMenu();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 10000;
// Signed Out Scenario
// Uses Given Statement from VDP or VLP
cucumber_1.When('User clicks the Top Nav Dropdown Menu icon', () => __awaiter(void 0, void 0, void 0, function* () {
    // Perform click action
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
}));
cucumber_1.Then('The Top Nav Menu Dropdown should be visible', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-component-menu-dropdown has class 'dg-open'
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.getAttribute('class')).to.contain('dg-open');
}));
cucumber_1.Then('The Profile Icon should be in Selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-dropdown-icon has class 'dg-selected-icon'
    chai_1.expect(yield navMenu.profileIcon.$('.dg-menu-dropdown-icon img').getAttribute('class')).to.contain('dg-selected-icon');
}));
cucumber_1.Then(/Top Nav \"(.*?)\" Linkout should be present/, (section) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-' + section.toLowerCase() + '-page-linkout').isPresent()).to.be.true;
}));
cucumber_1.Then(/Top Nav \"(.*?)\" Linkout should not be present/, (section) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-' + section.toLowerCase() + '-page-linkout').isPresent()).to.be.false;
}));
cucumber_1.Then(/Top Nav \"(.*?)\" Linkout Text should be \"(.*?)\"/, (section, correctText) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-' + section.toLowerCase() + '-page-linkout .dg-component-menu-text').getText()).to.equal(correctText);
}));
cucumber_1.Then(/Top Nav \"(.*?)\" Linkout should link to \"(.*?)\"/, (section, location) => __awaiter(void 0, void 0, void 0, function* () {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    const originalUrl = yield protractor_1.browser.getCurrentUrl();
    const element = navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-' + section.toLowerCase() + '-page-linkout');
    yield protractor_1.browser.executeScript("arguments[0].click();", element);
    let handles = yield protractor_1.browser.getAllWindowHandles();
    // Switch to Last Tab
    yield protractor_1.browser.driver.switchTo().window(handles[handles.length - 1]);
    // Check if url is what we expect, sleep to allow for redirects
    yield protractor_1.browser.driver.sleep(15 * 1000);
    let currentUrl = yield protractor_1.browser.getCurrentUrl();
    chai_1.expect(currentUrl).to.include(location);
    // If there is only 1 tab, navigate back until we reach the original page
    if (handles.length === 1) {
        yield protractor_1.browser.navigate().back();
        currentUrl = yield protractor_1.browser.getCurrentUrl();
        let backCommandCount = 0;
        while (currentUrl != originalUrl && backCommandCount < 3) {
            yield protractor_1.browser.navigate().back();
            backCommandCount++;
            yield protractor_1.browser.waitForAngular();
            currentUrl = yield protractor_1.browser.getCurrentUrl();
        }
        yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
        yield navMenu.profileIcon.click();
    }
    // If a new tab was opened, close the tab
    else {
        yield protractor_1.browser.driver.close();
    }
    // Return to main page
    yield protractor_1.browser.driver.switchTo().window(handles[0]);
}));
cucumber_1.Then('Temporary Saved Items Message should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-message is the correct text
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message');
    chai_1.expect(yield navMenu.dgMenuMessages[0].getText()).to.equal('These saved items are temporary.');
    chai_1.expect(yield navMenu.dgMenuMessages[1].getText()).to.equal('Create an account to permanently save your selections.');
}));
cucumber_1.Then('Create Account Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-register-btn exists
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgCreateAccountButton.isPresent()).to.be.true;
}));
cucumber_1.Then('Sign In Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-login-btn exists
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgLoginButton.isPresent()).to.be.true;
}));
cucumber_1.Then('Account Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-account-btn exists
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-account-btn').isPresent()).to.be.true;
}));
cucumber_1.Then('Sign Out Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-logout-btn exists
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgSignOutButton.isPresent()).to.be.true;
}));
cucumber_1.Then('Manage Account Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.dgManageAccount.isPresent()).to.be.true;
}));
cucumber_1.Given(/An active deal is (.*?)/, (deal) => __awaiter(void 0, void 0, void 0, function* () {
}));
cucumber_1.Then(/Top Nav Continue Purchase Linkout is \"(.*?)\"/, (display) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    console.log(display);
    if (display == 'hidden') {
        chai_1.expect(yield navMenu.continuePurchaseButton.isPresent()).to.be.false;
    }
    else if (display == 'shown') {
        chai_1.expect(yield navMenu.continuePurchaseButton.isPresent()).to.be.true;
    }
    else {
        console_1.assert(false);
        console.log('Invalid data in example');
    }
}));
