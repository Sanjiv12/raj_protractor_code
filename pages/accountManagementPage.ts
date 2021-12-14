import { element, by } from "protractor";

export class AccountManagementPage {
    accountWrapper = element(by.id("account-wrapper"));

    passwordReset = element(by.id("password-reset"));
    passwordEdit = element(by.id("password-edit"));

    currentPwd = element(by.id("field-first-name"));
    newPwd = element(by.id("field-mi"));
    confirmPwd = element(by.id("field-last-name"));

    updatePwdButton = element(by.id("button-save-security"));
    updateSuccess = element(by.id("update-success"));

}