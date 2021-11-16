"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavesPage = void 0;
const protractor_1 = require("protractor");
class SavesPage {
    constructor() {
        // Top Level Container
        this.standaloneContainer = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-standalone-container"]'));
        // Side Bar Container
        this.sideBar = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar"]'));
        this.sideBarHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-header"]'));
        this.sideBarHeaderLinks = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-top-sidebar-links-container"]'));
        this.sideBarLinks = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-links"]'));
        this.dealsLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-my-deals"]'));
        this.savesLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-saves"]'));
        this.ownersLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-owners"]'));
        this.financialLink = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-nav-sidebar-financial"]'));
        // Main Page Container
        this.itemsContainer = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-items-page"]'));
        this.welcomeHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-welcome-main"]/div[1]'));
        this.smartpathProgressTracker = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-progress-tracker"]'));
        this.stickyHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-sticky-header"]'));
        this.temporarySavesBanner = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-create-account-banner"]'));
        this.divisionLines = protractor_1.element.all(protractor_1.by.xpath('//*[@id="dg-list-view"]/hr'));
        // Inventory Section
        this.inventorySection = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-inv"]'));
        this.inventorySectionHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-inv"]/div/div[1]'));
        this.inventorySectionSubHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-inv"]/div/div[2]/div[1]'));
        this.inventoryPaginator = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-inv"]/div/div[2]/div[2]'));
        this.inventoryButton = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-inv-button"]'));
        this.inventoryCards = protractor_1.element.all(protractor_1.by.css("#dg-section-inv .dg-card-wrapper"));
        // Estimates
        this.viewEstimatesButton = protractor_1.element.all(protractor_1.by.css("#dg-content-frame .dg-estimates-cta .dg-estimates-link-btn"));
        this.estimatePaymentsButton = protractor_1.element.all(protractor_1.by.css("#dg-content-frame .dg-estimates-cta-no-estimates"));
        this.estimateFrames = protractor_1.element.all(protractor_1.by.css(".dg-estimate-frame"));
        this.estimatesCards = protractor_1.element.all(protractor_1.by.className('dg-estimate'));
        this.estimateSaveHearts = protractor_1.element.all(protractor_1.by.css(".dg-heart-icon"));
        // Offer Section
        this.offerSection = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-offer"]'));
        this.offerSectionHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-offer"]/div/div[1]'));
        this.offerSectionSubHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-offer"]/div/div[2]/div[1]'));
        this.offerButton = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-offer-button"]'));
        this.offerCards = protractor_1.element.all(protractor_1.by.css("#dg-section-offer .dg-card-wrapper"));
        // Search Section
        this.searchSection = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-search"]'));
        this.searchSectionHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-search"]/div/div[1]'));
        this.searchSectionSubHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-search"]/div/div[2]/div[1]'));
        this.searchButton = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-search-button"]'));
        this.searchCards = protractor_1.element.all(protractor_1.by.css("#dg-section-search .dg-card-wrapper"));
        // Build Section
        this.buildSection = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-build"]'));
        this.buildSectionHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-build"]/div[2]/div[1]'));
        this.buildSectionSubHeader = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-section-build"]/div[2]/div[2]/div[1]'));
        this.buildButton = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-build-button"]'));
        this.buildCards = protractor_1.element.all(protractor_1.by.css("#dg-section-build .dg-card-wrapper"));
        this.vehicleName = protractor_1.element(protractor_1.by.className('dg-vehicle-title'));
        this.MSRP = protractor_1.element(protractor_1.by.className('dg-item-val'));
        this.vehicleVin = protractor_1.element(protractor_1.by.className('dg-vin'));
        this.saveHeart = protractor_1.element(protractor_1.by.className('dg-save-heart'));
        this.confirmRemove = protractor_1.element(protractor_1.by.className('dg-delete-overlay-button-container'));
        this.dgInvCard = protractor_1.element(protractor_1.by.className('dg-inv'));
        this.saveShares = protractor_1.element(protractor_1.by.id('dg-start-sharing-button'));
        this.firstNameModal = protractor_1.element(protractor_1.by.id('dg-contact-first-name'));
        this.lastNameModal = protractor_1.element(protractor_1.by.id('dg-contact-last-name'));
        this.zipCodeModal = protractor_1.element(protractor_1.by.id('dg-contact-zip'));
        this.emailModal = protractor_1.element(protractor_1.by.id('dg-contact-email'));
        this.submitModal = protractor_1.element(protractor_1.by.id('dg-contact-submit'));
        this.successModalText = protractor_1.element(protractor_1.by.className('dg-modal-left-title'));
    }
}
exports.SavesPage = SavesPage;
