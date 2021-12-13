import { AccountManagementPage } from "../pages/accountManagementPage";
import { CreateAccountPage } from "../pages/createAccountPage";
import { OwnersPage } from "../pages/ownersPage";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { SignInPage } from "../pages/signInPage";

const savesPage : SavesPageRedesign = new SavesPageRedesign();
const signInPage : SignInPage = new SignInPage();
const createAccountPage : CreateAccountPage = new CreateAccountPage();
const ownersPage : OwnersPage = new OwnersPage();
const accountManagementPage : AccountManagementPage = new AccountManagementPage(); 

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
    },
    {
        title: 'manage account',
        urlTest: /\/garage\/si\/pages\/settings/,
        pageDef: accountManagementPage.accountWrapper
    },
    {
        title: 'owners',
        urlTest: /\/owners/,
        pageDef: ownersPage.ownersHeaderLogo,
    }
];

export async function getPageInfo(title:string){
    const pageInfo = pages.find(page => page.title === title);
    return pageInfo
}