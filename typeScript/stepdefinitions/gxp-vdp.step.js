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
const vdpPage_1 = require("../pages/vdpPage");
const chai_1 = require("chai");
let vdpPage = new vdpPage_1.VdpPage();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 15000;
cucumber_1.When('User clicks on lease estimate tab', () => __awaiter(void 0, void 0, void 0, function* () {
    var leaseTab = vdpPage.estimateTabs.get(0);
    protractor_1.browser.driver.wait(until.visibilityOf(leaseTab), MAX_TIME_WAIT, 'Lease estimate tab element taking too long to appear in the DOM');
    leaseTab.click();
}));
// When('User clicks on finance estimate tab', async () => {
// });
// When('User clicks on cash estimate tab', async () => {
// });
// When('User clicks on inventory save heart', async () => {
//     var heart : ElementFinder = vdpPage.saveHearts.get(0);
//     browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Inventory save heart element taking too long to appear in the DOM');
//     heart.click();
// });
cucumber_1.When('User clicks on estimate save heart', () => __awaiter(void 0, void 0, void 0, function* () {
    var heart = vdpPage.saveHearts.get(1);
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Lease estimate save heart element taking too long to appear in the DOM');
    heart.click();
}));
cucumber_1.Then('Save heart should turn active', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(vdpPage.saveHeartActive), MAX_TIME_WAIT, 'Save heart element taking too long to appear in the DOM');
    chai_1.expect((yield vdpPage.saveHeartActive.isPresent()).valueOf()).to.be.true;
}));
cucumber_1.Then('Save heart tooltip should open', () => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect((yield vdpPage.saveHeartTooltip.isPresent()).valueOf()).to.be.true;
}));
