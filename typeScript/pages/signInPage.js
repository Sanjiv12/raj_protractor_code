"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInPage = void 0;
const protractor_1 = require("protractor");
class SignInPage {
    constructor() {
        this.signInPageGrid = protractor_1.element(protractor_1.by.xpath('//*[@id="root"]/div/div/div[1]/div[4]'));
    }
}
exports.SignInPage = SignInPage;
