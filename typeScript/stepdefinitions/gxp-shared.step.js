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
const navMenu_1 = require("../pages/navMenu");
const savesPageRedesign_1 = require("../pages/savesPageRedesign");
const constructSavePageUrl_1 = require("../util/constructSavePageUrl");
const getPageInfo_1 = require("../util/getPageInfo");
const waitForVisibilityOf_1 = require("../util/waitForVisibilityOf");
const savesPage = new savesPageRedesign_1.SavesPageRedesign();
const navMenu = new navMenu_1.NavMenu();
const until = protractor_1.protractor.ExpectedConditions;
const MAX_TIME_WAIT = 10000;
/**
 * Navigations
 *
 * shared navigations to important pages
 */
cucumber_1.Given('User is in Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    const savesPageInfo = yield getPageInfo_1.getPageInfo('saves');
    const currentUrl = yield protractor_1.browser.getCurrentUrl();
    const onSavesPage = savesPageInfo.urlTest.test(currentUrl);
    if (!onSavesPage) {
        const savesPage = constructSavePageUrl_1.constructSavePageUrl();
        yield protractor_1.browser.driver.get(savesPage);
    }
    yield waitForVisibilityOf_1.waitForVisibilityOf(savesPageInfo.pageDef, savesPageInfo.title);
}));
cucumber_1.When('User loads the Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield waitForVisibilityOf_1.waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon');
    yield navMenu.profileIcon.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[1]/img')).click();
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    if ((yield navMenu.savesPageLinkOut.isDisplayed()) == false) {
        navMenu.profileIcon.click();
    }
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    yield waitForVisibilityOf_1.waitForVisibilityOf(savesPage.savePageTitle, 'Saves Page');
}));
cucumber_1.Then(/User is redirected to \"(.*?)\" Page/, (page) => __awaiter(void 0, void 0, void 0, function* () {
    const pageInfo = yield getPageInfo_1.getPageInfo(page.toLowerCase());
    yield waitForVisibilityOf_1.waitForVisibilityOf(pageInfo.pageDef, pageInfo.title);
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
    //TODO: add validation and potential log out flow from WILL
}));
cucumber_1.Given('User is on desktop', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.manage().window().maximize();
}));
cucumber_1.Given('User is on tablet', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.manage().window().setSize(768, 1024);
}));
cucumber_1.Given('User is on mobile', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.manage().window().setSize(375, 667);
}));
