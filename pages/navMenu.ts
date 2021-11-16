import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class NavMenu {

    //GXP Top Nav
    public profileIcon : ElementFinder;
    public dgComponentMenuDropdownDesktop : ElementFinder;
    public savesPageLinkOut : ElementFinder;
    public dgLoginButton : ElementFinder;
    public dgCreateAccountButton : ElementFinder;
    public dgMenuMessages : ElementFinder[];
    constructor() {
        this.profileIcon = element(by.className('dg-menu-dropdown-icon'));
        this.dgComponentMenuDropdownDesktop = element(by.className('dg-component-menu-dropdown'));
        this.savesPageLinkOut= element(by.id('dg-menu-saves-page-linkout'));
        this.dgLoginButton = element(by.id('dg-login-btn'));
        this.dgCreateAccountButton = element(by.id('dg-register-btn'));
        this.dgMenuMessages = [element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]/div/div[6]/span')), element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]/div/div[6]/div/span[1]'))];
    }
}