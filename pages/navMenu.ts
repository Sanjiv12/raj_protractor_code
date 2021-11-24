import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class NavMenu {
    
    //GXP Top Nav
    public profileIcon : ElementFinder;
    public dgComponentMenuDropdownDesktop : ElementFinder;
    public savesPageLinkOut : ElementFinder;
    public dgLoginButton : ElementFinder;
    public desktopSignInLink : ElementFinder;
    public desktopCreateAccountLink : ElementFinder;
    constructor() {
        this.profileIcon = element(by.xpath('//*[contains(@class, "dg-menu-dropdown-icon")]/img[@alt="Select to display the Digital Garage menu options"]'));
        this.dgComponentMenuDropdownDesktop = element(by.className('dg-component-menu-dropdown'));
        this.savesPageLinkOut= element(by.id('dg-menu-saves-page-linkout'));
        this.dgLoginButton = element(by.id('dg-login-btn'));
        this.desktopSignInLink = element(by.id('dg-login-btn'));
        this.desktopCreateAccountLink = element(by.id('dg-register-btn'));
    }
}