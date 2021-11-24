import { browser, by, By, element, ExpectedConditions, protractor } from "protractor";
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import {VdpPage} from "../pages/vdpPage"
import {CreateAccountPage} from "../pages/createAccountPage"
import {Assertion} from "../util/assertion"
import { NavMenu } from "../pages/navMenu";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

let vdpPage : VdpPage = new VdpPage();
let caPage : CreateAccountPage = new CreateAccountPage();
let navMenu : NavMenu = new NavMenu();
let MAX_TIME_WAIT = 10000;

async function hasNotPreviouslyLoggedIn() {
   return await browser.driver.getCurrentUrl().then((url) => {
       return url.includes('account.toyota.com');
   });
}

// Matches both 'User Signs In' and 'User Signs In "Email" "Password"
// When (User Signs In OPTIONAL: email OPTIONAL: password)
When(/User Signs In(\s\"(.*?)\")?(\s\"(.*?)\")?/ , async  (email? : string, pwd? : string) =>{
    await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon');
    await navMenu.profileIcon.click();
    await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Dropdown Element');
    
    const useEmail = email || browser.params.caemailreg;
    const usePwd = pwd || browser.params.capwdreg
    await navMenu.desktopSignInLink.click();
    if (await hasNotPreviouslyLoggedIn()) {
        await caPage.userName.sendKeys(useEmail);
        await caPage.nextStepButton.click();
        await caPage.userPwd.sendKeys(usePwd);
        await caPage.signInButton.click();
        await browser.driver.sleep(MAX_TIME_WAIT);
    }
});


Then('System should navigate the user to Review Deal page', async  () =>{
    return Assertion.expect(await browser.getCurrentUrl()).to.contain('inventory/review');
});

Then('System should display Enter Zip Code modal', async  () =>{
    return Assertion.expect(vdpPage.zipCodeModal.isDisplayed()).to.eventually.be.true;
});


When('User does not confirm Zip code in Enter Zip Code modal', async  () =>{
    await vdpPage.closeZipCodeModal.click();
});


Then('System should display Confirm your residential zip to proceed CTA at the bottom', async  () =>{
    return Assertion.expect((await vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Edit Zip in Price details - Taxes & Fees highlighted in Red text', async  () =>{
    return Assertion.expect(vdpPage.zipTaxDesc.getCssValue('color')).to.eventually.equal('rgba(235, 10, 30, 1)');
});

Then('Display Next button in disabled state', async  () =>{
    return Assertion.expect((await vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.false;
});


When('User clicks on Confirm your residential zip to proceed CTA', async  () =>{
    await vdpPage.confirmZipText.click();
});

When('User enters a valid Zip code in Enter Zip Code modal', async  () =>{
    await vdpPage.zipCodeModalInput.clear();
    await vdpPage.zipCodeModalInput.sendKeys(browser.params.zipcode);
});

When('User clicks on Done in Zip Code Modal', async  () =>{
    await vdpPage.zipCodeModalDoneBtn.click();
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

When('User clicks on Edit Details CTA', async  () =>{
    await vdpPage.editDetailsBtn.click();
});

When('User clicks on Next: Choose Financing CTA', async  () =>{
    await vdpPage.chsFinanceBtn.click();
});

Then('System should display Apply for Credit page with I have financing selected by default', async  () =>{
    return Assertion.expect(vdpPage.ownFinance.getAttribute('class')).to.eventually.contain('selected');
});

When('User clicks on I want financing', async  () =>{
    await vdpPage.tfsFinance.click();
});

Then('System should display Apply financing modal', async  () =>{
    return Assertion.expect((await vdpPage.tfsFinance.isDisplayed()).valueOf()).to.be.true;
});

When('User clicks on Accept in the Apply financing modal', async  () =>{
    await vdpPage.acceptApplyFinanceModalBtn.click();
});

Then('System should display authorization disclaimer below I want financing in selected state', async  () =>{
    return Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.contain('mat-checkbox-checked');
});

When('User clicks on Not now in the Apply financing modal', async  () =>{
    await vdpPage.notNowApplyFinanceModalBtn.click();
    browser.executeScript("arguments[0].click()", vdpPage.notNowApplyFinanceModalBtn);
});

Then('System should display authorization disclaimer below I want financing in de-selected state', async  () =>{
    return Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.not.contain('mat-checkbox-checked');
});
