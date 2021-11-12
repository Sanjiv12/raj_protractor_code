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
const chai_1 = require("chai");
const assertion_1 = require("../util/assertion");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let vdpPage = new vdpPage_1.VdpPage();
cucumber_1.When('User clicks Select Accessories in Step 3', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    vdpPage.selectAccessories.click();
}));
cucumber_1.Then('System should open Accessories modal with list of accessories available for the vehicle', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.accessoriesModal.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.When('User clicks on View Details CTA for an accessory', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //vdpPage.accessoriesViewDetail.click();
    vdpPage.accessoriesViewDetail.first().click();
}));
cucumber_1.Then('System should open Accessories detail modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.accessoriesDetailModal.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.When('User clicks on "Select" CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesDetailModalSelect.click();
}));
cucumber_1.Then('The Accessory should be displayed as selected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(vdpPage.accessoriesCardWrapper.first().getAttribute('class')).to.eventually.contain('card-highlight');
}));
cucumber_1.Then('Count of accessories selected and Total value should be updated', () => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('+++Inside Count of accessories selected and Total value should be updated ');
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesSelectedCount.getText().then((value) => __awaiter(void 0, void 0, void 0, function* () {
        //console.log('+++value - '+value);
        let count = Number(value.substring(value.lastIndexOf(':') + 1, value.length).replace(' Remove All', ''));
        //console.log('+++count - '+count);
        chai_1.expect((yield vdpPage.accessoriesCardWrapper.getAttribute('ng-reflect-ng-class')).length).to.equal(count);
    })).catch((err) => console.log('+++errorr - ' + err));
    //Assertion.expect(vdpPage.accessoriesSelectedTotal.getText()).to.eventually.equal(vdpPage.accessoriesPrice.getText());
    vdpPage.accessoriesSelectedTotal.getText().then((value) => {
        let total = ((value.replace('Total: $', '')).replace('Done', '')).trim();
        assertion_1.Assertion.expect(vdpPage.accessoriesPrice.getText()).to.eventually.equal(total);
    });
}));
cucumber_1.When('User clicks on Select check box for an accessory', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesCheckBox.first().click();
}));
cucumber_1.When('User clicks on Done', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesDoneButton.click();
}));
cucumber_1.Then('Personalize with Accessories should display the list of accessories selected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.accessoriesList.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.When('User clicks on Remove CTA for an accessory', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    vdpPage.accessoriesRemove.click();
}));
cucumber_1.Then('Accessory should be removed from Personalize with Accessories', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(15 * 1000);
    return assertion_1.Assertion.expect(vdpPage.selectAccessories.isDisplayed().valueOf()).to.eventually.be.false;
}));
cucumber_1.When('User deselects the Select check box', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesCheckBox.first().click();
}));
cucumber_1.Then('Accessory should be deselected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(vdpPage.accessoriesCardWrapper.first().getAttribute('ng-reflect-ng-class')).to.not.eventually.equal('card-highlight');
}));
cucumber_1.When('User clicks on Remove CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesDetailModalSelect.click();
}));
cucumber_1.Then('System should navigate back to Accessories modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.accessoriesModal.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.When('User clicks on Remove All CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.accessoriesRemoveAll.click();
}));
