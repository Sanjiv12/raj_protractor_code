import { browser, By, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();


When('User selects a vehicle', async  () =>{
    await browser.driver.sleep(10*1000);
    // vlpFilterPage.appCard.first().click();        
});

Then('User should be navigated to Vehicle Details page', async () => {
    await browser.driver.sleep(15*1000);
    expect(await browser.getCurrentUrl()).to.contain('vin=');    
});

Then('Default tab is Lease', async () => {
    await browser.driver.sleep(15*1000);
    return Assertion.expect(vdpPage.tabDefault.getAttribute('aria-selected')).to.eventually.equal('true');
});

Then('Cash down is 10% of listed price', async () => {
    await browser.driver.sleep(5*1000);
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
    return Assertion.expect(vdpPage.annualMileageDefault.getAttribute('class')).to.eventually.contain('mat-radio-checked');
    
});

Then('Default Credit Rating is Excellent', async() => {
    return Assertion.expect(vdpPage.creditRatingDefault.getText()).to.eventually.equal('Excellent Credit (720-850)');
    
});

Then('Default Terms are displayed', async() => {

    return vdpPage.termsDefault.each((ele,i) => {
        Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.','36 mos.','48 mos.','60 mos.']);
    });
    
});

Then('Default Term is selected', async() => {
    return Assertion.expect(vdpPage.termSelectedDefault.getAttribute('class')).to.eventually.contain('mat-radio-checked');
    
});


Given('User is in Vehicle Details page', async() => {
    //await browser.get('?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.driver.sleep(10*1000);
    browser.driver.manage().deleteAllCookies();
    browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    await browser.driver.sleep(5*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(2*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    await browser.driver.sleep(5*1000);
    browser.executeScript("window.scrollBy(0,250)");
    browser.executeScript('arguments[0].click()', mspFilterPage.appcardButton.first());
    await browser.driver.sleep(10*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(2*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    await browser.driver.sleep(5*1000);
    browser.executeScript('arguments[0].click()', vlpFilterPage.appCard.first());    
});

When('User selects Finance', async  () =>{
    await browser.driver.sleep(15*1000);
    vdpPage.tabFinance.click();      
});

Then('Default Finance Credit Rating is Excellent', async() => {
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.creditRatingFinance.getText()).to.eventually.equal('Excellent Credit (720-850)');
    
});

Then('Default Finance Terms are displayed', async() => {
    await browser.driver.sleep(5*1000);
    return vdpPage.termsDefault.each((ele,i) => {
        // ele.getText().then((val) => {
        //     console.log('Term['+i+'] - '+val);
        // })        
        Assertion.expect(ele.getText()).to.eventually.be.oneOf(['24 mos.','36 mos.','48 mos.','60 mos.','72 mos.']);
    });
    
});

Then('Default Term selected is 60 Months', async() => {
    return Assertion.expect(vdpPage.termSelectedFinance.getAttribute('class')).to.eventually.contain('mat-radio-checked');
    
});

When('User selects Lease', async  () =>{
    await browser.driver.sleep(15*1000);
     
});

When('User updates Mileage', async  () =>{
    await browser.driver.sleep(5*1000);
    vdpPage.annualMileageOption1.click();     
});

Then('System should call the Payment service and update the payment terms', async  () =>{
    await browser.driver.sleep(15*1000);
    return expect((await vdpPage.paymentOptionsList).length).to.be.gt(0);
});

