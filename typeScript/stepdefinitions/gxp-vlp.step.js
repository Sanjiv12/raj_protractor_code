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
const vlpFilterPage_1 = require("../pages/vlpFilterPage");
const chai_1 = require("chai");
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 10000;
// Save Hearts
cucumber_1.Given('User is in Vehicle List Page GXP', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(protractor_1.browser.params.url
        + '/search'
        + '?dealerCd=' + protractor_1.browser.params.dealerCd
        + '&source=' + protractor_1.browser.params.source
        + '&series=4runner'
        + '&seriesDesc=4Runner'
        + '&type=suvs'
        + '&zipcode=' + protractor_1.browser.params.zipcode);
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.driver.manage().deleteAllCookies();
}));
cucumber_1.When('User clicks on a vehicle save heart', () => __awaiter(void 0, void 0, void 0, function* () {
    var heart = vlpFilterPage.vehicleSaveHeart.get(1);
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Save Heart Element taking too long to appear in the DOM');
    heart.click();
}));
cucumber_1.Then('Heart should turn active', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(vlpFilterPage.vehicleSaveHeartActive), MAX_TIME_WAIT, 'Active Save Heart Element taking too long to appear in the DOM');
    chai_1.expect((yield vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
}));
cucumber_1.Then('Tooltip should open', () => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect((yield vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.true;
}));
