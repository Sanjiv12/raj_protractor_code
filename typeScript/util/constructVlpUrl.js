"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructVlpUrl = void 0;
// VLP URL construction function
const protractor_1 = require("protractor");
function constructVlpUrl() {
    return protractor_1.browser.params.url + '?dealerCd=' + protractor_1.browser.params.dealerCd + '&source=' + protractor_1.browser.params.source;
}
exports.constructVlpUrl = constructVlpUrl;
