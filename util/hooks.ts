import {TIER1_WEBSITE} from "./Constants";

const { BeforeAll, Before, After, AfterAll, Status, defineSupportCode,setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";

BeforeAll({timeout: 100 * 1000}, async () => {
    setDefaultTimeout(90 * 1000);
});
Before(async () => {
    await browser.driver.manage().deleteAllCookies();
    await browser.get(TIER1_WEBSITE.TOYOTA);
    await browser.driver.manage().deleteAllCookies();
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.driver.manage().deleteAllCookies();
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
