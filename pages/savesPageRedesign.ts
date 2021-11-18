import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class SavesPageRedesign {
    public standaloneContainer: ElementFinder;

    public savePageHeader: ElementFinder; 
    public savePageTitle: ElementFinder;
    public savePageHeaderLogo: ElementFinder;

    public createAccountBanner: ElementFinder;
    public createAccountBannerMessage: ElementFinder;
    public createAccountBannerLinks: ElementArrayFinder;

    public sideBar : ElementFinder;
    public sideBarHeader : ElementFinder;
    public sideBarLinks : ElementFinder;
    public sideBarSavesLink : ElementFinder;
    public sideBarVehiclesLink : ElementFinder;
    public sideBarBottomLinks : ElementFinder;
    public sideBarCreateAccountLink : ElementFinder;
    public sideBarManageAccountLink : ElementFinder;
    public sideBarSignInLink: ElementFinder;
    public sideBarSignOutLink: ElementFinder;

    constructor() {
        this.standaloneContainer = element(by.xpath('//*[@id="dg-standalone-container"]'));

        this.savePageHeader = element(by.xpath('//*[@id="dg-saves-page-header"]'));
        this.savePageTitle = element(by.xpath('//*[@id="dg-header-my-saves-container"]'));
        this.savePageHeaderLogo = element(by.xpath('//*[@id="dg-header-logo"]'));

        this.createAccountBanner = element(by.xpath('//*[@id="dg-create-account-banner"]'));
        this.createAccountBannerMessage = element(by.xpath('//*[@id="dg-create-account-banner-message"]'));
        this.createAccountBannerLinks = element(by.xpath('//*[@id="dg-create-account-banner-message"]')).all(by.id('dg-create-account-banner-link'));

        this.sideBar = element(by.xpath('//*[@id="dg-ui-nav-sidebar"]'));
        this.sideBarHeader = element(by.xpath('//*[@id="dg-nav-sidebar-header"]'));
        this.sideBarLinks = element(by.xpath('//*[@id="dg-nav-sidebar-links"]'));
        this.sideBarSavesLink = element(by.xpath('//*[@id="dg-nav-sidebar-saves"]'));
        this.sideBarVehiclesLink = element(by.xpath('//*[@id="dg-nav-sidebar-owners"]'));
        this.sideBarBottomLinks = element(by.xpath('//*[@id="dg-bottom-sidebar-links-container"]'));
        this.sideBarCreateAccountLink = element(by.xpath('//*[@id="dg-nav-sidebar-manage-account"]'));
        this.sideBarManageAccountLink = this.sideBarCreateAccountLink;
        this.sideBarSignInLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-in"]'));
        this.sideBarSignOutLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-out"]'));

    }
};