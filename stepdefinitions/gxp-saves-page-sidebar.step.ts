import {browser, by, ElementFinder, protractor} from "protractor";
import { Given, Then, When } from "cucumber";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { expect } from "chai";
import { NavMenu } from "../pages/navMenu";
import { getPageInfo } from "../util/getPageInfo";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

let savesPage : SavesPageRedesign = new SavesPageRedesign();
let navMenu : NavMenu = new NavMenu();
let until = protractor.ExpectedConditions;

const countRE : RegExp = /\(\d*?\)/;

let MAX_TIME_WAIT = 15000;

/**
 * GIVEN
 */



/**
 * WHEN
 */

When(/User clicks \"(.*?)\" Linkout/, async (section: string) => {
    await browser.driver.wait(until.visibilityOf(savesPage.sideBar), MAX_TIME_WAIT, 'Sidebar taking too long to appear in the DOM');
    const sectionFormatted = section.replace(/\s/g, '');
    const linkout : ElementFinder = savesPage["sideBar"+sectionFormatted+"Link"]; 
    await browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    await linkout.click();
});

/**
 * THEN
 */

Then('Sidebar Component should be visible', async () => {
    await browser.driver.wait(
        until.visibilityOf(savesPage.sideBar),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    expect(savesPage.sideBar.isDisplayed());
});

Then(/Sidebar \"(.*?)\" Linkout should be in \"(.*?)\" state/, async (section: string, value: string) => {
    const linkout : ElementFinder = savesPage["sideBar"+section+"Link"];
    await browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    value.toLowerCase() === "active" ?
    expect(await linkout.element(by.xpath('..')).getAttribute('class')).to.include('active').and.not.include('inactive') :
    expect(await linkout.element(by.xpath('..')).getAttribute('class')).to.include('inactive');
});

async function compareUrlToExpectedUrl (expected: RegExp): Promise<boolean> {
    const currentUrl = await browser.getCurrentUrl();
    return expected.test(currentUrl);
};

Then(/\"(.*?)\" page opens in \"(.*?)\" tab/, async(page: string, sameOrNew: string) => {
    const pageInfo = await getPageInfo(page.toLowerCase());

    if (sameOrNew.toLowerCase() === 'new') {
        await browser.getAllWindowHandles().then(function (handles) {
            const newestWindow = handles[handles.length - 1];
            browser.switchTo().window(newestWindow);
        });
    }
    if(pageInfo.pageDef) {
        await waitForVisibilityOf(pageInfo.pageDef, pageInfo.title);
        expect(pageInfo.pageDef.isDisplayed());
    }
    expect( await compareUrlToExpectedUrl(pageInfo.urlTest));
});

Then('Sidebar Component should not be visible', async() => {
    await browser.driver.wait(until.visibilityOf(savesPage.savePageTitle), MAX_TIME_WAIT, 'Saves page taking too long to load');
    expect(!savesPage.sideBar.isPresent());
});

Then(/Sidebar header should display \"(.*?)\"/, async(content: string) => {
    await browser.driver.wait(until.visibilityOf(savesPage.savePageTitle), MAX_TIME_WAIT, 'Saves page taking too long to load');
    const sidebarHeader = savesPage.sideBarHeader;
    expect((await sidebarHeader.getText()).toLowerCase()).to.include(content.toLowerCase());
});

Then(/Sidebar \"(.*?)\" Linkout display no count/, async(section: string) => {
    await browser.driver.wait(until.visibilityOf(savesPage.savePageTitle), MAX_TIME_WAIT, 'Saves page taking too long to load');
    const linkout : ElementFinder = savesPage["sideBar"+section+"Link"];

    await browser.driver.wait(
        until.visibilityOf(linkout),
        MAX_TIME_WAIT,
        section + ' Section Linkout taking too long to appear in the DOM'
    );
    
    const linkoutText = await linkout.getText();
    expect(!countRE.test(linkoutText));
});

Then(/Sidebar \"(.*?)\" Linkout display count \"(.*?)\"/, async(section: string, saveCount: string) => {
    await waitForVisibilityOf(savesPage.sideBarHeader, 'Sidebar');
    const linkout : ElementFinder = savesPage["sideBar"+section+"Link"];

    await waitForVisibilityOf(linkout, section);
    
    const linkoutText = await linkout.getText();
    const linkoutCount = linkoutText.match(countRE);
    console.log(`linkout count ${linkoutCount}`);
    const expectedCount = saveCount.match(countRE);
    console.log(`expected count ${expectedCount}`);

    await expect(linkoutCount.toString() === expectedCount.toString()).to.equal(true);
});

Then('User is logged out', async() => {
    await browser.driver.wait(
        until.visibilityOf(navMenu.profileIcon),
        MAX_TIME_WAIT,
        'Top Nav Profile Icon taking too long to appear in the DOM'
    );
    await navMenu.profileIcon.click();

    expect(navMenu.dgLoginButton.isPresent());
})
