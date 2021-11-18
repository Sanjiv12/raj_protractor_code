"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountPage = void 0;
const protractor_1 = require("protractor");
class CreateAccountPage {
    constructor() {
        this.createAccountEmailForm = protractor_1.element(protractor_1.by.xpath('//*[@id="createEmailForm"]'));
        this.createAccountFirstName = protractor_1.element(protractor_1.by.xpath('//div[@class="customer-name-field"]/div[1]/con-textfield/div/mat-form-field/div/div[1]/div[3]/input'));
        this.createAccountLastName = protractor_1.element(protractor_1.by.xpath('//div[@class="customer-name-field"]/div[2]/con-textfield/div/mat-form-field/div/div[1]/div[3]/input'));
        this.createAccountEmail = protractor_1.element(protractor_1.by.css("input[type='email']"));
        this.createAccountPhone = protractor_1.element(protractor_1.by.css("input[type='tel']"));
        this.createAccountPassword = protractor_1.element(protractor_1.by.css("input[type='password']"));
        this.createAccountGoogleButton = protractor_1.element(protractor_1.by.css('button.google-icon'));
        this.createAccountFbButton = protractor_1.element(protractor_1.by.css('button.facebook-icon'));
        this.createAccountAppleButton = protractor_1.element(protractor_1.by.css('button.apple-icon'));
        this.createAccountButton = protractor_1.element(protractor_1.by.css('button.primary-button'));
        this.passwordError = protractor_1.element(protractor_1.by.css('img.password-error'));
        this.createAccountError = protractor_1.element(protractor_1.by.id('divAccountError'));
        this.accountAlreadyReg = protractor_1.element(protractor_1.by.id('divAlreadyRegistered'));
        this.checkEmail = protractor_1.element(protractor_1.by.id('divResendEmail'));
        this.userName = protractor_1.element(protractor_1.by.name('username'));
        this.logonBtn = protractor_1.element(protractor_1.by.id('logonButton'));
        this.userPwd = protractor_1.element(protractor_1.by.name('password'));
        this.signInBtn = protractor_1.element(protractor_1.by.xpath('//div[@class="button-right"]/button'));
    }
}
exports.CreateAccountPage = CreateAccountPage;
