import {TCOM_WEBSITE, WAIT_TIMES} from "./Constants";

const { BeforeAll, Before, After, AfterAll, Status, defineSupportCode,setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";
import { constructVlpUrl } from "./constructVlpUrl";

BeforeAll({timeout: WAIT_TIMES.TEN_SECONDS}, async () => {
    setDefaultTimeout(WAIT_TIMES.MAX_DURATION);
});
Before(async () => {
        
        const vehicleListPage = constructVlpUrl();
        await browser.driver.manage().deleteAllCookies();
        await browser.get(TCOM_WEBSITE);
        await browser.driver.manage().deleteAllCookies();
        await browser.get(vehicleListPage);
        await browser.driver.manage().deleteAllCookies();
        await browser.driver.manage().timeouts().implicitlyWait(20000);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
