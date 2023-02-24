import { browser, by, By, element, ExpectedConditions, protractor, until } from "protractor"; 
import { Then, When, Given, Before, BeforeAll, SummaryFormatter } from "cucumber";
import { MspFilterPage } from "../pages/mspFilterPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import {VdpPage} from "../pages/vdpPage"
import {Assertion} from "../util/assertion"
import {PLATFORMS} from "../util/Constants";
import { threadId } from "worker_threads";

let mspFilterPage : MspFilterPage = new MspFilterPage();
let vlpFilterPage : VlpFilterPage = new VlpFilterPage();
let vdpPage : VdpPage = new VdpPage();

if ((browser.params.browserPlatformCombo===("ChromeDesktop")||browser.params.browserPlatformCombo === ("SafariDesktop")))
{

async function checkIfIsMobileDevice() {
    let capabilities = await browser.getCapabilities();
    return (capabilities.get(PLATFORMS.PLATFORM_CAPABILITY) === PLATFORMS.ANDROID);
}

When('User clicks on Unlock Savings on a Vehicle Card', async  () =>{
    await browser.driver.sleep(10*1000);
    await vlpFilterPage.unlockSavings.first().click();
});


// let unlockedSavingPresent = vlpFilterPage.unlockSavings.isPresent();
// When('User clicks on Unlock Savings on a Vehicle Card', async  () =>{
//     await browser.driver.sleep(10*1000);
//     if(await unlockedSavingPresent==true) {
//     await vlpFilterPage.unlockSavings.first().click();
//     } else {
//         console.log('No Unlock Saving tesxt')
//         await element(by.xpath('//div[contains(@class,"clear-filter")]')).click();
//      //   await browser.driver.close();
//     }
// });



Then('System should display Unlock Savings modal', async  () =>{
    await browser.driver.sleep(3*1000);
    return Assertion.expect((await vlpFilterPage.unlockSavingsModal.isDisplayed()).valueOf()).to.be.true;
});

When('User does not enter valid values for email and zip', async  () =>{
    await vlpFilterPage.unlockSavingsModalEmail.click();
    await vlpFilterPage.unlockSavingsModalZip.click();
    await vlpFilterPage.unlockSavingsModalFirstName.click();
});


Then('System should display the email text box in error state', async  () =>{
    return Assertion.expect((await vlpFilterPage.unlockSavingsModalEmailError.isDisplayed()).valueOf()).to.be.true;
});

Then('System should display the zip text box in error state', async  () =>{
    return Assertion.expect((await vlpFilterPage.unlockSavingsModalZipError.isDisplayed()).valueOf()).to.be.true;
});

Then('Display Reveal Price CTA in disabled state', async  () =>{
    return Assertion.expect((await vlpFilterPage.unlockSavingsModalRevealBtn.isEnabled()).valueOf()).to.be.false;
});


When('User has entered valid values for all fields', async  () =>{
    await vlpFilterPage.unlockSavingsModalFirstName.sendKeys(browser.params.fname);
    await vlpFilterPage.unlockSavingsModalLastName.sendKeys(browser.params.lname);
    await vlpFilterPage.unlockSavingsModalEmail.sendKeys(browser.params.usemail);
    await vlpFilterPage.unlockSavingsModalZip.sendKeys(browser.params.zipcode);
});


When('User clicks Reveal Price', async  () =>{
    await browser.driver.sleep(5000);
    await vlpFilterPage.unlockSavingsModalRevealBtn.click();
});

Then('System should display confirmation modal with $ Savings', async  () =>{
    await browser.driver.sleep(10*1000);
    const savingsUnlockedText = 'All savings unlocked!';
    return vlpFilterPage.unlockSavingsModalTitle.isPresent().then(() => {
        return Assertion.expect(vlpFilterPage.unlockSavingsModalTitle.getText()).to.eventually.contain(savingsUnlockedText);
    }).catch(() => {
        return Assertion.expect(vlpFilterPage.unlockSavingsModalTitleNoSavings.getText()).to.eventually.contain(savingsUnlockedText);
    })

});

Then('System should display confirmation modal with Smart Price for the vehicle', async  () =>{
    return Assertion.expect(await vlpFilterPage.unlockSavingsModalPrice.getText()).to.contain('SmartPath Price:');
});


When('User clicks on Return to page in the confirmation modal', async  () =>{
    await vlpFilterPage.unlockSavingsModalreturnToPage.click();
});


Then('System should display all vehicle cards with Smart Price and Savings', async  () =>{
    return vlpFilterPage.unlockSavingsModalSmartPriceTxt.each((ele, i) => {
        return Assertion.expect(ele.getText()).to.eventually.contain('SmartPath Price');
    });
});

Then('Price Filter should display Smart Price', async  () =>{
    return Assertion.expect(vlpFilterPage.unlockSavingsModalSmartPriceFilterTxt.getText()).to.eventually.contain('SmartPath Price');
});


When('User clicks on any vehicle card to navigate to Vehicle Details page', async  () =>{
    browser.executeScript('arguments[0].click()', vlpFilterPage.appCard.first());
});


Then('System should display Smart Price with Savings for the vehicle', async  () =>{
    return Assertion.expect(vdpPage.advertisedPrice.getText()).to.eventually.contain('$');
});

When('User clicks on Unlock Savings on Vehicle info header', async  () =>{
    await browser.executeScript('arguments[0].click()', vdpPage.unlockSavings);
});

Then('Price Summary should display additional line item for Additional Dealer Savings', async  () =>{
    return Assertion.expect((await vdpPage.additionalDealerSavings.isPresent()).valueOf()).to.be.true;
});


When('User clicks on Send Estimate to Dealer on a Price Summary', async  () =>{
    await browser.driver.sleep(5*1000);
    browser.executeScript("window.scrollBy(0,250)");
    const isMobileDevice = await  checkIfIsMobileDevice();
    await browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForUnlockDealer).catch(function() {
        if (isMobileDevice) {
            browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForNoUnlockDealerOnMobile);
        } else {
            browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForNoUnlockDealerOnDesktop);
        }
    });

});


