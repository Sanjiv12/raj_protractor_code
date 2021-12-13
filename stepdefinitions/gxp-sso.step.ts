import { browser, ElementFinder, protractor } from "protractor"; 
import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";
import { getPageInfo } from "../util/getPageInfo";
import { NavMenu } from "../pages/navMenu";
import { hasNotPreviouslyLoggedIn } from "../util/hasNotPreviouslyLoggedIn";
import { CreateAccountPage } from "../pages/createAccountPage";
import { OwnersPage } from "../pages/ownersPage";
import { selectMostRecentTab } from "../util/selectMostRecentTab";
import { OWNERS_URL } from "../util/Constants";
import { constructSavePageUrl } from "../util/constructSavePageUrl";
import { SavesPageRedesign } from "../pages/savesPageRedesign";

let ownersPage : OwnersPage = new OwnersPage();
let savesPage : SavesPageRedesign = new SavesPageRedesign();
let navMenu : NavMenu = new NavMenu();
let createAccountPage : CreateAccountPage = new CreateAccountPage();

Given(/User signs in on \"(.*?)\"/, async(page: string) => {
    if(page.toLowerCase() === 'smartpath') {
        await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon');
        await navMenu.profileIcon.click();

        await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Dropdown Element');
        await navMenu.dgLoginButton.click();
        
    } else if(page.toLowerCase() === 'owners') {
        await waitForVisibilityOf(ownersPage.ownersSignInButton, 'Owners Sign In Button');
        await ownersPage.ownersSignInButton.click();

    } else {
        console.log(`please implement path for Given("User Signs in on ${page}")`);
    }
    if (await hasNotPreviouslyLoggedIn()) {
        await createAccountPage.userName.sendKeys(browser.params.caemailreg);
        await createAccountPage.nextStepButton.click();
        await createAccountPage.userPwd.sendKeys(browser.params.capwdreg);
        await createAccountPage.signInButton.click();
    }
});

Given(/User signs out on \"(.*?)\"/, async(page: string) => {
    if(page.toLowerCase() === 'smartpath') {
        await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon');
        await navMenu.profileIcon.click();

        await waitForVisibilityOf(navMenu.dgSignOutButton, 'Sign out button');
        await navMenu.dgSignOutButton.click();

    } else if(page.toLowerCase() === 'owners'){
        await waitForVisibilityOf(ownersPage.ownersLoggedInDropdown, 'Owners Logged In Dropdown');
        await browser.actions().mouseMove(ownersPage.ownersLoggedInDropdown).perform();

        await waitForVisibilityOf(ownersPage.ownersSignOutButton, 'Owners Signout Button');
        await ownersPage.ownersSignOutButton.click();

    } else {
        console.log(`please implement path for Given("User Signs out on ${page}")`);
    }
});

Given("User is in Owners page", async() => {
    const ownersPageInfo = await getPageInfo('owners');
    const currentUrl = await browser.getCurrentUrl();

    const onOwnersPage = ownersPageInfo.urlTest.test(currentUrl);

    if(!onOwnersPage){
        const ownersPageUrl = OWNERS_URL;
        await browser.driver.get(ownersPageUrl);
    }

    await waitForVisibilityOf(ownersPageInfo.pageDef, ownersPageInfo.title);
});

When("User Navigates to Owners page", async() => {
    await waitForVisibilityOf(navMenu.profileIcon, 'Top Nav Profile Icon');
    await navMenu.profileIcon.click();

    await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Dropdown Element');
    await navMenu.dgOwnersLinkout.click();

    const ownersPageInfo = await getPageInfo('owners');
    await selectMostRecentTab();
    const currentUrl = await browser.driver.getCurrentUrl();

    expect(ownersPageInfo.urlTest.test(currentUrl)).to.be.true;
    await waitForVisibilityOf(ownersPageInfo.pageDef, 'Owners Page');
});

When("User Navigates to SmartPath page from Owners", async () => {
    await waitForVisibilityOf(ownersPage.ownersHeaderLogo, 'Owners Page');
    const savesPageUrl = constructSavePageUrl();
    await browser.driver.get(savesPageUrl);

    await waitForVisibilityOf(savesPage.savePageHeader, 'Saves Page');
});

Then("User is signed in on Owners", async() => {
    await waitForVisibilityOf(ownersPage.ownersLoggedInDropdown, 'Owners Page');
    await browser.actions().mouseMove(ownersPage.ownersLoggedInDropdown).perform();

    await waitForVisibilityOf(ownersPage.ownersSignOutButton, 'Owners Sign Out Button');
    expect(await ownersPage.ownersSignOutButton.isDisplayed()).to.be.true;
});

Then("User is signed in on SmartPath", async() => {
    await waitForVisibilityOf(navMenu.profileIcon, 'Profile Icon');
    await navMenu.profileIcon.click();

    await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Dropdown Element');

    expect(await navMenu.dgSignOutButton.isDisplayed()).to.be.true;
});

Then("User is signed out on Owners", async () => {
    await waitForVisibilityOf(ownersPage.ownersSignInButton, 'Owners Sign In Button');
    expect(await ownersPage.ownersLoggedInDropdown.isDisplayed()).to.be.false;
});

Then("User is signed out on SmartPath", async() => {
    await waitForVisibilityOf(navMenu.profileIcon, 'Profile Icon');
    await navMenu.profileIcon.click();

    await waitForVisibilityOf(navMenu.dgComponentMenuDropdownDesktop, 'Dropdown Element');

    expect(await navMenu.dgLoginButton.isDisplayed()).to.be.true;
});