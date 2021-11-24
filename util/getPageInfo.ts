import { CreateAccountPage } from "../pages/createAccountPage";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { SignInPage } from "../pages/signInPage";

const savesPage : SavesPageRedesign = new SavesPageRedesign();
const signInPage : SignInPage = new SignInPage();
const createAccountPage : CreateAccountPage = new CreateAccountPage();

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
        urlTest: /\/garage\/si\/pages\/settings/
    },
    {
        title: 'vehicles',
        urlTest: /\/owners/
    }
];

export async function getPageInfo(title:string){
    const pageInfo = pages.find(page => page.title === title);
    return pageInfo
}