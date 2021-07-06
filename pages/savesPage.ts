import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class SavesPage {
    public standaloneContainer : ElementFinder;

    public sideBar : ElementFinder;
    public sideBarHeader : ElementFinder;
    public sideBarHeaderLinks : ElementFinder;
    public sideBarLinks : ElementFinder;
    public dealsLink : ElementFinder;
    public savesLink : ElementFinder;
    public ownersLink : ElementFinder;
    public financialLink : ElementFinder;

    public itemsContainer : ElementFinder;
    public welcomeHeader : ElementFinder;
    public smartpathProgressTracker : ElementFinder;
    public stickyHeader : ElementFinder;
    public temporarySavesBanner : ElementFinder;
    public divisionLines : ElementArrayFinder;

    public inventorySection : ElementFinder;
    public inventorySectionHeader : ElementFinder;
    public inventorySectionSubHeader : ElementFinder;
    public inventoryPaginator : ElementFinder;
    public inventoryButton : ElementFinder;
    public inventoryCards : ElementArrayFinder;

    public viewEstimatesButton : ElementArrayFinder;
    public estimatesCards : ElementArrayFinder;

    public offerSection : ElementFinder;
    public offerSectionHeader : ElementFinder;
    public offerSectionSubHeader : ElementFinder;
    public offerButton : ElementFinder;
    public offerCards : ElementArrayFinder;
    
    public searchSection : ElementFinder;
    public searchSectionHeader : ElementFinder;
    public searchSectionSubHeader : ElementFinder;
    public searchButton : ElementFinder;
    public searchCards : ElementArrayFinder;
    
    public buildSection : ElementFinder;
    public buildSectionHeader : ElementFinder;
    public buildSectionSubHeader : ElementFinder;
    public buildButton : ElementFinder;
    public buildCards : ElementArrayFinder;
    public MSRP : ElementFinder; 
    public vehicleVin : ElementFinder; 
    public vehicleName : ElementFinder; 

    constructor() {
        // Top Level Container
        this.standaloneContainer = element(by.xpath('//*[@id="dg-standalone-container"]'));

        // Side Bar Container
        this.sideBar = element(by.xpath('//*[@id="dg-nav-sidebar"]'));
        this.sideBarHeader = element(by.xpath('//*[@id="dg-nav-sidebar-header"]'))
        this.sideBarHeaderLinks = element(by.xpath('//*[@id="dg-top-sidebar-links-container"]'))
        this.sideBarLinks = element(by.xpath('//*[@id="dg-nav-sidebar-links"]'))
        this.dealsLink = element(by.xpath('//*[@id="dg-nav-sidebar-my-deals"]'))
        this.savesLink = element(by.xpath('//*[@id="dg-nav-sidebar-saves"]'))
        this.ownersLink = element(by.xpath('//*[@id="dg-nav-sidebar-owners"]'))
        this.financialLink = element(by.xpath('//*[@id="dg-nav-sidebar-financial"]'))

        // Main Page Container
        this.itemsContainer = element(by.xpath('//*[@id="dg-items-page"]'));
        this.welcomeHeader = element(by.xpath('//*[@id="dg-welcome-main"]/div[1]'));
        this.smartpathProgressTracker = element(by.xpath('//*[@id="dg-progress-tracker"]'));
        this.stickyHeader = element(by.xpath('//*[@id="dg-sticky-header"]'));
        this.temporarySavesBanner = element(by.xpath('//*[@id="dg-create-account-banner"]'));
        this.divisionLines = element.all(by.xpath('//*[@id="dg-list-view"]/hr'));
        
        // Inventory Section
        this.inventorySection = element(by.xpath('//*[@id="dg-section-inv"]'));
        this.inventorySectionHeader = element(by.xpath('//*[@id="dg-section-inv"]/div/div[1]'));
        this.inventorySectionSubHeader = element(by.xpath('//*[@id="dg-section-inv"]/div/div[2]/div[1]'));
        this.inventoryPaginator = element(by.xpath('//*[@id="dg-section-inv"]/div/div[2]/div[2]'));
        this.inventoryButton = element(by.xpath('//*[@id="dg-inv-button"]'));
        this.inventoryCards = element.all(by.css("#dg-section-inv .dg-card-wrapper"));
        
        // Estimates
        this.viewEstimatesButton = element.all(by.css("#dg-content-frame .dg-estimates-cta .dg-estimates-link-btn"));
        this.estimatesCards = element.all(by.className('dg-estimate'));

        // Offer Section
        this.offerSection = element(by.xpath('//*[@id="dg-section-offer"]'));
        this.offerSectionHeader = element(by.xpath('//*[@id="dg-section-offer"]/div/div[1]'));
        this.offerSectionSubHeader = element(by.xpath('//*[@id="dg-section-offer"]/div/div[2]/div[1]'));
        this.offerButton = element(by.xpath('//*[@id="dg-offer-button"]'));
        this.offerCards = element.all(by.css("#dg-section-offer .dg-card-wrapper"));
        
        // Search Section
        this.searchSection = element(by.xpath('//*[@id="dg-section-search"]'));
        this.searchSectionHeader = element(by.xpath('//*[@id="dg-section-search"]/div/div[1]'));
        this.searchSectionSubHeader = element(by.xpath('//*[@id="dg-section-search"]/div/div[2]/div[1]'));
        this.searchButton = element(by.xpath('//*[@id="dg-search-button"]'));
        this.searchCards = element.all(by.css("#dg-section-search .dg-card-wrapper"));
        
        // Build Section
        this.buildSection = element(by.xpath('//*[@id="dg-section-build"]'));
        this.buildSectionHeader = element(by.xpath('//*[@id="dg-section-build"]/div[2]/div[1]'));
        this.buildSectionSubHeader = element(by.xpath('//*[@id="dg-section-build"]/div[2]/div[2]/div[1]'));
        this.buildButton = element(by.xpath('//*[@id="dg-build-button"]'));
        this.buildCards = element.all(by.css("#dg-section-build .dg-card-wrapper"));


        this.vehicleName = element(by.className('dg-vehicle-title'));
        this.MSRP = element(by.className('dg-item-val'));
        this.vehicleVin = element(by.className('dg-vin'));

    }
}