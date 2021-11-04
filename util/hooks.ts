import {TIER1_WEBSITE} from "./Constants";

const { BeforeAll, Before, After, AfterAll, Status, defineSupportCode,setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";


Before( () => {
    browser.get(TIER1_WEBSITE.TOYOTA).then(() => {
        browser.driver.manage().deleteAllCookies();
        browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
        browser.driver.manage().deleteAllCookies();
    });
})
BeforeAll({timeout: 100 * 1000}, async () => {
    setDefaultTimeout(90 * 1000);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
