import { browser } from "protractor";
import { WAIT_TIMES } from "../util/Constants";

export async function hasNotPreviouslyLoggedIn() {
    await browser.driver.sleep(WAIT_TIMES.FIVE_SECONDS);
    return browser.driver.getCurrentUrl().then((url) => {
        return url.includes('account.toyota.com');
    });
}