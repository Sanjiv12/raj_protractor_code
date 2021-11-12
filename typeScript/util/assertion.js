"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assertion = void 0;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
class Assertion {
    static get expect() {
        chai.use(chaiAsPromised);
        return chai.expect;
    }
}
exports.Assertion = Assertion;
