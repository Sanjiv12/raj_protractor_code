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
cucumber_1.When('User selects I finance or own my vehicle in Step 2', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20 * 1000);
    vdpPage.financeOrOwnButton.click();
}));
cucumber_1.Then('System should open KBB Trade-in value modal', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    assertion_1.Assertion.expect(vdpPage.kbbModal.isDisplayed().valueOf()).to.eventually.be.true;
}));
cucumber_1.When('User inputs data of their trade-in vehicle', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.className('kbb-frame')).getWebElement()).then(() => __awaiter(void 0, void 0, void 0, function* () {
        //console.log('+++ iframe error +++');
        // browser.findElement(by.className('kbbTitle1')).getText().then((value)=>
        // {
        //     console.log('+++text2+++ '+ value);
        // })
        // vdpPage.kbbModalYear.getText().then((value)=>{console.log('+++year+++ '+ value)});
        // vdpPage.kbbModalYear.each((ele, i) =>{
        //     ele.getText().then((value) => {
        //         if (value === '2010'){
        //             ele.click();
        //         }
        //     })
        // });
        vdpPage.kbbModalYear.click().then((value) => { console.log('+++ after 1 click +++'); }); //.catch((err) => {console.log('error kbbModalYear')});
        //browser.sleep(5*1000).catch((err) => {console.log('+++error sleep - '+err)});
        //vdpPage.kbbModalYearSelect.click().then((value) => {console.log('+++ after 2nd click +++');});//.catch((err) => {console.log('error kbbModalYearSelect')});
        //browser.sleep(5*1000).then((value) => {console.log('+++ after 2nd sleep +++');});
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalYear.$('[value="2010"]')), 3000)
            .then(function () {
            vdpPage.kbbModalYear.$('[value="2010"]').click().then((v) => { console.log('+++ after 2 click +++'); }); //catch((err) => {console.log('+++error inside kbbModalYear - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalYear - ' + err); });
        vdpPage.kbbModalBrand.click().then((value) => { console.log('+++ after 3 click +++'); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalBrand.$('[value="2"]')), 3000)
            .then(function () {
            vdpPage.kbbModalBrand.$('[value="2"]').click().then((v) => { console.log('+++ after 4 click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalBrand - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalBrand - ' + err); });
        vdpPage.kbbModalModel.click().then((value) => { console.log('+++ after 5 click +++'); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalModel.$('[value="3"]')), 3000)
            .then(function () {
            vdpPage.kbbModalModel.$('[value="3"]').click().then((v) => { console.log('+++ after 6 click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalModel - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalModel - ' + err); });
        vdpPage.kbbModalStyle.click().then((value) => { console.log('+++ after 7 click +++'); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalStyle.$('[value="263848"]')), 3000)
            .then(function () {
            vdpPage.kbbModalStyle.$('[value="263848"]').click().then((v) => { console.log('+++ after 8 click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalStyle - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalStyle - ' + err); });
        vdpPage.kbbModalEngine.click().then((value) => { console.log('+++ after 9 click +++'); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalEngine.$('[value="3024164"]')), 3000)
            .then(function () {
            vdpPage.kbbModalEngine.$('[value="3024164"]').click().then((v) => { console.log('+++ after 10 click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalEngine - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalEngine - ' + err); });
        vdpPage.kbbModalTransmission.click().then((value) => { console.log('+++ after 11 click +++'); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalTransmission.$('[value="3024165"]')), 3000)
            .then(function () {
            vdpPage.kbbModalTransmission.$('[value="3024165"]').click().then((v) => { console.log('+++ after 12 click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalTransmission - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalTransmission - ' + err); });
        vdpPage.kbbModalDrivetrain.click().then((value) => { console.log('+++ after 13 click +++'); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vdpPage.kbbModalDrivetrain.$('[value="3024166"]')), 3000)
            .then(function () {
            vdpPage.kbbModalDrivetrain.$('[value="3024166"]').click().then((v) => { console.log('+++ after 14 click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalDrivetrain - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalDrivetrain - ' + err); });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(vdpPage.kbbModalMileage), 3000)
            .then(function () {
            vdpPage.kbbModalMileage.sendKeys(100000);
            console.log('+++ after 1st sendkeys +++');
        });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(vdpPage.kbbModalZip), 3000)
            .then(function () {
            vdpPage.kbbModalZip.sendKeys(75019);
            console.log('+++ after 2nd sendkeys +++');
        });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(vdpPage.kbbModalNextButton), 3000)
            .then(function () {
            vdpPage.kbbModalNextButton.click().then((v) => { console.log('+++ after Next1 click +++'); });
        });
        //Step 2 starts here
        //Color selector
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(vdpPage.kbbModalColor.$('[value="6360082"]')), 5000)
            .then(function () {
            vdpPage.kbbModalColor.$('[value="6360082"]').click().then((v) => { console.log('+++ after color click +++'); }); //.catch((err) => {console.log('+++error inside kbbModalDrivetrain - '+ err)});
        }).catch((err) => { console.log('+++error outside kbbModalColor - ' + err); });
        //Next button - The click is not functioning although debug statements suggest that the click is getting executed. Was trying to see if the ExpectedConditions need to be changed
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(vdpPage.kbbModalNext2Button), 3000)
            .then(function () {
            vdpPage.kbbModalNext2Button.getText().then((v) => { console.log('+++Next2 button text - ' + v); });
            protractor_1.browser.executeScript("arguments[0].click();", vdpPage.kbbModalNext2Button);
            console.log('+++ after Next2 click +++');
            //vdpPage.kbbModalNext2Button.click().then((v)=>{console.log('+++ after Next2 click +++')});
        }).catch((err) => { console.log('+++error outside kbbModalNext2Button - ' + err); });
        //browser.sleep(5000);
        // vdpPage.kbbModalNext2Button.last().click().then((v)=>{console.log('+++ after Next2 click +++ ')});
        // vdpPage.kbbModalNext2Button.last().getText().then((v) => {console.log('+++Next2 button text - '+v)});
        // await browser.sleep(5*1000);
        // console.log('+++ after 2nd click +++');
        // vdpPage.kbbModalBrand.getText().then((value) => {console.log('+++kbbModalBrandSelect+++ - '+ value)});
        // await browser.sleep(5*1000);
        // vdpPage.kbbModalBrandSelect.click();
        // await browser.sleep(5*1000);
        //console.log('+++ after 3rd click +++');
        //await browser.driver.sleep(5*1000);
        //vdpPage.kbbModalBrandSelect.click();
        //await browser.driver.sleep(5*1000);
    })).catch((err) => { console.log('+++error+++ - ' + err); });
    //vdpPage.kbbModalYear.getText().then((value) => {console.log('+++text1+++ '+ value)});
    yield protractor_1.browser.driver.sleep(15 * 1000);
    console.log('done done done');
    //vdpPage.kbbModalYear.sendKeys('2010');
}));
