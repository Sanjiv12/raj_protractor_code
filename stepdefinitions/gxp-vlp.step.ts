import { browser, By, element, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

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