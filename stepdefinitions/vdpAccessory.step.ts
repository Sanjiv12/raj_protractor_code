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


When('User clicks Select Accessories in Step 3', async  () =>{
    await browser.driver.sleep(20*1000);
    vdpPage.selectAccessories.click();
});

Then('System should open Accessories modal with list of accessories available for the vehicle', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.accessoriesModal.isDisplayed().valueOf()).to.eventually.be.true;
});

When('User clicks on View Details CTA for an accessory', async  () =>{
    await browser.driver.sleep(5*1000);
    //vdpPage.accessoriesViewDetail.click();
    vdpPage.accessoriesViewDetail.first().click();
});

Then('System should open Accessories detail modal', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.accessoriesDetailModal.isDisplayed().valueOf()).to.eventually.be.true;
});

When('User clicks on "Select" CTA', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesDetailModalSelect.click();
});

Then('The Accessory should be displayed as selected', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.accessoriesCardWrapper.first().getAttribute('ng-reflect-ng-class')).to.eventually.equal('card-highlight');
});

Then('Count of accessories selected and Total value should be updated', async () => {
    //console.log('+++Inside Count of accessories selected and Total value should be updated ');
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesSelectedCount.getText().then( async (value) => {
        //console.log('+++value - '+value);
        let count :number = Number(value.substring(value.lastIndexOf(':')+1, value.length).replace(' Remove All',''));
        //console.log('+++count - '+count);
        expect((await vdpPage.accessoriesCardWrapper.getAttribute('ng-reflect-ng-class')).length).to.equal(count);
    }).catch((err) => console.log('+++errorr - '+ err));

    //Assertion.expect(vdpPage.accessoriesSelectedTotal.getText()).to.eventually.equal(vdpPage.accessoriesPrice.getText());
    vdpPage.accessoriesSelectedTotal.getText().then((value) => {
        let total = ((value.replace('Total: $', '')).replace('Done','')).trim();
        Assertion.expect(vdpPage.accessoriesPrice.getText()).to.eventually.equal(total);
    })
    
});


When('User clicks on Select check box for an accessory', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesCheckBox.first().click();
});

When('User clicks on Done', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesDoneButton.click();
});

Then('Personalize with Accessories should display the list of accessories selected', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.accessoriesList.isDisplayed().valueOf()).to.eventually.be.true;
});

When('User clicks on Remove CTA for an accessory', async  () =>{
    await browser.driver.sleep(10*1000);
    vdpPage.accessoriesRemove.click();
});

Then('Accessory should be removed from Personalize with Accessories', async () => {
    await browser.driver.sleep(15*1000);
    return Assertion.expect(vdpPage.selectAccessories.isDisplayed().valueOf()).to.eventually.be.false;
});

When('User deselects the Select check box', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesCheckBox.first().click();
});


Then('Accessory should be deselected', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.accessoriesCardWrapper.first().getAttribute('ng-reflect-ng-class')).to.not.eventually.equal('card-highlight');
});

When('User clicks on Remove CTA', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesDetailModalSelect.click();
});

Then('System should navigate back to Accessories modal', async () => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.accessoriesModal.isDisplayed().valueOf()).to.eventually.be.true;
});


When('User clicks on Remove All CTA', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.accessoriesRemoveAll.click();
});




