import { browser, ElementFinder, protractor } from "protractor";
import { WAIT_TIMES } from "./Constants";
const until = protractor.ExpectedConditions;

export async function waitForVisibilityOf(pageProperty: ElementFinder, propertyName: string) {
    try {
        await browser.driver.wait(
            until.visibilityOf(pageProperty),
            // keep from timing out on command timeout
            WAIT_TIMES.IMPLICIT_WAIT_TIME - 500,
            `${propertyName} took too long to appear in the DOM`
        );
    } catch (e) {
        console.error(e.message);
    }
}