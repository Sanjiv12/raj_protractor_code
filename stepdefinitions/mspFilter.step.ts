import { browser, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import {expect } from "chai";
import {Assertion} from "../util/assertion"

let mspFilterPage : MspFilterPage = new MspFilterPage();
let p = 0;
let np = 0;

Given('User is in Model Selection page', async () =>{
    // await browser.driver.sleep(10*1000);
    // browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    await browser.get("?dealerCd=24022&source=t1");
    browser.driver.manage().deleteAllCookies();
    await browser.driver.sleep(10*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
});
    

When('User selects one or more options under Vehicle Type in Filters panel', async  () =>{
    
    await browser.driver.sleep(5*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.filtercheckBoxCar);
    
});

Then('Only the applicable Model cards should be displayed in the page', async () => {
    await browser.driver.sleep(5*1000);
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    return Assertion.expect((await mspFilterPage.appCard).length).to.equal(12);
});

Given('User is in Model Selection page with all filters cleared', async () =>{
    await browser.driver.sleep(5*1000);
    //browser.executeScript("arguments[0].click()", mspFilterPage.filterClear);
});
    

When('User selects a Price Range for MSRP in Filters panel', async  () =>{
    
    await browser.driver.sleep(5*1000);
    mspFilterPage.filterMinPrice.clear();
    await browser.driver.sleep(5*1000);
    mspFilterPage.filterMaxPrice.clear();   
});

Then('Only the applicable priced Model cards should be displayed in the page', async () => {
    await browser.driver.sleep(5*1000);
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    return Assertion.expect((await mspFilterPage.appCard).length).to.equal(1);
});


Given('User is in Model Selection page with price filter reset', async () => {
    await browser.driver.sleep(2*1000);
    //browser.executeScript('arguments[0].click()', mspFilterPage.filterPriceReset);
});

When('User chooses to sort by Price Low to High', async() => {
    await browser.driver.sleep(5*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(10*1000);
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

