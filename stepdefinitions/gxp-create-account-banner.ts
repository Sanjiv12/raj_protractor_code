import { browser, by, element, ElementFinder, protractor } from "protractor"; 
import { Then, When } from "cucumber";
import { SavesPageRedesign } from "../pages/savesPageRedesign";
import { NavMenu } from "../pages/navMenu";
import { expect } from "chai";

let savesPage : SavesPageRedesign = new SavesPageRedesign();
let navMenu : NavMenu = new NavMenu();
let until = protractor.ExpectedConditions;

let MAX_TIME_WAIT = 10000;

