import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class NavMenu {
    
    //GXP Top Nav
    public profileIcon : ElementFinder;
    public dgComponentMenuDropdownDesktop : ElementFinder;

    constructor() {
        this.profileIcon = element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]'));
        this.dgComponentMenuDropdownDesktop = element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[2]'));
    }
}