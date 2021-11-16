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
const vdpPage_1 = require("../pages/vdpPage");
const navMenu_1 = require("../pages/navMenu");
const chai_1 = require("chai");
let savesPage = new savesPage_1.SavesPage();
let vdpPage = new vdpPage_1.VdpPage();
let navMenu = new navMenu_1.NavMenu();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 15000;
let vdpEstimateDetails = new Map();
let vdpVehicleEstimateDetails = { vehicleName: null, vin: null, MSRP: null };
cucumber_1.When('User loads the Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    navMenu.profileIcon.click();
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    if ((yield navMenu.savesPageLinkOut.isDisplayed()) == false) {
        navMenu.profileIcon.click();
    }
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.standaloneContainer), MAX_TIME_WAIT, 'Saves Page taking too long to appear in the DOM');
}));
cucumber_1.When('User clicks on estimate save heart for all estimates', () => __awaiter(void 0, void 0, void 0, function* () {
    // Lease
    var leaseTab = vdpPage.estimateTabs.get(0);
    protractor_1.browser.driver.wait(until.visibilityOf(leaseTab), MAX_TIME_WAIT, 'Lease estimate tab element taking too long to appear in the DOM');
    leaseTab.click();
    vdpPage.estimateAmount.getText().then(function (monthly) {
        vdpEstimateDetails.set('lease', monthly);
    });
    var heart = vdpPage.saveHearts.get(1);
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Lease estimate save heart element taking too long to appear in the DOM');
    heart.click();
    // Finance
    var financeTab = vdpPage.estimateTabs.get(1);
    protractor_1.browser.driver.wait(until.visibilityOf(financeTab), MAX_TIME_WAIT, 'Finance estimate tab element taking too long to appear in the DOM');
    financeTab.click();
    vdpPage.estimateAmount.getText().then(function (monthly) {
        vdpEstimateDetails.set('finance', monthly);
    });
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Finance estimate save heart element taking too long to appear in the DOM');
    heart.click();
    // Cash
    var cashTab = vdpPage.estimateTabs.get(2);
    protractor_1.browser.driver.wait(until.visibilityOf(cashTab), MAX_TIME_WAIT, 'Cash estimate tab element taking too long to appear in the DOM');
    cashTab.click();
    vdpPage.estimateAmount.getText().then(function (monthly) {
        vdpEstimateDetails.set('cash', monthly);
    });
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Cash estimate save heart element taking too long to appear in the DOM');
    heart.click();
}));
cucumber_1.When('User unsaves estimates on Saves page', () => __awaiter(void 0, void 0, void 0, function* () {
    var numCards = yield savesPage.estimatesCards.count();
    for (var i = 0; i < numCards; i++) {
        var estimate = savesPage.estimatesCards.get(0);
        estimate.element(protractor_1.by.css('.dg-heart-icon')).click();
        var removeEstimateCta = estimate.element(protractor_1.by.css('.dg-delete-overlay-remove'));
        protractor_1.browser.driver.wait(until.visibilityOf(removeEstimateCta), MAX_TIME_WAIT, 'Remove estimate element taking too long to appear in the DOM');
        removeEstimateCta.click();
        yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    }
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
cucumber_1.Then('Saved Estimates are visible in Saves Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(30 * 1000);
    navMenu.profileIcon.click();
    // Click Saves Linkout, Check the Url, and then Navigate Back
    protractor_1.browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop), MAX_TIME_WAIT, 'Dropdown Element taking too long to appear in the DOM');
    yield navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
    const viewEstimates = savesPage.viewEstimatesButton.first();
    viewEstimates.click();
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.estimatesCards.first()), MAX_TIME_WAIT, 'Estimate frame element taking too long to appear in the DOM');
    chai_1.expect(yield savesPage.estimatesCards.first().isPresent()).to.be.true;
}));
cucumber_1.Then('Saved Estimates match estimate details from VDP', () => __awaiter(void 0, void 0, void 0, function* () {
    var cashEstimate = savesPage.estimatesCards.get(0);
    var financeEstimate = savesPage.estimatesCards.get(1);
    var leaseEstimate = savesPage.estimatesCards.get(2);
    var savesPageEstimateDetails = new Map();
    cashEstimate.element(protractor_1.by.css('.dg-offer-amount')).getText().then(function (amount) {
        savesPageEstimateDetails.set('cash', amount);
    });
    financeEstimate.element(protractor_1.by.css('.dg-offer-per-month-amount')).getText().then(function (amount) {
        savesPageEstimateDetails.set('finance', amount);
    });
    leaseEstimate.element(protractor_1.by.css('.dg-offer-per-month-amount')).getAttribute('innerHTML').then(function (amount) {
        savesPageEstimateDetails.set('lease', amount);
    });
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    chai_1.expect(vdpEstimateDetails).to.eql(savesPageEstimateDetails);
}));
cucumber_1.When('User clicks on inventory save heart', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    var heart = vdpPage.saveHearts.get(0);
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Inventory save heart element taking too long to appear in the DOM');
    yield vdpPage.MSRP.getText().then((price) => vdpVehicleEstimateDetails.MSRP = price);
    yield vdpPage.vehicleVin.getText().then((vin) => vdpVehicleEstimateDetails.vin = vin);
    yield vdpPage.vehicleName.getText().then((name) => vdpVehicleEstimateDetails.vehicleName = name);
    heart.click();
    protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
}));
cucumber_1.Then('Saves page shows correct saved vehicle', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    //await savesPage.MSRP.getText().then((price) => expect(vdpVehicleEstimateDetails.MSRP).to.eql(price));
    yield savesPage.vehicleName.getText().then((name) => {
        console.log(vdpVehicleEstimateDetails.vehicleName);
        console.log(name);
        chai_1.expect(vdpVehicleEstimateDetails.vehicleName.split(' ')[1]).to.eql(name.split(' ')[1]);
    });
    yield savesPage.vehicleVin.getText().then((vin) => chai_1.expect(vdpVehicleEstimateDetails.vin).to.eql(vin));
}));
cucumber_1.Then('User removes save', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    savesPage.saveHeart.click();
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.confirmRemove), MAX_TIME_WAIT, 'Inventory save heart element taking too long to appear in the DOM');
    savesPage.confirmRemove.click();
    protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
}));
cucumber_1.Then('Vehicle disappears', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(MAX_TIME_WAIT);
    chai_1.expect(yield savesPage.dgInvCard.isPresent()).to.be.false;
}));
cucumber_1.Then('Estimates should disappear from inventory card', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.estimatePaymentsButton.first()), MAX_TIME_WAIT, 'View estimates button element taking too long to appear in the DOM');
    chai_1.expect(yield savesPage.estimatePaymentsButton.first().isPresent()).to.be.true;
}));
cucumber_1.When('User clicks the Start Sharing Button', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(savesPage.saveShares), MAX_TIME_WAIT, 'Share Saves button element taking too long to appear in the DOM');
    yield savesPage.saveShares.click();
}));
cucumber_1.When('User fills out Modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(MAX_TIME_WAIT);
    yield fillInput(savesPage.firstNameModal, 'test');
    yield fillInput(savesPage.lastNameModal, 'test');
    yield fillInput(savesPage.zipCodeModal, '75092');
    yield fillInput(savesPage.emailModal, 'test@test.com');
}));
cucumber_1.When('User submits form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    savesPage.submitModal.click();
}));
cucumber_1.Then('Modal success state should appear', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    chai_1.expect(yield savesPage.successModalText.getText()).to.equal('Save successfully sent!');
}));
function fillInput(el, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
        yield el.click();
        yield protractor_1.browser.sleep(3000);
        yield el.clear();
        yield protractor_1.browser.sleep(3000);
        yield el.sendKeys(text);
        yield protractor_1.browser.sleep(3000);
    });
}
