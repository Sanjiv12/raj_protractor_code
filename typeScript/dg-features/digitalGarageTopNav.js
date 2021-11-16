"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalGarageTopNav = void 0;
const protractor_1 = require("protractor");
class DigitalGarageTopNav {
    constructor() {
        this.dgMan = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-nav-bar/header/div/div[2]/div[2]/app-user-profile/div/div[1]/div[1]/img'));
        this.desktopSignInLink = protractor_1.element(protractor_1.by.id('dg-login-btn'));
        this.desktopCreateAccountLink = protractor_1.element(protractor_1.by.id('dg-register-btn'));
    }
}
exports.DigitalGarageTopNav = DigitalGarageTopNav;
