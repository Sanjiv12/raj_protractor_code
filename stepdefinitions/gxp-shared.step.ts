/**
 * This file is for shared, common actions between different features.
 * The types of actions include:
 * -Setup, Teardown, Navigations, Common Actions?
 */

import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import { browser, by, protractor } from "protractor";
import { NavMenu } from "../pages/navMenu";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { constructSavePageUrl } from "../util/constructSavePageUrl";
import { getPageInfo } from "../util/getPageInfo";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

 const savesPage : SavesPageRedesign = new SavesPageRedesign();
 const navMenu : NavMenu = new NavMenu();
 const until = protractor.ExpectedConditions;
 
 const MAX_TIME_WAIT = 10000;

/**
 * Navigations 
 * 
 * shared navigations to important pages
 */

Given('User is in Saves page', async() => {
    const savesPageInfo = await getPageInfo('saves');
    const currentUrl = await browser.getCurrentUrl();

    const onSavesPage = savesPageInfo.urlTest.test(currentUrl);
    
    if(!onSavesPage){
        const savesPage = constructSavePageUrl();
        await browser.driver.get(savesPage);
    }

    await waitForVisibilityOf(savesPageInfo.pageDef, savesPageInfo.title);
});

When('User loads the Saves page', async () => {
    await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon')
    await navMenu.profileIcon.element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[1]/img')).click();

    // Click Saves Linkout, Check the Url, and then Navigate Back
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    if( await navMenu.savesPageLinkOut.isDisplayed() == false){
        navMenu.profileIcon.click();
    }
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    await browser.driver.sleep(MAX_TIME_WAIT);
    await waitForVisibilityOf(savesPage.savePageTitle, 'Saves Page');
});

Then(/User is redirected to \"(.*?)\" Page/, async(page: string) => {
    const pageInfo = await getPageInfo(page.toLowerCase());

    await waitForVisibilityOf(pageInfo.pageDef, pageInfo.title);
 
    const currentUrl = await browser.driver.getCurrentUrl();
    expect(pageInfo.urlTest.test(currentUrl));

    expect(await pageInfo.pageDef.isDisplayed());
});

/**
 * Common Actions? / Common Accounts?
 * 
 * things like save a vehicle, create a deal, etc.
 */

Given('User is not logged in', async () => {
    //user is logged out by default
    //do nothing
    //TODO: add validation and potential log out flow from WILL
});

Given('User is on desktop', async () => {
    browser.driver.manage().window().maximize();
});

Given('User is on tablet', async () => {
    browser.driver.manage().window().setSize(768, 1024);
});

Given('User is on mobile', async () => {
    browser.driver.manage().window().setSize(375, 667);
});