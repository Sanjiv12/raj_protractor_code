import {browser, protractor} from "protractor";
import { Given, Then, When } from "cucumber";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { expect } from "chai";
import { link } from "fs";

let savesPage : SavesPageRedesign = new SavesPageRedesign();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 15000;

/**
 * GIVEN
 */



/**
 * WHEN
 */

/**
 * THEN
 */

Then('Sidebar Component should be visible', async () => {
    await browser.driver.wait(
        until.visibilityOf(savesPage.sideBar),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    expect(savesPage.sideBar.isDisplayed());
});

Then(/Sidebar \"(.*?)\" Linkout should be in \"(.*?)\" state)/, async(linkout: string, state: string) => {
    await browser.driver.wait(until.visibilityOf(savesPage.sideBar),MAX_TIME_WAIT,'Top Nav Profile Icon taking too long to appear in the DOM');
    expect(savesPage.sideBar.$(`.dg-nav-sidebar-${linkout.toLowerCase()}`).getAttribute('class')).to.contain(state.toLowerCase());
});