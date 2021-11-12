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
const assertion_1 = require("../util/assertion");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let vdpPage = new vdpPage_1.VdpPage();
cucumber_1.Then('Vehicle Information should be displayed with VIN', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    vdpPage.vin.getText().then((value) => {
        console.log('value -- ' + value);
        let vin = (value.replace('VIN ', '')).trim();
        assertion_1.Assertion.expect(vin.length).to.equal(17);
    });
}));
cucumber_1.Then('Vehicle Information should be displayed with Model Name', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.vehicleTitle.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with DG Save Icon', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.dgIcon.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Vehicle Information should be displayed with Advertised Price', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.price.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with Unlock Savings', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.unlockSavings.getText()).to.eventually.contain('Unlock Available Savings');
}));
cucumber_1.Then('Vehicle Information should be displayed with Exterior Color', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.extColor.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with Interior Color', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.intColor.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with Engine', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.engine.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with Estimated MPG', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.estMpg.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with Package & Accessories', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.packageAcc.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('Vehicle Information should be displayed with View All Vehicle Details CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.viewVehDetails.getText()).to.eventually.contain('View All Vehicle Details');
}));
cucumber_1.Then('Vehicle Information should be displayed with Toyota Care Image', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.toyotaCareImg.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Vehicle Information should be displayed with Toyota Safety Sense Logo', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.toyotaSafetySense.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Vehicle Information should be displayed with Image Carousal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.carousel.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on View All Vehicle Details CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.viewVehDetails);
}));
cucumber_1.Then('System should open Vehicle Detail modal with VIN', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.vehDetailModalVin.getText().then((value) => {
        console.log('value -- ' + value);
        let vin = (value.replace('VIN ', '')).trim();
        assertion_1.Assertion.expect(vin.length).to.equal(17);
    });
}));
cucumber_1.Then('System should open Vehicle Detail modal with Model Name', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.vehDetailModalVehicleTitle.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('System should open Vehicle Detail modal with Exterior Color', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.vehDetailModalExtColor.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('System should open Vehicle Detail modal with Interior Color', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.vehDetailModalIntColor.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('System should open Vehicle Detail modal with Interior Features tab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.vehDetailModalTab1.last().getText()).to.eventually.contain('Interior Features');
}));
cucumber_1.Then('System should open Vehicle Detail modal with Exterior Features tab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.vehDetailModalTab2.last().getText()).to.eventually.contain('Exterior Features');
}));
cucumber_1.Then('System should open Vehicle Detail modal with Safety Features tab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.vehDetailModalTab3.last().getText()).to.eventually.contain('Safety Features');
}));
cucumber_1.Then('System should open Vehicle Detail modal with Package & Accessories tab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.vehDetailModalTab4.last().getText()).to.eventually.contain('Package & Accessories');
}));
cucumber_1.Then('System should open Vehicle Detail modal with Disclosures in the bottom', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.vehDetailModalDisclosure.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on arrows in image carousal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.carouselImgRight);
}));
cucumber_1.Then('System should display the image on the carousal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect((yield vdpPage.carousel.isDisplayed()).valueOf()).to.be.true;
}));
