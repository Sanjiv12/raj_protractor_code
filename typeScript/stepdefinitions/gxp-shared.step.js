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
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const createAccountPage_1 = require("../pages/createAccountPage");
const navMenu_1 = require("../pages/navMenu");
const savesPageRedesign_1 = require("../pages/savesPageRedesign");
const constructSavePageUrl_1 = require("../util/constructSavePageUrl");
const getPageInfo_1 = require("../util/getPageInfo");
let createAccountPage = new createAccountPage_1.CreateAccountPage();
let savesPage = new savesPageRedesign_1.SavesPageRedesign();
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
cucumber_1.Given('User is in Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    const currentUrl = yield protractor_1.browser.getCurrentUrl();
    const onSavesPage = /saves/.test(currentUrl);
    if (!onSavesPage) {
        const savesPage = constructSavePageUrl_1.constructSavePageUrl();
        yield protractor_1.browser.driver.get(savesPage);
    }
    yield protractor_1.browser.driver.wait(until.visibilityOf(savesPage.sideBarHeader), MAX_TIME_WAIT, 'Saves Page taking too long to appear in the DOM');
}));
cucumber_1.When('User loads the Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    yield navMenu.profileIcon.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[1]/img')).click();
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    if ((yield navMenu.savesPageLinkOut.isDisplayed()) == false) {
        navMenu.profileIcon.click();
    }
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
    yield protractor_1.browser.driver.wait(until.visibilityOf(savesPage.savePageTitle), MAX_TIME_WAIT, 'Saves Page taking too long to appear in the DOM');
}));
cucumber_1.Then(/User is redirected to \"(.*?)\" Page/, (page) => __awaiter(void 0, void 0, void 0, function* () {
    const pageInfo = yield getPageInfo_1.getPageInfo(page.toLowerCase());
    yield protractor_1.browser.driver.wait(until.visibilityOf(pageInfo.pageDef), MAX_TIME_WAIT, `${page} taking too long to appear in the DOM`);
    const currentUrl = yield protractor_1.browser.driver.getCurrentUrl();
    chai_1.expect(pageInfo.urlTest.test(currentUrl));
    chai_1.expect(yield pageInfo.pageDef.isDisplayed());
}));
/**
 * Common Actions? / Common Accounts?
 *
 * things like save a vehicle, create a deal, etc.
 */
cucumber_1.Given('User is not logged in', () => __awaiter(void 0, void 0, void 0, function* () {
    //user is logged out by default
    //do nothing
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
