import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import { expect } from "chai";
import {Assertion} from "../util/assertion"
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();

if ((browser.params.browserPlatformCombo===("ChromeDesktop")||browser.params.browserPlatformCombo === ("SafariDesktop")))
{
    console.log("web browser execution"); 
Then('Vehicle Information should be displayed with VIN', async  () =>{
    await browser.driver.sleep(20*1000);
    vdpPage.vin.getText().then((value) => {
        console.log('value -- '+value);
        let vin = (value.replace('VIN ','')).trim();
        Assertion.expect(vin.length).to.equal(17);
    });
});

Then('Vehicle Information should be displayed with Model Name', async  () =>{
    await browser.driver.sleep(5*1000);
    Assertion.expect((await vdpPage.vehicleTitle.getText()).length).to.be.gt(0);
});

Then('Vehicle Information should be displayed with DG Save Icon', async  () =>{
    await browser.driver.sleep(5*1000);
    Assertion.expect((await vdpPage.dgIcon.isDisplayed()).valueOf()).to.be.true;
});

Then('Vehicle Information should be displayed with Advertised Price', async  () =>{
    await browser.driver.sleep(5*1000);
    Assertion.expect((await vdpPage.price.getText()).length).to.be.gt(0);
});


Then('Vehicle Information should be displayed with Unlock Savings', async  () =>{
    // await waitForVisibilityOf(vdpPage.unlockSavings,"unlockSavings");
    // Assertion.expect(vdpPage.unlockSavings.getText()).to.eventually.contain('Unlock Savings');
    let savinglength=(await browser.findElements(by.xpath("//div[@class='vehicle-info-item pricePadding']//span[text()='Unlock Savings']"))).length;
    console.log(savinglength+"_________________");
    if(savinglength>0){
     browser.driver.sleep(5*1000);
    Assertion.expect(vdpPage.unlockSavings.getText()).to.eventually.contain('Unlock Savings');
    }
           else{
             console.log("logic working");
           }
    });

Then('Vehicle Information should be displayed with Exterior Color', async  () =>{
    await waitForVisibilityOf(vdpPage.extColor,"extColor");
    Assertion.expect((await vdpPage.extColor.getText()).length).to.be.gt(0);
});


Then('Vehicle Information should be displayed with Interior Color', async  () =>{
    await waitForVisibilityOf(vdpPage.intColor,"extColor");
    Assertion.expect((await vdpPage.intColor.getText()).length).to.be.gt(0);
});


Then('Vehicle Information should be displayed with Engine', async  () =>{
    await waitForVisibilityOf(vdpPage.engine,"engine");
    Assertion.expect((await vdpPage.engine.getText()).length).to.be.gt(0);
});

Then('Vehicle Information should be displayed with Estimated MPG', async  () =>{
    await waitForVisibilityOf(vdpPage.estMpg,"estMpg");
    Assertion.expect((await vdpPage.estMpg.getText()).length).to.be.gt(0);
});

Then('Vehicle Information should be displayed with Package & Accessories', async  () =>{
   // await browser.driver.sleep(5*1000);
    await waitForVisibilityOf(vdpPage.packageAcc,"package");
  //  Assertion.expect((await vdpPage.packageAcc.getText()).length).to.be.gt(0);
});

Then('Vehicle Information should be displayed with View All Vehicle Details CTA', async  () =>{
    await waitForVisibilityOf(vdpPage.viewVehDetails,"viewVehDetails");
    Assertion.expect(vdpPage.viewVehDetails.getText()).to.eventually.contain('View All Vehicle Details');
   });


Then('Vehicle Information should be displayed with Toyota Care Image', async  () =>{
    await waitForVisibilityOf(vdpPage.toyotaCareImg,"toyotaCareImg");
    Assertion.expect((await vdpPage.toyotaCareImg.isDisplayed()).valueOf()).to.be.true;
});

Then('Vehicle Information should be displayed with Toyota Safety Sense Logo', async  () =>{
    await waitForVisibilityOf(vdpPage.toyotaSafetySense,"toyotaSafetySense");
    Assertion.expect((await vdpPage.toyotaSafetySense.isDisplayed()).valueOf()).to.be.true;
});


Then('Vehicle Information should be displayed with Image Carousal', async  () =>{
    await waitForVisibilityOf(vdpPage.carousel,"carousel");
    Assertion.expect((await vdpPage.carousel.isDisplayed()).valueOf()).to.be.true;
});

When('User clicks on View All Vehicle Details CTA', async  () =>{
      await waitForVisibilityOf(vdpPage.viewVehDetails,"viewVehDetails");
    browser.executeScript("arguments[0].click()", vdpPage.viewVehDetails);
});



Then('System should open Vehicle Detail modal with VIN', async  () =>{
    await waitForVisibilityOf(vdpPage.vehDetailModalVin,"vehDetailModalVin");
    vdpPage.vehDetailModalVin.getText().then((value) => {
        console.log('value -- '+value);
        let vin = (value.replace('VIN ','')).trim();
        Assertion.expect(vin.length).to.equal(17);
    });
});


Then('System should open Vehicle Detail modal with Model Name', async  () =>{
    await waitForVisibilityOf(vdpPage.vehDetailModalVehicleTitle,"vehDetailModalVehicleTitle");
    Assertion.expect((await vdpPage.vehDetailModalVehicleTitle.getText()).length).to.be.gt(0);
});


Then('System should open Vehicle Detail modal with Exterior Color', async  () =>{
    await waitForVisibilityOf(vdpPage.vehDetailModalExtColor,"vehDetailModalExtColor");
    Assertion.expect((await vdpPage.vehDetailModalExtColor.getText()).length).to.be.gt(0);
});


Then('System should open Vehicle Detail modal with Interior Color', async  () =>{
    await waitForVisibilityOf(vdpPage.vehDetailModalIntColor,"vehDetailModalIntColor");
    Assertion.expect((await vdpPage.vehDetailModalIntColor.getText()).length).to.be.gt(0);
});


Then('System should open Vehicle Detail modal with Interior Features tab', async  () =>{
    await browser.driver.sleep(2*1000);
    Assertion.expect(vdpPage.vehDetailModalTab1.last().getText()).to.eventually.contain('Interior Features');
});


Then('System should open Vehicle Detail modal with Exterior Features tab', async  () =>{
    await browser.driver.sleep(2*1000);
    Assertion.expect(vdpPage.vehDetailModalTab2.last().getText()).to.eventually.contain('Exterior Features');
});


Then('System should open Vehicle Detail modal with Safety Features tab', async  () =>{
    await browser.driver.sleep(2*1000);
    Assertion.expect(vdpPage.vehDetailModalTab3.last().getText()).to.eventually.contain('Safety Features');
});

Then('System should open Vehicle Detail modal with Package & Accessories tab', async  () =>{
    await browser.driver.sleep(2*1000);
    Assertion.expect(vdpPage.vehDetailModalTab4.last().getText()).to.eventually.contain('Package & Accessories');
});


Then('System should open Vehicle Detail modal with Disclosures in the bottom', async  () =>{
    await browser.driver.sleep(5*1000);
    await waitForVisibilityOf(vdpPage.vehDetailModalDisclosure,"vehDetailModalDisclosure");
    Assertion.expect((await vdpPage.vehDetailModalDisclosure.isDisplayed()).valueOf()).to.be.true;
});

When('User clicks on arrows in image carousal', async  () =>{
    await waitForVisibilityOf(vdpPage.carouselImgRight,"carouselImgRight");
    browser.executeScript("arguments[0].click()", vdpPage.carouselImgRight);
});

Then('System should display the image on the carousal', async  () =>{
    await waitForVisibilityOf(vdpPage.carousel,"carousel");
    Assertion.expect((await vdpPage.carousel.isDisplayed()).valueOf()).to.be.true;
});
}


