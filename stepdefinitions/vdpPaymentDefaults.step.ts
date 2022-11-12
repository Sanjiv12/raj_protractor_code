import { browser, By, ExpectedConditions, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();

if ((browser.params.browserPlatformCombo===("ChromeDesktop")||browser.params.browserPlatformCombo === ("SafariDesktop")))
{

When('User selects a vehicle', async  () =>{
    await browser.driver.sleep(10*1000);
    // vlpFilterPage.appCard.first().click();        
});

Then('User should be navigated to Vehicle Details page', async () => {
   // await browser.driver.sleep(15*1000);
    browser.wait(ExpectedConditions.urlContains("vin="),15000).then(function(result){
        expect(result).true;
    })
      
});

Then('Default tab is Lease', async () => {
    await waitForVisibilityOf(vdpPage.tabDefault,"tabDefault");
    //await browser.driver.sleep(15*1000);
    return Assertion.expect(vdpPage.tabDefault.getAttribute('aria-selected')).to.eventually.equal('true');
});

Then('Cash down is 10% of listed price', async () => {
    await waitForVisibilityOf(vdpPage.price,"price");
    //await browser.driver.sleep(5*1000);
    vdpPage.price.getText().then(async (value) => {
        let cprice : number = parseInt((value.replace('$','')).replace(',','')) * .1;
        //console.log('cprice = '+ cprice);
        vdpPage.cashDown.getAttribute('aria-valuetext').then((cashdown) =>{
            // console.log('cdown before= '+ cashdown);
            // let cdown : number = parseInt(cashdown);
            // console.log('cdown = '+ cdown);
            return Assertion.expect(parseInt(cashdown)).to.equal(Math.ceil(cprice));
        });
    });
    

});

Then('Default Annual Mileage is 12000 miles', async() => {
 //   return Assertion.expect(vdpPage.annualMileageDefaultMobile.getAttribute('class')).to.eventually.contain('mat-radio-checked');
 await vdpPage.annualMileageDefault.getText().then(async (text) => {
        //await console.log("Visitid on summary page: " +text );
    //return Assertion.expect(text.t;
    return assert(text,'12,000');


 })
});
// return Assertion.expect((await vdpPage.annualMileageDefaultMobile.getText()).to.eventually.equal('Excellent Credit (720-850)');


Then('Default Credit Rating is Excellent', async() => {

    return Assertion.expect(vdpPage.creditRatingDefault.getText()).to.eventually.equal('Excellent Credit (720-850)');
    
});

Then('Default Terms are displayed', async() => {

    return vdpPage.termsDefault.each((ele,i) => {
        Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.','36 mos.','48 mos.','60 mos.']);
    });
    
});

Then('Default Term is selected', async() => {
    return Assertion.expect(vdpPage.termSelectedDefault.getAttribute('type')).to.eventually.contain('radio');
    
});


Given('User is in Vehicle Details page', async() => {
    // //await browser.driver.sleep(3*1000);
    // if(await waitForVisibilityOf(mspFilterPage.sortDropDown,"sortdropdown")){
    //     await waitForElement(mspFilterPage.sortDropDown,"sortdropdown");
    //     await mspFilterPage.sortDropDown.click();
    // }   
    // await waitForVisibilityOf(mspFilterPage.sortPriceLowToHigh,"sortLowToHigh");
    // await waitForElement(mspFilterPage.sortPriceLowToHigh,"sortLowToHigh");
    // await mspFilterPage.sortPriceLowToHigh.click(); 
    // if( await waitForVisibilityOf(mspFilterPage.dropdownAfterSelect,"dropdownAfterSelect")){
    //     await waitForElement(mspFilterPage.dropdownAfterSelect,"dropdownAfterSelect");
    //     browser.executeScript("window.scrollBy(0,250)");
    //     await waitForVisibilityOf(mspFilterPage.appcardButton.first(),"appcardButton");
    //     await mspFilterPage.appcardButton.first().click();
    // }  
    // //await browser.driver.sleep(3*1000);     
    // //await browser.driver.sleep(3*1000);
    // await waitForElement(mspFilterPage.appCard.first(),"Appcard");
    // if(await waitForVisibilityOf(mspFilterPage.filterLabel,"filterlabel")){
    //     await waitForElement(mspFilterPage.appCard.first(),"Appcard");
    //     browser.executeScript("window.scrollBy(0,250)");
    //     await vlpFilterPage.appCard.first().click();
    // } 
    
     
        await waitForVisibilityOf(mspFilterPage.sortDropDown,"sortdropdown")
        await mspFilterPage.sortDropDown.click();
        await waitForVisibilityOf(mspFilterPage.sortPriceLowToHigh,"sortLowToHigh");        
        await mspFilterPage.sortPriceLowToHigh.click(); 
        await browser.driver.sleep(2*1000);
        //await waitForElement(mspFilterPage.dropdownAfterSelect,"dropdownAfterSelect");
       // await browser.wait( async()=>(await mspFilterPage.appcardButton.count()) > 5,5000,"element not display");
        await browser.executeScript("arguments[0].scrollIntoView();",mspFilterPage.appcardButton.get(0).getWebElement());
       // browser.executeScript("window.scrollBy(0,250)");
        await waitForVisibilityOf(mspFilterPage.appcardButton.first(),"appcardButton");
        await mspFilterPage.appcardButton.first().click();        
        browser.executeScript("arguments[0].scrollIntoView();",mspFilterPage.appCard.get(0).getWebElement());
       // browser.executeScript("window.scrollBy(0,250)");
        await waitForVisibilityOf(mspFilterPage.appCard.first(),"appCard")
       // browser.executeScript("window.scrollBy(0,250)");
        await mspFilterPage.appCard.first().click();
      
        // await browser.driver.sleep(3*1000);
        // await mspFilterPage.sortDropDown.click();
        // await browser.driver.sleep(3*1000);
        // await mspFilterPage.sortPriceLowToHigh.click(); 
        // browser.executeScript("window.scrollBy(0,250)");
        // await mspFilterPage.appcardButton.first().click();
        // await browser.driver.sleep(3*1000);
        // await browser.driver.sleep(3*1000);     
        // browser.executeScript("window.scrollBy(0,250)");
        // await vlpFilterPage.appCard.first().click();
    
    

    // await browser.driver.sleep(3*1000);
    // await mspFilterPage.sortDropDown.click();
    // await mspFilterPage.sortPriceLowToHigh.click();
    // await browser.driver.sleep(3*1000);
    // browser.executeScript("window.scrollBy(0,250)");
    // await mspFilterPage.appcardButton.first().click();
    // await browser.driver.sleep(3*1000);
    //  browser.executeScript("window.scrollBy(0,250)");
    // await vlpFilterPage.appCard.first().click();



});

When('User selects Finance', async  () =>{
    vdpPage.tabFinance.click();
});

Then('Default Finance Credit Rating is Excellent', async() => {
    return Assertion.expect(vdpPage.creditRatingFinance.getText()).to.eventually.equal('Excellent Credit (720-850)');
    
});

Then('Default Finance Terms are displayed', async() => {
    // await browser.driver.sleep(5*1000);
    browser.wait(async function(){
        const tCount = await vdpPage.termsDefault.count();
        if (tCount > 0) {
            return ExpectedConditions.visibilityOf(vdpPage.termsDefault.get(0));
        }
    },5000);
    return vdpPage.termsDefault.each((ele,i) => {
        // ele.getText().then((val) => {
        //     console.log('Term['+i+'] - '+val);
        // })        
        Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.','36 mos.','48 mos.','60 mos.','72 mos.']);
    });
    
});

Then('Default Term selected is 60 Months', async() => {
    return Assertion.expect(vdpPage.termSelectedFinance.getAttribute('type')).to.eventually.contain('radio');
    
});

When('User selects Lease', async  () =>{
    await browser.driver.sleep(5*1000);
});

When('User updates Mileage', async  () =>{
    vdpPage.annualMileageOption1.click();
});

Then('System should call the Payment service and update the payment terms', async  () =>{
    
    return expect((await vdpPage.paymentOptionsList).length).to.be.gt(0);
});

When('User selects Cash', async  () =>{
    vdpPage.tabCash.click();
});
}

else if((browser.params.browserPlatformCombo === ("ChromeAndroid")||browser.params.browserPlatformCombo === ("SafariIOS"))){

When('User selects a vehicle', async  () =>{
    await browser.driver.sleep(10*1000);
    // vlpFilterPage.appCard.first().click();        
});

Then('User should be navigated to Vehicle Details page', async () => {
   // await browser.driver.sleep(15*1000);
    browser.wait(ExpectedConditions.urlContains("vin="),15000).then(function(result){
        expect(result).true;
    })
      
});

Then('Default tab is Lease', async () => {
    await waitForVisibilityOf(vdpPage.tabDefault,"tabDefault");
  //  await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.tabDefault.getAttribute('class')).to.eventually.contain('mat-tab-label-content');
});

Then('Cash down is 10% of listed price', async () => {
    await waitForVisibilityOf(vdpPage.price,"price");
    //await browser.driver.sleep(5*1000);
    vdpPage.price.getText().then(async (value) => {
        let cprice : number = parseInt((value.replace('$','')).replace(',','')) * .1;
        //console.log('cprice = '+ cprice);
        vdpPage.cashDown.getAttribute('aria-valuetext').then((cashdown) =>{
            // console.log('cdown before= '+ cashdown);
            // let cdown : number = parseInt(cashdown);
            // console.log('cdown = '+ cdown);
            return Assertion.expect(parseInt(cashdown)).to.equal(Math.ceil(cprice));
        });
    });
    

});

Then('Default Annual Mileage is 12000 miles', async() => {
    await browser.driver.sleep(3000);
   // return  await Assertion.expect(vdpPage.annualMileageDefaultMobile.getAttribute('class')).to.eventually.contain('mat-radio-checked');
    await vdpPage.annualMileageDefault.getText().then(async (text) => {
        //await console.log("Visitid on summary page: " +text );
    //return Assertion.expect(text.t;
    return assert(text,'12,000');
});
})
Then('Default Credit Rating is Excellent', async() => {
    return Assertion.expect(vdpPage.creditRatingDefault.getText()).to.eventually.equal('Excellent Credit (720-850)');
    
});

Then('Default Terms are displayed', async() => {

    return vdpPage.termsDefault.each((ele,i) => {
        Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.','36 mos.','48 mos.','60 mos.']);
    });
    
});

Then('Default Term is selected', async() => {
   // return Assertion.expect(vdpPage.termSelectedDefault.getAttribute('class')).to.eventually.contain('mat-radio-checked');
    return Assertion.expect(vdpPage.termSelectedDefault.getAttribute('type')).to.eventually.contain('radio');
});


Given('User is in Vehicle Details page', async() => {
    // //await browser.driver.sleep(3*1000);
    // if(await waitForVisibilityOf(mspFilterPage.sortDropDown,"sortdropdown")){
    //     await waitForElement(mspFilterPage.sortDropDown,"sortdropdown");
    //     await mspFilterPage.sortDropDown.click();
    // }   
    // await waitForVisibilityOf(mspFilterPage.sortPriceLowToHigh,"sortLowToHigh");
    // await waitForElement(mspFilterPage.sortPriceLowToHigh,"sortLowToHigh");
    // await mspFilterPage.sortPriceLowToHigh.click(); 
    // if( await waitForVisibilityOf(mspFilterPage.dropdownAfterSelect,"dropdownAfterSelect")){
    //     await waitForElement(mspFilterPage.dropdownAfterSelect,"dropdownAfterSelect");
    //     browser.executeScript("window.scrollBy(0,250)");
    //     await waitForVisibilityOf(mspFilterPage.appcardButton.first(),"appcardButton");
    //     await mspFilterPage.appcardButton.first().click();
    // }  
    // //await browser.driver.sleep(3*1000);     
    // //await browser.driver.sleep(3*1000);
    // await waitForElement(mspFilterPage.appCard.first(),"Appcard");
    // if(await waitForVisibilityOf(mspFilterPage.filterLabel,"filterlabel")){
    //     await waitForElement(mspFilterPage.appCard.first(),"Appcard");
    //     browser.executeScript("window.scrollBy(0,250)");
    //     await vlpFilterPage.appCard.first().click();
    // } 
    
     
        await waitForVisibilityOf(mspFilterPage.sortDropDown,"sortdropdown")
        await mspFilterPage.sortDropDown.click();
        await waitForVisibilityOf(mspFilterPage.sortPriceLowToHigh,"sortLowToHigh");        
        await mspFilterPage.sortPriceLowToHigh.click(); 
        await browser.driver.sleep(2*1000);
        //await waitForElement(mspFilterPage.dropdownAfterSelect,"dropdownAfterSelect");
       // await browser.wait( async()=>(await mspFilterPage.appcardButton.count()) > 5,5000,"element not display");
        await browser.executeScript("arguments[0].scrollIntoView();",mspFilterPage.appcardButton.get(0).getWebElement());
       // browser.executeScript("window.scrollBy(0,250)");
        //await waitForElement(mspFilterPage.appcardButton.first(),"appcardButton");
        await mspFilterPage.appcardButton.first().click();        
        browser.executeScript("arguments[0].scrollIntoView();",mspFilterPage.appCard.get(0).getWebElement());
       // browser.executeScript("window.scrollBy(0,250)");
        await waitForVisibilityOf(mspFilterPage.appCard.first(),"appCard")
       // browser.executeScript("window.scrollBy(0,250)");
        await mspFilterPage.appCard.first().click();
      
        // await browser.driver.sleep(3*1000);
        // await mspFilterPage.sortDropDown.click();
        // await browser.driver.sleep(3*1000);
        // await mspFilterPage.sortPriceLowToHigh.click(); 
        // browser.executeScript("window.scrollBy(0,250)");
        // await mspFilterPage.appcardButton.first().click();
        // await browser.driver.sleep(3*1000);
        // await browser.driver.sleep(3*1000);     
        // browser.executeScript("window.scrollBy(0,250)");
        // await vlpFilterPage.appCard.first().click();
    
    

    // await browser.driver.sleep(3*1000);
    // await mspFilterPage.sortDropDown.click();
    // await mspFilterPage.sortPriceLowToHigh.click();
    // await browser.driver.sleep(3*1000);
    // browser.executeScript("window.scrollBy(0,250)");
    // await mspFilterPage.appcardButton.first().click();
    // await browser.driver.sleep(3*1000);
    //  browser.executeScript("window.scrollBy(0,250)");
    // await vlpFilterPage.appCard.first().click();



});

When('User selects Finance', async  () =>{
    await browser.driver.sleep(3000);
    await vdpPage.tabFinance.click();
    console.log("Finance button clicked")
});

Then('Default Finance Credit Rating is Excellent', async() => {
    console.log("credit rating clicked");
    return Assertion.expect(vdpPage.creditRatingFinance.getText()).to.eventually.equal('Excellent Credit (720-850)');
    
});

Then('Default Finance Terms are displayed', async() => {
    await browser.driver.sleep(2*1000);
    browser.wait(async function(){
        const tCount = await vdpPage.termsDefault.count();
        if (tCount > 0) {
            return ExpectedConditions.visibilityOf(vdpPage.termsDefault.get(0));
        }
    },5000);
    return vdpPage.termsDefault.each((ele,i) => {
 //       ele.getText().then((val) => {
  //           console.log('Term['+i+'] - '+val);
  //       })        
        Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.','36 mos.','48 mos.','60 mos.','72 mos.']);
    });
});

Then('Default Term selected is 60 Months', async() => {
    console.log("Executed completed in mobile version");
    return Assertion.expect(vdpPage.termSelectedFinance.getAttribute('type')).to.eventually.contain('radio');
    
});

When('User selects Lease', async  () =>{
    await browser.driver.sleep(5*1000);
});

When('User updates Mileage', async  () =>{
    vdpPage.annualMileageOption1.click();
});

Then('System should call the Payment service and update the payment terms', async  () =>{
    return expect((await vdpPage.paymentOptionsList).length).to.be.gt(0);
});

When('User selects Cash', async  () =>{
    vdpPage.tabCash.click();
});
}