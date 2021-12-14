import { browser, ElementFinder, protractor } from "protractor"; 
import { When, Then } from "cucumber";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { expect } from "chai";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

let savesPage : SavesPageRedesign = new SavesPageRedesign();

When('User clicks the X on the Create Account Banner', async() => {
    await waitForVisibilityOf(savesPage.createAccountBannerX, 'Create Account Banner X');
    await savesPage.createAccountBannerX.click();
});

When(/User clicks \"(.*?)\" within Create Account Banner/, async(linkout: string) => {
    await waitForVisibilityOf(savesPage.createAccountBanner, 'Create Account Banner');

    const linkoutToClick: ElementFinder = await savesPage.createAccountBannerLinks.filter(async (elem) => {
        const elemText = await elem.getText();
        return elemText.toLowerCase() === linkout.toLowerCase();
    }).first();

    await linkoutToClick.click();
});

Then('Create Account Banner is shown', async () => {
    await waitForVisibilityOf(savesPage.createAccountBanner, 'Create Account Banner');
    expect(await savesPage.createAccountBannerMessage.isDisplayed());
});

Then('Create Account Banner is not shown', async() => {
    expect(await savesPage.createAccountBanner.isPresent()).to.equal(false);
});