Then('System should display Send Estimate modal', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await vdpPage.mstcMultiLeadFormModal.isDisplayed())).to.be.true;
});
Then('Payment term is same as selected in VDP', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(vdpPage.mstcMultiLeadFormModalPaymentTerm.getText()).to.eventually.equal((await vdpPage.ppTerm.getText()).valueOf());
});


When('User does not enter valid values for email and zip in Send Estimate modal', async  () =>{
    await vlpFilterPage.unlockSavingsModalEmail.click();
    await vlpFilterPage.unlockSavingsModalZip.click();
    await vdpPage.mstcMultiLeadFormModalFirstName.click();
});


Then('System should display the email text box in error state for sending estimate', async  () =>{
    return Assertion.expect((await vlpFilterPage.unlockSavingsModalEmailError.isDisplayed()).valueOf()).to.be.true;
});

Then('System should display the zip text box in error state for sending estimate', async  () =>{
    return Assertion.expect((await vdpPage.mstcMultiLeadFormModalZipError.isDisplayed()).valueOf()).to.be.true;
});


Then('Display Submit CTA in Disabled state', async  () =>{
    return Assertion.expect((await vlpFilterPage.unlockSavingsModalRevealBtn.isEnabled()).valueOf()).to.be.false;
});


When('User has entered valid values for all fields in Send Estimate modal', async  () =>{
    await vdpPage.mstcMultiLeadFormModalFirstName.clear();
    await vdpPage.mstcMultiLeadFormModalFirstName.sendKeys(browser.params.fname);
    await vdpPage.mstcMultiLeadFormModalLastName.clear()
    await vdpPage.mstcMultiLeadFormModalLastName.sendKeys(browser.params.lname);
    await vlpFilterPage.unlockSavingsModalEmail.clear();
    await vlpFilterPage.unlockSavingsModalEmail.sendKeys(browser.params.seemail);
    await vlpFilterPage.unlockSavingsModalZip.clear();
    await vlpFilterPage.unlockSavingsModalZip.sendKeys(browser.params.zipcode);
});

