import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class SignInPage {
    public signInPageGrid: ElementFinder;

    constructor() {
        this.signInPageGrid = element(by.xpath('//*[@id="root"]/div/div/div[1]/div[4]'));
    }
}