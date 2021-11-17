import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class SavesPageRedesign {
    public standaloneContainer: ElementFinder;

    public sideBar : ElementFinder;
    public sideBarHeader : ElementFinder;
    public sideBarLinks : ElementFinder;
    public sideBarSavesLink : ElementFinder;
    public sideBarOwnersLink : ElementFinder;
    public sideBarBottomLinks : ElementFinder;
    public sideBarManageAccountLink : ElementFinder;
    public sideBarLogInLink: ElementFinder;
    public sideBarLogOutLink: ElementFinder;

    constructor() {
        this.standaloneContainer = element(by.xpath('//*[@id="dg-standalone-container"]'));

        this.sideBar = element(by.xpath('//*[@id="dg-ui-nav-sidebar"]'));
        this.sideBarHeader = element(by.xpath('//*[@id="dg-nav-sidebar-header"]'));
        this.sideBarLinks = element(by.xpath('//*[@id="dg-nav-sidebar-links"]'));
        this.sideBarSavesLink = element(by.xpath('//*[@id="dg-nav-sidebar-saves"]'));
        this.sideBarOwnersLink = element(by.xpath('//*[@id="dg-nav-sidebar-owners"]'));
        this.sideBarBottomLinks = element(by.xpath('//*[@id="dg-bottom-sidebar-links-container"]'));
        this.sideBarManageAccountLink = element(by.xpath('//*[@id="dg-nav-sidebar-manage-account"]'));
        this.sideBarLogInLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-in"]'));
        this.sideBarLogOutLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-out"]'));

    }
};