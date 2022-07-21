import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class CreateAccountPage {
    public createAccountEmailForm: ElementFinder;
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
    public userName: ElementFinder;
    public logonBtn: ElementFinder;
    public userPwd: ElementFinder;
    public signInButton: ElementFinder;
    public loginLink: ElementFinder;
    public nextStepButton: ElementFinder;

    constructor() {
        this.createAccountEmailForm = element(by.xpath('//*[@id="createEmailForm"]'));
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
      //this.accountAlreadyReg = element(by.id('divAlreadyRegistered'));
      //this.checkEmail = element(by.id('divResendEmail'));
      //  this.checkEmail = element(by.xpath('//*[@id="divResendEmail"]/div/div[1]/span'));
        this.accountAlreadyReg = element(by.xpath('//div[@class="ng-star-inserted"]//span[contains(text(),"Sign In ")]'));
        this.checkEmail = element(by.xpath('//div[@id="divResendEmail"]/div/div[1]//span[contains(text(),"Check Your Email ")]'));
        this.loginLink = element(by.className('sign-in-btn'));
        this.userName = element(by.id('logonUsername__TO'));
        this.userName = element(by.name('username'));
        this.logonBtn = element(by.id('logonButton'));
        this.userPwd = element(by.name('password'));
        this.signInButton = element(by.xpath('//div[@class="button-right"]/button'));
        this.nextStepButton = element(by.id('logonButton'));
    }
}
