"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenu = void 0;
const protractor_1 = require("protractor");
class NavMenu {
    constructor() {
        this.profileIcon = protractor_1.element(protractor_1.by.className('dg-menu-dropdown-icon'));
        this.dgComponentMenuDropdownDesktop = protractor_1.element(protractor_1.by.className('dg-component-menu-dropdown'));
        this.savesPageLinkOut = protractor_1.element(protractor_1.by.id('dg-menu-saves-page-linkout'));
        this.dgLoginButton = protractor_1.element(protractor_1.by.id('dg-login-btn'));
        this.dgCreateAccountButton = protractor_1.element(protractor_1.by.id('dg-register-btn'));
        this.dgMenuMessages = [protractor_1.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]/div/div[6]/span')), protractor_1.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]/div/div[6]/div/span[1]'))];
        this.dgManageAccount = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-account-btn"]'));
        this.dgSignOutButton = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-logout-btn"]'));
    }
}
exports.NavMenu = NavMenu;
