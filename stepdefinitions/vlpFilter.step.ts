import { browser, By, element, ElementFinder, protractor } from "protractor";
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";
let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 5000;
let p = 0;
let np = 0;
if ((browser.params.browserPlatformCombo===("ChromeDesktop")||browser.params.browserPlatformCombo === ("SafariDesktop")))
{

Given('User is in Vehicle List Page', async () =>{
    await mspFilterPage.sortDropDown.click();
    await mspFilterPage.sortPriceLowToHigh.click();
    browser.executeScript("window.scrollBy(0,250)");
    await mspFilterPage.appcardButton.first().click();
});




When('User selects one or more vehicle series from Model in Filters panel', async  () =>{
    await vlpFilterPage.modelDropDown.click();
    await browser.driver.sleep(2*1000);
    browser.driver.findElement(By.xpath("//body")).click();
});

Then('Vehicles List and count should be updated based on users selection', async () => {
    return vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ',1);
        mspFilterPage.appCard.then((arr) =>{
            expect((arr.length).toString()).to.eql(c.toString());
        })
    });
});

Given('User is in Vehicle List Page with all filters cleared', async () =>{
    await vlpFilterPage.filterClear.click();
    await mspFilterPage.appCard.first().click();
});


When('User selects a Year from Filters panel', async  () =>{
    await browser.driver.sleep(10*1000);
   // await vlpFilterPage.filterOptionYear.first().click();
    await vlpFilterPage.filterOptionYear.click();
    await browser.driver.sleep(2*1000);
});

Then('Only the applicable vehicles should be displayed in the page', async () => {
    return vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
        let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehName.each((ele, i) => {
            ele.getText().then((name) => {
                let yearname = name.split(' ', 1).toString().trim();
                expect(yearname).to.contain(year);
            })
        })
    })
});

Then('Count of options under all filter categories should be updated', async()=> {
    return vlpFilterPage.countText.getText().then((count) => {
        let c =  count.split(' ',1);
        mspFilterPage.appCard.then((arr) =>{
            expect((arr.length).toString()).to.eql(c.toString());
        })
    });
});

Then('Filter chip should be displayed for year', async()=> {
        return vlpFilterPage.filterChip.each((ele,i) => {
            if(i === 1){
                ele.getText().then((text) => {
                    vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
                        let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
                        expect(year).to.equal(text.trim());
                    })
                })
            }
        })
});

When('User selects Price range for Advertised / Selling Price from Filters panel', async() => {
    await mspFilterPage.filterMinPrice.isDisplayed();
    await mspFilterPage.filterMinPrice.click();
    await mspFilterPage.filterMinPrice.clear();
    await mspFilterPage.filterMinPrice.sendKeys(42000);
});

Then('Only the applicable vehicles should be displayed in the page by price', async() => {
    return vlpFilterPage.filterMinPrice.getText().then((min) => {
        //console.log('min - '+min);
        let nmin : number = Number((min.replace('$', '')).replace(',',''));
        //console.log('nmin - '+nmin);
        vlpFilterPage.filterMaxPrice.getText().then((max) => {
            //console.log('max - '+max);
            let nmax : number = Number((max.replace('$', '')).replace(',',''));
            //console.log('nmax - '+nmax);
            vlpFilterPage.appCardPrice.each((ele, i) => {
                ele.getText().then((price) => {
                    //console.log('price['+i+'] = '+price);
                    let nprice : number = Number((price.replace('$', '')).replace(',',''));
                    //console.log('nprice - '+ nprice);
                    expect(nprice).to.be.within(nmin, nmax);
                })
            })
        });
    });


});


Then('Filter chip should be displayed for price', async()=> {
        return vlpFilterPage.filterChip.each((ele,i) => {
            if(i === 1){
                ele.getText().then((text) => {
                    console.log('filterchip text - '+ text);
                    vlpFilterPage.filterMinPrice.getText().then((minprice) => {
                        expect(minprice.trim()).to.equal(text.split(' - '));
                    })
                })
            }
        })
});

