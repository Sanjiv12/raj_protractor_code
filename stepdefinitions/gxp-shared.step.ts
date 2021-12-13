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
import { Assertion } from "../util/assertion";
import { CreateAccountPage } from "../pages/createAccountPage";
import { hasNotPreviouslyLoggedIn } from "../util/hasNotPreviouslyLoggedIn";

let createAccountPage: CreateAccountPage = new CreateAccountPage();
const savesPage: SavesPageRedesign = new SavesPageRedesign();
let navMenu: NavMenu = new NavMenu();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 10000;


When(/User Signs In(\s\"(.*?)\")?(\s\"(.*?)\")?/, async(email?: string, password?: string) =>{
    await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon'); 
    await navMenu.profileIcon.click();

    await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Dropdown Element');
    await navMenu.dgLoginButton.click();
     if (await hasNotPreviouslyLoggedIn()) {
         await createAccountPage.userName.sendKeys(email || browser.params.caemailreg);
         await createAccountPage.nextStepButton.click();
         await createAccountPage.userPwd.sendKeys(password || browser.params.capwdreg);
         await createAccountPage.signInButton.click();
     }
 });

Given("User is not logged in to account", async () => {
  await browser.driver.wait(
    until.visibilityOf(navMenu.profileIcon),
    MAX_TIME_WAIT,
    "Top Nav Profile Icon taking too long to appear in the DOM"
  );
  navMenu.profileIcon.click();

  await browser.driver.wait(
    until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),
    MAX_TIME_WAIT,
    "Dropdown Element taking too long to appear in the DOM"
  );
  if (!Assertion.expect(await navMenu.dgLoginButton.isDisplayed())) {
  } else {
    await navMenu.profileIcon.click();
  }
});

/**
 * Navigations
 *
 * shared navigations to important pages
 */

Given("User is in Saves page", async () => {
  const savesPageInfo = await getPageInfo("saves");
  const currentUrl = await browser.getCurrentUrl();

  const onSavesPage = savesPageInfo.urlTest.test(currentUrl);

  if (!onSavesPage) {
    const savesPage = constructSavePageUrl();
    await browser.driver.get(savesPage);
  }

  await waitForVisibilityOf(savesPageInfo.pageDef, savesPageInfo.title);
});

When("User loads the Saves page", async () => {
  await waitForVisibilityOf(navMenu.profileIcon, "Top Nav Profile Icon");
  await navMenu.profileIcon
    .element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]/div[1]/img'))
    .click();

  // Click Saves Linkout, Check the Url, and then Navigate Back
  browser.driver.wait(
    until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),
    MAX_TIME_WAIT,
    "Dropdown Element taking too long to appear in the DOM"
  );
  if ((await navMenu.savesPageLinkOut.isDisplayed()) == false) {
    navMenu.profileIcon.click();
  }
  await navMenu.dgComponentMenuDropdownDesktop
    .$("#dg-menu-saves-page-linkout")
    .click();
  await browser.driver.sleep(MAX_TIME_WAIT);
  await waitForVisibilityOf(savesPage.savePageTitle, "Saves Page");
});

Then(/User is redirected to \"(.*?)\" Page/, async (page: string) => {
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

Given(/User is in tier \"(.*?)\" Saves page/, async (tierNo: string) => {
  const tierXSavesPageUrl = await constructSavePageUrl(
    browser.params[`tier${tierNo}url`]
  );
  await browser.driver.get(tierXSavesPageUrl);
});

Given("User is not logged in", async () => {
  //user is logged out by default
  //do nothing
  //TODO: add validation and potential log out flow from WILL
});

Given("User is on desktop", async () => {
  browser.driver.manage().window().maximize();
});

Given("User is on tablet", async () => {
  browser.driver.manage().window().setSize(768, 1024);
});

Given("User is on mobile", async () => {
  browser.driver.manage().window().setSize(375, 667);
});
