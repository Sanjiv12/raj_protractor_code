import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class VlpFilterPage {

    public modelDropDown : ElementFinder;
    public modelOption1 : ElementFinder;
    public modelOption2 : ElementFinder;
    public modelOption3 : ElementFinder;
    public countText : ElementFinder;
    public appCardVehName : ElementArrayFinder;
    public filterClear : ElementFinder;
    public filterOptionYear : ElementArrayFinder;
    public filterOptionYearText : ElementArrayFinder;
    public filtercheckBoxCar : ElementFinder;
    public filterChip : ElementArrayFinder;
    public appCardPrice : ElementArrayFinder;
    public filterMinPrice : ElementFinder;
    public filterMaxPrice : ElementFinder;
    public filterOptionTrim : ElementArrayFinder;
    public filterOptionTrimText : ElementArrayFinder;    
    public filterOptionEngine : ElementArrayFinder;
    public filterOptionEngineText : ElementArrayFinder;
    public appCardVehDesc : ElementArrayFinder;
    public filtercheckBoxTruck : ElementFinder;
    public filterCab : ElementFinder;
    public filterBL : ElementFinder;
    public filterOptionCab : ElementArrayFinder;
    public filterOptionCabText : ElementArrayFinder;
    public filterOptionBL : ElementArrayFinder; 
    public filterOptionBLText : ElementArrayFinder; 
    public filterCabClear : ElementFinder;
    public filterYearClear : ElementFinder;
    public modelDropDownClear : ElementFinder;
    public sortDropDown : ElementFinder;

    public appCard : ElementArrayFinder;
    public filterPriceReset : ElementFinder;
    public sortPriceLowToHigh : ElementFinder;
    



    constructor() {
        this.modelDropDown = element(by.css(".model-name"));
        this.modelOption1 = element(by.xpath("//div[@class='checkbox-container']/div[4]//div[@class='mat-checkbox-inner-container']"));
        this.modelOption2 = element(by.xpath("//div[@class='checkbox-container']/div[7]//div[@class='mat-checkbox-inner-container']"));
        this.modelOption3 = element(by.xpath("//div[@class='checkbox-container']/div[8]//div[@class='mat-checkbox-inner-container']"));
        this.countText = element(by.css(".main-header-available"));
        this.appCardVehName = element.all(by.css("div.card-panel-content > app-card-container .vehicle-name"));
        this.filterClear = element(by.css(".clear-filter"));
        this.filterOptionYear = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[2]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionYearText = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[2]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filtercheckBoxCar = element(by.id('mat-checkbox-1-input'));
        this.filterChip = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[2]/div/app-filter-selection-panel/div/div/div/div"));
        //this.filterChip = element(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[2]/div/app-filter-selection-panel/div/div[1]/div/div/span")) ;
        this.filterMinPrice = element(by.css(".ngx-slider-model-value"));
        this.filterMaxPrice = element(by.css(".ngx-slider-model-high"));
        this.appCardPrice = element.all(by.xpath("//app-card-container//div[@class='price']/div[@class='ng-star-inserted']"));
        this.filterOptionTrim = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[4]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionTrimText = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[4]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));   
        this.filterOptionEngine = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[7]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionEngineText = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[7]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));   
        this.appCardVehDesc = element.all(by.css("div.card-panel-content > app-card-container .vehicle-desc"));
        this.filtercheckBoxTruck = element(by.xpath("//span[.='Trucks']"));
        this.filterCab = element(by.xpath("//p[.='Cab']"));
        this.filterBL = element(by.xpath("//p[.='Bed Length']"));
        this.filterOptionCab = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[9]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionCabText = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[9]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filterOptionBL = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[10]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/div"));
        this.filterOptionBLText = element.all(by.xpath("/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[10]/app-filter-common/div/mat-accordion/mat-expansion-panel/div/div/div/con-checkbox/div/mat-checkbox/label/span"));
        this.filterCabClear = element(by.xpath("//div[@class='reset-button ng-star-inserted']"));//element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[9]/app-filter-common/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span/mat-panel-description/div[1]'));
        this.filterYearClear = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/vl-vehicle-list/div/div/div/section[1]/div/app-filter-panel/div/app-filter[2]/app-filter-common/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span/mat-panel-description/div[1]'));
        this.modelDropDownClear = element(by.css('.clear-text')); 
        this.sortDropDown = element(by.css(".mat-select-arrow")); 
        this.sortPriceLowToHigh = element(by.css("mat-option[ng-reflect-value='PriceLowToHigh'] > .mat-option-text > span"));
        
        this.appCard = element.all(by.css("div.card-panel-content > app-card-container"));
        this.filterPriceReset = element(by.css(".reset-button"));
        
    }
}