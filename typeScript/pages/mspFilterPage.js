"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MspFilterPage = void 0;
const protractor_1 = require("protractor");
class MspFilterPage {
    constructor() {
        //this.popUpClose = element(by.className('dg-close-x'));
        this.popUpClose = protractor_1.element(protractor_1.by.className('dg-mstc-close-x'));
        this.filtercheckBoxCar = protractor_1.element(protractor_1.by.id('mat-checkbox-1-input'));
        this.appCard = protractor_1.element.all(protractor_1.by.css("div.card-panel-content > app-card-container"));
        this.appCardPrice = protractor_1.element.all(protractor_1.by.css("div.card-panel-content > app-card-container div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"));
        this.filterClear = protractor_1.element(protractor_1.by.xpath("//div[@class='title-container']/div[@class='reset-button ng-star-inserted']"));
        this.filterMinPrice = protractor_1.element(protractor_1.by.css("div.filter-slider-inputs > div:nth-of-type(1) > .filter-slider-input"));
        this.filterMaxPrice = protractor_1.element(protractor_1.by.css("div.filter-slider-inputs > div:nth-of-type(2) > .filter-slider-input"));
        //this.filterMaxPrice= element(by.css("div.filter-slider-inputs > div:nth-of-type(2)"));
        this.filterPriceReset = protractor_1.element(protractor_1.by.css(".reset-button"));
        this.sortDropDown = protractor_1.element(protractor_1.by.css(".mat-form-field-infix"));
        this.sortPriceLowToHigh = protractor_1.element(protractor_1.by.id('mat-option-3')); //element(by.css("mat-option[ng-reflect-value='PriceLowToHigh'] > .mat-option-text > span"));
        this.pageHeader = protractor_1.element(protractor_1.by.css('.main-header-available'));
        this.appcardButton = protractor_1.element.all(protractor_1.by.xpath("//app-card-container//button[@class='secondary-button small']"));
        this.filterButton = protractor_1.element(protractor_1.by.cssContainingText('.tm-dropdown-nav-item-label', 'Last 30 days'));
        this.filterByStatusDropDown = protractor_1.element(protractor_1.by.css('filter-writeup-status tm-dropdown button'));
        this.filterPricedStatus = protractor_1.element(protractor_1.by.cssContainingText(".tm-dropdown-nav-item-label", ' Write-up Priced '));
        this.filterByTypeDropdown = protractor_1.element(protractor_1.by.css('filter-purchase-type tm-dropdown button'));
        this.filterFinanceType = protractor_1.element(protractor_1.by.cssContainingText('.tm-dropdown-nav-item-label', ' Finance '));
        this.getGridNavigate = protractor_1.element.all(protractor_1.by.css("tm-grid section ul li tm-grid-cell tm-grid-image tm-html div"));
        this.assertionCheck = protractor_1.element.all(protractor_1.by.css("writeup-detail-header span a"));
        this.aprFirstRowValue = protractor_1.$("div[id='selectedRate0']");
        this.goButton = protractor_1.element(protractor_1.by.css('.btn-calculate-button tm-button button'));
        this.incentiveValue = protractor_1.$("div[id='updatedAmountAs0']");
        this.pricingGridHeaderText = protractor_1.element(protractor_1.by.css('.writeup-detail-rp-pricing-grid-title'));
        this.incentiveHeader = protractor_1.element(protractor_1.by.css('.wrapper-header'));
        this.initialAprValue = '';
        this.addedAprValue = '';
        this.writeUpDetailHeaderActiveTab = protractor_1.element(protractor_1.by.className('writeUp-detail-title-panel-container-item active ng-star-inserted'));
        this.contactDealerLink = protractor_1.element(protractor_1.by.className('contact-us text-underscore-black-link'));
        this.contactDealerModal = protractor_1.element(protractor_1.by.className('contactDealer-container ng-star-inserted'));
        this.contactDealerModalFirstName = protractor_1.element(protractor_1.by.xpath('//span[@class="customer-name-field"]/con-textfield[1]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.contactDealerModalLastName = protractor_1.element(protractor_1.by.xpath('//span[@class="customer-name-field"]/con-textfield[2]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.contactDealerModalEmail = protractor_1.element(protractor_1.by.css("input[type='email']"));
        this.contactDealerModalPhone = protractor_1.element(protractor_1.by.css("input[type='tel']"));
        this.contactDealerModalSendBtn = protractor_1.element(protractor_1.by.xpath('//div[@class="customer-submit"]/button'));
        this.contactDealerModalConf = protractor_1.element(protractor_1.by.className('contactDealer-container ng-star-inserted'));
        this.contactDealerModalreturnToPage = protractor_1.element(protractor_1.by.className("return_page"));
    }
}
exports.MspFilterPage = MspFilterPage;
