// VLP URL construction function
import {browser} from "protractor";

export function constructVlpUrl() {
    return browser.params.url+'?dealerCd='+browser.params.dealerCd+'&source='+browser.params.source;
}
