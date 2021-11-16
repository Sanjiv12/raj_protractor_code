"use strict";
/**
 * This file is for shared, common actions between different features.
 * The types of actions include:
 * -Setup, Teardown, Navigations, Common Actions?
 */
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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const createAccountPage_1 = require("../pages/createAccountPage");
const navMenu_1 = require("../pages/navMenu");
const assertion_1 = require("../util/assertion");
let createAccountPage = new createAccountPage_1.CreateAccountPage();
let navMenu = new navMenu_1.NavMenu();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 10000;
/**
 * Setup Section
 *
 * steps for consistent setup before features are executed (login included)
 */
/**
 * Teardown Section
 *
 * steps for consistent tear down once feature execution is complete
 */
/**
 * Navigations
 *
 * shared navigations to important pages
 */
/**
 * Common Actions? / Common Accounts?
 *
 * things like save a vehicle, create a deal, etc.
 */
cucumber_1.Given('User is logged in to account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    // browser.executeScript("arguments[0].click();", navMenu.profileIcon);
    navMenu.profileIcon.click();
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    // await browser.executeScript("arguments[0].click();", navMenu.dgLoginButton);
    yield navMenu.dgLoginButton.click();
    const username = "maferap486@idrct.com";
    const password = "Bddtest1!";
    yield protractor_1.browser.driver.wait(until.visibilityOf(createAccountPage.userName), MAX_TIME_WAIT, 'Username Element taking too long to appear in the DOM');
    yield createAccountPage.userName.sendKeys(username);
    yield createAccountPage.logonBtn.click();
    yield protractor_1.browser.driver.wait(until.visibilityOf(createAccountPage.userPwd), MAX_TIME_WAIT, 'Password Element taking too long to appear in the DOM');
    yield createAccountPage.userPwd.sendKeys(password);
    yield createAccountPage.signInButton.click();
}));
//  Given('User is in Saves page', async () => {
//      //Do nothing, page will load automatically
//  });
cucumber_1.Given('User is not logged in to account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    // browser.executeScript("arguments[0].click();", navMenu.profileIcon);
    navMenu.profileIcon.click();
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    if (!assertion_1.Assertion.expect(yield navMenu.dgLoginButton.isDisplayed())) {
        console.log('we are logged in');
    }
    else {
        console.log('we are logged out');
        yield navMenu.profileIcon.click();
    }
}));
cucumber_1.Given('User is on desktop', () => __awaiter(void 0, void 0, void 0, function* () {
    //TODO: create function to set window size
    // setWindowSize(width, height)
    protractor_1.browser.driver.manage().window().maximize();
}));
cucumber_1.Given('User is on tablet', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.manage().window().setSize(768, 1024);
}));
cucumber_1.Given('User is on mobile', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.manage().window().setSize(375, 667);
}));
