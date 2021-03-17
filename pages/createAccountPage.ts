import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class CreateAccountPage {
    public createAccountFirstName: ElementFinder;
    public createAccountLastName: ElementFinder;
    public createAccountEmail: ElementFinder;
    public createAccountPhone: ElementFinder;
    public createAccountPassword: ElementFinder;
    public createAccountGoogleButton: ElementFinder;
    public createAccountFbButton: ElementFinder;
    public createAccountAppleButton: ElementFinder;
    public createAccountButton: ElementFinder;    
    public passwordError: ElementFinder;
    public createAccountError: ElementFinder;
    public accountAlreadyReg: ElementFinder;
    public checkEmail: ElementFinder;

    constructor() {
        this.createAccountFirstName = element(by.xpath('//div[@class="customer-name-field"]/div[1]/con-textfield/div/mat-form-field/div/div[1]/div[3]/input'));
        this.createAccountLastName = element(by.xpath('//div[@class="customer-name-field"]/div[2]/con-textfield/div/mat-form-field/div/div[1]/div[3]/input'));
        this.createAccountEmail = element(by.css("input[type='email']"));
        this.createAccountPhone = element(by.css("input[type='tel']"));
        this.createAccountPassword = element(by.css("input[type='password']"));
        this.createAccountGoogleButton = element(by.css('button.google-icon'));
        this.createAccountFbButton = element(by.css('button.facebook-icon'));
        this.createAccountAppleButton = element(by.css('button.apple-icon')); 
        this.createAccountButton = element(by.css('button.primary-button'));
        this.passwordError = element(by.css('img.password-error'));
        this.createAccountError = element(by.id('divAccountError'));
        this.accountAlreadyReg = element(by.id('divAlreadyRegistered'));
        this.checkEmail = element(by.id('divResendEmail'));
    }
}