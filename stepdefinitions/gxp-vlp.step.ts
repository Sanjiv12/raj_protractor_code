import { browser, by, By, element, ElementArrayFinder, ElementFinder, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";

let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;

// Save Hearts
When('User clicks on a vehicle save heart', async () =>{
    var heart : ElementFinder = vlpFilterPage.vehicleSaveHeart.get(1);
    browser.driver.wait(until.visibilityOf(heart),MAX_TIME_WAIT,'Element taking too long to appear in the DOM');
    heart.click();
});

Then('Heart should turn active', async () =>{
    browser.driver.wait(until.visibilityOf(vlpFilterPage.vehicleSaveHeartActive),MAX_TIME_WAIT,'Element taking too long to appear in the DOM');
    expect((await vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Tooltip should open', async () =>{
    expect((await vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.true;
});

// Top Nav
// Scenario: VLP - Top Nav Dropdown Desktop Signed Out
When('User clicks the Top Nav Dropdown Menu icon', async () => {
    // Perform click action
    browser.driver.wait(
        until.visibilityOf(vlpFilterPage.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    vlpFilterPage.profileIcon.click();
});

Then('The Top Nav Menu Dropdown should be visible', async () => {
    // dg-component-menu-dropdown has class 'dg-open'
    expect(await vlpFilterPage.dgComponentMenuDropdownDesktop.getAttribute('class')).to.contain('dg-open');
});
Then('The Profile Icon should be in Selected state', async () => {
    // dg-menu-dropdown-icon has class 'dg-selected-icon'
    expect(await vlpFilterPage.profileIcon.$('.dg-menu-dropdown-icon img').getAttribute('class')).to.contain('dg-selected-icon');
});
Then('Saves Linkout should be present', async() => {
    // dg-menu-saves-page-linkout is present
    expect(await vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').isPresent()).to.be.true;
});
Then('Saves Linkout should read View Saves', async() => {
    // dg-menu-saves-page-linkout has text "View Saves"
    expect(
        await vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout .dg-component-menu-text').getText()
    ).to.equal('View Saves');
});
Then('Saves Linkout should link to Saves Page', async() => {
    // Click Saves Linkout, Check the Url, and then Navigate Back
    vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-saves-page-linkout').click().then(() => {
        browser.getCurrentUrl().then((url) => {
            expect(url.slice(-6)).to.equal("/saves");
        });
        browser.navigate().back();
    });
});
Then('Owners Linkout should be present', async() => {
    // dg-menu-owners-page-linkout is present
    expect(await vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').isPresent()).to.be.true;
});
Then('Owners Linkout should read Manage Vehicles', async() => {
    // dg-menu-owners-page-linkout has text "Manage Vehicles"
    expect(
        await vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout .dg-component-menu-text').getText()
    ).to.equal('Manage Vehicles');
});
Then('Owners Linkout should link to Owners Page', async() => {
    // Click Owners Linkout, Switch Tabs, Check the Url, and then Navigate Back
    vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-menu-owners-page-linkout').click().then(() => {
        browser.getAllWindowHandles().then((handles) => {
            browser.switchTo().window(handles[handles.length - 1]).then(() => {
                browser.getCurrentUrl().then((url) => {
                    expect(url.slice(-7)).to.equal("/owners");
                });
            });
            // switch back to the main window
            browser.switchTo().window(handles[0]);
        });
    });
});
Then('Temporary Saved Items Message should be present', async() => {
    // dg-menu-message is the correct text
    vlpFilterPage.dgComponentMenuDropdownDesktop.$$('.dg-menu-dropdown-login .dg-menu-message').then(
        (messages) => {
            expect(messages[0]).to.equal('These saved items are temporary.')
            expect(messages[1]).to.equal('Create an account to permanently save your selections.')
        }
    );
});
Then('Create Account Button should be present', async() => {
    // dg-register-btn exists
    expect(await vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-register-btn').isPresent()).to.be.true;
});
// Then('Create Account Button should link out to Login Page', async() => {
//     // Click Create Account, Check the Url, and then Navigate Back
//     vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-register-btn').click().then(() => {
//         browser.getCurrentUrl().then((url) => {
//             expect(url.slice(-6)).to.equal("/");
//         });
//         browser.navigate().back();
//     });
// });
Then('Sign In Button should be present', async() => {
    // dg-login-btn exists
    expect(await vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-login-btn').isPresent()).to.be.true;
});
// Then('Sign In Button should link out to Login Page', async() => {
//     // Click Sign In, Check the Url, and then Navigate Back
//     vlpFilterPage.dgComponentMenuDropdownDesktop.$('#dg-login-btn').click().then(() => {
//         browser.getCurrentUrl().then((url) => {
//             expect(url.slice(-6)).to.equal("/");
//         });
//         browser.navigate().back();
//     });
// });
