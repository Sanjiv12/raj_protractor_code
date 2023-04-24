import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();


When('User clicks on Learn more CTA for a Protection product', async  () =>{
    await browser.driver.sleep(20*1000);
    vdpPage.ppLearnMore.click();
    await browser.driver.sleep(10*1000);
});

Then('System should open Protection products detail modal with Plan Name', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.ppModalPlanName.isDisplayed().valueOf()).to.eventually.be.true;
});

Then('System should open Protection products detail modal with Plan Description', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ppModalPlanDesc.isDisplayed().valueOf()).to.eventually.be.true;
});

Then('System should open Protection products detail modal with Video', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ppModalVideo.isDisplayed().valueOf()).to.eventually.be.true;
});

Then('System should open Protection products detail modal with Length of Coverage', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ppModalCoverageLength.isDisplayed().valueOf()).to.eventually.be.true;
});

Then('System should open Protection products detail modal with Total Due at Signing', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await vdpPage.ppModalTotalDue.getText()).length).to.be.gt(0);
});

Then('System should open Protection products detail modal with Select CTA', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ppModalSelectButton.isDisplayed().valueOf()).to.eventually.be.true;
});

Then('System should open Protection products detail modal with Plan Detail', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await vdpPage.ppModalPlanDetails.getText()).length).to.be.gt(0);
});

Then('System should open Protection products detail modal with View Brochure', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ppModalViewBrochure.isDisplayed().valueOf()).to.eventually.be.true;
});

Then('System should open Protection products detail modal with Disclaimers at the bottom', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.ppModalFooter.isDisplayed().valueOf()).to.eventually.be.true;
});


When('User selects a Protection product', async  () =>{
    await browser.driver.sleep(20*1000);
  //  vdpPage.ppPlanSelectCbClick.first().click();
    vdpPage.ppPlanSelectCbClick.click();
    await browser.driver.sleep(10*1000);
});


Then('System should update the total amount in Step 4', async () => {
    await browser.driver.sleep(5*1000);
    vdpPage.ppTotal.getText().then( async (value) => {
        //console.log('+++value - '+value);
        let total:number = Number(((value.replace('Total: $', '')).replace(',','')).trim());
        //console.log('+++total - '+total);
        
    }).catch((err) => console.log('+++errorr - '+ err));
});

Then('Price summary should be updated', async () => {
    await browser.driver.sleep(10*1000);
    vdpPage.dueAtSigning.getText().then((value) => {
        let due : number  = Number(((value.replace(' due at signing','')).replace('$','').trim()).replace(',',''));
        return Assertion.expect(due).to.be.gt(0);
    });    
});


When('User changes the plan for the Protection product selected', async  () =>{
    await browser.driver.sleep(5*1000);
   // vdpPage.ppPlanOptionClick.first().click();
    vdpPage.ppPlanOptionClick.click();
    await browser.driver.sleep(5*1000);
    vdpPage.ppPlanOption.first().click();
    await browser.driver.sleep(10*1000);
});


Then('System should not remove the check from Selection check box', async () => {
    await browser.driver.sleep(5*1000);
  //  return Assertion.expect(vdpPage.ppPlanSelectCb.isSelected()).to.be.true;
   // return Assertion.expect(vdpPage.accessoriesDetailModal.isDisplayed().valueOf()).to.eventually.be.true;
   return await vdpPage.ppPlanSelectCb1.isSelected().then((value)=>{
expect(value).to.equal(true);
});
});


When('User clicks on Select CTA', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.ppModalSelectButton.click();
    await browser.driver.sleep(10*1000);
});

Then('System should navigate back to Vehicle Details page with the protection product selected', async () => {
    await browser.driver.sleep(15*1000);
   // return Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['true']);
   return await vdpPage.ppPlanSelectCb1.isSelected().then((value)=>{
    console.log("check box value"+value);
expect(value).to.equal(true);
});
});

When('User clicks on Remove CTA for the Protection product', async  () =>{
    await browser.driver.sleep(10*1000);
    vdpPage.ppModalSelectButton.click();
    await browser.driver.sleep(10*1000);
});

Then('System should navigate back to Vehicle Details page with the protection product deselected', async () => {
    await browser.driver.sleep(10*1000);
 //   return Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['false']);
    return await vdpPage.ppPlanSelectCb1.isSelected().then((value)=>{
        console.log("check box value"+value);
    expect(value).to.equal(false);
});
});

When('User deselects the Select check box for the Protection product', async  () =>{
    await browser.driver.sleep(5*1000);
   // vdpPage.ppPlanSelectCbClick.first().click();
    vdpPage.ppPlanSelectCbClick.click();
});


When('User changes the Payment term in Step 1', async  () =>{
    await browser.driver.sleep(10*1000);
    //vdpPage.paymentOptionsList.click();
    browser.executeScript('arguments[0].click()', vdpPage.paymentOptionRb1);
    await browser.driver.sleep(10*1000);
});


Then('System should display warning message', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.alertModal.getText()).to.eventually.contain('Terms Changed');
});


Then('Deselect all the Protection products', async () => {
    await browser.driver.sleep(5*1000);
    vdpPage.alertModalButton.click();
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['false']);
});

Given('Protection products feature is not enabled for the dealer', async() => {
    await browser.driver.sleep(10*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    await browser.driver.sleep(5*1000);
    await browser.get("?dealerCd=14046&source=t1");
    await browser.driver.sleep(10*1000);   
});


When('User is in Vehicle Details page for the disabled dealer', async  () =>{
    mspFilterPage.appcardButton.each((ele,i) => {
        ele.getText().then((text) =>{
            if(text.includes('Available', 0)){
                console.log('appcard text - '+ text);
                ele.click().catch((err) => {});                
            }            
        }).catch((err) => {})
    }).catch((err) => {});
    await browser.driver.sleep(10*1000);
    vlpFilterPage.appCard.first().click();
    await browser.driver.sleep(10*1000);
});


Then('Protect your vehicle should not be displayed', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.productContainer.getText()).to.eventually.contain('There was a problem loading protection plans.');
});