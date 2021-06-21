import { browser, by, By, element, ElementArrayFinder, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter, After } from "cucumber";
import { expect } from "chai";

let until = protractor.ExpectedConditions;
let MAX_TIME_WAIT = 5000;

Given('Cookies are cleared', async () => {
    await browser.driver.manage().deleteAllCookies();
});