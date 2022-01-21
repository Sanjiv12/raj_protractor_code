import {TCOM_WEBSITE, WAIT_TIMES} from "./Constants";

const { BeforeAll, Before, After, AfterAll, Status, defineSupportCode,setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";
import { constructVlpUrl } from "./constructVlpUrl";

BeforeAll({timeout: WAIT_TIMES.TEN_SECONDS}, async () => {
    setDefaultTimeout(WAIT_TIMES.MAX_DURATION);
});
Before({tags: 'not @keepCookies'}, async () => {
    await browser.driver.manage().deleteAllCookies();
    const vehicleListPage = constructVlpUrl();
    const sitesToRemoveCookies = [vehicleListPage, TCOM_WEBSITE];
    await deleteAllCookies(sitesToRemoveCookies);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

async function deleteAllCookies(sitesToRemoveCookies: string[]) {
    for (const site of sitesToRemoveCookies) {
        await browser.driver.get(site);
        await browser.driver.manage().deleteAllCookies();
    }
}
