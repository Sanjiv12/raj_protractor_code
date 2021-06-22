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
const savesPage_1 = require("../pages/savesPage");
const navMenu_1 = require("../pages/navMenu");
const chai_1 = require("chai");
let navMenu = new navMenu_1.NavMenu();
let savesPage = new savesPage_1.SavesPage();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 5000;
cucumber_1.When('User loads the Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.standaloneContainer), MAX_TIME_WAIT, 'Saves Page taking too long to appear in the DOM');
}));
cucumber_1.Given('User is in Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Take no action, saves page already loaded
}));
cucumber_1.When('User views the Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Take no action, saves page already loaded
}));
// Scenario: Saves - Profile Icon is visible
cucumber_1.Then('The Profile Icon should be visible', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    chai_1.expect(yield navMenu.profileIcon.isPresent()).to.be.true;
}));
// Scenario: Saves - Sidebar Has Correct Structure
cucumber_1.Then('Sidebar Component should be visible', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    chai_1.expect(yield savesPage.sideBar.isPresent()).to.be.true;
}));
cucumber_1.Then(/Sidebar \"(.*?)\" Linkout should be present/, (section) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    const linkout = savesPage[section.toLowerCase() + "Link"];
    protractor_1.browser.driver.wait(until.visibilityOf(linkout), MAX_TIME_WAIT, section + ' Section Linkout taking too long to appear in the DOM');
    chai_1.expect(yield linkout.isPresent()).to.be.true;
}));
cucumber_1.Then(/Sidebar \"(.*?)\" Linkout should be in \"(.*?)\" state/, (section, value) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    const linkout = savesPage[section.toLowerCase() + "Link"];
    protractor_1.browser.driver.wait(until.visibilityOf(linkout), MAX_TIME_WAIT, section + ' Section Linkout taking too long to appear in the DOM');
    value.toLowerCase() === "active" ?
        chai_1.expect(yield linkout.getAttribute('class')).to.include('dg-nav-sidebar-active') :
        chai_1.expect(yield linkout.getAttribute('class')).to.not.include('dg-nav-sidebar-active');
}));
cucumber_1.Then(/Sidebar \"(.*?)\" Linkout should be \"(.*?)\"/, (section, value) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    const linkout = savesPage[section.toLowerCase() + "Link"];
    protractor_1.browser.driver.wait(until.visibilityOf(linkout), MAX_TIME_WAIT, section + ' Section Linkout taking too long to appear in the DOM');
    chai_1.expect(yield linkout.getText()).to.equal(value);
}));
cucumber_1.Then(/Sidebar \"(.*?)\" Linkout should link to \"(.*?)\"/, (section, location) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    const originalUrl = yield protractor_1.browser.getCurrentUrl();
    const linkout = savesPage[section.toLowerCase() + "Link"];
    protractor_1.browser.driver.wait(until.visibilityOf(linkout), MAX_TIME_WAIT, section + ' Section Linkout taking too long to appear in the DOM');
    yield linkout.click();
    let handles = yield protractor_1.browser.getAllWindowHandles();
    // Switch to Last Tab
    yield protractor_1.browser.driver.switchTo().window(handles[handles.length - 1]);
    // Check if url is what we expect, sleep to allow for redirects
    yield protractor_1.browser.driver.sleep(10 * 1000);
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
    }
    // If a new tab was opened, close the tab
    else {
        yield protractor_1.browser.driver.close();
    }
    // Return to main page
    yield protractor_1.browser.driver.switchTo().window(handles[0]);
}));
// Scenario: Saves - SmartPath Header has correct structure
cucumber_1.Then(/SmartPath Header is \"(.*?)\"/, (value) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    const headerText = savesPage.welcomeHeader.$('.welcome-title');
    protractor_1.browser.driver.wait(until.presenceOf(savesPage.welcomeHeader), MAX_TIME_WAIT, 'SmartPath Header taking too long to appear in the DOM');
    yield protractor_1.browser.actions().mouseMove(savesPage.welcomeHeader).perform();
    chai_1.expect(yield headerText.getText()).to.equal(value);
}));
cucumber_1.Then('SmartPath progress bar is visible', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    protractor_1.browser.driver.wait(until.presenceOf(savesPage.smartpathProgressTracker), MAX_TIME_WAIT, 'SmartPath Progress Tracker taking too long to appear in the DOM');
    yield protractor_1.browser.actions().mouseMove(savesPage.smartpathProgressTracker).perform();
    chai_1.expect(yield savesPage.smartpathProgressTracker.isDisplayed()).to.be.true;
}));
// Scenario: Saves - Sticky Header has correct structure
cucumber_1.Then('Sticky Header is visible', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    protractor_1.browser.driver.wait(until.presenceOf(savesPage.stickyHeader), MAX_TIME_WAIT, 'SmartPath Sticky Header taking too long to appear in the DOM');
    yield protractor_1.browser.actions().mouseMove(savesPage.stickyHeader).perform();
    chai_1.expect(yield savesPage.stickyHeader.isDisplayed()).to.be.true;
}));
cucumber_1.Then('Name of dealership is present', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    protractor_1.browser.driver.wait(until.presenceOf(savesPage.stickyHeader), MAX_TIME_WAIT, 'SmartPath Dealer Name taking too long to appear in the DOM');
    chai_1.expect(yield savesPage.stickyHeader.$('.dg-dealer-name').isPresent()).to.be.true;
}));
// Scenario: Saves - Temporary Saves Banner is present
cucumber_1.Then('Temporary Saves banner is visible', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngular();
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.temporarySavesBanner), MAX_TIME_WAIT, 'Temporary Saves Banner taking too long to appear in the DOM');
    chai_1.expect(yield savesPage.temporarySavesBanner.isPresent()).to.be.true;
}));
cucumber_1.Then(/Saved \"(.*?)\" Header is \"(.*?)\"/, (section, value) => __awaiter(void 0, void 0, void 0, function* () {
    const header = savesPage[section.toLowerCase() + "SectionHeader"];
    protractor_1.browser.driver.wait(until.presenceOf(header), MAX_TIME_WAIT, section + ' Section Header taking too long to appear in the DOM');
    yield protractor_1.browser.actions().mouseMove(header).perform();
    chai_1.expect(yield header.getText()).to.equal(value);
}));
cucumber_1.Then(/Saved \"(.*?)\" SubHeader is \"(.*?)\"/, (section, value) => __awaiter(void 0, void 0, void 0, function* () {
    const subHeader = savesPage[section.toLowerCase() + "SectionSubHeader"];
    protractor_1.browser.driver.wait(until.presenceOf(subHeader), MAX_TIME_WAIT, section + ' Section SubHeader taking too long to appear in the DOM');
    yield protractor_1.browser.actions().mouseMove(subHeader).perform();
    chai_1.expect(yield subHeader.getText()).to.equal(value);
}));
cucumber_1.Then(/Saved \"(.*?)\" section is empty/, (section) => __awaiter(void 0, void 0, void 0, function* () {
    // Expect No Cards to be Contained in the Section
    const cards = savesPage[section.toLowerCase() + "Cards"];
    chai_1.expect(yield cards.isPresent()).to.be.false;
}));
cucumber_1.Then(/Saved \"(.*?)\" Button is visible/, (section) => __awaiter(void 0, void 0, void 0, function* () {
    // Expect the Button to Exist
    const button = savesPage[section.toLowerCase() + "Button"];
    yield protractor_1.browser.actions().mouseMove(button).perform();
    chai_1.expect(yield button.isPresent()).to.be.true;
}));
cucumber_1.Then(/Saved \"(.*?)\" Button links to \"(.*?)\"/, (section, location) => __awaiter(void 0, void 0, void 0, function* () {
    const originalUrl = yield protractor_1.browser.getCurrentUrl();
    const button = savesPage[section.toLowerCase() + "Button"];
    protractor_1.browser.driver.wait(until.presenceOf(button), MAX_TIME_WAIT, section + ' Section Button taking too long to appear in the DOM');
    yield protractor_1.browser.actions().mouseMove(button).click().perform();
    let handles = yield protractor_1.browser.getAllWindowHandles();
    // Switch to Last Tab
    yield protractor_1.browser.driver.switchTo().window(handles[handles.length - 1]);
    // Check if url is what we expect, sleep to allow for redirects
    yield protractor_1.browser.driver.sleep(10 * 1000);
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
    }
    // If a new tab was opened, close the tab
    else {
        yield protractor_1.browser.driver.close();
    }
    // Return to main page
    yield protractor_1.browser.driver.switchTo().window(handles[0]);
}));
cucumber_1.Then('Saved Vehicle is visible in Saves Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    navMenu.profileIcon.click();
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
    // Expect 1 Card to be Contained in the Section
    chai_1.expect(yield savesPage.inventoryCards.first().isPresent()).to.be.true;
}));
cucumber_1.Then(/\"(.*?)\" Dividers are present/, (dividerCount) => __awaiter(void 0, void 0, void 0, function* () {
    const count = parseInt(dividerCount);
    chai_1.expect((yield savesPage.divisionLines).length).to.equal(count);
}));
