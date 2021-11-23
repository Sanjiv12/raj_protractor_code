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
exports.getPageInfo = void 0;
const createAccountPage_1 = require("../pages/createAccountPage");
const savesPageRedesign_1 = require("../pages/savesPageRedesign");
const signInPage_1 = require("../pages/signInPage");
const savesPage = new savesPageRedesign_1.SavesPageRedesign();
const signInPage = new signInPage_1.SignInPage();
const createAccountPage = new createAccountPage_1.CreateAccountPage();
const pages = [
    {
        title: 'saves',
        urlTest: /\/saves/,
        pageDef: savesPage.savePageTitle
    },
    {
        title: 'login',
        urlTest: /account.toyota.com/,
        pageDef: signInPage.signInPageGrid
    },
    {
        title: 'create account',
        urlTest: /register/,
        pageDef: createAccountPage.createAccountEmailForm
    }
];
function getPageInfo(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageInfo = pages.find(page => page.title === title);
        return pageInfo;
    });
}
exports.getPageInfo = getPageInfo;
