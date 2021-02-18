import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class MspFilterPage {

    public popUpClose : ElementFinder;
    public filtercheckBoxCar : ElementFinder;
    public appCard : ElementArrayFinder;
    public appCardPrice : ElementArrayFinder;
    public filterClear : ElementFinder;
    public filterMinPrice : ElementFinder;
    public filterMaxPrice : ElementFinder;
    public filterPriceReset : ElementFinder;
    public sortDropDown : ElementFinder;
    public sortPriceLowToHigh : ElementFinder;
    public pageHeader : ElementFinder;
    public appcardButton : ElementArrayFinder;

    public filterButton : ElementFinder;
    public filterByStatusDropDown: ElementFinder;
    public filterPricedStatus: ElementFinder;
    public filterByTypeDropdown: ElementFinder;
    public filterFinanceType: ElementFinder;
    public getGridNavigate : ElementArrayFinder;
    public assertionCheck : ElementArrayFinder;
    public aprFirstRowValue: ElementFinder;
    public goButton: ElementFinder;
    public incentiveValue: ElementFinder;
    public pricingGridHeaderText: ElementFinder;
    public incentiveHeader: ElementFinder;
    public initialAprValue: string;
    public addedAprValue: string;
    public writeUpDetailHeaderActiveTab: ElementFinder;

    constructor() {

        //this.popUpClose = element(by.className('dg-close-x'));
        this.popUpClose = element(by.className('dg-mstc-close-x'));
        this.filtercheckBoxCar = element(by.id('mat-checkbox-1-input'));
        this.appCard = element.all(by.css("div.card-panel-content > app-card-container"));
        this.appCardPrice = element.all(by.css("div.card-panel-content > app-card-container div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"));
        this.filterClear = element(by.xpath("//div[@class='title-container']/div[@class='reset-button ng-star-inserted']"));
        this.filterMinPrice = element(by.css("div.filter-slider-inputs > div:nth-of-type(1) > .filter-slider-input"));
        this.filterMaxPrice= element(by.css("div.filter-slider-inputs > div:nth-of-type(2) > .filter-slider-input"));
        //this.filterMaxPrice= element(by.css("div.filter-slider-inputs > div:nth-of-type(2)"));
        this.filterPriceReset = element(by.css(".reset-button"));
        this.sortDropDown = element(by.css(".mat-form-field-infix"));
        this.sortPriceLowToHigh = element(by.xpath('/html/body/div[4]/div[2]/div/div/div/mat-option[3]/span/span')); //element(by.css("mat-option[ng-reflect-value='PriceLowToHigh'] > .mat-option-text > span"));
        
        this.pageHeader = element(by.css('.main-header-available'));
        this.appcardButton = element.all(by.xpath("//app-card-container//button[@class='secondary-button small']"));

        this.filterButton = element(by.cssContainingText('.tm-dropdown-nav-item-label','Last 30 days'));
        this.filterByStatusDropDown = element(by.css('filter-writeup-status tm-dropdown button'));
        this.filterPricedStatus = element(by.cssContainingText(".tm-dropdown-nav-item-label", ' Write-up Priced '));
        this.filterByTypeDropdown = element(by.css('filter-purchase-type tm-dropdown button'));
        this.filterFinanceType = element(by.cssContainingText('.tm-dropdown-nav-item-label', ' Finance '));
        this.getGridNavigate = element.all(by.css("tm-grid section ul li tm-grid-cell tm-grid-image tm-html div"));
        this.assertionCheck = element.all(by.css("writeup-detail-header span a"));
        this.aprFirstRowValue = $("div[id='selectedRate0']");
        this.goButton = element(by.css('.btn-calculate-button tm-button button'));
        this.incentiveValue = $("div[id='updatedAmountAs0']");
        this.pricingGridHeaderText = element(by.css('.writeup-detail-rp-pricing-grid-title'));
        this.incentiveHeader = element(by.css('.wrapper-header'));
        this.initialAprValue = '';
        this.addedAprValue = '';
        this.writeUpDetailHeaderActiveTab = element(by.className('writeUp-detail-title-panel-container-item active ng-star-inserted'));
    }
}