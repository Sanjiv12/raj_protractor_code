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
exports.waitForVisibilityOf = void 0;
const protractor_1 = require("protractor");
const MAX_TIME_WAIT = 100000;
const until = protractor_1.protractor.ExpectedConditions;
function waitForVisibilityOf(pageProperty, propertyName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.driver.wait(until.visibilityOf(pageProperty), MAX_TIME_WAIT, `${propertyName} took too long to appear in the DOM`);
    });
}
exports.waitForVisibilityOf = waitForVisibilityOf;
