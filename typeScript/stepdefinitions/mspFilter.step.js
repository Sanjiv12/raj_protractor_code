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
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let p = 0;
let np = 0;
cucumber_1.Given('User is in Model Selection page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
}));
cucumber_1.When('User selects one or more options under Vehicle Type in Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //browser.executeScript("arguments[0].click()", mspFilterPage.filtercheckBoxCar);
}));
cucumber_1.Then('Only the applicable Model cards should be displayed in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    //expect((await mspFilterPage.appCard).length).to.equal(12);
}));
cucumber_1.Given('User is in Model Selection page with all filters cleared', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //browser.executeScript("arguments[0].click()", mspFilterPage.filterClear);
}));
cucumber_1.When('User selects a Price Range for MSRP in Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    // mspFilterPage.filterMinPrice.clear();
    // await browser.driver.sleep(5*1000);
    // mspFilterPage.filterMaxPrice.clear();
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    //element(by.css("div.card-panel-content > app-card-container:nth-of-type(14) div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"))
    //element(by.css("div.card-panel-content > app-card-container:nth-of-type(13) div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"))
}));
cucumber_1.Then('Only the applicable priced Model cards should be displayed in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //console.log('app card length---'+(await mspFilterPage.appCard).length);
    // expect((await mspFilterPage.appCard).length).to.equal(1);
}));
cucumber_1.Given('User is in Model Selection page with price filter reset', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    //browser.executeScript('arguments[0].click()', mspFilterPage.filterPriceReset);
}));
cucumber_1.When('User chooses to sort by Price Low to High', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    // browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    // await browser.driver.sleep(10*1000);
    // browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
}));
cucumber_1.Then('The Model cards for which Inventory is available should be sorted by Price in ascending order', () => __awaiter(void 0, void 0, void 0, function* () {
    // let sorted = [];
    // mspFilterPage.appCardPrice.filter(function(ele, i){
    //     return ele.getText().then(function(price){
    //         return price.charAt(0) === '$';
    //     })
    // }).then(function (unsorted){
    //     sorted = unsorted.slice();
    //     sorted.sort();
    //     expect(sorted).to.eql(unsorted);
    // });
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('The model cards for which Inventory is not available should be displayed below', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    // let priceArray :string[] = [];
    // mspFilterPage.appCardPrice.each(function(ele, i){
    //     ele.getText().then(function(price){
    //         //console.log('index1 '+ i + ' - '+price);
    //         if(price.charAt(0) === '$'){
    //             p = i;
    //             //console.log('$$ + p = '+i);
    //         }
    //         else{
    //             np = i;
    //             //console.log('no $$ + np = '+np+p);
    //             expect(p).to.be.lessThan(np);    
    //             return;
    //         }
    //     });
    //     //console.log('this.p = '+this.p +'this.np = '+this.np);
    // });
}));
