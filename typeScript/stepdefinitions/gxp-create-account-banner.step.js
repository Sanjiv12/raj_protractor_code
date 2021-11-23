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
const savesPageRedesign_1 = require("../pages/savesPageRedesign");
const chai_1 = require("chai");
let savesPage = new savesPageRedesign_1.SavesPageRedesign();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 10000;
cucumber_1.When('User clicks the X on the Create Account Banner', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(savesPage.createAccountBannerX), MAX_TIME_WAIT, 'Create Account Banner taking too long to appear in DOM');
    yield savesPage.createAccountBannerX.click();
}));
cucumber_1.When(/User clicks \"(.*?)\" within Create Account Banner/, (linkout) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(savesPage.createAccountBanner), MAX_TIME_WAIT, 'Create Account Banner taking too long to appear in DOM');
    const linkoutToClick = yield savesPage.createAccountBannerLinks.filter((elem) => __awaiter(void 0, void 0, void 0, function* () {
        const elemText = yield elem.getText();
        return elemText.toLowerCase() === linkout.toLowerCase();
    })).first();
    yield linkoutToClick.click();
}));
cucumber_1.Then('Create Account Banner is shown', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.wait(until.visibilityOf(savesPage.createAccountBanner), MAX_TIME_WAIT, 'Create Account Banner taking too long to appear in DOM');
    chai_1.expect(yield savesPage.createAccountBannerMessage.isDisplayed());
}));
cucumber_1.Then('Create Account Banner is not shown', () => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield savesPage.createAccountBanner.isPresent()).to.equal(false);
}));
