import { browser, ElementArrayFinder, ElementFinder, protractor } from "protractor"; 
import { Given, Then, When } from "cucumber";
import { SavesPage } from "../pages/savesPage";
import { NavMenu } from "../pages/navMenu";
import { expect } from "chai";

let navMenu : NavMenu = new NavMenu();
let savesPage : SavesPage = new SavesPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

// ^(\s*)[A-Z]hen (.*?)"([a-zA-Z]+)"(.*?)$
// Then('^$2\"(.*?)\"$4$', async (section) => { \n\n});

Given('User is in Saves page GXP', async () => {
    // Take no action, saves page already loaded
});

When('User loads the Saves page', async () => {
    browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    navMenu.profileIcon.click();
    
    // Click Saves Linkout, Check the Url, and then Navigate Back
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    await browser.driver.sleep(10*1000);
    browser.driver.wait(
        until.visibilityOf(savesPage.standaloneContainer),
        MAX_TIME_WAIT,
        'Saves Page taking too long to appear in the DOM'
    );
});

When('User views the Saves page', async () => {
    // Take no action, saves page already loaded
});

// Scenario: Saves - Profile Icon is visible
Then('The Profile Icon should be visible', async () => {
    browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Dropdown Element taking too long to appear in the DOM'
    );
    expect(await navMenu.profileIcon.isPresent()).to.be.true;
});

// Scenario: Saves - Sidebar Has Correct Structure
Then('Sidebar Component should be visible', async () => {
    await browser.waitForAngular();
    expect(await savesPage.sideBar.isPresent()).to.be.true;
});
Then(/Sidebar \"(.*?)\" Linkout should be present/, async (section: string) => {
    await browser.waitForAngular();
    const linkout : ElementFinder = savesPage[section.toLowerCase()+"Link"];
    browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    expect(await linkout.isPresent()).to.be.true;
});
Then(/Sidebar \"(.*?)\" Linkout should be in \"(.*?)\" state/, async (section: string, value: string) => {
    await browser.waitForAngular();
    const linkout : ElementFinder = savesPage[section.toLowerCase()+"Link"];
    browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    value.toLowerCase() === "active" ?
    expect(await linkout.getAttribute('class')).to.include('dg-nav-sidebar-active') :
    expect(await linkout.getAttribute('class')).to.not.include('dg-nav-sidebar-active');
});
Then(/Sidebar \"(.*?)\" Linkout should be \"(.*?)\"/, async (section: string, value: string) => {
    await browser.waitForAngular();
    const linkout : ElementFinder = savesPage[section.toLowerCase()+"Link"];
    browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    expect(await linkout.getText()).to.equal(value);
});
Then(/Sidebar \"(.*?)\" Linkout should link to \"(.*?)\"/, async (section: string, location: string) => {
    await browser.waitForAngular();
    const linkout : ElementFinder = savesPage[section.toLowerCase()+"Link"];
    browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    await linkout.click().then(() => {
        browser.getAllWindowHandles().then((handles: string[]) => {
            // Switch to Last Tab
            browser.driver.switchTo().window(handles[handles.length-1]);

            // Check if url is what we expect
            browser.getCurrentUrl().then((url) => {
                expect(url).to.include(location);
            });

            // If more than one tab, close the tab
            // Else navigate back
            handles.length > 1 ? browser.driver.close() : browser.navigate().back();

            // Return to main page
            browser.driver.switchTo().window(handles[0]);
        });
    });
});

// Scenario: Saves - SmartPath Header has correct structure
Then(/SmartPath Header is \"(.*?)\"/, async (value: string) => {
    await browser.waitForAngular();
    const headerText : ElementFinder = savesPage.welcomeHeader.$('.welcome-title');
    browser.driver.wait(
        until.presenceOf(savesPage.welcomeHeader),
        MAX_TIME_WAIT,
        'SmartPath Header taking too long to appear in the DOM'
    );
    await browser.actions().mouseMove(savesPage.welcomeHeader).perform();
    expect(await headerText.getText()).to.equal(value);
});
Then('SmartPath progress bar is visible', async () => {
    await browser.waitForAngular();
    browser.driver.wait(
        until.presenceOf(savesPage.smartpathProgressTracker),
        MAX_TIME_WAIT,
        'SmartPath Progress Tracker taking too long to appear in the DOM'
    );
    await browser.actions().mouseMove(savesPage.smartpathProgressTracker).perform();
    expect(await savesPage.smartpathProgressTracker.isDisplayed()).to.be.true;
});

