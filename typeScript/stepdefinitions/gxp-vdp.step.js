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
let MAX_TIME_WAIT = 5000;
cucumber_1.When('User clicks on an inventory save heart', () => __awaiter(void 0, void 0, void 0, function* () {
    var heart = vdpPage.inventorySaveHeart.get(0);
    ;
    protractor_1.browser.driver.wait(until.visibilityOf(heart), MAX_TIME_WAIT, 'Heart Element taking too long to appear in the DOM');
    heart.click();
}));
cucumber_1.Then('Inventory heart should turn active', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.wait(until.visibilityOf(vdpPage.inventorySaveHeartActive), MAX_TIME_WAIT, 'Active heart Element taking too long to appear in the DOM');
    chai_1.expect((yield vdpPage.inventorySaveHeartActive.isPresent()).valueOf()).to.be.true;
}));
cucumber_1.Then('Inventory heart tooltip should open', () => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect((yield vdpPage.inventorySaveHeartTooltip.isPresent()).valueOf()).to.be.true;
}));
