import { browser, ElementFinder, protractor } from "protractor"; 
import { Then, When } from "cucumber";
import { CreateAccountPage } from "../pages/createAccountPage";
import { NavMenu } from "../pages/navMenu";
import { expect } from "chai";

let createAccountPage : CreateAccountPage = new CreateAccountPage();
let navMenu : NavMenu = new NavMenu();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

// Signed Out Scenario
// Uses Given Statement from VDP or VLP
When('User clicks the Top Nav Dropdown Menu icon', async () => {
    // Perform click action
    browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    navMenu.profileIcon.click();
});

Then('The Top Nav Menu Dropdown should be visible', async () => {
    // dg-component-menu-dropdown has class 'dg-open'
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.getAttribute('class')).to.contain('dg-open');
});
Then('The Profile Icon should be in Selected state', async () => {
    // dg-menu-dropdown-icon has class 'dg-selected-icon'
    expect(await navMenu.profileIcon.$('.dg-menu-dropdown-icon img').getAttribute('class')).to.contain('dg-selected-icon');
});
Then('Deals Linkout should be present', async() => {
    // dg-menu-saves-page-linkout is present
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-deals-page-linkout').isPresent()).to.be.true;
});
Then('Deals Linkout should have Correct Text', async() => {
    // dg-menu-saves-page-linkout has correct text
    let correctText = "Buy Online"
    expect(
        await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-deals-page-linkout .dg-component-menu-text').getText()
    ).to.equal(correctText);
});
Then('Deals Linkout should link to Deals Page', async() => {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-deals-page-linkout').click().then(() => {
        browser.getCurrentUrl().then((url) => {
            expect(url).to.include(
                '/my-deals?'
                +'dealerCd='+browser.params.dealerCd
                +'&source='+browser.params.source
            );
        });
        browser.navigate().back();
    });
    browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    navMenu.profileIcon.click();
});
Then('Saves Linkout should be present', async() => {
    // dg-menu-saves-page-linkout is present
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').isPresent()).to.be.true;
});
Then('Saves Linkout should have Correct Text', async() => {
    // dg-menu-saves-page-linkout has correct text
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    let correctText = "My Saves";
    expect(
        await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout .dg-component-menu-text').getText()
    ).to.equal(correctText);
});
Then('Saves Linkout should link to Saves Page', async() => {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click().then(() => {
        browser.getCurrentUrl().then((url) => {
            expect(url).to.include(
                '/saves?'
                +'dealerCd='+browser.params.dealerCd
                +'&source='+browser.params.source
            );
        });
        browser.navigate().back();
    });
    browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    navMenu.profileIcon.click();
});
Then('Owners Linkout should not be present', async() => {
    // dg-menu-owners-page-linkout is present
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').isPresent()).to.be.false;
});
Then('Temporary Saved Items Message should be present', async () => {
    // dg-menu-message is the correct text
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    navMenu.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message').then(
        async (messages: ElementFinder[]) => {
            expect(await messages[0].getText()).to.equal('These saved items are temporary.')
            expect(await messages[1].getText()).to.equal('Create an account to permanently save your selections.')
        }
    );
});
Then('Create Account Button should be present', async () => {
    // dg-register-btn exists
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-register-btn').isPresent()).to.be.true;
});
Then('Sign In Button should be present', async() => {
    // dg-login-btn exists
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-login-btn').isPresent()).to.be.true;
});


// Signed In Scenario
// Uses Given Statement from VDP or VLP
When('User clicks the Top Nav Dropdown Menu icon and Signs In', async () => {
    // Click Profile Icon
    await browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    await navMenu.profileIcon.click();
    
    // Sign in User
    const username = "";
    const password = "";
    await browser.driver.wait(
        until.visibilityOf(
            navMenu.dgComponentMenuDropdownDesktop
        ),
        MAX_TIME_WAIT,
        'Dropdown Element taking too long to appear in the DOM'
    );
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-login-btn').click();
    await browser.driver.wait(until.visibilityOf(createAccountPage.userName), MAX_TIME_WAIT, 'Username Element taking too long to appear in the DOM');
    await createAccountPage.userName.sendKeys(username);
    await createAccountPage.logonBtn.click();
    await browser.driver.wait(until.visibilityOf(createAccountPage.userPwd), MAX_TIME_WAIT, 'Password Element taking too long to appear in the DOM');
    await createAccountPage.userPwd.sendKeys(password);
    await createAccountPage.signInBtn.click();

    // Open Dropdown Menu
    browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    navMenu.profileIcon.click();
});
Then('Owners Linkout should be present', async() => {
    // dg-menu-owners-page-linkout is present
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').isPresent()).to.be.true;
});
Then('Owners Linkout should have Correct Text', async() => {
    // dg-menu-owners-page-linkout has correct text
    let correctText = "My Vehicles"
    expect(
        await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout .dg-component-menu-text').getText()
    ).to.equal(correctText);
});
Then('Owners Linkout should link to Owners Page', async() => {
    // Click Owners Linkout, Switch Tabs, Check the Url, and then Navigate Back
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    await navMenu.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').click().then(() => {
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.getCurrentUrl().then((url) => {
                expect(url).to.include('/owners');
            });
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });
});
Then('Account Button should be present', async() => {
    // dg-account-btn exists
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-account-btn').isPresent()).to.be.true;
});
Then('Sign Out Button should be present', async() => {
    // dg-logout-btn exists
    browser.driver.wait(until.visibilityOf(navMenu.dgComponentMenuDropdownDesktop),MAX_TIME_WAIT,'Dropdown Element taking too long to appear in the DOM');
    expect(await navMenu.dgComponentMenuDropdownDesktop.$('#dg-logout-btn').isPresent()).to.be.true;
    navMenu.dgComponentMenuDropdownDesktop.$('#dg-logout-btn').click();
});