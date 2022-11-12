import { browser, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import {expect } from "chai";
import {Assertion} from "../util/assertion"
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let p = 0;
let np = 0;
if ((browser.params.browserPlatformCombo===("ChromeDesktop")||browser.params.browserPlatformCombo === ("SafariDesktop")))
{
Given('User is in Model Selection page', async () =>{
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.driver.manage().deleteAllCookies();
    await browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
});
    

When('User selects one or more options under Vehicle Type in Filters panel', async  () =>{
    await waitForVisibilityOf(mspFilterPage.filtercheckBoxCar,"select Car checkbox");
    browser.executeScript("window.scrollBy(0,250)");
    await browser.executeScript("arguments[0].click()", mspFilterPage.filtercheckBoxCar);
    
});

Then('Only the applicable Model cards should be displayed in the page', async () => {
    await browser.driver.sleep(2*1000);
    //await waitForVisibilityOf(mspFilterPage.vehiclesList.first(),"select Car checkbox");
    browser.executeScript("window.scrollBy(0,250)");
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    return Assertion.expect((await mspFilterPage.vehiclesList).length).to.equal(12);
});

Given('User is in Model Selection page with all filters cleared', async () =>{
    await browser.driver.sleep(5*1000);
    //browser.executeScript("arguments[0].click()", mspFilterPage.filterClear);
});
    

When('User selects a Price Range for MSRP in Filters panel', async  () =>{
  
    browser.executeScript("window.scrollBy(0,250)");
    await waitForVisibilityOf(mspFilterPage.filterMinPrice,"Filter min price");
   // await browser.driver.sleep(5*1000);
    mspFilterPage.filterMinPrice.clear();
    await waitForVisibilityOf(mspFilterPage.filterMaxPrice,"Filter max price");
    //await browser.driver.sleep(5*1000);
    mspFilterPage.filterMaxPrice.clear();   
});

Then('Only the applicable priced Model cards should be displayed in the page', async () => {
    await browser.driver.sleep(2*1000);
    
    //await waitForVisibilityOf(mspFilterPage.vehiclesList.first(),"Filter max price");
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    return Assertion.expect((await mspFilterPage.vehiclesList).length).to.equal(1);
});


Given('User is in Model Selection page with price filter reset', async () => {
    await browser.driver.sleep(2*1000);
    //browser.executeScript('arguments[0].click()', mspFilterPage.filterPriceReset);
});

When('User chooses to sort by Price Low to High', async() => {
    await waitForVisibilityOf(mspFilterPage.sortDropDown,"sort dropdown");
    //await browser.driver.sleep(5*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    //await browser.driver.sleep(10*1000);
    await waitForVisibilityOf(mspFilterPage.sortPriceLowToHigh,"sort lowtohigh option");
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);

});

Then('The Model cards for which Inventory is available should be sorted by Price in ascending order', async() => {

    await browser.driver.sleep(5*1000);
    let sorted = [];
    mspFilterPage.appCardPrice.filter(function(ele, i){
        return ele.getText().then(function(price){
            return price.charAt(0) === '$';
        })
    }).then(function (unsorted){
        sorted = unsorted.slice();
        sorted.sort();
        return Assertion.expect(sorted).to.eql(unsorted);
    });
    
});

Then('The model cards for which Inventory is not available should be displayed below', async() => {
    await browser.driver.sleep(2*1000);
    // let priceArray :string[] = [];

    // mspFilterPage.appCardPrice.each(function(ele, i){
    //     ele.getText().then(function(price){
    //         //console.log('index1 '+ i + ' - '+price);
    //         if(price.charAt(0) === '$'){
    //             p = i;
    //             //console.log('$$ + p = '+i);
    //         }
    //         else{
    //             np = i;
    //             //console.log('no $$ + np = '+np+p);
    //             expect(p).to.be.lessThan(np);    
    //             return;
    //         }
    //     });
    //     //console.log('this.p = '+this.p +'this.np = '+this.np);
    // });
    
 });
}
else if((browser.params.browserPlatformCombo === ("ChromeAndroid")||browser.params.browserPlatformCombo === ("SafariIOS"))){

Given('User is in Model Selection page', async () =>{
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.driver.manage().deleteAllCookies();
    await browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
});
    

When('User selects one or more options under Vehicle Type in Filters panel', async  () =>{
    await waitForVisibilityOf(mspFilterPage.filtercheckBoxCar,"select Car checkbox");
    browser.executeScript("window.scrollBy(0,250)");
    await browser.executeScript("arguments[0].click()", mspFilterPage.filtercheckBoxCar);
    
});

Then('Only the applicable Model cards should be displayed in the page', async () => {
    await browser.driver.sleep(2*1000);
    //await waitForVisibilityOf(mspFilterPage.vehiclesList.first(),"select Car checkbox");
    browser.executeScript("window.scrollBy(0,250)");
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    return Assertion.expect((await mspFilterPage.vehiclesList).length).to.equal(12);
});

Given('User is in Model Selection page with all filters cleared', async () =>{
    await browser.driver.sleep(5*1000);
    //browser.executeScript("arguments[0].click()", mspFilterPage.filterClear);
});
    

When('User selects a Price Range for MSRP in Filters panel', async  () =>{
    await waitForVisibilityOf(mspFilterPage.filtersButtonMobile,"Filters");
    mspFilterPage.filtersButtonMobile.click();
    browser.executeScript("window.scrollBy(0,250)");
    await waitForVisibilityOf(mspFilterPage.filterMinPrice,"Filter min price");
   // await browser.driver.sleep(5*1000);
    mspFilterPage.filterMinPrice.clear();
    await waitForVisibilityOf(mspFilterPage.filterMaxPrice,"Filter max price");
    //await browser.driver.sleep(5*1000);
    mspFilterPage.filterMaxPrice.clear();   
//     await waitForVisibilityOf(mspFilterPage.applyfiltersMobile,"Apply Filters");
// browser.driver.sleep(1000);
//     mspFilterPage.applyfiltersMobile.click();
});

Then('Only the applicable priced Model cards should be displayed in the page', async () => {
    await browser.driver.sleep(2*1000);
    
    //await waitForVisibilityOf(mspFilterPage.vehiclesList.first(),"Filter max price");
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    return await Assertion.expect((await mspFilterPage.vehiclesList).length).to.equal(1);
});


Given('User is in Model Selection page with price filter reset', async () => {
    await browser.driver.sleep(2*1000);
    //browser.executeScript('arguments[0].click()', mspFilterPage.filterPriceReset);
});

When('User chooses to sort by Price Low to High', async() => {
    await waitForVisibilityOf(mspFilterPage.sortDropDown,"sort dropdown");
    //await browser.driver.sleep(5*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    //await browser.driver.sleep(10*1000);
    await waitForVisibilityOf(mspFilterPage.sortPriceLowToHigh,"sort lowtohigh option");
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);

});

Then('The Model cards for which Inventory is available should be sorted by Price in ascending order', async() => {

    await browser.driver.sleep(5*1000);
    let sorted = [];
    mspFilterPage.appCardPrice.filter(function(ele, i){
        return ele.getText().then(function(price){
            return price.charAt(0) === '$';
        })
    }).then(function (unsorted){
        sorted = unsorted.slice();
        sorted.sort();
        return Assertion.expect(sorted).to.eql(unsorted);
    });
    
});

Then('The model cards for which Inventory is not available should be displayed below', async() => {
    await browser.driver.sleep(2*1000);
    // let priceArray :string[] = [];

    // mspFilterPage.appCardPrice.each(function(ele, i){
    //     ele.getText().then(function(price){
    //         //console.log('index1 '+ i + ' - '+price);
    //         if(price.charAt(0) === '$'){
    //             p = i;
    //             //console.log('$$ + p = '+i);
    //         }
    //         else{
    //             np = i;
    //             //console.log('no $$ + np = '+np+p);
    //             expect(p).to.be.lessThan(np);    
    //             return;
    //         }
    //     });
    //     //console.log('this.p = '+this.p +'this.np = '+this.np);
    // });
    
 });
}