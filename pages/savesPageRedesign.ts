import { element, by, WebElement } from "protractor";

export class SavesPageRedesign {
    standaloneContainer = element(by.xpath('//*[@id="dg-standalone-container"]'));

    savePageHeader = element(by.xpath('//*[@id="dg-saves-page-header"]'));
    savePageTitle = element(by.xpath('//*[@id="dg-header-my-saves-container"]'));
    savePageHeaderLogo = element(by.xpath('//*[@id="dg-header-logo"]'));

    public createAccountBanner = element(by.xpath('//*[@id="dg-create-account-banner"]'));
    public createAccountBannerMessage = element(by.xpath('//*[@id="dg-create-account-banner-message"]'));
    public createAccountBannerLinks = element(by.xpath('//*[@id="dg-create-account-banner-message"]')).all(by.xpath('//a[@class="dg-create-account-banner-link"]'));
    public createAccountBannerX = element(by.xpath('//*[@id="dg-create-account-banner-close-button"]'));

    public sideBar = element(by.xpath('//*[@id="dg-ui-nav-sidebar"]'));
    public sideBarHeader = element(by.xpath('//*[@id="dg-nav-sidebar-header"]'));
    public sideBarLinks = element(by.xpath('//*[@id="dg-nav-sidebar-links"]'));
    public sideBarSavesLink = element(by.xpath('//*[@id="dg-nav-sidebar-saves"]'));
    public sideBarVehiclesLink = element(by.xpath('//*[@id="dg-nav-sidebar-owners"]'));
    public sideBarBottomLinks = element(by.xpath('//*[@id="dg-bottom-sidebar-links-container"]'));
    public sideBarCreateAccountLink = element(by.xpath('//*[@id="dg-nav-sidebar-manage-account"]'));
    public sideBarManageAccountLink = this.sideBarCreateAccountLink;
    public sideBarSignInLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-in"]'));
    public sideBarSignOutLink = element(by.xpath('//*[@id="dg-nav-sidebar-log-out"]'));

    public searchInventoryButton = element(by.xpath('(//button[@class="dg-button"])[1]'));
    public searchMoreInventoryButton = element(by.xpath('(//button[@data-bdd-id="search-more-inventory-button"]'));
    public savedInventorySection = element(by.xpath('(//div[@data-bdd-id="inventory-section"])'));
    public savedInventoryCards = this.savedInventorySection.all(by.xpath('//div[@data-bdd-id="inventory-card"]'));
    public savedInventoryCardsNew = this.savedInventorySection.all(by.xpath('//div[@data-bdd-id="inventory-card" and @data-bdd-sales-class="new"]'));
    public savedInventoryCardsCpo = this.savedInventorySection.all(by.xpath('//div[@data-bdd-id="inventory-card" and @data-bdd-sales-class="cpo"]'));
    public savedInventoryCardsUsed = this.savedInventorySection.all(by.xpath('//div[@data-bdd-id="inventory-card" and @data-bdd-sales-class="used"]'));

    public savedInventoryCard = this.savedInventoryCards.get(0);
    public savedInventoryCardImage = this.savedInventoryCard.element(by.xpath('.//img[@alt="Vehicle Image"]'));
    public savedInventoryCardSaveHeart = this.savedInventoryCard.element(by.xpath('(.//*[name()="svg"][@class="dg-inventory-card__heart"])'));
    public savedInventoryVehicleDetails = this.savedInventoryCard.element(by.xpath('(.//a[normalize-space()="Vehicle Details"])'));
    public savedInventoryVinContainer = this.savedInventoryCard.element(by.xpath('.//div[@class="dg-inventory-card__vin"]'));
    public savedInventoryRecentlyViewed = this.savedInventoryCard.element(by.xpath('(.//div[@class="dg-inventory-card__heart-recently-viewed-text"])'));
    // Inventory Card Overlay
    public savedInventoryRemoveButton = this.savedInventoryCard.element(by.xpath('(..//button[normalize-space()="Remove"])[1]'));
    
    public detailsModalHeader = element(by.xpath('//div[@data-bdd-id="vehicle-details-header"]'));
    public detailsModalTitle = this.detailsModalHeader.element(by.xpath('.//div[@class="dg-details-header-title"]'));

    public getVehicleCards = async (salesClass?: string) : Promise<WebElement[]> => {
        let inventoryCards : WebElement[];
        if(salesClass){
            if(salesClass === 'new'){
                inventoryCards = await this.savedInventoryCardsNew.getWebElements();
            } else if (salesClass === 'cpo') {
                inventoryCards = await this.savedInventoryCardsCpo.getWebElements();
            } else if (salesClass === 'used') {
                inventoryCards = await this.savedInventoryCardsUsed.getWebElements();
            }
        } else {
            inventoryCards = await this.savedInventoryCards.getWebElements();
        }
        return inventoryCards;
    }

    public getVehicleCardVins = async () : Promise<string[]> => {
        const inventoryCards = await this.getVehicleCards();
        const inventoryCardVins = Promise.all(inventoryCards.map(async (card) => {
            return await card.findElement(this.savedInventoryVinContainer.locator()).getText();
        }));
        return inventoryCardVins;
    };

    public isVinOnSavesPage = async (vin: string) : Promise<boolean> => {
        const savePageVins = await this.getVehicleCardVins();
        return savePageVins.includes(vin);
    }

    public isAtLeastOneVehicleSaved = async(salesClass? : string) => {
        const inventoryCards = await this.getVehicleCards(salesClass);
        return inventoryCards.length > 0;
    }
};
