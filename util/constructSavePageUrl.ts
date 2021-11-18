import { browser } from "protractor";

export function constructSavePageUrl() {
    const savesUrl = browser.params.url.replace('inventory', 'saves');
    return savesUrl+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source;
}