When('User selects a trim from Filters panel', async() => {
 //   await vlpFilterPage.filterOptionTrim.first().click();
 await browser.driver.sleep(15*1000);
  await vlpFilterPage.filterOptionTrim.click();
    await browser.driver.sleep(15*1000);
});

Then('Only the applicable vehicles should be displayed in the page by trim', async() => {
    return vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
        console.log(trimsel);
        let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehName.each((ele, i) => {
            ele.getText().then((name) => {
                let trimname = name.slice(5, name.length).toString().trim();
                expect(trimname).to.contain(trim);
            });
        })
    })
});

Then('Filter chip should be displayed for trim', async() => {
        return vlpFilterPage.filterChip.each((ele,i) => {
            if(i === 1){
                ele.getText().then((text) => {
                    console.log('filterchip text - '+ text);
                    vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
                        let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
                        expect(trim).to.equal(text.trim());
                    })
                })
            }
        })
});

When('User selects an Engine option from Filters panel', async() => {
  //  vlpFilterPage.filterOptionEngine.first().click();
  await browser.driver.sleep(15*1000);
    vlpFilterPage.filterOptionEngine.click();
    await browser.driver.sleep(15*1000);
});

Then('Only the applicable vehicles should be displayed in the page by engine', async() => {
    return vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
        let eng = engsel.substring(0, engsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                let desc = name.slice(0, eng.length).toString().trim();
                expect(desc).to.contain(eng);
            });
        })
    })
});

Then('Filter chip should be displayed for engine', async() => {
        return vlpFilterPage.filterChip.each((ele,i) => {
            console.log('i = '+i);
            if(i === 1){
                ele.getText().then((text) => {
                    console.log('filterchip text - '+ text);
                    vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
                        let trim = engsel.substring(0, engsel.lastIndexOf("(")).trim();
                        expect(trim).to.equal(text.trim());
                    })
                })
            }
        })
});

Given('User is in Model Selection page with all filter chips cleared', async() => {
    await vlpFilterPage.filterClear.isDisplayed();
    await vlpFilterPage.filterClear.click();
});

When('User selects model as Truck', async () =>{
    await vlpFilterPage.filtercheckBoxTruck.click();
});

When('User navigates to Vehicle List Page', async () =>{
    await mspFilterPage.appCard.first().click();
});

Then('Filter panel should include Filters for Cab and Bed Length', async () =>{
    await vlpFilterPage.filterOptionCab.isDisplayed().then((value)=>{
        expect(value).to.eql([true]);
    });
    await vlpFilterPage.filterOptionBL.isDisplayed().then((blvalue)=>{
        expect(blvalue).to.eql([true]);
    });
});

Given('User has selected a Truck model', async() => {
    return true;
});


When('User selects a cab option from Filters panel', async() => {
    await vlpFilterPage.filterOptionCab.first().click();
});

Then('Only the applicable vehicles should be displayed in the page by cab', async() => {
    return vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
        let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                let desc = name.slice(0, cab.length).toString().trim();
                return expect(desc).to.equal(cab);
            });
        })
    })
});




Then('Filter chip should be displayed for cab', async() => {
        return vlpFilterPage.filterChip.each((ele,i) => {
            //console.log('i = '+i);
            if(i === 1){
                ele.getText().then((text) => {
                    //console.log('filterchip text - '+ text);
                    vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
                        let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
                        expect(cab).to.equal(text.trim());
                    })
                })
            }
        })
});


When('User selects a Bed Length option from Filters panel', async() => {
    await vlpFilterPage.filterChip.each((ele,i) => {
        // console.log('i = '+i);
        if(i === 1){
            ele.click();
        }
    });
    await vlpFilterPage.filterOptionBL.first().click();
});

Then('Only the applicable vehicles should be displayed in the page by Bed Length', async() => {
    return vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
        let bl = blsel.substring(0, blsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                //let desc = name.slice(0, cab.length).toString().trim();
                //console.log('desc - '+ desc);
                expect(name).to.include(bl);
            });
        })
    })
});

