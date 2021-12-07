import { When, Then } from "cucumber";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";
import { NavMenu } from '../pages/navMenu';
import { AccountManagementPage } from "../pages/accountManagementPage";
import { expect } from "chai";
import { browser } from "protractor";
import { selectMostRecentTab } from "../util/selectMostRecentTab";

const navMenu : NavMenu = new NavMenu();
const accountManagement : AccountManagementPage = new AccountManagementPage();

When("User clicks on Manage Account in Top Nav", async () => {
    await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav');
    await navMenu.profileIcon.click();

    await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Top Nav Dropdown');
    await navMenu.dgManageAccount.click();
});

When("The Account Management Page loads in a new tab", async() => {
    await selectMostRecentTab();
    
    await waitForVisibilityOf(accountManagement.accountWrapper, "Account Management Page");
    expect(await accountManagement.accountWrapper.isDisplayed()).to.be.true;
});

When("User Changes Password", async() => {
    await waitForVisibilityOf(accountManagement.passwordReset, "Manage Password Button");
    await accountManagement.passwordReset.click();

    await waitForVisibilityOf(accountManagement.passwordEdit, "Password edit field");
    await accountManagement.currentPwd.sendKeys(browser.params.capwdreg);
    await accountManagement.newPwd.sendKeys(browser.params.capwdreg);
    await accountManagement.confirmPwd.sendKeys(browser.params.capwdreg);

    await accountManagement.updatePwdButton.click();
});

Then("Password is updated", async() => {
    await waitForVisibilityOf(accountManagement.updateSuccess, "Update password success message");
    expect(await accountManagement.updateSuccess.isDisplayed()).to.be.true;
});