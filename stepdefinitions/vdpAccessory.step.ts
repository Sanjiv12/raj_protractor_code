import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();


When('User clicks Select Accessories in Step 3', async  () =>{
    browser.executeScript("window.scrollBy(0,250)");
    await waitForVisibilityOf(vdpPage.selectAccessories,"Select Accessories");    
    vdpPage.selectAccessories.click();
});
Then('System should open Accessories modal with list of accessories available for the vehicle', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesModal,"AccessoriesModal");
    return Assertion.expect(vdpPage.accessoriesModal.isDisplayed().valueOf()).to.eventually.be.true;
});

When('User clicks on View Details CTA for an accessory', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesViewDetail.first(),"AccessoriesViewDetail");
    vdpPage.accessoriesViewDetail.first().click();
});

Then('System should open Accessories detail modal', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesDetailModal,"AccessoriesDetailModel");
    return Assertion.expect(vdpPage.accessoriesDetailModal.isDisplayed().valueOf()).to.eventually.be.true;
});

When('User clicks on "Select" CTA', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesDetailModalSelect,"accessoriesDetailModalSelect");
    vdpPage.accessoriesDetailModalSelect.click();
});

Then('The Accessory should be displayed as selected', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesCardWrapper.first(),"accessoriesCardWrapper");
    return Assertion.expect(vdpPage.accessoriesCardWrapper.first().getAttribute('class')).to.eventually.contain('card-highlight');
});
Then('Count of accessories selected and Total value should be updated', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesSelectedCount,"accessoriesSelectedCount");
    vdpPage.accessoriesSelectedCount.getText().then( async (value) => {
        let count :number = Number(value.substring(value.lastIndexOf(':')+1, value.length).replace(' Remove All',''));
        expect((await vdpPage.accessoriesCardWrapper_elem.getAttribute('class')).length).to.equal(count);
    }).catch((err) => console.log('+++errorr - '+ err));
    await waitForVisibilityOf(vdpPage.accessoriesSelectedTotal,"accessoriesSelectedTotal");
    
    let Exp = await vdpPage.accessoriesSelectedTotal.getText();  
    let Act = await vdpPage.accessoriesPrice.getText();     
    let Exp_Total =((Exp.replace('Total: $', '')).replace('Done', '').replace('\nPrice includes parts and labor','')).trim();
    
    if (Exp_Total != "0"){
        Assertion.expect(((Exp.replace('Total: $', '')).replace('Done', '').replace('\nPrice includes parts and labor','')).trim()).to.equal(Act.replace('$','').trim());
    }else if (Exp_Total == "0"){
        Assertion.expect(Exp_Total).to.equal("0");
    }
});

When('User clicks on Select check box for an accessory', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesCheckBox.first(),"accessoriesCheckBox");
    vdpPage.accessoriesCheckBox.first().click();
});

When('User clicks on Done', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesDoneButton,"accessoriesDoneButton");
    vdpPage.accessoriesDoneButton.click();
});

Then('Personalize with Accessories should display the list of accessories selected', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesList,"accessoriesList");
    return Assertion.expect(vdpPage.accessoriesList.isDisplayed().valueOf()).to.eventually.be.true;
});

When('User clicks on Remove CTA for an accessory', async  () =>{
    await browser.driver.sleep(5*1000);
     // await waitForVisibilityOf(vdpPage.accessoriesRemove,"accessoriesRemove");
    vdpPage.accessoriesRemove.click();
});

Then('Accessory should be removed from Personalize with Accessories', async () => {
    await waitForVisibilityOf(vdpPage.selectAccessories,"selectAccessories");
    return Assertion.expect(vdpPage.selectAccessories.isDisplayed().valueOf()).to.eventually.be.false;
});

When('User deselects the Select check box', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesCheckBox.first(),"accessoriesCheckBox");
    vdpPage.accessoriesCheckBox.first().click();
});


Then('Accessory should be deselected', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesCardWrapper.first(),"accessoriesCardWrapper");
    return Assertion.expect(vdpPage.accessoriesCardWrapper.first().getAttribute('ng-reflect-ng-class')).to.not.eventually.equal('card-highlight');
});

When('User clicks on Remove CTA', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesDetailModalSelect,"accessoriesDetailModalSelect");
    vdpPage.accessoriesDetailModalSelect.click();
});

Then('System should navigate back to Accessories modal', async () => {
    await waitForVisibilityOf(vdpPage.accessoriesModal,"accessoriesModal");
    return Assertion.expect(vdpPage.accessoriesModal.isDisplayed().valueOf()).to.eventually.be.true;
});


When('User clicks on Remove All CTA', async  () =>{
    await waitForVisibilityOf(vdpPage.accessoriesRemoveAll,"accessoriesRemoveAll");
    vdpPage.accessoriesRemoveAll.click();
});




