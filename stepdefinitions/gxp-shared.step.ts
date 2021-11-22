/**
 * This file is for shared, common actions between different features.
 * The types of actions include:
 * -Setup, Teardown, Navigations, Common Actions?
 */

 import { Given, When, Then } from "cucumber";
 import { browser, by, element, protractor } from "protractor";
 import { CreateAccountPage } from "../pages/createAccountPage";
 import { NavMenu } from "../pages/navMenu";
 import {Assertion} from "../util/assertion"


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

  async function hasNotPreviouslyLoggedIn() {
    return browser.driver.getCurrentUrl().then((url) => {
        return url.includes('account.toyota.com');
    });
 }

 When(/User Signs In \"?(.*?)\" \"?(.*?)\"/, async  (email?: string, password?: string) =>{
     await browser.driver.wait(
         until.visibilityOf(navMenu.profileIcon),
         MAX_TIME_WAIT,
         'Top Nav Profile Icon taking too long to appear in the DOM'
     );
     navMenu.profileIcon.click();
     await browser.driver.wait(
         until.visibilityOf(
             navMenu.dgComponentMenuDropdownDesktop
         ),
         MAX_TIME_WAIT,
         'Dropdown Element taking too long to appear in the DOM'
     );
     await navMenu.dgLoginButton.click();
     if (await hasNotPreviouslyLoggedIn()) {
         await createAccountPage.userName.sendKeys(email ? email : browser.params.caemailreg);
         await createAccountPage.nextStepButton.click();
         await createAccountPage.userPwd.sendKeys(password ? password : browser.params.capwdreg);
         await createAccountPage.signInButton.click();
     }
 });

 Given('User is not logged in to account', async () => {
    await browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    // browser.executeScript("arguments[0].click();", navMenu.profileIcon);
    navMenu.profileIcon.click();

    await browser.driver.wait(
        until.visibilityOf(
            navMenu.dgComponentMenuDropdownDesktop
        ),
        MAX_TIME_WAIT,
        'Dropdown Element taking too long to appear in the DOM'
    );
    if (!Assertion.expect(await navMenu.dgLoginButton.isDisplayed())) {
        console.log('we are logged in');
    }
    else {
        console.log('we are logged out')
        await navMenu.profileIcon.click();
    }
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