Then('Filter chip should be displayed for Bed Length', async() => {
        return vlpFilterPage.filterChip.each((ele,i) => {
            //console.log('i = '+i);
            if(i === 1){
                ele.getText().then((text) => {
                    //console.log('filterchip text - '+ text);
                    vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
                        let bl = blsel.substring(0, blsel.lastIndexOf("(")).trim();
                        expect(bl).to.eql(text.trim());
                    })
                })
            }
        })
});

Given('User has applied one or more filters', async() => {
    return true;
});

When('User clicks on a Filter Chip', async() => {
    await vlpFilterPage.filterChip.each((ele,i) => {
        // console.log('i = '+i);
        if(i !== 0){
            ele.click();
        }
    });
});

Then('System should remove the Filter chip', async() => {
    return vlpFilterPage.filterChip.then((arr) => {
        expect(arr.length).to.equal(1);
    })
});

Then('Reload the page to display updated list of vehicles and Filters', async() => {
    return vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ',1);
        mspFilterPage.appCard.then((arr) =>{
            expect((arr.length).toString()).to.eql(c.toString());
        })
    });
});

When('User clicks on Clear All in Filter chip area', async() => {
    await vlpFilterPage.filterClear.click();
});

Then('System should remove all filters', async() => {
    return vlpFilterPage.filterChip.isDisplayed().then((value) => {
        expect(value).to.be.false;
    })
});

Then('Navigate to Model Selection page', async() => {
    return mspFilterPage.pageHeader.getText().then((value) => {
        expect(value).to.include('Available models at');
    })
});



