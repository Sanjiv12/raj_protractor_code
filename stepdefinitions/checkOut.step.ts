import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor";
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import {VdpPage} from "../pages/vdpPage"
import {CreateAccountPage} from "../pages/createAccountPage"
import {Assertion} from "../util/assertion"
import {DigitalGarageTopNav} from "../dg-features/digitalGarageTopNav";
import { NavMenu } from "../pages/navMenu";
import {CSS_CLASSES, INVENTORY_REVIEW_URL, LOGIN_PAGE_URL, ATTRIBUTES} from "../util/Constants";

let createAccountPage : CreateAccountPage = new CreateAccountPage();
let navMenu : NavMenu = new NavMenu();
let vdpPage : VdpPage = new VdpPage();
let caPage : CreateAccountPage = new CreateAccountPage();
let topNav : DigitalGarageTopNav = new DigitalGarageTopNav();

Then('System should navigate the user to Review Deal page', async  () =>{
    await vdpPage.reviewDealPageTitle.isDisplayed();
    return Assertion.expect(await browser.getCurrentUrl()).to.contain(INVENTORY_REVIEW_URL);
});

Then('System should display Enter Zip Code modal', async  () =>{
    return Assertion.expect(vdpPage.zipCodeModal.isDisplayed() || vdpPage.zipCodeWarningModal.isDisplayed()).to.eventually.be.true;
});


When('User does not confirm Zip code in Enter Zip Code modal', async  () =>{
    await vdpPage.closeZipCodeModal.click();
});


Then('System should display Confirm your residential zip to proceed CTA at the bottom', async  () =>{
    return Assertion.expect((await vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Edit Zip in Price details - Taxes & Fees highlighted in Red text', async  () =>{
    return Assertion.expect(vdpPage.zipTaxDesc.getCssValue(ATTRIBUTES.COLOR)).to.eventually.equal('rgba(235, 10, 30, 1)');
});

Then('Display Next button in disabled state', async  () =>{
    return Assertion.expect((await vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.false;
});


When('User clicks on Confirm your residential zip to proceed CTA', async  () =>{
    await vdpPage.confirmZipText.click();
});

When('User enters a valid Zip code in Enter Zip Code modal', async  () =>{
    try {
        await vdpPage.zipCodeWarningModal.isDisplayed();
        await vdpPage.zipCodeWarningDoneButton.click();
        await vdpPage.zipCodeModalInput.clear();
        await vdpPage.zipCodeModalInput.sendKeys(browser.params.zipcode);
    } catch {
        await vdpPage.zipCodeModalInput.clear();
        await vdpPage.zipCodeModalInput.sendKeys(browser.params.zipcode);
    }
});

When('User clicks on Done in Zip Code Modal', async  () =>{
    await vdpPage.zipCodeModalDoneBtn.click().then(() => {
        if (vdpPage.zipCodeWarningModal.isDisplayed()) {
            return vdpPage.zipCodeWarningDoneButton.click();
        }
    }).catch(() => {
        return;
    });
});


Then('System should display updated Zip Code in Review Deal page as part of Taxes & Fees', async  () =>{
    return vdpPage.startPurchaseWaitSpinner.isDisplayed().then(() => {
        browser.driver.wait(protractor.until.elementIsNotVisible(vdpPage.startPurchaseWaitSpinner));
        return Assertion.expect(vdpPage.reviewDealZipCode.getText()).to.eventually.contain(browser.params.zipcode);
    }).catch(() => {
    return Assertion.expect(vdpPage.reviewDealZipCode.getText()).to.eventually.contain(browser.params.zipcode);
    })
});

Then('System should NOT display Confirm your residential zip to proceed CTA at the bottom', async  () =>{
    return Assertion.expect((vdpPage.confirmZipText.isDisplayed())).to.eventually.be.false;
});

Then('Display Next button in enabled state', async  () =>{
    return Assertion.expect((vdpPage.chsFinanceBtn.isEnabled())).to.eventually.be.true;
});

Then('Display Confirm & Submit button in enabled state', async  () =>{
    return Assertion.expect((vdpPage.confirmAndSubmitButton.isEnabled())).to.eventually.be.true;
});

When('User clicks on Edit Details CTA', async  () =>{
    await vdpPage.startPurchaseWaitSpinner.isDisplayed().then(() => {
        browser.driver.wait(protractor.until.elementIsNotVisible(vdpPage.startPurchaseWaitSpinner));
        return vdpPage.editDetailsBtn.click();
    }).catch(() => {
        return vdpPage.editDetailsBtn.click();
    })
});

When('User clicks on Next: Choose Financing CTA', async  () => {
    await vdpPage.startPurchaseWaitSpinner.isDisplayed().then(() => {
        browser.driver.wait(protractor.until.elementIsNotVisible(vdpPage.startPurchaseWaitSpinner));
        return vdpPage.chsFinanceBtn.click();
    }).catch(() => {
        return vdpPage.chsFinanceBtn.click();
    });
});

Then('System should display Apply for Credit page with I have financing selected by default', async  () =>{
    return Assertion.expect(vdpPage.ownFinance.getAttribute(ATTRIBUTES.CLASS)).to.eventually.contain(CSS_CLASSES.ANGULAR_RADIO_INPUT_CHECKED);
});

When('User clicks on I want financing', async  () =>{
    await vdpPage.startPurchaseWaitSpinner.isDisplayed().then(() => {
        browser.driver.wait(protractor.until.elementIsNotVisible(vdpPage.startPurchaseWaitSpinner));
        vdpPage.tfsFinance.click();
    }).catch(() => {
        return vdpPage.tfsFinance.click();
    });

});

Then('System should display Apply financing modal', async  () =>{
    return Assertion.expect((await vdpPage.applyFinanceModal.isDisplayed()).valueOf()).to.be.true;
});

When('User clicks on Accept in the Apply financing modal', async  () =>{
    await vdpPage.applyFinanceModal.isDisplayed();
    await vdpPage.acceptApplyFinanceModalBtn.click();
});

Then('System should display authorization disclaimer below I want financing in selected state', async  () =>{
    return Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.contain(CSS_CLASSES.ANGULAR_CHECKBOX_INPUT_CHECKED);
});

When('User clicks on Not now in the Apply financing modal', async  () =>{
    await vdpPage.applyFinanceModal.isDisplayed();
    await vdpPage.notNowApplyFinanceModalBtn.click();
});

Then('System should display authorization disclaimer below I want financing in de-selected state', async  () =>{
    return Assertion.expect(vdpPage.authTfsCb.getAttribute(ATTRIBUTES.CLASS)).to.eventually.not.contain(CSS_CLASSES.ANGULAR_CHECKBOX_INPUT_CHECKED);
});
