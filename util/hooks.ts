const { BeforeAll, After, AfterAll, Status, defineSupportCode,setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";

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