else if((browser.params.browserPlatformCombo === ("ChromeAndroid")||browser.params.browserPlatformCombo === ("SafariIOS"))){
    console.log("mobile browser execution"); 
    //if ((browser.params.browserPlatformCombo === ("SafariIOS"))) {
        Then('Vehicle Information should be displayed with VIN', async  () =>{
            await browser.driver.sleep(20*1000);
            await waitForVisibilityOf(vdpPage.vin,"VIN");
            vdpPage.vin.getText().then((value) => {
                console.log('value -- '+value);
                let vin = (value.replace('VIN ','')).trim();
                Assertion.expect(vin.length).to.equal(17);
            });
        });
        
        Then('Vehicle Information should be displayed with Model Name', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.vehicleTitle,"vehicleTitle");
            Assertion.expect((await vdpPage.vehicleTitle.getText()).length).to.be.gt(0);
        });
        
        Then('Vehicle Information should be displayed with DG Save Icon', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.dgIcon,"dgIcon");
            Assertion.expect((await vdpPage.dgIcon.isDisplayed()).valueOf()).to.be.true;
        });
        
        Then('Vehicle Information should be displayed with Advertised Price', async  () =>{
           // await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.price,"price");
            Assertion.expect((await vdpPage.price.getText()).length).to.be.gt(0);
        });
        
        
        Then('Vehicle Information should be displayed with Unlock Savings', async  () =>{
            let savinglength=(await browser.findElements(by.xpath("//div[@class='vehicle-info-item pricePadding']//span[text()='Unlock Savings']"))).length;
           console.log(savinglength+"_________________");
        if(savinglength>0){
            browser.driver.sleep(5*1000);
                    Assertion.expect(vdpPage.unlockSavings.getText()).to.eventually.contain('Unlock Savings');
        }
                  else{
                    console.log("unlockSavings button not present in Mobile browser");
                  }
        });
        
        Then('Vehicle Information should be displayed with Exterior Color', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.extColor,"extColor");
            Assertion.expect((await vdpPage.extColor.getText()).length).to.be.gt(0);
        });
        
        
        Then('Vehicle Information should be displayed with Interior Color', async  () =>{
           // await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.intColor,"extColor");
            Assertion.expect((await vdpPage.intColor.getText()).length).to.be.gt(0);
        });
        
        
        Then('Vehicle Information should be displayed with Engine', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.engine,"engine");
            Assertion.expect((await vdpPage.engine.getText()).length).to.be.gt(0);
        });
        
        Then('Vehicle Information should be displayed with Estimated MPG', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.estMpg,"estMpg");
            Assertion.expect((await vdpPage.estMpg.getText()).length).to.be.gt(0);
        });
        
        Then('Vehicle Information should be displayed with Package & Accessories', async  () =>{
           // await browser.driver.sleep(5*1000);
           // await waitForVisibilityOf(vdpPage.packageAcc,"packageAcc");
           await waitForVisibilityOf(vdpPage.packageAcc,"package");
         //   Assertion.expect((await vdpPage.packageAcc.getText()).length).to.be.gt(0);
        });
        
        Then('Vehicle Information should be displayed with View All Vehicle Details CTA', async  () =>{
           // await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.viewVehDetails,"viewVehDetails");
            Assertion.expect(vdpPage.viewVehDetails.getText()).to.eventually.contain('View All Vehicle Details');
        });
        
        
        Then('Vehicle Information should be displayed with Toyota Care Image', async  () =>{
           // await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.toyotaCareImg,"toyotaCareImg");
            Assertion.expect((await vdpPage.toyotaCareImg.isDisplayed()).valueOf()).to.be.true;
        });
        
        Then('Vehicle Information should be displayed with Toyota Safety Sense Logo', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.toyotaSafetySense,"toyotaSafetySense");
            Assertion.expect((await vdpPage.toyotaSafetySense.isDisplayed()).valueOf()).to.be.true;
        });
        
        
        Then('Vehicle Information should be displayed with Image Carousal', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.carousel,"carousel");
            Assertion.expect((await vdpPage.carousel.isDisplayed()).valueOf()).to.be.true;
        });
        
        When('User clicks on View All Vehicle Details CTA', async  () =>{
            //await browser.driver.sleep(20*1000);
            await waitForVisibilityOf(vdpPage.viewVehDetails,"viewVehDetails");
            browser.executeScript("arguments[0].click()", vdpPage.viewVehDetails);
        });
        
        
        
        Then('System should open Vehicle Detail modal with VIN', async  () =>{
            await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.vehDetailModalVin,"vehDetailModalVin");
            vdpPage.vehDetailModalVin.getText().then((value) => {
                console.log('value -- '+value);
                let vin = (value.replace('VIN ','')).trim();
                Assertion.expect(vin.length).to.equal(17);
            });
        });
        
        
        Then('System should open Vehicle Detail modal with Model Name', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.vehDetailModalVehicleTitle,"vehDetailModalVehicleTitle");
            Assertion.expect((await vdpPage.vehDetailModalVehicleTitle.getText()).length).to.be.gt(0);
        });
        
        
        Then('System should open Vehicle Detail modal with Exterior Color', async  () =>{
           // await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.vehDetailModalExtColor,"vehDetailModalExtColor");
            Assertion.expect((await vdpPage.vehDetailModalExtColor.getText()).length).to.be.gt(0);
        });
        
        
        Then('System should open Vehicle Detail modal with Interior Color', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.vehDetailModalIntColor,"vehDetailModalIntColor");
            Assertion.expect((await vdpPage.vehDetailModalIntColor.getText()).length).to.be.gt(0);
        });
        
        
        Then('System should open Vehicle Detail modal with Interior Features tab', async  () =>{
            await browser.driver.sleep(2*1000);
            //await waitForVisibilityOf(vdpPage.vehDetailModalExtColor,"vehDetailModalExtColor");
            Assertion.expect(vdpPage.vehDetailModalTab1.last().getText()).to.eventually.contain('Interior Features');
        });
        
        
        Then('System should open Vehicle Detail modal with Exterior Features tab', async  () =>{
            await browser.driver.sleep(2*1000);
            Assertion.expect(vdpPage.vehDetailModalTab2.last().getText()).to.eventually.contain('Exterior Features');
        });
        
        // Safety Features is not present in mobile browser
        
        Then('System should open Vehicle Detail modal with Safety Features tab', async  () =>{
                console.log("****its mobile execution*****")
                await vdpPage.vehDetailModalArrow.click()
                await vdpPage.vehDetailModalArrow.click()
                await browser.driver.sleep(2*1000);
                Assertion.expect(vdpPage.vehDetailModalTab3.getText()).to.eventually.contain('Safety Features');
        });
        Then('system should close the Vehicle Detail modal page', async  () =>{
            await browser.driver.sleep(2*1000);
            await vdpPage.vehDetailModalArrowcloseimage.click();
    
        });
         Then('System should open Vehicle Detail modal with Package & Accessories tab', async  () =>{
        console.log("****its mobile execution of package accessories*****")
             await browser.driver.sleep(5*1000);         
             await vdpPage.vehDetailModalArrow.click();
             await browser.driver.sleep(5*1000); 
            //  await vdpPage.vehDetailModalArrow.click();
            //  await vdpPage.vehDetailModalArrow.click();
            //  await browser.driver.sleep(2*1000);
    //  
              Assertion.expect(await vdpPage.vehDetailModalTab4.last().getText()).to.contain('Package & Accessories');
        });
        Then('System should open Vehicle Detail modal with Disclosures in the bottom', async  () =>{
            await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.vehDetailModalDisclosure,"vehDetailModalDisclosure");
            Assertion.expect((await vdpPage.vehDetailModalDisclosure.isDisplayed()).valueOf()).to.be.true;
        });
        
        When('User clicks on arrows in image carousal', async  () =>{
            //await browser.driver.sleep(20*1000);
            await waitForVisibilityOf(vdpPage.carouselImgRight,"carouselImgRight");
            browser.executeScript("arguments[0].click()", vdpPage.carouselImgRight);
        });
        
        Then('System should display the image on the carousal', async  () =>{
            //await browser.driver.sleep(5*1000);
            await waitForVisibilityOf(vdpPage.carousel,"carousel");
            Assertion.expect((await vdpPage.carousel.isDisplayed()).valueOf()).to.be.true;
        });
    }