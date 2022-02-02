import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import { browser, ElementFinder } from 'protractor';
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { VdpPage } from "../pages/vdpPage";
import { VlpFilterPage } from "../pages/vlpFilterPage";
import { saveVehicleBySalesClass, getVehicleCardBySalesClass } from "../util/saveVehicleBySalesClass";
import { waitForVisibilityOf } from "../util/waitForVisibilityOf";
import { navigateToSavesPage } from "./gxp-shared.step";

const savesPage = new SavesPageRedesign();
const vlpFilterPage = new VlpFilterPage();
const vdpPage = new VdpPage();

const scenarioContext = {
    vinToRemove: '',
    garageMergeVehicles: [],
};

Given(/User has a \"(.*?)\" vehicle saved/, async (salesClass: string) =>{
    await navigateToSavesPage();
    await waitForVisibilityOf(savesPage.savePageHeader, `Saves Page`);

    const isAtLeastOneVehicleSaved = await savesPage.isAtLeastOneVehicleSaved(salesClass.toLowerCase());

    if (!isAtLeastOneVehicleSaved) {
        await saveVehicleBySalesClass(salesClass.toLowerCase());
    }
});

Given('User has no saved inventory', async () => {
    await waitForVisibilityOf(savesPage.savedInventorySection, 'Saved Inventory Section');
    await removeAllInventory();
});

Given('User wants their inventory to persist after this browser session', async () => {
    await waitForVisibilityOf(savesPage.savedInventorySection, 'Saved Inventory Section');
    const inventoryCardVins = await savesPage.getVehicleCardVins();
    scenarioContext.garageMergeVehicles = inventoryCardVins;
});

When(/User clicks on a saved \"(.*?)\" vehicle image/, async (salesClass: string) => {
    await waitForVisibilityOf(savesPage.savedInventorySection, 'Inventory Card');
    const vehicleCards = await savesPage.getVehicleCards(salesClass.toLowerCase());
    //if there are multiple, use first
    const areVehicleCards = vehicleCards.length > 0;
    expect(areVehicleCards).to.be.true;

    const vehicleImage = await vehicleCards[0].findElement(savesPage.savedInventoryCardImage.locator());
    await browser.actions().mouseMove(vehicleImage).perform();
    await vehicleImage.click();

});

When('User clicks on Search Inventory', async () => {
    await browser.actions().mouseMove(savesPage.searchInventoryButton).perform();
    await savesPage.searchInventoryButton.click();
});

When(/User clicks on \"(.*?)\" on Vehicle Card/, async (vehicleCardComponent: string) => {
    await clickOnVehicleCardComponent(vehicleCardComponent);
});

When(/User views an unsaved \"(.*?)\" vehicle's VDP without saving it/, async(salesClass: string) => {
    let vehicleCard = await getVehicleCardBySalesClass(salesClass);

    //check if card is already saved
    expect(vehicleCard).to.exist;
    await unsaveHeartIfSaved(vehicleCard);

    await browser.actions().mouseMove(vehicleCard).perform();
    await vehicleCard.click();
    await waitForVisibilityOf(vdpPage.loadingContainer, 'Loading Page');
    await browser.driver.sleep(5*1000);
});

When(/User clicks on saved \"(.*?)\" vehicle save heart/, async (salesClass: string) => {
    const vinToRemove = await savesPage.savedInventoryVinContainer.getText();
    scenarioContext.vinToRemove = vinToRemove;
    await savesPage.savedInventoryCardSaveHeart.click();
});

When('User Clicks Remove', async () => {
    await waitForVisibilityOf(savesPage.savedInventoryRemoveButton, 'Remove Inventory Button');
    await savesPage.savedInventoryRemoveButton.click();
});

Then('The Vehicle Details Modal should be displayed', async () => {
    await waitForVisibilityOf(savesPage.detailsModalHeader, 'Vehicle Details Modal');
    const modalTitle = await savesPage.detailsModalTitle.getText();
    expect(modalTitle.toLowerCase()).to.equal('vehicle details');
});

Then(/Recently Viewed \"(.*?)\" vehicle should appear in garage/, async (salesClass: string) => {
    await navigateToSavesPage();

    await waitForVisibilityOf(savesPage.savedInventoryCard, 'Recently Viewed Inventory');
    expect(await savesPage.savedInventoryRecentlyViewed.isPresent()).to.be.true;
});

Then('Vehicle is removed from the Users inventory', async () => {
    const removedVin = scenarioContext.vinToRemove;
    const isVinOnSavesPage = await savesPage.isVinOnSavesPage(removedVin);
    expect(isVinOnSavesPage).to.be.false;
});

Then('All inventory from signed out garage are brought into signed in garage', async () => {
    await navigateToSavesPage();
    const vinsFromMerge = scenarioContext.garageMergeVehicles;
    console.log(`merged vins: ${vinsFromMerge}`);

    await waitForVisibilityOf(savesPage.savedInventorySection, 'Saved Inventory Section');
    const allVins = await savesPage.getVehicleCardVins();
    console.log(`all vins: ${allVins}`);
    
    expect(areMergedVinsPresent(vinsFromMerge, allVins)).to.be.true;
});

async function clickOnVehicleCardComponent(componentName: string) {
    const component = inventoryCardComponents.filter((component) => component.title.toLowerCase() === componentName.toLowerCase())[0];
    await waitForVisibilityOf(component.element, `Inventory Card ${component.title}`);
    await component.element.click();
}

const inventoryCardComponents = [{title: 'vehicle details', element: savesPage.savedInventoryVehicleDetails}, {title: 'save heart', element: savesPage.savedInventoryCardSaveHeart}]

async function unsaveHeartIfSaved(vehicleCard: ElementFinder) {
    const saveHeart = await vehicleCard.all(vlpFilterPage.vehicleSaveHeart.locator()).first();
    const saveHeartClasses = await saveHeart.getAttribute('class');
    await browser.actions().mouseMove(saveHeart).perform();
    if(saveHeartClasses.includes('active')){
        await saveHeart.click();
    }
}

function areMergedVinsPresent(merged: string[], all: string[]) : boolean {
    return merged.every(mergedVin => all.includes(mergedVin));
}

async function removeAllInventory() {
    await waitForVisibilityOf(savesPage.savedInventorySection, 'Saved Inventory Section');
    const inventoryCards = await savesPage.savedInventoryCards.getWebElements();
    const numOfInventoryCards = inventoryCards.length
    for(let i = numOfInventoryCards -1; i >= 0; i--) {
        const saveHeart = await inventoryCards[i].findElement(savesPage.savedInventoryCardSaveHeart);
        await browser.actions().mouseMove(saveHeart).perform();
        await saveHeart.click();
        await waitForVisibilityOf(savesPage.savedInventoryRemoveButton, 'Remove Inventory');
        await savesPage.savedInventoryRemoveButton.click();
    }
};