// Scenario: Saves - Sticky Header has correct structure
Then('Sticky Header is visible', async () => {
    await browser.waitForAngular();
    browser.driver.wait(
        until.presenceOf(savesPage.stickyHeader),
        MAX_TIME_WAIT,
        'SmartPath Sticky Header taking too long to appear in the DOM'
    );
    await browser.actions().mouseMove(savesPage.stickyHeader).perform();
    expect(await savesPage.stickyHeader.isDisplayed()).to.be.true;
});
Then('Name of dealership is present', async () => {
    await browser.waitForAngular();
    browser.driver.wait(
        until.presenceOf(savesPage.stickyHeader),
        MAX_TIME_WAIT,
        'SmartPath Dealer Name taking too long to appear in the DOM'
    );
    expect(await savesPage.stickyHeader.$('.dg-dealer-name').isPresent()).to.be.true;
});

// Scenario: Saves - Temporary Saves Banner is present
Then('Temporary Saves banner is visible', async () => {
    await browser.waitForAngular();
    browser.driver.wait(
        until.visibilityOf(savesPage.temporarySavesBanner),
        MAX_TIME_WAIT,
        'Temporary Saves Banner taking too long to appear in the DOM'
    );
    expect(await savesPage.temporarySavesBanner.isPresent()).to.be.true;
});

Then(/Saved \"(.*?)\" Header is \"(.*?)\"/, async (section: string, value: string) => {
    const header : ElementFinder = savesPage[section.toLowerCase()+"SectionHeader"];
    browser.driver.wait(
        until.presenceOf(header),
        MAX_TIME_WAIT,
        section + ' Section Header taking too long to appear in the DOM'
    );
    await browser.actions().mouseMove(header).perform();
    expect(await header.getText()).to.equal(value);
});
Then(/Saved \"(.*?)\" SubHeader is \"(.*?)\"/, async (section: string, value: string) => {
    const subHeader : ElementFinder = savesPage[section.toLowerCase()+"SectionSubHeader"];
    browser.driver.wait(
        until.presenceOf(subHeader),
        MAX_TIME_WAIT,
        section + ' Section SubHeader taking too long to appear in the DOM'
    );
    await browser.actions().mouseMove(subHeader).perform();
    expect(await subHeader.getText()).to.equal(value);
});
Then(/Saved \"(.*?)\" section is empty/, async (section: string) => {
    // Expect No Cards to be Contained in the Section
    const cards : ElementArrayFinder = savesPage[section.toLowerCase()+"Cards"];
    expect(await cards.isPresent()).to.be.false;
});
Then(/Saved \"(.*?)\" Button is visible/, async (section: string) => {
    // Expect the Button to Exist
    const button : ElementFinder = savesPage[section.toLowerCase()+"Button"];
    await browser.actions().mouseMove(button).perform();
    expect(await button.isPresent()).to.be.true;
});
Then(/Saved \"(.*?)\" Button links to \"(.*?)\"/, async (section: string, location: string) => {
    const originalUrl = await browser.getCurrentUrl();
    const button : ElementFinder = savesPage[section.toLowerCase()+"Button"];
    browser.driver.wait(
        until.presenceOf(button),
        MAX_TIME_WAIT,
        section + ' Section Button taking too long to appear in the DOM'
    );
    await browser.actions().mouseMove(button).click().perform();
    let handles : string[] = await browser.getAllWindowHandles();
    
    // Switch to Last Tab
    await browser.driver.switchTo().window(handles[handles.length-1]);

    // Check if url is what we expect, sleep to allow for redirects
    await browser.driver.sleep(10*1000);
    let currentUrl = await browser.getCurrentUrl();
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
    }
    // If a new tab was opened, close the tab
    else {
        await browser.driver.close();
    }

    // Return to main page
    await browser.driver.switchTo().window(handles[0]);
});


Then('Saved Vehicle is visible in Saves Page', async () => {
    await browser.driver.sleep(10*1000);
    navMenu.profileIcon.click();
    
    // Click Saves Linkout, Check the Url, and then Navigate Back
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click();
    await browser.driver.sleep(10*1000);
    
    // Expect 1 Card to be Contained in the Section
    expect(await savesPage.inventoryCards.first().isPresent()).to.be.true;
});


Then(/\"(.*?)\" Dividers are present/, async (dividerCount: string) => {
    const count: number = parseInt(dividerCount);
    expect((await savesPage.divisionLines).length).to.equal(count);
});