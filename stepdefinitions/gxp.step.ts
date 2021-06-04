import { browser, By, element, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

Given('User is in Vehicle List Page', async () =>{
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.driver.sleep(10*1000);
    browser.driver.manage().deleteAllCookies();
    browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    await browser.driver.sleep(5*1000);       
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(3*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    await browser.driver.sleep(2*1000);
    browser.executeScript("window.scrollBy(0,250)");
    browser.executeScript('arguments[0].click()', mspFilterPage.appcardButton.first());
    await browser.driver.sleep(10*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(2*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    
});

When('User clicks on a vehicle save heart', async () =>{
    var heart : ElementFinder = vlpFilterPage.vehicleSaveHeart.get(1);
    browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Element taking too long to appear in the DOM');
    heart.click();
});

Then('Heart should turn active', async () =>{
    browser.driver.wait(until.visibilityOf(vlpFilterPage.vehicleSaveHeartActive),MAX_TIME_WAIT,'Element taking too long to appear in the DOM');
    expect((await vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Tooltip should open', async () =>{
    expect((await vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.true;
});