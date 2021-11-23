import { element, by } from "protractor";

export class SavesPageRedesign {
    standaloneContainer = element(by.xpath('//*[@id="dg-standalone-container"]'));

    savePageHeader = element(by.xpath('//*[@id="dg-saves-page-header"]'));
    savePageTitle = element(by.xpath('//*[@id="dg-header-my-saves-container"]'));
    savePageHeaderLogo = element(by.xpath('//*[@id="dg-header-logo"]'));

    public createAccountBanner = element(by.xpath('//*[@id="dg-create-account-banner"]'));
    public createAccountBannerMessage = element(by.xpath('//*[@id="dg-create-account-banner-message"]'));
    public createAccountBannerLinks = element(by.xpath('//*[@id="dg-create-account-banner-message"]')).all(by.xpath('//a[@class="dg-create-account-banner-link"]'));
    public createAccountBannerX = element(by.xpath('//*[@id="dg-create-account-banner-close-button"]'));

    public sideBar = element(by.xpath('//*[@id="dg-ui-nav-sidebar"]'));
    public sideBarHeader = element(by.xpath('//*[@id="dg-nav-sidebar-header"]'));
    public sideBarLinks = element(by.xpath('//*[@id="dg-nav-sidebar-links"]'));
    public sideBarSavesLink = element(by.xpath('//*[@id="dg-nav-sidebar-saves"]'));
    public sideBarVehiclesLink = element(by.xpath('//*[@id="dg-nav-sidebar-owners"]'));
    public sideBarBottomLinks = element(by.xpath('//*[@id="dg-bottom-sidebar-links-container"]'));
    public sideBarCreateAccountLink = element(by.xpath('//*[@id="dg-nav-sidebar-manage-account"]'));
    public sideBarManageAccountLink = this.sideBarCreateAccountLink;
    public sideBarSignInLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-in"]'));
    public sideBarSignOutLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-out"]'));
};