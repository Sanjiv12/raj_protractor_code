import { element, by, ElementFinder } from "protractor";

export class OwnersPage {
    ownersHeaderLogo = element(by.id('toyota-logo'));
    ownersSignInButton = element(by.id('SignIn'));
    ownersLoggedInDropdown = element(by.xpath('//div[@class="username-view"]'));
    ownersLoggedInDropdownLinks = element(by.xpath('//div[@class="username-view"]/ul')).all(by.xpath('//li[@class="user-links"]/a'));
    ownersSignOutButton = element(by.id('SignOut'));
} 