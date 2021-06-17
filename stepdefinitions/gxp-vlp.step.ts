import { browser, by, By, element, ElementArrayFinder, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter, After } from "cucumber";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";

let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

// Save Hearts
Given('User is in Vehicle List Page GXP', async () =>{
    await browser.get(
        browser.params.url
        +'/search'
        +'?dealerCd='+browser.params.dealerCd
        +'&source='+browser.params.source
        +'&series=4runner'
        +'&seriesDesc=4Runner'
        +'&type=suvs'
        +'&zipcode='+browser.params.zipcode
    );
    await browser.driver.sleep(10*1000);
    browser.driver.manage().deleteAllCookies();
});

When('User clicks on a vehicle save heart', async () =>{
    var heart : ElementFinder = vlpFilterPage.vehicleSaveHeart.get(1);
    browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Save Heart Element taking too long to appear in the DOM');
    heart.click();
});

Then('Heart should turn active', async () =>{
    browser.driver.wait(until.visibilityOf(vlpFilterPage.vehicleSaveHeartActive),MAX_TIME_WAIT,'Active Save Heart Element taking too long to appear in the DOM');
    expect((await vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Tooltip should open', async () =>{
    expect((await vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.true;
});