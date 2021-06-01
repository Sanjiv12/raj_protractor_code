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
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let vdpPage = new vdpPage_1.VdpPage();
cucumber_1.When('User clicks on Learn more CTA for a Protection product', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    vdpPage.ppLearnMore.click();
}));
cucumber_1.Then('System should open Protection products detail modal with Plan Name', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalPlanName.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.Then('System should open Protection products detail modal with Plan Description', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalPlanDesc.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.Then('System should open Protection products detail modal with Video', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalVideo.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.Then('System should open Protection products detail modal with Length of Coverage', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalCoverageLength.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.Then('System should open Protection products detail modal with Total Due at Signing', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.ppModalTotalDue.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('System should open Protection products detail modal with Select CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalSelectButton.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.Then('System should open Protection products detail modal with Plan Detail', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect((yield vdpPage.ppModalPlanDetails.getText()).length).to.be.gt(0);
}));
cucumber_1.Then('System should open Protection products detail modal with View Brochure', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalViewBrochure.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.Then('System should open Protection products detail modal with Disclaimers at the bottom', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppModalFooter.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.When('User selects a Protection product', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    vdpPage.ppPlanSelectCbClick.first().click();
}));
cucumber_1.Then('System should update the total amount in Step 4', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.ppTotal.getText().then((value) => __awaiter(void 0, void 0, void 0, function* () {
        //console.log('+++value - '+value);
        let total = Number(((value.replace('Total: $', '')).replace(',', '')).trim());
        //console.log('+++total - '+total);
    })).catch((err) => console.log('+++errorr - ' + err));
}));
cucumber_1.Then('Price summary should be updated', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.dueAtSigning.getText().then((value) => {
        let due = Number(((value.replace(' due at signing', '')).replace('$', '').trim()).replace(',', ''));
        return assertion_1.Assertion.expect(due).to.be.gt(0);
    });
}));
cucumber_1.When('User changes the plan for the Protection product selected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.ppPlanOptionClick.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.ppPlanOption.first().click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
}));
cucumber_1.Then('System should remove the check from Selection check box', () => __awaiter(void 0, void 0, void 0, function* () {
    return assertion_1.Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['false']);
}));
cucumber_1.When('User clicks on Select CTA', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.ppModalSelectButton.click();
}));
cucumber_1.Then('System should navigate back to Vehicle Details page with the protection product selected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['true']);
}));
cucumber_1.When('User clicks on Remove CTA for the Protection product', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.ppModalSelectButton.click();
}));
cucumber_1.Then('System should navigate back to Vehicle Details page with the protection product deselected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['false']);
}));
cucumber_1.When('User deselects the Select check box for the Protection product', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.ppPlanSelectCbClick.first().click();
}));
cucumber_1.When('User changes the Payment term in Step 1', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    //vdpPage.paymentOptionsList.click();
    protractor_1.browser.executeScript('arguments[0].click()', vdpPage.paymentOptionRb1);
}));
cucumber_1.Then('System should display warning message', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.alertModal.getText()).to.eventually.contain('Terms Changed');
}));
cucumber_1.Then('Deselect all the Protection products', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vdpPage.alertModalButton.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.ppPlanSelectCb.getAttribute('aria-checked')).to.eventually.eql(['false']);
}));
cucumber_1.Given('Protection products feature is not enabled for the dealer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    yield protractor_1.browser.driver.sleep(5 * 1000);
    yield protractor_1.browser.get("?dealerCd=14046&source=t1");
    yield protractor_1.browser.driver.sleep(10 * 1000);
}));
cucumber_1.When('User is in Vehicle Details page for the disabled dealer', () => __awaiter(void 0, void 0, void 0, function* () {
    mspFilterPage.appcardButton.each((ele, i) => {
        ele.getText().then((text) => {
            if (text.includes('Available', 0)) {
                console.log('appcard text - ' + text);
                ele.click().catch((err) => { });
            }
        }).catch((err) => { });
    }).catch((err) => { });
    yield protractor_1.browser.driver.sleep(10 * 1000);
    vlpFilterPage.appCard.first().click();
    yield protractor_1.browser.driver.sleep(10 * 1000);
}));
cucumber_1.Then('Protect your vehicle should not be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    return assertion_1.Assertion.expect(vdpPage.productContainer.getText()).to.eventually.contain('There was a problem loading protection plans.');
}));
