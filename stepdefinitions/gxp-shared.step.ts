/**
 * This file is for shared, common actions between different features.
 * The types of actions include:
 * -Setup, Teardown, Navigations, Common Actions?
 */

import { Given, When, Then } from "cucumber";
import { browser, by, element, protractor } from "protractor";
import { CreateAccountPage } from "../pages/createAccountPage";
import { NavMenu } from "../pages/navMenu";


 let createAccountPage : CreateAccountPage = new CreateAccountPage();
 let navMenu : NavMenu = new NavMenu();
 let until = protractor.ExpectedConditions;
 
 let MAX_TIME_WAIT = 10000;

/**
 * Setup Section
 * 
 * steps for consistent setup before features are executed (login included)
 */

/**
 * Teardown Section
 * 
 * steps for consistent tear down once feature execution is complete
 */

/**
 * Navigations 
 * 
 * shared navigations to important pages
 */

/**
 * Common Actions? / Common Accounts?
 * 
 * things like save a vehicle, create a deal, etc.
 */

 Given('User is logged in to account', async () => {
    await browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    // browser.executeScript("arguments[0].click();", navMenu.profileIcon);
    await navMenu.profileIcon.click();

    await browser.driver.wait(
        until.visibilityOf(
            navMenu.dgComponentMenuDropdownDesktop
        ),
        MAX_TIME_WAIT,
        'Dropdown Element taking too long to appear in the DOM'
    );
    // await browser.executeScript("arguments[0].click();", navMenu.dgLoginButton);
    await navMenu.dgLoginButton.click();

    const username = "";
    const password = "";

    await browser.driver.wait(until.visibilityOf(createAccountPage.userName), MAX_TIME_WAIT, 'Username Element taking too long to appear in the DOM');
    await createAccountPage.userName.sendKeys(username);
    await createAccountPage.logonBtn.click();
    await browser.driver.wait(until.visibilityOf(createAccountPage.userPwd), MAX_TIME_WAIT, 'Password Element taking too long to appear in the DOM');
    await createAccountPage.userPwd.sendKeys(password);
    await createAccountPage.signInButton.click();
});

Given('User is in Saves page', async () => {
    //Do nothing, page will load automatically
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