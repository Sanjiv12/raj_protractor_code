import { browser } from "protractor";

export function constructSavePageUrl(url? : string) {
    const useUrl: string = url || browser.params.url;
    console.log(useUrl);
    const savesUrl = useUrl.replace('inventory', 'saves');
    return savesUrl+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source;
}