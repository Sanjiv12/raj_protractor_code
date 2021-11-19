import { browser, by, element, ElementFinder, protractor } from "protractor";
import { Then, When, Given } from "cucumber";
import { CreateAccountPage } from "../pages/createAccountPage";
import { NavMenu } from "../pages/navMenu";
import { expect } from "chai";

let createAccountPage : CreateAccountPage = new CreateAccountPage();
let navMenu : NavMenu = new NavMenu();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 10000;

// Signed Out Scenario
// Uses Given Statement from VDP or VLP
When('User clicks the Top Nav Dropdown Menu icon', async () => {
    // Perform click action
    await browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    navMenu.profileIcon.click();
});

Then('The Top Nav Menu Dropdown should be visible', async () => {
    // dg-component-menu-dropdown has class 'dg-open'
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.getAttribute('class')).to.contain('dg-open');
});
Then('The Profile Icon should be in Selected state', async () => {
    // dg-menu-dropdown-icon has class 'dg-selected-icon'
    expect(await navMenu.profileIcon.$('.dg-menu-dropdown-icon img').getAttribute('class')).to.contain('dg-selected-icon');
});
Then(/Top Nav \"(.*?)\" Linkout should be present/, async (section: string) => {
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-'+section.toLowerCase()+'-page-linkout').isPresent()).to.be.true;
});
Then(/Top Nav \"(.*?)\" Linkout should not be present/, async (section: string) => {
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-'+section.toLowerCase()+'-page-linkout').isPresent()).to.be.false;
});
Then(/Top Nav \"(.*?)\" Linkout Text should be \"(.*?)\"/, async (section: string, correctText: string) => {
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(
        await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-'+section.toLowerCase()+'-page-linkout .dg-component-menu-text').getText()
    ).to.equal(correctText);
});

Then(/Top Nav \"(.*?)\" Linkout should link to \"(.*?)\"/, async (section: string, location: string) => {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    const originalUrl = await browser.getCurrentUrl();
    const element =  navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-'+section.toLowerCase()+'-page-linkout')
    await browser.executeScript("arguments[0].click();", element);


    let handles : string[] = await browser.getAllWindowHandles();

    // Switch to Last Tab
    await browser.driver.switchTo().window(handles[handles.length-1]);

    // Check if url is what we expect, sleep to allow for redirects
    await browser.driver.sleep(15*1000);
    let currentUrl = await browser.getCurrentUrl();
    console.log("URL is: " + currentUrl);
    expect(currentUrl).to.include(location);

    // If there is only 1 tab, navigate back until we reach the original page
    if (handles.length === 1) {
        await browser.navigate().back();

        currentUrl = await browser.getCurrentUrl();
        let backCommandCount = 0;
        while (currentUrl != originalUrl && backCommandCount < 3) {
            await browser.navigate().back();
            backCommandCount++;
            await browser.waitForAngular();
            currentUrl = await browser.getCurrentUrl();
        }
        await browser.driver.wait(
            until.visibilityOf(navMenu.profileIcon),
            MAX_TIME_WAIT,
            'Top Nav Profile Icon taking too long to appear in the DOM'
        );
        await navMenu.profileIcon.click();
    }
    // If a new tab was opened, close the tab
    else {
        await browser.driver.close();
    }

    // Return to main page
    await browser.driver.switchTo().window(handles[0]);
});
Then('Temporary Saved Items Message should be present', async () => {
    // dg-menu-message is the correct text
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    // await navMenu.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message').then(
    //     async (messages: ElementFinder[]) => {
    //         expect(await messages[0].getText()).to.equal('These saved items are temporary.')
    //         expect(await messages[1].getText()).to.equal('Create an account to permanently save your selections.')
    //     }
    // );
    await navMenu.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message');
    expect (await navMenu.dgMenuMessages[0].getText()).to.equal('These saved items are temporary.');
    expect (await navMenu.dgMenuMessages[1].getText()).to.equal('Create an account to permanently save your selections.');

});
Then('Create Account Button should be present', async () => {
    // dg-register-btn exists
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgCreateAccountButton.isPresent()).to.be.true;
});
Then('Sign In Button should be present', async() => {
    // dg-login-btn exists
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgLoginButton.isPresent()).to.be.true;
});

Then('Account Button should be present', async() => {
    // dg-account-btn exists
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-account-btn').isPresent()).to.be.true;
});
Then('Sign Out Button should be present', async() => {
    // dg-logout-btn exists
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgSignOutButton.isPresent()).to.be.true;
});

Then('Manage Account Button should be present', async() => {
    await browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgManageAccount.isPresent()).to.be.true;

})
