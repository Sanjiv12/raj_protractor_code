import { browser, By, element, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { VdpPage } from "../pages/vdpPage";
import { expect } from "chai";

let vdpPage : VdpPage = new VdpPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

When('User clicks on an inventory save heart', async () =>{
    var heart : ElementFinder = vdpPage.inventorySaveHeart.get(0);;
    browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Heart Element taking too long to appear in the DOM');
    heart.click();
});

Then('Inventory heart should turn active', async () =>{
    browser.driver.wait(until.visibilityOf(vdpPage.inventorySaveHeartActive),MAX_TIME_WAIT,'Active heart Element taking too long to appear in the DOM');
    expect((await vdpPage.inventorySaveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Inventory heart tooltip should open', async () =>{
    expect((await vdpPage.inventorySaveHeartTooltip.isPresent()).valueOf()).to.be.true;
});