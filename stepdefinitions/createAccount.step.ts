import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import {CreateAccountPage} from "../pages/createAccountPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"
import {BUTTON_LABELS} from "../util/Constants";

let vdpPage : VdpPage = new VdpPage();
let caPage : CreateAccountPage = new CreateAccountPage();


When('User clicks on Start Purchase', async  () =>{
    // check the secondary button text
    await vdpPage.startPurchaseForUnlockDealer.getText().then((txt) => {
        if (txt === BUTTON_LABELS.START_PURCHASE) {
            return vdpPage.startPurchaseForUnlockDealer.click();
        } else {
            return vdpPage.startPurchaseForNoUnlockDealer.click();
        }
    }).catch(() => {
        return vdpPage.startPurchaseForNoUnlockDealer.click();
    });
});


Then('System should navigate to Create Account Page', async  () => {
    try {
        await vdpPage.startPurchaseWaitSpinner.isDisplayed();
        await browser.driver.wait(protractor.until.elementIsNotVisible(vdpPage.startPurchaseWaitSpinner));
        return Assertion.expect(await browser.getCurrentUrl()).to.contain('account?dealerCd=');
    } catch {
        return Assertion.expect(await browser.getCurrentUrl()).to.contain('account?dealerCd=');
    }
});

Then('Display the Email text box', async  () =>{
    return Assertion.expect((await caPage.createAccountEmail.isDisplayed()).valueOf()).to.be.true;
});

Then('Display the First name text box', async  () =>{
    return Assertion.expect((await caPage.createAccountFirstName.isDisplayed()).valueOf()).to.be.true;
});

Then('Display the Last name text box', async  () =>{
    return Assertion.expect((await caPage.createAccountLastName.isDisplayed()).valueOf()).to.be.true;
});

Then('Display the Phone number text box', async  () =>{
    return Assertion.expect((await caPage.createAccountPhone.isDisplayed()).valueOf()).to.be.true;
});

Then('Display the Password text box', async  () =>{
    return Assertion.expect((await caPage.createAccountPassword.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Google Social Login', async  () =>{
    return Assertion.expect((await caPage.createAccountGoogleButton.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Facebook Social Login', async  () =>{
    return Assertion.expect((await caPage.createAccountFbButton.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Apple Social Login', async  () =>{
    return Assertion.expect((await caPage.createAccountAppleButton.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Create Account CTA as disabled', async  () =>{
    return Assertion.expect((await caPage.createAccountButton.isEnabled()).valueOf()).to.be.false;
});

When('User does not enter valid values for Email, Name, Phone and Password', async  () =>{
    await browser.driver.sleep(5*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountEmail);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountFirstName);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountLastName);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountPhone);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountPassword);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountButton);
});

Then('System should display the first name text box in error state for create account', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(caPage.createAccountFirstName.getAttribute('aria-invalid')).to.eventually.equal('true');
});

Then('System should display the last name text box in error state for create account', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(caPage.createAccountLastName.getAttribute('aria-invalid')).to.eventually.equal('true');
});

Then('System should display the email text box in error state for create account', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(caPage.createAccountEmail.getAttribute('aria-invalid')).to.eventually.equal('true');
});

Then('System should display the phone text box in error state for create account', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(caPage.createAccountPhone.getAttribute('aria-invalid')).to.eventually.equal('true');
});

When('User starts entering password', async  () =>{
    await browser.driver.sleep(5*1000);
    caPage.createAccountPassword.sendKeys('Validate123');
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", caPage.createAccountFirstName);
});


Then('System should validate the mandatory conditions and display ones which are satisfied with a tick mark', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await caPage.passwordError.isDisplayed()).valueOf()).to.be.true;
});


When('User enters First and Last name registered previously', async  () =>{
    caPage.createAccountFirstName.sendKeys(browser.params.fname);
    await browser.driver.sleep(1*1000);
    caPage.createAccountLastName.sendKeys(browser.params.lname);
    await browser.driver.sleep(1*1000);
});

When('User enters Phone registered previously', async  () =>{
    caPage.createAccountPhone.sendKeys(browser.params.caphonenew);
    await browser.driver.sleep(1*1000);
});

When('User enters a valid password', async  () =>{
    caPage.createAccountPassword.sendKeys(browser.params.capwdnew);
    await browser.driver.sleep(1*1000);
});


When('User enters an email id registered previously', async  () =>{
    await browser.driver.sleep(5*1000);
    caPage.createAccountEmail.sendKeys(browser.params.caemailreg);
    await browser.driver.sleep(1*1000);
});

When('User clicks on Create Account', async  () =>{
    browser.executeScript("arguments[0].click()", caPage.createAccountButton);
    await browser.driver.sleep(1*1000);
});

Then('System should display Sign In page', async  () =>{
    await browser.driver.sleep(5*1000);
    return Assertion.expect(caPage.accountAlreadyReg.getText()).to.eventually.contain('Sign In');
});


When('User enters an email id not registered previously', async  () =>{
    await browser.driver.sleep(5*1000);
    caPage.createAccountEmail.sendKeys(browser.params.caemailnew);
    await browser.driver.sleep(1*1000);
});

When('User enters First and Last name not registered previously', async  () =>{
    caPage.createAccountFirstName.sendKeys(browser.params.fname);
    await browser.driver.sleep(1*1000);
    caPage.createAccountLastName.sendKeys(browser.params.lname);
    await browser.driver.sleep(1*1000);
});

When('User enters Phone not registered previously', async  () =>{
    caPage.createAccountPhone.sendKeys(browser.params.caphonenew);
    await browser.driver.sleep(1*1000);
});

Then('System should display Check your mail page', async  () =>{
    await browser.driver.sleep(5*1000);
    return Assertion.expect(caPage.checkEmail.getText()).to.eventually.contain('Check Your Email');
});
