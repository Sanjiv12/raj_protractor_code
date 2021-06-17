"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenu = void 0;
const protractor_1 = require("protractor");
class NavMenu {
    constructor() {
        this.profileIcon = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]'));
        this.dgComponentMenuDropdownDesktop = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]'));
    }
}
exports.NavMenu = NavMenu;
