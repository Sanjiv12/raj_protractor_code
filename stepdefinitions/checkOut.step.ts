import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import {CreateAccountPage} from "../pages/createAccountPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();
let caPage : CreateAccountPage = new CreateAccountPage();


When('User Signs In', async  () =>{
    // await browser.get("https://tcom_user:@1L!gaT0r@qa.smartpath.tldealersystems.com/inventory/details?dealerCd=24022&vin=JTEBU5JR6L5768172&source=t3&zipcode=63141");
    // await browser.driver.sleep(10*1000);
    // browser.driver.manage().deleteAllCookies();
    // browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    // await browser.driver.sleep(5*1000);
    await browser.driver.sleep(15*1000);
    
    //console.log('text --- '+(await (vdpPage.rightPaneMenu.getText())).valueOf());
    if((await (vdpPage.rightPaneMenu.getText())).valueOf().toLowerCase().includes('sign in')){
        console.log('In here');
        browser.actions().mouseMove(vdpPage.signInBtn).perform();
        await browser.driver.sleep(2*1000);
        browser.actions().click(vdpPage.signInBtn).perform();
        await browser.driver.sleep(7*1000);
        caPage.userName.sendKeys(browser.params.caemailreg);
        await browser.driver.sleep(2*1000);
        browser.executeScript("arguments[0].click()", caPage.logonBtn);
        await browser.driver.sleep(5*1000);
        caPage.userPwd.sendKeys(browser.params.capwdreg);
        await browser.driver.sleep(2*1000);
        browser.executeScript("arguments[0].click()", caPage.signInBtn);
        //await browser.driver.sleep(10*1000);
    }
});


Then('System should navigate the user to Review Deal page', async  () =>{
    await browser.driver.sleep(10*1000);
    return Assertion.expect(await browser.getCurrentUrl()).to.contain('inventory/review');
});

Then('System should display Enter Zip Code modal', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await vdpPage.zipCodeModal.isDisplayed()).valueOf()).to.be.true;
});


When('User does not confirm Zip code in Enter Zip Code modal', async  () =>{
    await browser.driver.sleep(10*1000);
    browser.executeScript("arguments[0].click()", vdpPage.closeZipCodeModal);
});


Then('System should display Confirm your residential zip to proceed CTA at the bottom', async  () =>{
    await browser.driver.sleep(5*1000);
    return Assertion.expect((await vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Edit Zip in Price details - Taxes & Fees highlighted in Red text', async  () =>{
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.zipTaxDesc.getCssValue('color')).to.eventually.equal('rgba(235, 10, 30, 1)');
});

Then('Display Next button in disabled state', async  () =>{
    await browser.driver.sleep(1*1000);
    return Assertion.expect((await vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.false;
});


When('User clicks on Confirm your residential zip to proceed CTA', async  () =>{
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vdpPage.confirmZipText);
});

When('User enters a valid Zip code in Enter Zip Code modal', async  () =>{
    await browser.driver.sleep(10*1000);
    vdpPage.zipCodeModalInput.clear();
    await browser.driver.sleep(1*1000);
    vdpPage.zipCodeModalInput.sendKeys(browser.params.zipcode);
});

When('User clicks on Done in Zip Code Modal', async  () =>{
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vdpPage.zipCodeModalDoneBtn);
});


Then('System should display updated Zip Code in Review Deal page as part of Taxes & Fees', async  () =>{
    await browser.driver.sleep(10*1000);
    return Assertion.expect(vdpPage.reviewDealZipCode.getText()).to.eventually.contain(browser.params.zipcode);
});

Then('System should NOT display Confirm your residential zip to proceed CTA at the bottom', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await vdpPage.confirmZipText.isDisplayed()).valueOf()).to.be.false;
});

Then('Display Next button in enabled state', async  () =>{
    await browser.driver.sleep(1*1000);
    return Assertion.expect((await vdpPage.chsFinanceBtn.isEnabled()).valueOf()).to.be.true;
});

When('User clicks on Edit Details CTA', async  () =>{
    await browser.driver.sleep(10*1000);
    browser.executeScript("arguments[0].click()", vdpPage.editDetailsBtn);
});

When('User clicks on Next: Choose Financing CTA', async  () =>{
    await browser.driver.sleep(10*1000);
    browser.executeScript("arguments[0].click()", vdpPage.chsFinanceBtn);
});

Then('System should display Apply for Credit page with I have financing selected by default', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ownFinance.getAttribute('class')).to.eventually.contain('selected');
});

When('User clicks on I want financing', async  () =>{
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vdpPage.tfsFinance);
});

Then('System should display Apply financing modal', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await vdpPage.tfsFinance.isDisplayed()).valueOf()).to.be.true;
});

When('User clicks on Accept in the Apply financing modal', async  () =>{
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vdpPage.acceptApplyFinanceModalBtn);
});

Then('System should display authorization disclaimer below I want financing in selected state', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.contain('mat-checkbox-checked');
});

When('User clicks on Not now in the Apply financing modal', async  () =>{
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vdpPage.notNowApplyFinanceModalBtn);
});

Then('System should display authorization disclaimer below I want financing in de-selected state', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.authTfsCb.getAttribute('class')).to.eventually.not.contain('mat-checkbox-checked');
});