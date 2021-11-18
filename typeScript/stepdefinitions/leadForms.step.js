"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
const mspFilterPage_1 = require("../pages/mspFilterPage");
const vlpFilterPage_1 = require("../pages/vlpFilterPage");
const vdpPage_1 = require("../pages/vdpPage");
const assertion_1 = require("../util/assertion");
const Constants_1 = require("../util/Constants");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let vdpPage = new vdpPage_1.VdpPage();
function checkIfIsMobileDevice() {
    return __awaiter(this, void 0, void 0, function* () {
        let capabilities = yield protractor_1.browser.getCapabilities();
        return (capabilities.get(Constants_1.PLATFORMS.PLATFORM_CAPABILITY) === Constants_1.PLATFORMS.ANDROID);
    });
}
cucumber_1.When('User clicks on Unlock Savings on a Vehicle Card', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavings.first().click();
}));
cucumber_1.Then('System should display Unlock Savings modal', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vlpFilterPage.unlockSavingsModal.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User does not enter valid values for email and zip', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavingsModalEmail.click();
    yield vlpFilterPage.unlockSavingsModalZip.click();
    yield vlpFilterPage.unlockSavingsModalFirstName.click();
}));
cucumber_1.Then('System should display the email text box in error state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vlpFilterPage.unlockSavingsModalEmailError.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('System should display the zip text box in error state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vlpFilterPage.unlockSavingsModalZipError.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Reveal Price CTA in disabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vlpFilterPage.unlockSavingsModalRevealBtn.isEnabled()).valueOf()).to.be.false;
}));
cucumber_1.When('User has entered valid values for all fields', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavingsModalFirstName.sendKeys(protractor_1.browser.params.fname);
    yield vlpFilterPage.unlockSavingsModalLastName.sendKeys(protractor_1.browser.params.lname);
    yield vlpFilterPage.unlockSavingsModalEmail.sendKeys(protractor_1.browser.params.usemail);
    yield vlpFilterPage.unlockSavingsModalZip.sendKeys(protractor_1.browser.params.zipcode);
}));
cucumber_1.When('User clicks Reveal Price', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavingsModalRevealBtn.click();
}));
cucumber_1.Then('System should display confirmation modal with $ Savings', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    const savingsUnlockedText = 'savings unlocked!';
    return vlpFilterPage.unlockSavingsModalTitle.isPresent().then(() => {
        return assertion_1.Assertion.expect(vlpFilterPage.unlockSavingsModalTitle.getText()).to.eventually.contain(savingsUnlockedText);
    }).catch(() => {
        return assertion_1.Assertion.expect(vlpFilterPage.unlockSavingsModalTitleNoSavings.getText()).to.eventually.contain(savingsUnlockedText);
    });
}));
cucumber_1.Then('System should display confirmation modal with Smart Price for the vehicle', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(yield vlpFilterPage.unlockSavingsModalPrice.getText()).to.contain('Smart Price:');
}));
cucumber_1.When('User clicks on Return to page in the confirmation modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavingsModalreturnToPage.click();
}));
cucumber_1.Then('System should display all vehicle cards with Smart Price and Savings', () => __awaiter(void 0, void 0, void 0, function* () {
    return vlpFilterPage.unlockSavingsModalSmartPriceTxt.each((ele, i) => {
        return assertion_1.Assertion.expect(ele.getText()).to.eventually.contain('Smart Price');
    });
}));
cucumber_1.Then('Price Filter should display Smart Price', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vlpFilterPage.unlockSavingsModalSmartPriceFilterTxt.getText()).to.eventually.contain('Smart Price');
}));
cucumber_1.When('User clicks on any vehicle card to navigate to Vehicle Details page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.executeScript('arguments[0].click()', vlpFilterPage.appCard.first());
}));
cucumber_1.Then('System should display Smart Price with Savings for the vehicle', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.advertisedPrice.getText()).to.eventually.contain('$');
}));
cucumber_1.When('User clicks on Unlock Savings on Vehicle info header', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript('arguments[0].click()', vdpPage.unlockSavings);
}));
cucumber_1.Then('Price Summary should display additional line item for Additional Dealer Savings', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vdpPage.additionalDealerSavings.isPresent()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on Send Estimate to Dealer on a Price Summary', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.executeScript("window.scrollBy(0,250)");
    const isMobileDevice = yield checkIfIsMobileDevice();
    yield protractor_1.browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForUnlockDealer).catch(function () {
        if (isMobileDevice) {
            protractor_1.browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForNoUnlockDealerOnMobile);
        }
        else {
            protractor_1.browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForNoUnlockDealerOnDesktop);
        }
    });
}));
cucumber_1.Then('System should display Send Estimate modal', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vdpPage.mstcMultiLeadFormModal.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Payment term is same as selected in VDP', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.mstcMultiLeadFormModalPaymentTerm.getText()).to.eventually.equal((yield vdpPage.ppTerm.getText()).valueOf());
}));
cucumber_1.When('User does not enter valid values for email and zip in Send Estimate modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavingsModalEmail.click();
    yield vlpFilterPage.unlockSavingsModalZip.click();
    yield vdpPage.mstcMultiLeadFormModalFirstName.click();
}));
cucumber_1.Then('System should display the email text box in error state for sending estimate', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vlpFilterPage.unlockSavingsModalEmailError.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('System should display the zip text box in error state for sending estimate', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vdpPage.mstcMultiLeadFormModalZipError.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.Then('Display Submit CTA in Disabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect((yield vlpFilterPage.unlockSavingsModalRevealBtn.isEnabled()).valueOf()).to.be.false;
}));
cucumber_1.When('User has entered valid values for all fields in Send Estimate modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vdpPage.mstcMultiLeadFormModalFirstName.clear();
    yield vdpPage.mstcMultiLeadFormModalFirstName.sendKeys(protractor_1.browser.params.fname);
    yield vdpPage.mstcMultiLeadFormModalLastName.clear();
    yield vdpPage.mstcMultiLeadFormModalLastName.sendKeys(protractor_1.browser.params.lname);
    yield vlpFilterPage.unlockSavingsModalEmail.clear();
    yield vlpFilterPage.unlockSavingsModalEmail.sendKeys(protractor_1.browser.params.seemail);
    yield vlpFilterPage.unlockSavingsModalZip.clear();
    yield vlpFilterPage.unlockSavingsModalZip.sendKeys(protractor_1.browser.params.zipcode);
}));
cucumber_1.When('User clicks on Submit', () => __awaiter(void 0, void 0, void 0, function* () {
    yield vlpFilterPage.unlockSavingsModalRevealBtn.click();
}));
cucumber_1.Then('System should display confirmation modal "Estimate sent!"', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.mstcMultiLeadFormModalTitle.getText()).to.eventually.contain('Estimate Sent!');
}));
cucumber_1.When('User clicks on Return to page in Send Estimate confirmation modal', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.executeScript("arguments[0].click()", vdpPage.mstcMultiLeadFormModalReturnToPage);
}));
cucumber_1.When('User clicks on Contact Dealer in Footer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerLink);
}));
cucumber_1.Then('System should display Contact Dealer modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(3 * 1000);
    return assertion_1.Assertion.expect((yield mspFilterPage.contactDealerModal.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User does not enter valid values for First Name, Last Name and Email', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(3 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalFirstName);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalLastName);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalEmail);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalPhone);
}));
cucumber_1.Then('System should display the first name text box in error state for contact dealer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(mspFilterPage.contactDealerModalFirstName.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.Then('System should display the last name text box in error state for contact dealer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(mspFilterPage.contactDealerModalLastName.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.Then('System should display the email text box in error state for contact dealer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(mspFilterPage.contactDealerModalEmail.getAttribute('aria-invalid')).to.eventually.equal('true');
}));
cucumber_1.Then('Display Send CTA in Disabled state', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect((yield mspFilterPage.contactDealerModalSendBtn.isEnabled()).valueOf()).to.be.false;
}));
cucumber_1.When('User has entered valid values for all fields in Contact Dealer modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(3 * 1000);
    mspFilterPage.contactDealerModalFirstName.sendKeys(protractor_1.browser.params.fname);
    yield protractor_1.browser.driver.sleep(2 * 1000);
    mspFilterPage.contactDealerModalLastName.sendKeys(protractor_1.browser.params.lname);
    yield protractor_1.browser.driver.sleep(2 * 1000);
    mspFilterPage.contactDealerModalEmail.sendKeys(protractor_1.browser.params.cdemail);
    yield protractor_1.browser.driver.sleep(1 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalPhone);
}));
cucumber_1.When('User clicks on Send', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalSendBtn);
}));
cucumber_1.Then('System should display confirmation modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect((yield mspFilterPage.contactDealerModalConf.isDisplayed()).valueOf()).to.be.true;
}));
cucumber_1.When('User clicks on Return to page in Contact Dealer confirmation modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalreturnToPage);
}));
cucumber_1.Then('User should be navigated to Model Selection page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    return assertion_1.Assertion.expect(yield protractor_1.browser.getCurrentUrl()).to.contain('inventory?dealerCd=');
}));
