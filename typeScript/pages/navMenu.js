"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenu = void 0;
const protractor_1 = require("protractor");
class NavMenu {
    constructor() {
        this.profileIcon = protractor_1.element(protractor_1.by.className('dg-menu-dropdown-icon'));
        this.dgComponentMenuDropdownDesktop = protractor_1.element(protractor_1.by.className('dg-component-menu-dropdown'));
        this.savesPageLinkOut = protractor_1.element(protractor_1.by.id('dg-menu-saves-page-linkout'));
    }
}
exports.NavMenu = NavMenu;