Given('User has filters set', async () =>{
    await browser.driver.sleep(10*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    await browser.driver.sleep(5*1000);
    // mspFilterPage.appCard.first().click();
    // await browser.driver.sleep(5*1000);
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await mspFilterPage.appcardButton.each((ele,i) => {
        ele.getText().then((text) =>{
            if(text.includes('Available', 0)){
                ele.click();
            }
        }).catch((err) => { })
    })
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionYear.first().click();
    await browser.driver.sleep(5*1000);
});



When('User unselects a Filter option', async () =>{
    await vlpFilterPage.filterYearClear.click();
    await vlpFilterPage.filterYearClear.click();
    await browser.driver.sleep(5*1000);
});



Then('Clear the filter selection', async () =>{
    await browser.driver.sleep(5*1000);
    console.log('is selected - '+ (await vlpFilterPage.filterOptionYear.isSelected()).valueOf());
    expect((await vlpFilterPage.filterOptionYear.isSelected()).valueOf()).to.equal([false]);
});

When('User clears model selection', async () =>{
    await vlpFilterPage.modelDropDown.click();
    await browser.driver.sleep(5*1000);
    await vlpFilterPage.modelDropDownClear.click();
    await browser.driver.sleep(5*1000);
});


// When('User chooses to sort by Price Low to High', async () =>{

//     vlpFilterPage.sortDropDown.click();
//     await browser.driver.sleep(5*1000);
//     vlpFilterPage.sortPriceLowToHigh.click();
//     await browser.driver.sleep(5*1000);
// });

Then('The Vehicle cards should be sorted by Price in ascending order', async () =>{

    let sorted = [];
    await vlpFilterPage.appCardPrice.then(function (unsorted){
        sorted = unsorted.slice();
        sorted.sort();
        expect(sorted).to.eql(unsorted);
    });

});
}
else if((browser.params.browserPlatformCombo === ("ChromeAndroid")||browser.params.browserPlatformCombo === ("SafariIOS"))){
    Given('User is in Vehicle List Page', async () =>{
        await mspFilterPage.sortDropDown.click();
        await mspFilterPage.sortPriceLowToHigh.click();
        browser.executeScript("window.scrollBy(0,250)");
        await mspFilterPage.appcardButton.first().click();
    });
    
    
    
    
    When('User selects one or more vehicle series from Model in Filters panel', async  () =>{
        await vlpFilterPage.modelDropDownmobile.click();
       // await vlpFilterPage.modelDropDown.click();
        await browser.driver.sleep(2*1000);
        await vlpFilterPage.modelDropDownclosemobile.click();
        await browser.driver.sleep(2*1000);
        browser.driver.findElement(By.xpath("//body")).click();
    });
    
    Then('Vehicles List and count should be updated based on users selection', async () => {
        return vlpFilterPage.countText.getText().then((count) => {
            let c = count.split(' ',1);
            mspFilterPage.appCard.then((arr) =>{
                expect((arr.length).toString()).to.eql(c.toString());
            })
        });
    });
    
    Given('User is in Vehicle List Page with all filters cleared', async () =>{
        await vlpFilterPage.filterClear.click();
        await mspFilterPage.appCard.first().click();
    });
    
    
    When('User selects a Year from Filters panel', async  () =>{
        await browser.driver.sleep(10*1000);
       // await vlpFilterPage.filterOptionYear.first().click();
        await vlpFilterPage.filterOptionYear.click();
        await browser.driver.sleep(2*1000);
    });
    
    Then('Only the applicable vehicles should be displayed in the page', async () => {
        return vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
            let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
            vlpFilterPage.appCardVehName.each((ele, i) => {
                ele.getText().then((name) => {
                    let yearname = name.split(' ', 1).toString().trim();
                    expect(yearname).to.contain(year);
                })
            })
        })
    });
    
    Then('Count of options under all filter categories should be updated', async()=> {
        return vlpFilterPage.countText.getText().then((count) => {
            let c =  count.split(' ',1);
            mspFilterPage.appCard.then((arr) =>{
                expect((arr.length).toString()).to.eql(c.toString());
            })
        });
    });
    
    Then('Filter chip should be displayed for year', async()=> {
            return vlpFilterPage.filterChip.each((ele,i) => {
                if(i === 1){
                    ele.getText().then((text) => {
                        vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
                            let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
                            expect(year).to.equal(text.trim());
                        })
                    })
                }
            })
    });
    
    When('User selects Price range for Advertised / Selling Price from Filters panel', async() => {
        await mspFilterPage.filterMinPrice.isDisplayed();
        await mspFilterPage.filterMinPrice.click();
        await mspFilterPage.filterMinPrice.clear();
        await mspFilterPage.filterMinPrice.sendKeys(42000);
    });
    
    Then('Only the applicable vehicles should be displayed in the page by price', async() => {
        return vlpFilterPage.filterMinPrice.getText().then((min) => {
            //console.log('min - '+min);
            let nmin : number = Number((min.replace('$', '')).replace(',',''));
            //console.log('nmin - '+nmin);
            vlpFilterPage.filterMaxPrice.getText().then((max) => {
                //console.log('max - '+max);
                let nmax : number = Number((max.replace('$', '')).replace(',',''));
                //console.log('nmax - '+nmax);
                vlpFilterPage.appCardPrice.each((ele, i) => {
                    ele.getText().then((price) => {
                        //console.log('price['+i+'] = '+price);
                        let nprice : number = Number((price.replace('$', '')).replace(',',''));
                        //console.log('nprice - '+ nprice);
                        expect(nprice).to.be.within(nmin, nmax);
                    })
                })
            });
        });
    
    
    });
    
    
    Then('Filter chip should be displayed for price', async()=> {
            return vlpFilterPage.filterChip.each((ele,i) => {
                if(i === 1){
                    ele.getText().then((text) => {
                        console.log('filterchip text - '+ text);
                        vlpFilterPage.filterMinPrice.getText().then((minprice) => {
                            expect(minprice.trim()).to.equal(text.split(' - '));
                        })
                    })
                }
            })
    });
    
    When('User selects a trim from Filters panel', async() => {
     //   await vlpFilterPage.filterOptionTrim.first().click();
     await browser.driver.sleep(15*1000);
      await vlpFilterPage.filterOptionTrim.click();
        await browser.driver.sleep(15*1000);
    });
    
    Then('Only the applicable vehicles should be displayed in the page by trim', async() => {
        return vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
            console.log(trimsel);
            let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
            vlpFilterPage.appCardVehName.each((ele, i) => {
                ele.getText().then((name) => {
                    let trimname = name.slice(5, name.length).toString().trim();
                    expect(trimname).to.contain(trim);
                });
            })
        })
    });
    
    Then('Filter chip should be displayed for trim', async() => {
            return vlpFilterPage.filterChip.each((ele,i) => {
                if(i === 1){
                    ele.getText().then((text) => {
                        console.log('filterchip text - '+ text);
                        vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
                            let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
                            expect(trim).to.equal(text.trim());
                        })
                    })
                }
            })
    });
    
    When('User selects an Engine option from Filters panel', async() => {
      //  vlpFilterPage.filterOptionEngine.first().click();
      await browser.driver.sleep(15*1000);
        vlpFilterPage.filterOptionEngine.click();
        await browser.driver.sleep(15*1000);
    });
    
    Then('Only the applicable vehicles should be displayed in the page by engine', async() => {
        return vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
            let eng = engsel.substring(0, engsel.lastIndexOf("(")).trim();
            vlpFilterPage.appCardVehDesc.each((ele, i) => {
                ele.getText().then((name) => {
                    let desc = name.slice(0, eng.length).toString().trim();
                    expect(desc).to.contain(eng);
                });
            })
        })
    });
    
    Then('Filter chip should be displayed for engine', async() => {
            return vlpFilterPage.filterChip.each((ele,i) => {
                console.log('i = '+i);
                if(i === 1){
                    ele.getText().then((text) => {
                        console.log('filterchip text - '+ text);
                        vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
                            let trim = engsel.substring(0, engsel.lastIndexOf("(")).trim();
                            expect(trim).to.equal(text.trim());
                        })
                    })
                }
            })
    });
    
    Given('User is in Model Selection page with all filter chips cleared', async() => {
        await vlpFilterPage.filterClear.isDisplayed();
        await vlpFilterPage.filterClear.click();
    });
    
    When('User selects model as Truck', async () =>{
        await vlpFilterPage.filtercheckBoxTruck.click();
    });
    
    When('User navigates to Vehicle List Page', async () =>{
        await mspFilterPage.appCard.first().click();
    });
    
    Then('Filter panel should include Filters for Cab and Bed Length', async () =>{
        await vlpFilterPage.filterOptionCab.isDisplayed().then((value)=>{
            expect(value).to.eql([true]);
        });
        await vlpFilterPage.filterOptionBL.isDisplayed().then((blvalue)=>{
            expect(blvalue).to.eql([true]);
        });
    });
    
    Given('User has selected a Truck model', async() => {
        return true;
    });
    
    
    When('User selects a cab option from Filters panel', async() => {
        await vlpFilterPage.filterOptionCab.first().click();
    });
    
    Then('Only the applicable vehicles should be displayed in the page by cab', async() => {
        return vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
            let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
            vlpFilterPage.appCardVehDesc.each((ele, i) => {
                ele.getText().then((name) => {
                    let desc = name.slice(0, cab.length).toString().trim();
                    return expect(desc).to.equal(cab);
                });
            })
        })
    });
    
    
    
    
    Then('Filter chip should be displayed for cab', async() => {
            return vlpFilterPage.filterChip.each((ele,i) => {
                //console.log('i = '+i);
                if(i === 1){
                    ele.getText().then((text) => {
                        //console.log('filterchip text - '+ text);
                        vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
                            let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
                            expect(cab).to.equal(text.trim());
                        })
                    })
                }
            })
    });
    
    
    When('User selects a Bed Length option from Filters panel', async() => {
        await vlpFilterPage.filterChip.each((ele,i) => {
            // console.log('i = '+i);
            if(i === 1){
                ele.click();
            }
        });
        await vlpFilterPage.filterOptionBL.first().click();
    });
    
    Then('Only the applicable vehicles should be displayed in the page by Bed Length', async() => {
        return vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
            let bl = blsel.substring(0, blsel.lastIndexOf("(")).trim();
            vlpFilterPage.appCardVehDesc.each((ele, i) => {
                ele.getText().then((name) => {
                    //let desc = name.slice(0, cab.length).toString().trim();
                    //console.log('desc - '+ desc);
                    expect(name).to.include(bl);
                });
            })
        })
    });
    
    Then('Filter chip should be displayed for Bed Length', async() => {
            return vlpFilterPage.filterChip.each((ele,i) => {
                //console.log('i = '+i);
                if(i === 1){
                    ele.getText().then((text) => {
                        //console.log('filterchip text - '+ text);
                        vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
                            let bl = blsel.substring(0, blsel.lastIndexOf("(")).trim();
                            expect(bl).to.eql(text.trim());
                        })
                    })
                }
            })
    });
    
    Given('User has applied one or more filters', async() => {
        return true;
    });
    
    When('User clicks on a Filter Chip', async() => {
        await vlpFilterPage.filterChip.each((ele,i) => {
            // console.log('i = '+i);
            if(i !== 0){
                ele.click();
            }
        });
    });
    
    Then('System should remove the Filter chip', async() => {
        return vlpFilterPage.filterChip.then((arr) => {
            expect(arr.length).to.equal(1);
        })
    });
    
    Then('Reload the page to display updated list of vehicles and Filters', async() => {
        return vlpFilterPage.countText.getText().then((count) => {
            let c = count.split(' ',1);
            mspFilterPage.appCard.then((arr) =>{
                expect((arr.length).toString()).to.eql(c.toString());
            })
        });
    });
    
    When('User clicks on Clear All in Filter chip area', async() => {
        await vlpFilterPage.filterClear.click();
    });
    
    Then('System should remove all filters', async() => {
        return vlpFilterPage.filterChip.isDisplayed().then((value) => {
            expect(value).to.be.false;
        })
    });
    
    Then('Navigate to Model Selection page', async() => {
        return mspFilterPage.pageHeader.getText().then((value) => {
            expect(value).to.include('Available models at');
        })
    });
    
    
    
    Given('User has filters set', async () =>{
        await browser.driver.sleep(10*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
        await browser.driver.sleep(5*1000);
        // mspFilterPage.appCard.first().click();
        // await browser.driver.sleep(5*1000);
        await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
        await mspFilterPage.appcardButton.each((ele,i) => {
            ele.getText().then((text) =>{
                if(text.includes('Available', 0)){
                    ele.click();
                }
            }).catch((err) => { })
        })
        await browser.driver.sleep(5*1000);
        vlpFilterPage.filterOptionYear.first().click();
        await browser.driver.sleep(5*1000);
    });
    
    
    
    When('User unselects a Filter option', async () =>{
        await vlpFilterPage.filterYearClear.click();
        await vlpFilterPage.filterYearClear.click();
        await browser.driver.sleep(5*1000);
    });
    
    
    
    Then('Clear the filter selection', async () =>{
        await browser.driver.sleep(5*1000);
        console.log('is selected - '+ (await vlpFilterPage.filterOptionYear.isSelected()).valueOf());
        expect((await vlpFilterPage.filterOptionYear.isSelected()).valueOf()).to.equal([false]);
    });
    
    When('User clears model selection', async () =>{
        await vlpFilterPage.modelDropDown.click();
        await browser.driver.sleep(5*1000);
        await vlpFilterPage.modelDropDownClear.click();
        await browser.driver.sleep(5*1000);
    });
    
    
    // When('User chooses to sort by Price Low to High', async () =>{
    
    //     vlpFilterPage.sortDropDown.click();
    //     await browser.driver.sleep(5*1000);
    //     vlpFilterPage.sortPriceLowToHigh.click();
    //     await browser.driver.sleep(5*1000);
    // });
    
    Then('The Vehicle cards should be sorted by Price in ascending order', async () =>{
    
        let sorted = [];
        await vlpFilterPage.appCardPrice.then(function (unsorted){
            sorted = unsorted.slice();
            sorted.sort();
            expect(sorted).to.eql(unsorted);
        });
    
    });
    }