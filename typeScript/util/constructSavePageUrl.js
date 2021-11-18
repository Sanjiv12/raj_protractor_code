"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructSavePageUrl = void 0;
const protractor_1 = require("protractor");
function constructSavePageUrl() {
    const savesUrl = protractor_1.browser.params.url.replace('inventory', 'saves');
    return savesUrl + '?dealerCd=' + protractor_1.browser.params.dealerCd + '&source=' + protractor_1.browser.params.source;
}
exports.constructSavePageUrl = constructSavePageUrl;
