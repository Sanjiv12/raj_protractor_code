"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("./Constants");
const { BeforeAll, Before, After, AfterAll, Status, defineSupportCode, setDefaultTimeout } = require("cucumber");
const protractor_1 = require("protractor");
const constructVlpUrl_1 = require("./constructVlpUrl");
BeforeAll({ timeout: Constants_1.WAIT_TIMES.TEN_SECONDS }, () => __awaiter(void 0, void 0, void 0, function* () {
    setDefaultTimeout(Constants_1.WAIT_TIMES.MAX_DURATION);
}));
Before(() => __awaiter(void 0, void 0, void 0, function* () {
    const vehicleListPage = constructVlpUrl_1.constructVlpUrl();
    yield protractor_1.browser.driver.manage().deleteAllCookies();
    yield protractor_1.browser.get(Constants_1.TCOM_WEBSITE);
    yield protractor_1.browser.driver.manage().deleteAllCookies();
    yield protractor_1.browser.get(vehicleListPage);
    yield protractor_1.browser.driver.manage().deleteAllCookies();
}));
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