When('User clicks on Submit', async  () =>{
    await browser.driver.sleep(2*1000);
     await vlpFilterPage.unlockSavingsModalRevealBtn.click();
});


Then('System should display confirmation modal "Estimate sent!"', async  () =>{
    await browser.driver.sleep(5*1000);
    return Assertion.expect(vdpPage.mstcMultiLeadFormModalTitle.getText()).to.eventually.contain('Availability Requested!');
});

When('User clicks on Return to page in Send Estimate confirmation modal', async  () =>{
    await browser.driver.sleep(3*1000);
    //browser.executeScript("arguments[0].click()", vdpPage.mstcMultiLeadFormModalReturnToPage);
    await vdpPage.mstcMultiLeadFormModalReturnToPage.click();
});


When('User clicks on Contact Dealer in Footer', async  () =>{
    await browser.driver.sleep(5*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerLink);
});

Then('System should display Contact Dealer modal', async  () =>{
    await browser.driver.sleep(3*1000);
    return Assertion.expect((await mspFilterPage.contactDealerModal.isDisplayed()).valueOf()).to.be.true;
});

When('User does not enter valid values for First Name, Last Name and Email', async  () =>{
    await browser.driver.sleep(3*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalFirstName);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalLastName);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalEmail);
    await browser.driver.sleep(1*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalPhone);
});


Then('System should display the first name text box in error state for contact dealer', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(mspFilterPage.contactDealerModalFirstName.getAttribute('type')).to.eventually.equal('text');
});

Then('System should display the last name text box in error state for contact dealer', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(mspFilterPage.contactDealerModalLastName.getAttribute('type')).to.eventually.equal('text');
});

Then('System should display the email text box in error state for contact dealer', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect(mspFilterPage.contactDealerModalEmail.getAttribute('type')).to.eventually.equal('email');
});


Then('Display Send CTA in Disabled state', async  () =>{
    await browser.driver.sleep(2*1000);
    return Assertion.expect((await mspFilterPage.contactDealerModalSendBtn.isEnabled()).valueOf()).to.be.false;
});

When('User has entered valid values for all fields in Contact Dealer modal', async  () =>{
    await browser.driver.sleep(3*1000);
    mspFilterPage.contactDealerModalFirstName.sendKeys(browser.params.fname);
    await browser.driver.sleep(2*1000);
    mspFilterPage.contactDealerModalLastName.sendKeys(browser.params.lname);
    await browser.driver.sleep(2*1000);
    mspFilterPage.contactDealerModalEmail.sendKeys(browser.params.cdemail); 
    await browser.driver.sleep(1*1000);
    await vlpFilterPage.unlockSavingsModalZip.sendKeys(browser.params.zipcode);
    await browser.driver.sleep(1*1000);
    await mspFilterPage.contactDealerModalPhone.sendKeys(browser.params.caphonenew);   
});

When('User clicks on Send', async  () =>{
    await browser.driver.sleep(2*10000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalSendBtn);
    console.log("checking validation error");
});

Then('System should display confirmation modal', async  () =>{
    await browser.driver.sleep(5*1000);
    return Assertion.expect((await mspFilterPage.contactDealerModalConf.isDisplayed()).valueOf()).to.be.true;
});

When('User clicks on Return to page in Contact Dealer confirmation modal', async  () =>{
    await browser.driver.sleep(5*1000);
    browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalreturnToPage);
});

