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
const chai_1 = require("chai");
let mspFilterPage = new mspFilterPage_1.MspFilterPage();
let vlpFilterPage = new vlpFilterPage_1.VlpFilterPage();
let until = protractor_1.protractor.ExpectedConditions;
let MAX_TIME_WAIT = 5000;
let p = 0;
let np = 0;
cucumber_1.Given('User is in Vehicle List Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mspFilterPage.sortDropDown.click();
    yield mspFilterPage.sortPriceLowToHigh.click();
    protractor_1.browser.executeScript("window.scrollBy(0,250)");
    yield mspFilterPage.appcardButton.first().click();
}));
cucumber_1.When('User selects one or more vehicle series from Model in Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.modelDropDown.click();
    yield protractor_1.browser.driver.sleep(2 * 1000);
    protractor_1.browser.driver.findElement(protractor_1.By.xpath("//body")).click();
}));
cucumber_1.Then('Vehicles List and count should be updated based on users selection', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ', 1);
        mspFilterPage.appCard.then((arr) => {
            chai_1.expect((arr.length).toString()).to.eql(c.toString());
        });
    });
}));
cucumber_1.Given('User is in Vehicle List Page with all filters cleared', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterClear.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
    mspFilterPage.appCard.first().click();
}));
cucumber_1.When('User selects a Year from Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionYear.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
    //vlpFilterPage.filterOptionYear.last().click();
}));
cucumber_1.Then('Only the applicable vehicles should be displayed in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
        let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehName.each((ele, i) => {
            ele.getText().then((name) => {
                let yearname = name.split(' ', 1).toString().trim();
                chai_1.expect(yearname).to.equal(year);
            });
        });
    });
}));
cucumber_1.Then('Count of options under all filter categories should be updated', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ', 1);
        mspFilterPage.appCard.then((arr) => {
            chai_1.expect((arr.length).toString()).to.eql(c.toString());
        });
    });
}));
cucumber_1.Then('Filter chip should be displayed for year', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        console.log('i = ' + i);
        if (i === 1) {
            ele.getText().then((text) => {
                console.log('filterchip text - ' + text);
                vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
                    let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
                    chai_1.expect(year).to.equal(text.trim());
                });
            });
        }
    });
}));
cucumber_1.When('User selects Price range for Advertised / Selling Price from Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    mspFilterPage.filterMinPrice.clear(); //.then(() => {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    mspFilterPage.filterMinPrice.sendKeys(42000);
    yield protractor_1.browser.driver.sleep(10 * 1000);
    //})
}));
cucumber_1.Then('Only the applicable vehicles should be displayed in the page by price', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2 * 1000);
    vlpFilterPage.filterMinPrice.getText().then((min) => {
        //min = (min.replace('$', '')).replace(',','');
        //min = min.replace(',','');
        //console.log('min - '+min);
        let nmin = Number((min.replace('$', '')).replace(',', ''));
        //console.log('nmin - '+nmin); 
        vlpFilterPage.filterMaxPrice.getText().then((max) => {
            //console.log('max - '+max);
            let nmax = Number((max.replace('$', '')).replace(',', ''));
            //console.log('nmax - '+nmax);
            vlpFilterPage.appCardPrice.each((ele, i) => {
                ele.getText().then((price) => {
                    //console.log('price['+i+'] = '+price);
                    let nprice = Number((price.replace('$', '')).replace(',', ''));
                    //console.log('nprice - '+ nprice);
                    chai_1.expect(nprice).to.be.within(nmin, nmax);
                });
            });
        });
    });
}));
cucumber_1.Then('Filter chip should be displayed for price', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        console.log('i = ' + i);
        if (i === 1) {
            ele.getText().then((text) => {
                console.log('filterchip text - ' + text);
                vlpFilterPage.filterMinPrice.getText().then((minprice) => {
                    chai_1.expect(minprice.trim()).to.equal(text.split(' - '));
                });
            });
        }
    });
}));
cucumber_1.When('User selects a trim from Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionTrim.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('Only the applicable vehicles should be displayed in the page by trim', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
        let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehName.each((ele, i) => {
            ele.getText().then((name) => {
                let trimname = name.slice(5, name.length).toString().trim();
                console.log('trimname - ' + trimname);
                chai_1.expect(trimname).to.equal(trim);
            });
        });
    });
}));
cucumber_1.Then('Filter chip should be displayed for trim', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        console.log('i = ' + i);
        if (i === 1) {
            ele.getText().then((text) => {
                console.log('filterchip text - ' + text);
                vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
                    let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
                    chai_1.expect(trim).to.equal(text.trim());
                });
            });
        }
    });
}));
cucumber_1.When('User selects an Engine option from Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionEngine.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('Only the applicable vehicles should be displayed in the page by engine', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
        let eng = engsel.substring(0, engsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                let desc = name.slice(0, eng.length).toString().trim();
                console.log('desc - ' + desc);
                chai_1.expect(desc).to.equal(eng);
            });
        });
    });
}));
cucumber_1.Then('Filter chip should be displayed for engine', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        console.log('i = ' + i);
        if (i === 1) {
            ele.getText().then((text) => {
                console.log('filterchip text - ' + text);
                vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
                    let trim = engsel.substring(0, engsel.lastIndexOf("(")).trim();
                    chai_1.expect(trim).to.equal(text.trim());
                });
            });
        }
    });
}));
cucumber_1.Given('User is in Model Selection page with all filter chips cleared', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterClear.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.When('User selects model as Truck', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filtercheckBoxTruck.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.When('User navigates to Vehicle List Page', () => __awaiter(void 0, void 0, void 0, function* () {
    mspFilterPage.appCard.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('Filter panel should include Filters for Cab and Bed Length', () => __awaiter(void 0, void 0, void 0, function* () {
    vlpFilterPage.filterOptionCab.isDisplayed().then((value) => {
        chai_1.expect(value).to.eql([true]);
    });
    vlpFilterPage.filterOptionBL.isDisplayed().then((blvalue) => {
        chai_1.expect(blvalue).to.eql([true]);
    });
}));
cucumber_1.Given('User has selected a Truck model', () => __awaiter(void 0, void 0, void 0, function* () {
    return true;
}));
cucumber_1.When('User selects a cab option from Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionCab.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('Only the applicable vehicles should be displayed in the page by cab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
        let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                let desc = name.slice(0, cab.length).toString().trim();
                console.log('desc - ' + desc);
                chai_1.expect(desc).to.equal(cab);
            });
        });
    });
}));
cucumber_1.Then('Filter chip should be displayed for cab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        //console.log('i = '+i);
        if (i === 1) {
            ele.getText().then((text) => {
                //console.log('filterchip text - '+ text);
                vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
                    let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
                    chai_1.expect(cab).to.equal(text.trim());
                });
            });
        }
    });
}));
cucumber_1.When('User selects a Bed Length option from Filters panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        // console.log('i = '+i);
        if (i === 1) {
            ele.click();
        }
    });
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionBL.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('Only the applicable vehicles should be displayed in the page by Bed Length', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
        let bl = blsel.substring(0, blsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                //let desc = name.slice(0, cab.length).toString().trim();
                //console.log('desc - '+ desc);
                chai_1.expect(name).to.include(bl);
            });
        });
    });
}));
cucumber_1.Then('Filter chip should be displayed for Bed Length', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        //console.log('i = '+i);
        if (i === 1) {
            ele.getText().then((text) => {
                //console.log('filterchip text - '+ text);
                vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
                    let bl = blsel.substring(0, blsel.lastIndexOf("(")).trim();
                    chai_1.expect(bl).to.eql(text.trim());
                });
            });
        }
    });
}));
cucumber_1.Given('User has applied one or more filters', () => __awaiter(void 0, void 0, void 0, function* () {
    return true;
}));
cucumber_1.When('User clicks on a Filter Chip', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterChip.each((ele, i) => {
        // console.log('i = '+i);
        if (i !== 0) {
            ele.click();
        }
    });
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('System should remove the Filter chip', () => __awaiter(void 0, void 0, void 0, function* () {
    vlpFilterPage.filterChip.then((arr) => {
        chai_1.expect(arr.length).to.equal(1);
    });
}));
cucumber_1.Then('Reload the page to display updated list of vehicles and Filters', () => __awaiter(void 0, void 0, void 0, function* () {
    vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ', 1);
        mspFilterPage.appCard.then((arr) => {
            chai_1.expect((arr.length).toString()).to.eql(c.toString());
        });
    });
}));
cucumber_1.When('User clicks on Clear All in Filter chip area', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterClear.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('System should remove all filters', () => __awaiter(void 0, void 0, void 0, function* () {
    vlpFilterPage.filterChip.isDisplayed().then((value) => {
        chai_1.expect(value).to.be.false;
    });
}));
cucumber_1.Then('Navigate to Model Selection page', () => __awaiter(void 0, void 0, void 0, function* () {
    mspFilterPage.pageHeader.getText().then((value) => {
        chai_1.expect(value).to.include('Available models at');
    });
}));
cucumber_1.Given('User has filters set', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10 * 1000);
    protractor_1.browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    yield protractor_1.browser.driver.sleep(5 * 1000);
    // mspFilterPage.appCard.first().click();
    // await browser.driver.sleep(5*1000);
    yield protractor_1.browser.get(protractor_1.browser.params.url + '?dealerCd=' + protractor_1.browser.params.dealerCd + '&source=' + protractor_1.browser.params.source);
    yield protractor_1.browser.driver.sleep(10 * 1000);
    mspFilterPage.appcardButton.each((ele, i) => {
        ele.getText().then((text) => {
            if (text.includes('Available', 0)) {
                ele.click();
            }
        }).catch((err) => { });
    });
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.filterOptionYear.first().click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.When('User unselects a Filter option', () => __awaiter(void 0, void 0, void 0, function* () {
    vlpFilterPage.filterYearClear.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
cucumber_1.Then('Clear the filter selection', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5 * 1000);
    console.log('is selected - ' + (yield vlpFilterPage.filterOptionYear.isSelected()).valueOf());
    chai_1.expect((yield vlpFilterPage.filterOptionYear.isSelected()).valueOf()).to.equal([false]);
}));
cucumber_1.When('User clears model selection', () => __awaiter(void 0, void 0, void 0, function* () {
    vlpFilterPage.modelDropDown.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
    vlpFilterPage.modelDropDownClear.click();
    yield protractor_1.browser.driver.sleep(5 * 1000);
}));
// When('User chooses to sort by Price Low to High', async () =>{
//     vlpFilterPage.sortDropDown.click();
//     await browser.driver.sleep(5*1000);
//     vlpFilterPage.sortPriceLowToHigh.click();
//     await browser.driver.sleep(5*1000);
// });
cucumber_1.Then('The Vehicle cards should be sorted by Price in ascending order', () => __awaiter(void 0, void 0, void 0, function* () {
    let sorted = [];
    vlpFilterPage.appCardPrice.then(function (unsorted) {
        sorted = unsorted.slice();
        sorted.sort();
        chai_1.expect(sorted).to.eql(unsorted);
    });
}));
