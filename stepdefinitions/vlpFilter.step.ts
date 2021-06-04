import { browser, By, element, protractor } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { expect } from "chai";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();

let p = 0;
let np = 0;

Given('User is in Vehicle List Page', async () =>{
    await browser.get(browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source);
    await browser.driver.sleep(10*1000);
    browser.driver.manage().deleteAllCookies();
    browser.executeScript("arguments[0].click()", mspFilterPage.popUpClose);
    await browser.driver.sleep(5*1000);       
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(3*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    await browser.driver.sleep(2*1000);
    browser.executeScript("window.scrollBy(0,250)");
    browser.executeScript('arguments[0].click()', mspFilterPage.appcardButton.first());
    await browser.driver.sleep(10*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortDropDown);
    await browser.driver.sleep(2*1000);
    browser.executeScript('arguments[0].click()', mspFilterPage.sortPriceLowToHigh);
    
});
    



When('User selects one or more vehicle series from Model in Filters panel', async  () =>{
    
    await browser.driver.sleep(5*1000);
    vlpFilterPage.modelDropDown.click();
    await browser.driver.sleep(2*1000);
    // vlpFilterPage.modelOption1.click();
    // await browser.driver.sleep(5*1000);
    // vlpFilterPage.modelOption2.click();
    // await browser.driver.sleep(5*1000);
    // vlpFilterPage.modelOption3.click();
    browser.driver.findElement(By.xpath("//body")).click();
});

Then('Vehicles List and count should be updated based on users selection', async () => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ',1);
        mspFilterPage.appCard.then((arr) =>{
            expect((arr.length).toString()).to.eql(c.toString());
        })
    });
    
});

Given('User is in Vehicle List Page with all filters cleared', async () =>{
    await browser.driver.sleep(1*1000);
    vlpFilterPage.filterClear.click();
    await browser.driver.sleep(5*1000);
    mspFilterPage.appCard.first().click();
});
    

When('User selects a Year from Filters panel', async  () =>{
    
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionYear.first().click();
    await browser.driver.sleep(5*1000);
    //vlpFilterPage.filterOptionYear.last().click();

});

Then('Only the applicable vehicles should be displayed in the page', async () => {
    await browser.driver.sleep(1*1000);
    vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
        let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehName.each((ele, i) => {
            ele.getText().then((name) => {
                let yearname = name.split(' ', 1).toString().trim();
                expect(yearname).to.equal(year);
            })
        })
    })
});

Then('Count of options under all filter categories should be updated', async()=> {
    await browser.driver.sleep(1*1000);
    vlpFilterPage.countText.getText().then((count) => {
        let c =  count.split(' ',1);
        mspFilterPage.appCard.then((arr) =>{
            expect((arr.length).toString()).to.eql(c.toString());
        })
    });
});

Then('Filter chip should be displayed for year', async()=> {
    await browser.driver.sleep(1*1000);
        vlpFilterPage.filterChip.each((ele,i) => {
            console.log('i = '+i);
            if(i === 1){
                ele.getText().then((text) => {
                    console.log('filterchip text - '+ text);
                    vlpFilterPage.filterOptionYearText.first().getText().then((yearsel) => {
                        let year = yearsel.substring(0, yearsel.lastIndexOf("(")).trim();
                        expect(year).to.equal(text.trim());
                    })
                })
            }
        })    
});

When('User selects Price range for Advertised / Selling Price from Filters panel', async() => {
    await browser.driver.sleep(10*1000);
    mspFilterPage.filterMinPrice.clear(); //.then(() => {
    await browser.driver.sleep(5*1000);
    mspFilterPage.filterMinPrice.sendKeys(42000);
    await browser.driver.sleep(10*1000);
    //})
});

