import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class DigitalGarageTopNav {
    public dgMan: ElementFinder;
    public desktopSignInLink: ElementFinder;
    public desktopCreateAccountLink: ElementFinder;


    constructor() {
        this.dgMan = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-nav-bar/header/div/div[2]/div[2]/app-user-profile/div/div[1]/div[1]/img'));
        this.desktopSignInLink = element(by.id('dg-login-btn'));
        this.desktopCreateAccountLink = element(by.id('dg-register-btn'));

    }
}
