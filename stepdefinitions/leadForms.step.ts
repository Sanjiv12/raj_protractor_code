import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();


When('User clicks on Unlock Savings on a Vehicle Card', async  () =>{
    await browser.driver.sleep(10*1000);
    vlpFilterPage.unlockSavings.first().click();
});


When('System should display Unlock Savings modal', async  () =>{
    await browser.driver.sleep(5*1000);
    Assertion.expect((await vlpFilterPage.unlockSavingsModal.isDisplayed()).valueOf()).to.be.true;
});

When('User does not enter valid values for email and zip', async  () =>{
    await browser.driver.sleep(5*1000);
    browser.executeScript("arguments[0].click()", vlpFilterPage.unlockSavingsModalEmail);
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vlpFilterPage.unlockSavingsModalZip);
    await browser.driver.sleep(2*1000);
    browser.executeScript("arguments[0].click()", vlpFilterPage.unlockSavingsModalFirstName);
    await browser.driver.sleep(2*1000);
});