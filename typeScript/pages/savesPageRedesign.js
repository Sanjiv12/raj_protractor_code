"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavesPageRedesign = void 0;
const protractor_1 = require("protractor");
class SavesPageRedesign {
    constructor() {
        this.standaloneContainer = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-standalone-container"]'));
        this.savePageHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-saves-page-header"]'));
        this.savePageTitle = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-header-my-saves-container"]'));
        this.savePageHeaderLogo = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-header-logo"]'));
        this.createAccountBanner = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-create-account-banner"]'));
        this.createAccountBannerMessage = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-create-account-banner-message"]'));
        this.createAccountBannerLinks = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-create-account-banner-message"]')).all(protractor_1.by.xpath('//a[@class="dg-create-account-banner-link"]'));
        this.createAccountBannerX = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-create-account-banner-close-button"]'));
        this.sideBar = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-ui-nav-sidebar"]'));
        this.sideBarHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-header"]'));
        this.sideBarLinks = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-links"]'));
        this.sideBarSavesLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-saves"]'));
        this.sideBarVehiclesLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-owners"]'));
        this.sideBarBottomLinks = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-bottom-sidebar-links-container"]'));
        this.sideBarCreateAccountLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-manage-account"]'));
        this.sideBarManageAccountLink = this.sideBarCreateAccountLink;
        this.sideBarSignInLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-log-in"]'));
        this.sideBarSignOutLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-log-out"]'));
    }
}
exports.SavesPageRedesign = SavesPageRedesign;
;
