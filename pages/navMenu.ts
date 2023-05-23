import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class NavMenu {

    //GXP Top Nav
    public profileIcon : ElementFinder;
    public dgComponentMenuDropdownDesktop : ElementFinder;
    public savesPageLinkOut : ElementFinder;
    public dgLoginButton : ElementFinder;
    public dgCreateAccountButton : ElementFinder;
    public dgOwnersLinkout : ElementFinder;
    public dgMenuMessages : ElementFinder[];
    public dgManageAccount : ElementFinder;
    public dgSignOutButton : ElementFinder;
    public continuePurchaseButton : ElementFinder;
    public desktopSignInLink : ElementFinder;
    public desktopCreateAccountLink : ElementFinder;

    constructor() {
        this.profileIcon = element(by.xpath('//div[@id="dg-man-icon"]'));
        this.dgComponentMenuDropdownDesktop = element(by.className('dg-component-menu-dropdown'));
        this.savesPageLinkOut= element(by.id('dg-menu-saves-page-linkout'));
        this.dgLoginButton = element(by.id('dg-login-btn'));
        this.dgCreateAccountButton = element(by.id('dg-register-btn'));
        this.dgOwnersLinkout = element(by.id('dg-menu-owners-page-linkout'));
        this.dgMenuMessages = [element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]/div/div[6]/span')), element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]/div/div[6]/div/span[1]'))];
        this.dgManageAccount = element(by.xpath('//*[@id="dg-account-btn"]'));
        this.dgSignOutButton = element(by.xpath('//*[@id="dg-logout-btn"]'));
        this.continuePurchaseButton = element(by.id('dg-menu-deals-page-linkout'))
        this.desktopSignInLink = element(by.id('dg-login-btn'));
        this.desktopCreateAccountLink = element(by.id('dg-register-btn'));
    }
}
