import { browser, By, element, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { VdpPage } from "../pages/vdpPage";
import { expect } from "chai";

let vdpPage : VdpPage = new VdpPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 15000;



Then('Save heart should turn active', async () => {
    browser.driver.wait(until.visibilityOf(vdpPage.saveHeartActive),MAX_TIME_WAIT,'Save heart element taking too long to appear in the DOM');
    expect((await vdpPage.saveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Save heart tooltip should open', async () => {
    expect((await vdpPage.saveHeartTooltip.isPresent()).valueOf()).to.be.true;
});
