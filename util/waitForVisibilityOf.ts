import { browser, ElementFinder, protractor } from "protractor";
const MAX_TIME_WAIT = 100000;
const until = protractor.ExpectedConditions;

export async function waitForVisibilityOf(pageProperty: ElementFinder, propertyName: string) {
    await browser.driver.wait(
        until.visibilityOf(pageProperty),
        MAX_TIME_WAIT,
        `${propertyName} took too long to appear in the DOM`
    );
}