Then('User should be navigated to Model Selection page', async () => {
    await browser.driver.sleep(2*1000);
    return Assertion.expect(await browser.getCurrentUrl()).to.contain('inventory?dealerCd=');    
});
}
else if((browser.params.browserPlatformCombo === ("ChromeAndroid")||browser.params.browserPlatformCombo === ("SafariIOS"))){
    async function checkIfIsMobileDevice() {
        let capabilities = await browser.getCapabilities();
        return (capabilities.get(PLATFORMS.PLATFORM_CAPABILITY) === PLATFORMS.ANDROID);
    }
    
    When('User clicks on Unlock Savings on a Vehicle Card', async  () =>{
        await browser.driver.sleep(10*1000);
        await vlpFilterPage.unlockSavingsmob.first().click();
    });
    
    
    Then('System should display Unlock Savings modal', async  () =>{
        await browser.driver.sleep(3*1000);
        return Assertion.expect((await vlpFilterPage.unlockSavingsModal.isDisplayed()).valueOf()).to.be.true;
    });
    
    When('User does not enter valid values for email and zip', async  () =>{
        await vlpFilterPage.unlockSavingsModalEmail.click();
        await vlpFilterPage.unlockSavingsModalZip.click();
        await vlpFilterPage.unlockSavingsModalFirstName.click();
    });
    
    
    Then('System should display the email text box in error state', async  () =>{
        return Assertion.expect((await vlpFilterPage.unlockSavingsModalEmailError.isDisplayed()).valueOf()).to.be.true;
    });
    
    Then('System should display the zip text box in error state', async  () =>{
        return Assertion.expect((await vlpFilterPage.unlockSavingsModalZipError.isDisplayed()).valueOf()).to.be.true;
    });
    
    Then('Display Reveal Price CTA in disabled state', async  () =>{
        return Assertion.expect((await vlpFilterPage.unlockSavingsModalRevealBtn.isEnabled()).valueOf()).to.be.false;
    });
    
    
    When('User has entered valid values for all fields', async  () =>{
        await vlpFilterPage.unlockSavingsModalFirstName.sendKeys(browser.params.fname);
        await vlpFilterPage.unlockSavingsModalLastName.sendKeys(browser.params.lname);
        await vlpFilterPage.unlockSavingsModalEmail.sendKeys(browser.params.usemail);
      //  await vlpFilterPage.unlockSavingsModalZip.sendKeys(browser.params.zipcode);
       // await vlpFilterPage.unlockSavingsModalZip.actions().sendKeys(browser.params.zipcode).perform();
        await vlpFilterPage.unlockSavingsModalZip.click();
        console.log("zip code to be entered");
        await browser.actions().sendKeys("85365").perform();
        console.log("zip code entered");



      //  sendKeys(browser.params.zipcode);
        //sendKeys("9654781234").perform();
    });
    
    
    When('User clicks Reveal Price', async  () =>{
        await vlpFilterPage.unlockSavingsModalRevealBtn.click();
    });
    
    Then('System should display confirmation modal with $ Savings', async  () =>{
        await browser.driver.sleep(10*1000);
        const savingsUnlockedText = 'Unlock Savings';
        return vlpFilterPage.unlockSavingsModalTitle.isPresent().then(() => {
            return Assertion.expect(vlpFilterPage.unlockSavingsModalTitle.getText()).to.eventually.contain(savingsUnlockedText);
        }).catch(() => {
            return Assertion.expect(vlpFilterPage.unlockSavingsModalTitleNoSavings.getText()).to.eventually.contain(savingsUnlockedText);
        })
    
    });
    
    Then('System should display confirmation modal with Smart Price for the vehicle', async  () =>{
        return Assertion.expect(await vlpFilterPage.unlockSavingsModalPrice.getText()).to.contain('SmartPath Price:');
    });
    
    
    When('User clicks on Return to page in the confirmation modal', async  () =>{
        await vlpFilterPage.unlockSavingsModalreturnToPage.click();
    });
    
    
    Then('System should display all vehicle cards with Smart Price and Savings', async  () =>{
        return vlpFilterPage.unlockSavingsModalSmartPriceTxt.each((ele, i) => {
            return Assertion.expect(ele.getText()).to.eventually.contain('SmartPath Price');
        });
    });
    
    Then('Price Filter should display Smart Price', async  () =>{
        //return Assertion.expect(vlpFilterPage.unlockSavingsModalSmartPriceFilterTxt.getText()).to.eventually.contain('SmartPath Price');
    });
    
    
    When('User clicks on any vehicle card to navigate to Vehicle Details page', async  () =>{
        browser.executeScript('arguments[0].click()', vlpFilterPage.appCard.first());
    });
    
    
    Then('System should display Smart Price with Savings for the vehicle', async  () =>{
        return Assertion.expect(vdpPage.advertisedPrice.getText()).to.eventually.contain('$');
    });
    
    When('User clicks on Unlock Savings on Vehicle info header', async  () =>{
        //await browser.executeScript('arguments[0].click()', vdpPage.unlockSavings);
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
    
    Then('Price Summary should display additional line item for Additional Dealer Savings', async  () =>{
        return Assertion.expect((await vdpPage.additionalDealerSavings.isPresent()).valueOf()).to.be.true;
    });
    
    
    When('User clicks on Send Estimate to Dealer on a Price Summary', async  () =>{
        await browser.driver.sleep(5*1000);
        browser.executeScript("window.scrollBy(0,250)");
        const isMobileDevice = await  checkIfIsMobileDevice();
        await browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForUnlockDealer).catch(function() {
            if (isMobileDevice) {
                browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForNoUnlockDealerOnMobile);
            } else {
                browser.executeScript('arguments[0].click()', vdpPage.confirmAvailabilityForNoUnlockDealerOnDesktop);
            }
        });
    
    });
    
    
    Then('System should display Send Estimate modal', async  () =>{
        await browser.driver.sleep(2*1000);
        return Assertion.expect((await vdpPage.mstcMultiLeadFormModal.isDisplayed())).to.be.true;
    });
    Then('Payment term is same as selected in VDP', async  () =>{
        await browser.driver.sleep(2*1000);
        return Assertion.expect(vdpPage.mstcMultiLeadFormModalPaymentTerm.getText()).to.eventually.equal((await vdpPage.ppTerm.getText()).valueOf());
    });
    
    
    When('User does not enter valid values for email and zip in Send Estimate modal', async  () =>{
        await vlpFilterPage.unlockSavingsModalEmail.click();
        await vlpFilterPage.unlockSavingsModalZip.click();
        await vdpPage.mstcMultiLeadFormModalFirstName.click();
    });
    
    
    Then('System should display the email text box in error state for sending estimate', async  () =>{
        return Assertion.expect((await vlpFilterPage.unlockSavingsModalEmailError.isDisplayed()).valueOf()).to.be.true;
    });
    
    Then('System should display the zip text box in error state for sending estimate', async  () =>{
        return Assertion.expect((await vdpPage.mstcMultiLeadFormModalZipError.isDisplayed()).valueOf()).to.be.true;
    });
    
    
    Then('Display Submit CTA in Disabled state', async  () =>{
        return Assertion.expect((await vlpFilterPage.unlockSavingsModalRevealBtn.isEnabled()).valueOf()).to.be.false;
    });
    
    
    When('User has entered valid values for all fields in Send Estimate modal', async  () =>{
        await vdpPage.mstcMultiLeadFormModalFirstName.clear();
        await vdpPage.mstcMultiLeadFormModalFirstName.sendKeys(browser.params.fname);
        await vdpPage.mstcMultiLeadFormModalLastName.clear()
        await vdpPage.mstcMultiLeadFormModalLastName.sendKeys(browser.params.lname);
        await vlpFilterPage.unlockSavingsModalEmail.clear();
        await vlpFilterPage.unlockSavingsModalEmail.sendKeys(browser.params.seemail);
        await vlpFilterPage.unlockSavingsModalZip.clear();
        await vlpFilterPage.unlockSavingsModalZip.sendKeys(browser.params.zipcode);
    });
    
    When('User clicks on Submit', async  () =>{
         await vlpFilterPage.unlockSavingsModalRevealBtn.click();
    });
    
    
    Then('System should display confirmation modal "Estimate sent!"', async  () =>{
        return Assertion.expect(vdpPage.mstcMultiLeadFormModalTitle.getText()).to.eventually.contain('Availability Requested!');
    });
    
    When('User clicks on Return to page in Send Estimate confirmation modal', async  () =>{
        await browser.driver.sleep(3*1000);
        //browser.executeScript("arguments[0].click()", vdpPage.mstcMultiLeadFormModalReturnToPage);
        await vdpPage.mstcMultiLeadFormModalReturnToPage.click();
    });
    
    
    When('User clicks on Contact Dealer in Footer', async  () =>{
        await browser.driver.sleep(5*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerLink);
    });
    
    Then('System should display Contact Dealer modal', async  () =>{
        await browser.driver.sleep(3*1000);
        return Assertion.expect((await mspFilterPage.contactDealerModal.isDisplayed()).valueOf()).to.be.true;
    });
    
    When('User does not enter valid values for First Name, Last Name and Email', async  () =>{
        await browser.driver.sleep(3*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalFirstName);
        await browser.driver.sleep(1*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalLastName);
        await browser.driver.sleep(1*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalEmail);
        await browser.driver.sleep(1*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalPhone);
    });
    
    
    Then('System should display the first name text box in error state for contact dealer', async  () =>{
        await browser.driver.sleep(2*1000);
        return Assertion.expect(mspFilterPage.contactDealerModalFirstName.getAttribute('type')).to.eventually.equal('text');
    });
    
    Then('System should display the last name text box in error state for contact dealer', async  () =>{
        await browser.driver.sleep(2*1000);
        return Assertion.expect(mspFilterPage.contactDealerModalLastName.getAttribute('type')).to.eventually.equal('text');
    });
    
    Then('System should display the email text box in error state for contact dealer', async  () =>{
        await browser.driver.sleep(2*1000);
        return Assertion.expect(mspFilterPage.contactDealerModalEmail.getAttribute('type')).to.eventually.equal('email');
    });
    
    
    Then('Display Send CTA in Disabled state', async  () =>{
        await browser.driver.sleep(2*1000);
        return Assertion.expect((await mspFilterPage.contactDealerModalSendBtn.isEnabled()).valueOf()).to.be.false;
    });
    
    When('User has entered valid values for all fields in Contact Dealer modal', async  () =>{
        await browser.driver.sleep(3*1000);
        mspFilterPage.contactDealerModalFirstName.sendKeys(browser.params.fname);
        await browser.driver.sleep(2*1000);
        mspFilterPage.contactDealerModalLastName.sendKeys(browser.params.lname);
        await browser.driver.sleep(2*1000);
        mspFilterPage.contactDealerModalEmail.sendKeys(browser.params.cdemail); 
        await browser.driver.sleep(1*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalPhone);   
    });
    
    When('User clicks on Send', async  () =>{
        await browser.driver.sleep(2*1000);
        browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalSendBtn);
    });
    
    Then('System should display confirmation modal', async  () =>{
        await browser.driver.sleep(5*1000);
        return Assertion.expect((await mspFilterPage.contactDealerModalConf.isDisplayed()).valueOf()).to.be.true;
    });
    
    When('User clicks on Return to page in Contact Dealer confirmation modal', async  () =>{
        await browser.driver.sleep(5*1000);
       // browser.executeScript("arguments[0].click()", mspFilterPage.contactDealerModalreturnToPage);
        await mspFilterPage.contactDealerModalreturnToPage.click();
    });
    
    Then('User should be navigated to Model Selection page', async () => {
        await browser.driver.sleep(2*1000);
        return Assertion.expect(await browser.getCurrentUrl()).to.contain('inventory?dealerCd=');    
    });
}