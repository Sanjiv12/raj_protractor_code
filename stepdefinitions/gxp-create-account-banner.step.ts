import { browser, ElementFinder, protractor } from "protractor"; 
import { When, Then } from "cucumber";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { expect } from "chai";
import { link } from "fs";

let savesPage : SavesPageRedesign = new SavesPageRedesign();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 10000;

When('User clicks the X on the Create Account Banner', async() => {
    await browser.driver.wait(
        until.visibilityOf(savesPage.createAccountBanner),
        MAX_TIME_WAIT,
        'Create Account Banner taking too long to appear in DOM'
    );
    await savesPage.createAccountBannerX.click();
});

When(/User clicks \"(.*?)\" within Create Account Banner/, async(linkout: string) => {
    await browser.driver.wait(
        until.visibilityOf(savesPage.createAccountBanner),
        MAX_TIME_WAIT,
        'Create Account Banner taking too long to appear in DOM'
    );

    const linkoutToClick: ElementFinder = await savesPage.createAccountBannerLinks.filter(async (elem) => {
        const elemText = await elem.getText();
        return elemText.toLowerCase() === linkout.toLowerCase();
    }).first();

    await linkoutToClick.click();
});

Then('Create Account Banner is shown', async () => {
    await browser.driver.wait(
        until.visibilityOf(savesPage.createAccountBanner),
        MAX_TIME_WAIT,
        'Create Account Banner taking too long to appear in DOM'
    );

    expect(await savesPage.createAccountBannerMessage.isDisplayed());
});

Then('Create Account Banner is not shown', async() => {
    expect(await savesPage.createAccountBanner.isPresent()).to.equal(false);
});


