import { browser, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";

let url, logoutUrl;

Given('User is not in MST-C', async () =>{
    browser.driver.manage().window().maximize();
    //
    // to make sure redirect is done and we are on the main page
    //
    // await browser.driver.wait(async() => {
    //     url = await browser.driver.getCurrentUrl();
    //     //console.log("url", url);
    //     return /summary/.test(url);
    // }); 
    //
    // to make sure data is loaded
    //
    await browser.driver.sleep(5*1000);
});
    

When('User enters the MST-C url in the browser', async  () =>{
    // browser.executeScript("document.getElementById('con-app-navbar-dealer-name').click();");
    await browser.driver.sleep(5*1000);
    // browser.executeScript("document.getElementById('con-app-logout-div').click();");
});

Then('User should be taken to the MST-C home page', async () => {
    await browser.driver.sleep(2*1000);

});