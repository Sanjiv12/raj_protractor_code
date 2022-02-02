import { browser, ElementFinder } from 'protractor';
import { constructVlpUrl } from './constructVlpUrl';
import { VlpFilterPage } from '../pages/vlpFilterPage';
import { waitForVisibilityOf } from './waitForVisibilityOf';
import { MspFilterPage } from '../pages/mspFilterPage';

const vlpFilterPage : VlpFilterPage = new VlpFilterPage();
const mspFilterPage : MspFilterPage = new MspFilterPage();

export async function saveVehicleBySalesClass(salesClass: string) {

    const vlpUrl = constructVlpUrl();
    await browser.get(vlpUrl);
    const vehicleCard = await getVehicleCardBySalesClass(salesClass);


    const saveHeart = vehicleCard.all(vlpFilterPage.vehicleSaveHeart.locator()).first();
    await waitForVisibilityOf(saveHeart, `${salesClass} save heart`);
    await saveHeart.click();
}

export async function getVehicleCardBySalesClass(salesClass: string) : Promise<ElementFinder> {
    let vehicleCard : ElementFinder;
    if(salesClass.toLowerCase() === 'new'){
        vehicleCard = await getNewVehicleCardVlp();
    } else if (salesClass.toLowerCase() === 'cpo') {
        vehicleCard = await getCpoVehicleCardVlp();
    } else if (salesClass.toLowerCase() === 'used') {
        vehicleCard = await getUsedVehicleCardVlp();
    }
    return vehicleCard;
}

export async function getNewVehicleCardVlp() : Promise<ElementFinder>  {
    const modelCardButton = await mspFilterPage.appcardButton.get(0);
    await browser.actions().mouseMove(modelCardButton).perform();
    await waitForVisibilityOf(modelCardButton, 'Model Card Button');
    await modelCardButton.click();

    await waitForVisibilityOf(vlpFilterPage.appCard.first(), 'New Vehicle Cards');
    return vlpFilterPage.appCard.first();
}

export async function getCpoVehicleCardVlp() : Promise<ElementFinder> {
    await navigateToUsedSection();
    if(browser.params.source === 't3') {
        await waitForVisibilityOf(mspFilterPage.certifiedUsedToggle, 'Certified Used Toggle');
        await mspFilterPage.certifiedUsedToggle.click();
    }
    return vlpFilterPage.appCard.first();
}

export async function getUsedVehicleCardVlp() : Promise<ElementFinder> {
    await navigateToUsedSection();
    return vlpFilterPage.usedVehicleCards.first();
}

async function navigateToUsedSection() {
    await waitForVisibilityOf(mspFilterPage.usedVehicleFilter, 'Used Vehicle Filter');
    await mspFilterPage.usedVehicleFilter.click();
}