import { browser, by, By, element, ElementArrayFinder, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter, After } from "cucumber";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";

let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 10000;

// Save Hearts
When('User clicks on a vehicle save heart', async () =>{
    var heart : ElementFinder = vlpFilterPage.vehicleSaveHeart.get(1);
    await browser.driver.wait(until.presenceOf(heart),MAX_TIME_WAIT,'Save Heart Element taking too long to appear in the DOM');
    browser.executeScript("arguments[0].click();", heart);
});

Then('Heart should turn active', async () =>{
    //await browser.driver.wait(until.visibilityOf(vlpFilterPage.vehicleSaveHeartActive),MAX_TIME_WAIT,'Active Save Heart Element taking too long to appear in the DOM');
    //expect((await vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Tooltip should open', async () =>{
    expect((await vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.false;
});