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
    public salesClassFilters : ElementArrayFinder;
    public newVehicleFilter : ElementFinder;
    public usedVehicleFilter : ElementFinder;
    public certifiedUsedToggle : ElementFinder;

    public pageHeader : ElementFinder;
    public appcardButton : ElementArrayFinder;
    public dropdownAfterSelect : ElementFinder

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
    public contactDealerLink: ElementFinder;
    public contactDealerModal: ElementFinder;
    public contactDealerModalFirstName: ElementFinder;
    public contactDealerModalLastName: ElementFinder;
    public contactDealerModalEmail: ElementFinder;
    public contactDealerModalPhone: ElementFinder;
    public contactDealerModalSendBtn: ElementFinder;
    public contactDealerModalConf: ElementFinder;
    public contactDealerModalreturnToPage: ElementFinder;    
    public filterLabel: ElementFinder;  
    public vehiclesList:ElementArrayFinder;
    public filtersButtonMobile: ElementFinder;
    public applyfiltersMobile:ElementFinder;
    public selectmodel:ElementFinder;
    public filterMob:ElementFinder;
    public filterpricemob: ElementFinder;
    public filterclosemob: ElementFinder;
    constructor() {

        //this.popUpClose = element(by.className('dg-close-x'));
        this.popUpClose = element(by.className('dg-mstc-close-x'));
    //  this.filtercheckBoxCar = element(by.id('mat-checkbox-1-input'));
        this.filtercheckBoxCar = element(by.xpath('//span[text()="Cars & Minivan"]/parent::span/preceding-sibling::span/input'));
    //  this.appCard = element.all(by.css("div.card-panel-content > app-card-container"));
        this.appCard = element.all(by.xpath('//ng-component//div//div[contains(text(),"Estimate Payment")]'));
        this.appCardPrice = element.all(by.css("div.card-panel-content > app-card-container div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"));
        this.filterClear = element(by.xpath("//div[@class='title-container']/div[@class='reset-button ng-star-inserted']"));
        this.filterMinPrice = element(by.css("div.filter-slider-inputs > div:nth-of-type(1) > .filter-slider-input"));
        this.filterMaxPrice= element(by.css("div.filter-slider-inputs > div:nth-of-type(2) > .filter-slider-input"));
    //  this.filterMaxPrice= element(by.css("div.filter-slider-inputs > div:nth-of-type(2)"));
        this.filterPriceReset = element(by.css(".reset-button"));
      //  this.sortDropDown = element(by.css(".mat-form-field-infix"));
    this.sortDropDown = element(by.css("div.mat-form-field-infix"));
    //   this.sortDropDown = element(by.xpath('//span[@class="mat-option-text"]'));
    //  this.sortPriceLowToHigh = element(by.id('mat-option-3')); //element(by.css("mat-option[ng-reflect-value='PriceLowToHigh'] > .mat-option-text > span"));
	    this.sortPriceLowToHigh = element(by.xpath('//span[text()="Sort by Price: Low to High"]')); 
        this.salesClassFilters = element.all(by.xpath('//button[contains(@class, "mat-button-toggle-button")]'));
        this.newVehicleFilter = this.salesClassFilters.get(0);
        this.usedVehicleFilter = this.salesClassFilters.get(1);
        this.certifiedUsedToggle = element(by.xpath('//div[contains(@class, "mat-slide-toggle-bar")]'));

        
        this.pageHeader = element(by.css('.main-header-available'));
        this.appcardButton = element.all(by.xpath("//app-card-container//button[@class='secondary-button small']"));
	this.dropdownAfterSelect = element(by.xpath('//span[contains(@class,"mat-select-min") and text()="Sort by Price: Low to High"]'));

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

        this.contactDealerLink = element(by.className('contact-us text-underscore-black-link'));
        this.contactDealerModal = element(by.className('contactDealer-container ng-star-inserted'));

        this.contactDealerModalFirstName = element(by.xpath('//span[@class="customer-name-field"]/con-textfield[1]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.contactDealerModalLastName = element(by.xpath('//span[@class="customer-name-field"]/con-textfield[2]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.contactDealerModalEmail = element(by.css("input[type='email']"));
        this.contactDealerModalPhone = element(by.css("input[type='tel']"));
        this.contactDealerModalSendBtn = element(by.xpath('//div[@class="customer-submit"]/button'));
        this.contactDealerModalConf = element(by.className('contactDealer-container ng-star-inserted'));
        this.contactDealerModalreturnToPage = element(by.xpath('//button[@class="primary-button large"][normalize-space()="Return to Page"]'));
	this.filterLabel = element(by.xpath('//div[text()="Filters"]'));
	this.vehiclesList = element.all(by.xpath('//div[contains(@class,"vehicle-name")]'));
    this.filtersButtonMobile=element(by.xpath('//div//button[@class="secondary-button small filter-button-sm ng-star-inserted"][contains(text()," Filters ")]'));
        this.applyfiltersMobile=element(by.xpath('//div//button[@class="primary-button large ng-tns-c133-34"][contains(text()," Apply Filters ")]'));
        this.selectmodel=element(by.xpath('(//app-card-container//div[@class="vehicle-image"])[1]'));
        this.filterMob=element(by.xpath('//button[@class="secondary-button small filter-btn"]'));
        this.filterpricemob=element(by.xpath('(//mat-panel-title[contains(@class,"mat-expansion-panel-header")])[3]'));
        this.filterclosemob=element(by.xpath('(//div[contains(@class,"close-wrapper")])[2]'));
    
    }
}
