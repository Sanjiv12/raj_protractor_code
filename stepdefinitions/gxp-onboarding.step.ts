import { browser, by, element, ElementFinder, protractor } from "protractor";
import { Then, When, Given } from "cucumber";
import { NavMenu } from "../pages/navMenu";
import { expect } from "chai";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";
import { constructHomePageUrl } from "../util/constructHomePageUrl";
import { BuyAToyotaPage } from "../pages/buyAToyotaPage";
import { ZIP_CODES } from "../util/Constants"

let buyAToyotaPage: BuyAToyotaPage = new BuyAToyotaPage();
let navMenu: NavMenu = new NavMenu();

Given(/User is on (?:.*?) (.*?) (?:SmartPath\s)?home page/, async (tier: string) => {
    const homePage = constructHomePageUrl(tier);
    await browser.driver.get(homePage);
})

Given('User is on a SmartPath dealer', async () => {

})

When('User selects a SmartPath dealer', async () => {
    await buyAToyotaPage.zipCodeField.sendKeys(ZIP_CODES.WILSON);
    await waitForVisibilityOf(buyAToyotaPage.selectButton, 'Select Button');
    await buyAToyotaPage.selectButton.click();
    await waitForVisibilityOf(buyAToyotaPage.continueButton, 'Continue Button')
    await buyAToyotaPage.continueButton.click();
})

When('User takes no action', async () => {

})

When('User refreshes the page', async () => {
    const currentUrl = await browser.getCurrentUrl();
    await browser.driver.get(currentUrl);
})

Then('T2 MST-C page loads', async () => {
    await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon')
    const currentUrl = await browser.getCurrentUrl()
    expect(currentUrl.includes('smartpath.buyatoyota'));
})

Then(/Onboarding modal is (.*?\s)?visible/, async (shown?: string) => {
    const visible = shown ? true : false;
    const wasShown = await element(by.id('dg-mstc-component-modal')).isDisplayed()
    expect(visible === wasShown);
})
