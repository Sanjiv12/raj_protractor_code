"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VlpFilterPage = void 0;
const protractor_1 = require("protractor");
class VlpFilterPage {
    constructor() {
        this.modelDropDown = protractor_1.element(protractor_1.by.css(".model-name"));
        this.modelOption1 = protractor_1.element(protractor_1.by.xpath("//div[@class='checkbox-container']/div[4]//div[@class='mat-checkbox-inner-container']"));
        this.modelOption2 = protractor_1.element(protractor_1.by.xpath("//div[@class='checkbox-container']/div[7]//div[@class='mat-checkbox-inner-container']"));
        this.modelOption3 = protractor_1.element(protractor_1.by.xpath("//div[@class='checkbox-container']/div[8]//div[@class='mat-checkbox-inner-container']"));
        this.countText = protractor_1.element(protractor_1.by.className("main-header-available"));
        this.appCardVehName = protractor_1.element.all(protractor_1.by.css("div.card-panel-content > app-card-container .vehicle-name"));
        this.filterClear = protractor_1.element(protractor_1.by.css(".clear-filter"));
        this.filterOptionYear = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/mat-sidenav-container/mat-sidenav-content/div/div/div/section[1]/div/app-filter-panel/div/app-filter[2]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionYearText = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/mat-sidenav-container/mat-sidenav-content/div/div/div/section[1]/div/app-filter-panel/div/app-filter[2]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filtercheckBoxCar = protractor_1.element(protractor_1.by.id('mat-checkbox-1-input'));
        this.filterChip = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[2]/div/app-filter-selection-panel/div/div/div/div"));
        //this.filterChip = element(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[2]/div/app-filter-selection-panel/div/div[1]/div/div/span")) ;
        this.filterMinPrice = protractor_1.element(protractor_1.by.css(".ngx-slider-model-value"));
        this.filterMaxPrice = protractor_1.element(protractor_1.by.css(".ngx-slider-model-high"));
        this.appCardPrice = protractor_1.element.all(protractor_1.by.xpath("//app-card-container//div[@class='price']/div[@class='ng-star-inserted']"));
        this.filterOptionTrim = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/mat-sidenav-container/mat-sidenav-content/div/div/div/section[1]/div/app-filter-panel/div/app-filter[4]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        ///html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[4]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div
        this.filterOptionTrimText = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/mat-sidenav-container/mat-sidenav-content/div/div/div/section[1]/div/app-filter-panel/div/app-filter[4]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filterOptionEngine = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/mat-sidenav-container/mat-sidenav-content/div/div/div/section[1]/div/app-filter-panel/div/app-filter[7]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionEngineText = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/mat-sidenav-container/mat-sidenav-content/div/div/div/section[1]/div/app-filter-panel/div/app-filter[7]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.appCardVehDesc = protractor_1.element.all(protractor_1.by.css("div.card-panel-content > app-card-container .vehicle-desc"));
        this.filtercheckBoxTruck = protractor_1.element(protractor_1.by.xpath("//span[.='Trucks']"));
        this.filterCab = protractor_1.element(protractor_1.by.xpath("//p[.='Cab']"));
        this.filterBL = protractor_1.element(protractor_1.by.xpath("//p[.='Bed Length']"));
        this.filterOptionCab = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[9]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionCabText = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[9]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filterOptionBL = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[10]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionBLText = protractor_1.element.all(protractor_1.by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[10]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filterCabClear = protractor_1.element(protractor_1.by.xpath("//div[@class='reset-button ng-star-inserted']")); //element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[9]/app-filter-common/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span/mat-panel-description/div[1]'));
        this.filterYearClear = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[2]/app-filter-common/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span/mat-panel-description/div[1]'));
        this.modelDropDownClear = protractor_1.element(protractor_1.by.css('.clear-text'));
        this.sortDropDown = protractor_1.element(protractor_1.by.css(".mat-select-arrow"));
        this.sortPriceLowToHigh = protractor_1.element(protractor_1.by.css("mat-option[ng-reflect-value='PriceLowToHigh'] > .mat-option-text > span"));
        this.appCard = protractor_1.element.all(protractor_1.by.css("div.card-panel-content > app-card-container"));
        this.filterPriceReset = protractor_1.element(protractor_1.by.css(".reset-button"));
        this.unlockSavings = protractor_1.element.all(protractor_1.by.xpath('//app-card-container[1]//div[@class="text-underscore-link unlock-saving ng-star-inserted"]'));
        this.unlockSavingsModal = protractor_1.element(protractor_1.by.id('smart-price-modal-component'));
        this.unlockSavingsModalEmail = protractor_1.element(protractor_1.by.css("input[type='email']"));
        this.unlockSavingsModalZip = protractor_1.element(protractor_1.by.css("input[type='number']"));
        this.unlockSavingsModalFirstName = protractor_1.element(protractor_1.by.xpath('//span[@class="customer-name-field"]/con-textfield[1]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.unlockSavingsModalLastName = protractor_1.element(protractor_1.by.xpath('//span[@class="customer-name-field"]/con-textfield[2]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.unlockSavingsModalEmailError = protractor_1.element(protractor_1.by.css('con-textfield.email-form-field .mat-error'));
        this.unlockSavingsModalZipError = protractor_1.element(protractor_1.by.css('span.customer-zip-field .mat-error'));
        this.unlockSavingsModalRevealBtn = protractor_1.element(protractor_1.by.xpath('//div[@class="customer-submit"]/button'));
        this.unlockSavingsModalTitle = protractor_1.element(protractor_1.by.css('.unlock-price-modal-title'));
        this.unlockSavingsModalPrice = protractor_1.element(protractor_1.by.css('.unlock-vehicle-smart-price'));
        this.unlockSavingsModalreturnToPage = protractor_1.element(protractor_1.by.xpath('//div[@class="return-to-page"]/div[@class="text-button"]'));
        this.unlockSavingsModalSmartPriceTxt = protractor_1.element.all(protractor_1.by.css('.price-section'));
        this.unlockSavingsModalSmartPriceFilterTxt = protractor_1.element(protractor_1.by.css('.filter-price-sub-title'));
        this.vehicleSaveHeart = protractor_1.element.all(protractor_1.by.css('.save-icon'));
        this.vehicleSaveHeartActive = protractor_1.element(protractor_1.by.css('.dg-encircle.active'));
        this.tooltip = protractor_1.element(protractor_1.by.css('.dg-tooltip'));
    }
}
exports.VlpFilterPage = VlpFilterPage;
