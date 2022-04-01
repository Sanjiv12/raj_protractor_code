import { browser, ElementArrayFinder, ElementFinder, protractor } from "protractor";
const MAX_TIME_WAIT = 100000;
import { WAIT_TIMES } from "./Constants";
const until = protractor.ExpectedConditions;


export async function waitForVisibilityOf(pageProperty: ElementFinder, propertyName: string): Promise<boolean> {
    // try {
    //     await browser.driver.wait(
    //         until.visibilityOf(pageProperty),
    //         // keep from timing out on command timeout
    //         WAIT_TIMES.IMPLICIT_WAIT_TIME - 30000,
    //         `${propertyName} took too long to appear in the DOM`
    //     );
    // } catch (e) {
    //     console.error(e.message);
    // }

    browser.driver.manage().timeouts().implicitlyWait(30000)
    if (await pageProperty.isPresent()) {
      browser.driver.manage().timeouts().implicitlyWait(WAIT_TIMES.IMPLICIT_WAIT_TIME);
      return true;
    } else {
      browser.driver.manage().timeouts().implicitlyWait(WAIT_TIMES.IMPLICIT_WAIT_TIME);
      return false;
    }
}

export async function waitForElement(pageProperty: ElementFinder, propertyName: string) {
    try {
        await browser.driver.wait(
            until.elementToBeClickable(pageProperty),
            // keep from timing out on command timeout
            WAIT_TIMES.IMPLICIT_WAIT_TIME - 30000,
            `${propertyName} took too long to appear in the DOM`
        );
    } catch (e) {
        console.error(e.message);
    }
}

