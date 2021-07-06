import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class NavMenu {
    
    //GXP Top Nav
    public profileIcon : ElementFinder;
    public dgComponentMenuDropdownDesktop : ElementFinder;
    public savesPageLinkOut : ElementFinder;
    constructor() {
        this.profileIcon = element(by.className('dg-menu-dropdown-icon'));
        this.dgComponentMenuDropdownDesktop = element(by.id('dg-component-nav-menu-desktop'));
        this.savesPageLinkOut= element(by.id('dg-menu-saves-page-linkout'));
    }
}