Then('Only the applicable vehicles should be displayed in the page by price', async() => {
    await browser.driver.sleep(2*1000);
    vlpFilterPage.filterMinPrice.getText().then((min) => {
        //min = (min.replace('$', '')).replace(',','');
        //min = min.replace(',','');
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
    await browser.driver.sleep(1*1000);
        vlpFilterPage.filterChip.each((ele,i) => {
            console.log('i = '+i);
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
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionTrim.first().click();
    await browser.driver.sleep(5*1000);
});

Then('Only the applicable vehicles should be displayed in the page by trim', async() => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionTrimText.first().getText().then((trimsel) => {
        let trim = trimsel.substring(0, trimsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehName.each((ele, i) => {
            ele.getText().then((name) => {
                let trimname = name.slice(5, name.length).toString().trim();
                console.log('trimname - '+ trimname);
                expect(trimname).to.equal(trim);
            });
        })
    })
});

Then('Filter chip should be displayed for trim', async() => {
    await browser.driver.sleep(1*1000);
        vlpFilterPage.filterChip.each((ele,i) => {
            console.log('i = '+i);
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
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionEngine.first().click();
    await browser.driver.sleep(5*1000);
});

Then('Only the applicable vehicles should be displayed in the page by engine', async() => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionEngineText.first().getText().then((engsel) => {
        let eng = engsel.substring(0, engsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                let desc = name.slice(0, eng.length).toString().trim();
                console.log('desc - '+ desc);
                expect(desc).to.equal(eng);
            });
        })
    })
});

Then('Filter chip should be displayed for engine', async() => {
    await browser.driver.sleep(1*1000);
        vlpFilterPage.filterChip.each((ele,i) => {
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

    await browser.driver.sleep(1*1000);
    vlpFilterPage.filterClear.click();
    await browser.driver.sleep(5*1000);
});

When('User selects model as Truck', async () =>{
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filtercheckBoxTruck.click();
    await browser.driver.sleep(5*1000);
});

When('User navigates to Vehicle List Page', async () =>{
    mspFilterPage.appCard.first().click();
    await browser.driver.sleep(5*1000);
});

Then('Filter panel should include Filters for Cab and Bed Length', async () =>{
    vlpFilterPage.filterOptionCab.isDisplayed().then((value)=>{
        expect(value).to.eql([true]);
    });
    vlpFilterPage.filterOptionBL.isDisplayed().then((blvalue)=>{
        expect(blvalue).to.eql([true]);
    });
});

Given('User has selected a Truck model', async() => {
    return true;    
});


When('User selects a cab option from Filters panel', async() => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionCab.first().click();
    await browser.driver.sleep(5*1000);
});

Then('Only the applicable vehicles should be displayed in the page by cab', async() => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionCabText.first().getText().then((cabsel) => {
        let cab = cabsel.substring(0, cabsel.lastIndexOf("(")).trim();
        vlpFilterPage.appCardVehDesc.each((ele, i) => {
            ele.getText().then((name) => {
                let desc = name.slice(0, cab.length).toString().trim();
                console.log('desc - '+ desc);
                expect(desc).to.equal(cab);
            });
        })
    })
});




Then('Filter chip should be displayed for cab', async() => {
    await browser.driver.sleep(1*1000);
        vlpFilterPage.filterChip.each((ele,i) => {
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
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterChip.each((ele,i) => {
        // console.log('i = '+i);
        if(i === 1){
            ele.click();
        }
    });
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionBL.first().click();
    await browser.driver.sleep(5*1000);
});

Then('Only the applicable vehicles should be displayed in the page by Bed Length', async() => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterOptionBLText.first().getText().then((blsel) => {
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
    await browser.driver.sleep(1*1000);
        vlpFilterPage.filterChip.each((ele,i) => {
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
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterChip.each((ele,i) => {
        // console.log('i = '+i);
        if(i !== 0){
            ele.click();
        }
    });
    await browser.driver.sleep(5*1000);
});

Then('System should remove the Filter chip', async() => {
    vlpFilterPage.filterChip.then((arr) => {
        expect(arr.length).to.equal(1);
    })
});

Then('Reload the page to display updated list of vehicles and Filters', async() => {
    vlpFilterPage.countText.getText().then((count) => {
        let c = count.split(' ',1);
        mspFilterPage.appCard.then((arr) =>{
            expect((arr.length).toString()).to.eql(c.toString());
        })
    });
});

When('User clicks on Clear All in Filter chip area', async() => {
    await browser.driver.sleep(5*1000);
    vlpFilterPage.filterClear.click();
    await browser.driver.sleep(5*1000);
});

Then('System should remove all filters', async() => {
    vlpFilterPage.filterChip.isDisplayed().then((value) => {
        expect(value).to.be.false;
    })
});

Then('Navigate to Model Selection page', async() => {
    mspFilterPage.pageHeader.getText().then((value) => {
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
    await browser.driver.sleep(10*1000);
    mspFilterPage.appcardButton.each((ele,i) => {
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
    
    vlpFilterPage.filterYearClear.click();
    await browser.driver.sleep(5*1000);
});



Then('Clear the filter selection', async () =>{
    
    await browser.driver.sleep(5*1000);
    console.log('is selected - '+ (await vlpFilterPage.filterOptionYear.isSelected()).valueOf());
    expect((await vlpFilterPage.filterOptionYear.isSelected()).valueOf()).to.equal([false]);
    
});

When('User clears model selection', async () =>{
    
    vlpFilterPage.modelDropDown.click();
    await browser.driver.sleep(5*1000);
    vlpFilterPage.modelDropDownClear.click();
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
    vlpFilterPage.appCardPrice.then(function (unsorted){
        sorted = unsorted.slice();
        sorted.sort();
        expect(sorted).to.eql(unsorted);
        console.log('sorted - '+ sorted);
    });
    
});

When('User clicks on a vehicle save heart', async () =>{
    await browser.driver.sleep(5*1000);
    vlpFilterPage.vehicleSaveHeart.get(1).click();
});

Then('Heart should turn active', async () =>{
    expect((await vlpFilterPage.vehicleSaveHeartActive.isPresent()).valueOf()).to.be.true;
});

Then('Tooltip should open', async () =>{
    expect((await vlpFilterPage.tooltip.isPresent()).valueOf()).to.be.true;

});