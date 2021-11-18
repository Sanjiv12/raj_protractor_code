/**
 * This file is for shared, common actions between different features.
 * The types of actions include:
 * -Setup, Teardown, Navigations, Common Actions?
 */

import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import { browser, by, element, protractor } from "protractor";
import { CreateAccountPage } from "../pages/createAccountPage";
import { NavMenu } from "../pages/navMenu";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { constructSavePageUrl } from "../util/constructSavePageUrl";
import { getPageInfo } from "../util/getPageInfo";


 let createAccountPage : CreateAccountPage = new CreateAccountPage();
 let savesPage : SavesPageRedesign = new SavesPageRedesign();
 let navMenu : NavMenu = new NavMenu();
 let until = protractor.ExpectedConditions;
 
 let MAX_TIME_WAIT = 10000;

/**
 * Navigations 
 * 
 * shared navigations to important pages
 */

Given('User is in Saves page', async() => {
    const currentUrl = await browser.getCurrentUrl();
    const onSavesPage = /saves/.test(currentUrl);
    
    if(!onSavesPage){
        const savesPage = constructSavePageUrl();
        await browser.driver.get(savesPage);
    }

    await browser.driver.wait(
        until.visibilityOf(savesPage.sideBarHeader),
        MAX_TIME_WAIT,
        'Saves Page taking too long to appear in the DOM'
    );
});

When('User loads the Saves page', async () => {
    await browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    await navMenu.profileIcon.element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[1]/img')).click();
    await browser.driver.sleep(MAX_TIME_WAIT);


    // Click Saves Linkout, Check the Url, and then Navigate Back
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    if( await navMenu.savesPageLinkOut.isDisplayed() == false){
        navMenu.profileIcon.click();
    }
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    await browser.driver.sleep(10*1000);
    await browser.driver.wait(
        until.visibilityOf(savesPage.savePageTitle),
        MAX_TIME_WAIT,
        'Saves Page taking too long to appear in the DOM'
    );
});

Then(/User is redirected to \"(.*?)\" Page/, async(page: string) => {
    const pageInfo = await getPageInfo(page.toLowerCase());

    await browser.driver.wait(
        until.visibilityOf(pageInfo.pageDef),
        MAX_TIME_WAIT,
        `${page} taking too long to appear in the DOM`
    ) 
 
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
});

Given('User is on desktop', async () => {
    //TODO: create function to set window size
    // setWindowSize(width, height)
    browser.driver.manage().window().maximize();
});

Given('User is on tablet', async () => {
    browser.driver.manage().window().setSize(768, 1024);
});

Given('User is on mobile', async () => {
    browser.driver.manage().window().setSize(375, 667);
});