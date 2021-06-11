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
const chai_1 = require("chai");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 5000;
// Save Hearts
cucumber_1.When('User clicks on a vehicle save heart', () => __awaiter(void 0, void 0, void 0, function* () {
    var heart = vlpFilterPage.vehicleSaveHeart.get(1);
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Element taking too long to appear in the DOM');
    heart.click();
}));
cucumber_1.Then('Heart should turn active', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(vlpFilterPage.vehicleSaveHeartActive), MAX_TIME_WAIT, 'Element taking too long to appear in the DOM');
    chai_1.expect((yield vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
}));
cucumber_1.Then('Tooltip should open', () => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect((yield vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.true;
}));
// Top Nav
// Scenario: VLP - Top Nav Dropdown Desktop Signed Out
cucumber_1.When('User clicks the Top Nav Dropdown Menu icon', () => __awaiter(void 0, void 0, void 0, function* () {
    // Perform click action
    protractor_1.browser.driver.wait(until.visibilityOf(vlpFilterPage.profileIcon), MAX_TIME_WAIT, 'Top Nav Profile Icon taking too long to appear in the DOM');
    vlpFilterPage.profileIcon.click();
}));
cucumber_1.Then('The Top Nav Menu Dropdown should be visible', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-component-menu-dropdown has class 'dg-open'
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.getAttribute('class')).to.contain('dg-open');
}));
cucumber_1.Then('The Profile Icon should be in Selected state', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-dropdown-icon has class 'dg-selected-icon'
    chai_1.expect(yield vlpFilterPage.profileIcon.$('.dg-menu-dropdown-icon img').getAttribute('class')).to.contain('dg-selected-icon');
}));
cucumber_1.Then('Saves Linkout should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-saves-page-linkout is present
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').isPresent()).to.be.true;
}));
cucumber_1.Then('Saves Linkout should read View Saves', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-saves-page-linkout has text "View Saves"
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout .dg-component-menu-text').getText()).to.equal('View Saves');
}));
cucumber_1.Then('Saves Linkout should link to Saves Page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click().then(() => {
        protractor_1.browser.getCurrentUrl().then((url) => {
            chai_1.expect(url.slice(-6)).to.equal("/saves");
        });
        protractor_1.browser.navigate().back();
    });
}));
cucumber_1.Then('Owners Linkout should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-owners-page-linkout is present
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').isPresent()).to.be.true;
}));
cucumber_1.Then('Owners Linkout should read Manage Vehicles', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-owners-page-linkout has text "Manage Vehicles"
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout .dg-component-menu-text').getText()).to.equal('Manage Vehicles');
}));
cucumber_1.Then('Owners Linkout should link to Owners Page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Click Owners Linkout, Switch Tabs, Check the Url, and then Navigate Back
    vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').click().then(() => {
        protractor_1.browser.getAllWindowHandles().then((handles) => {
            protractor_1.browser.switchTo().window(handles[handles.length - 1]).then(() => {
                protractor_1.browser.getCurrentUrl().then((url) => {
                    chai_1.expect(url.slice(-7)).to.equal("/owners");
                });
            });
            // switch back to the main window
            protractor_1.browser.switchTo().window(handles[0]);
        });
    });
}));
cucumber_1.Then('Temporary Saved Items Message should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-menu-message is the correct text
    vlpFilterPage.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message').then((messages) => {
        chai_1.expect(messages[0]).to.equal('These saved items are temporary.');
        chai_1.expect(messages[1]).to.equal('Create an account to permanently save your selections.');
    });
}));
cucumber_1.Then('Create Account Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-register-btn exists
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-register-btn').isPresent()).to.be.true;
}));
// Then('Create Account Button should link out to Login Page', async() => {
//     // Click Create Account, Check the Url, and then Navigate Back
//     vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-register-btn').click().then(() => {
//         browser.getCurrentUrl().then((url) => {
//             expect(url.slice(-6)).to.equal("/");
//         });
//         browser.navigate().back();
//     });
// });
cucumber_1.Then('Sign In Button should be present', () => __awaiter(void 0, void 0, void 0, function* () {
    // dg-login-btn exists
    chai_1.expect(yield vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-login-btn').isPresent()).to.be.true;
}));
// Then('Sign In Button should link out to Login Page', async() => {
//     // Click Sign In, Check the Url, and then Navigate Back
//     vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-login-btn').click().then(() => {
//         browser.getCurrentUrl().then((url) => {
//             expect(url.slice(-6)).to.equal("/");
//         });
//         browser.navigate().back();
//     });
// });
