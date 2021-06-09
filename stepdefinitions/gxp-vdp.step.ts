import { browser, By, element, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { VdpPage } from "../pages/vdpPage";
import { expect } from "chai";

let vdpPage : VdpPage = new VdpPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 15000;

// When('User clicks on lease estimate tab', async () => {
//     var leaseTab : ElementFinder = vdpPage.estimateTabs.get(0);
//     browser.driver.wait(until.visibilityOf(leaseTab),MAX_TIME_WAIT,'Lease estimate tab element taking too long to appear in the DOM');
//     leaseTab.click();
// });

When('User clicks on inventory save heart', async () => {
    var heart : ElementFinder = vdpPage.saveHearts.get(0);
    browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Inventory save heart element taking too long to appear in the DOM');
    heart.click();
});

// When('User clicks on estimate save heart', async () => {
//     var heart : ElementFinder = vdpPage.saveHearts.get(1);
//     browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Lease estimate save heart element taking too long to appear in the DOM');
//     heart.click();
// });

Then('Save heart should turn active', async () => {
    browser.driver.wait(until.visibilityOf(vdpPage.saveHeartActive),MAX_TIME_WAIT,'Save heart element taking too long to appear in the DOM');
    expect((await vdpPage.saveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Save heart tooltip should open', async () => {
    expect((await vdpPage.saveHeartTooltip.isPresent()).valueOf()).to.be.true;
});