import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class VdpPage {
    public loadingContainer : ElementFinder;

    public cashDown : ElementFinder;
    public price : ElementFinder;
    public annualMileageDefault : ElementFinder;
    public creditRatingDefault : ElementFinder;
    public termsDefault : ElementArrayFinder;
    public termSelectedDefault : ElementFinder;
    public tabDefault : ElementFinder;
    public tabFinance : ElementFinder;
    public tabCash : ElementFinder;
    public termSelectedFinance : ElementFinder;
    public creditRatingFinance : ElementFinder;
    public paymentOptionsList : ElementArrayFinder;
    public annualMileageOption1 : ElementFinder;
    public financeOrOwnButton : ElementFinder;
    
    public kbbModal : ElementFinder;
    public kbbModalYear : ElementFinder;
    public kbbModalYearSelect : ElementFinder;
    public kbbModalBrand : ElementFinder;
    public kbbModalBrandSelect : ElementFinder;    
    public kbbModalModel : ElementFinder;
    public kbbModalStyle : ElementFinder;
    public kbbModalEngine : ElementFinder;
    public kbbModalTransmission : ElementFinder;
    public kbbModalDrivetrain : ElementFinder;
    public kbbModalMileage : ElementFinder;
    public kbbModalZip : ElementFinder;
    public kbbModalNextButton : ElementFinder;
    public kbbModalNext2Button : ElementFinder;
    public kbbModalColor : ElementFinder;
    public kbbModalTitle : ElementFinder;

    public selectAccessories : ElementFinder;
    public accessoriesModal : ElementFinder;
    public accessoriesViewDetail : ElementArrayFinder;
    public accessoriesDetailModal : ElementFinder;
    public accessoriesDetailModalSelect : ElementFinder;
    public accessoriesCardWrapper : ElementArrayFinder;
    public accessoriesCardWrapper_elem : ElementArrayFinder;
  //public accessoriesPrice : ElementArrayFinder;
    public accessoriesPrice : ElementFinder;
    public accessoriesPrice_1: ElementFinder;
    public accessoriesSelectedCount : ElementFinder;
    public accessoriesSelectedTotal : ElementFinder;
    public accessoriesCheckBox : ElementArrayFinder;
    public accessoriesDoneButton : ElementFinder;
    public accessoriesList : ElementFinder;
    public accessoriesRemove : ElementFinder;
    public accessoriesRemoveAll : ElementFinder;
    public ppLearnMore : ElementFinder;
    public ppModalPlanName : ElementFinder;
    public ppModalPlanDesc : ElementFinder;
    public ppModalVideo : ElementFinder;
    public ppModalCoverageLength : ElementFinder;
    public ppModalTotalDue : ElementFinder;
    public ppModalSelectButton : ElementFinder;
    public ppModalPlanDetails : ElementFinder;
    public ppModalViewBrochure : ElementFinder;
    public ppModalFooter : ElementFinder;    
    public ppPlanSelectCb : ElementFinder;
    public ppPlanSelectCb1 : ElementFinder;
    public ppTerm : ElementFinder;
    public ppTotal : ElementFinder;
    public dueAtSigning : ElementFinder;
    public ppPlanOptionClick : ElementFinder;
    public ppPlanOption : ElementArrayFinder;
    public ppPlanSelectCbClick : ElementFinder;
    public alertModal : ElementFinder;
    public alertModalButton : ElementFinder;
    public paymentOptionRb1 : ElementFinder;
    public productContainer : ElementFinder;
    public vin : ElementFinder;
    public vehicleTitle : ElementFinder;
    public dgIcon : ElementFinder;
    public advertisedPrice : ElementFinder;
    public unlockSavings : ElementFinder;
    public extColor : ElementFinder;
    public intColor : ElementFinder;

    public engine : ElementFinder;
    public estMpg : ElementFinder;
    public packageAcc : ElementFinder;
    public viewVehDetails : ElementFinder;
    public toyotaCareImg : ElementFinder;
    public toyotaSafetySense : ElementFinder;
    public carousel : ElementFinder;
    public vehDetailModalVin : ElementFinder;
    public vehDetailModalVehicleTitle : ElementFinder;
    public vehDetailModalExtColor : ElementFinder;
    public vehDetailModalIntColor : ElementFinder;
    public vehDetailModalEstMpg : ElementFinder;
    public vehDetailModalEngine : ElementFinder;
    public vehDetailModalTab1 : ElementArrayFinder;
    public vehDetailModalTab2 : ElementArrayFinder;
    public vehDetailModalTab3 : ElementArrayFinder;
    public vehDetailModalTab4 : ElementArrayFinder;
    public vehDetailModalTab4mobile : ElementFinder;
    public vehDetailModalDisclosure : ElementFinder;
    public carouselImgRight : ElementFinder;
    public additionalDealerSavings : ElementFinder;
    public confirmAvailabilityForUnlockDealer : ElementFinder;
    public confirmAvailabilityForNoUnlockDealerOnDesktop : ElementFinder;
    public confirmAvailabilityForNoUnlockDealerOnMobile : ElementFinder;
    public mstcMultiLeadFormModal : ElementFinder;
    public mstcMultiLeadFormModalPaymentTerm : ElementFinder;
    public mstcMultiLeadFormModalFirstName : ElementFinder;
    public mstcMultiLeadFormModalLastName : ElementFinder;
    public mstcMultiLeadFormModalZipError : ElementFinder;
    public mstcMultiLeadFormModalTitle : ElementFinder;
    public mstcMultiLeadFormModalReturnToPage : ElementFinder;
    public startPurchaseForUnlockDealer : ElementFinder;
    public startPurchaseForNoUnlockDealer : ElementFinder;
    public startPurchaseWaitSpinner : ElementFinder;
    public rightPaneMenu : ElementFinder;
    public signInBtn : ElementFinder;
    public profileIcon : ElementFinder;
    public zipCodeModal : ElementFinder;
    public closeZipCodeModal : ElementFinder;
    public confirmZipText : ElementFinder;
    public zipTaxDesc : ElementFinder;
    public chsFinanceBtn : ElementFinder;
    public confirmAndSubmitButton : ElementFinder;
    public zipCodeModalInput : ElementFinder;
    public zipCodeModalDoneBtn : ElementFinder;
    public zipCodeWarningModal : ElementFinder;
    public zipCodeWarningDoneButton : ElementFinder;
    public reviewDealZipCode : ElementFinder;
    public editDetailsBtn : ElementFinder;
    public ownFinance : ElementFinder;
    public financeOption : ElementArrayFinder;
    public tfsFinance : ElementFinder;
    public applyFinanceModal : ElementFinder;
    public acceptApplyFinanceModalBtn : ElementFinder;
    public notNowApplyFinanceModalBtn : ElementFinder;
    public authTfsCb : ElementFinder;

    public saveHearts: ElementArrayFinder;
    public saveHeartActive : ElementFinder;
    public saveHeartTooltip : ElementFinder;

    public preferredContacts : ElementArrayFinder;
    public submitToDealerButton : ElementFinder;

    public estimateTabs : ElementArrayFinder;
    public estimateAmount : ElementFinder;
    public MSRP : ElementFinder;
    public vehicleName: ElementFinder;
    public vehicleVin : ElementFinder;
    public reviewDealPageTitle : ElementFinder;
    public vehDetailModalArrow : ElementFinder;
    public vehDetailModalArrowcloseimage : ElementFinder;
    constructor() {
        this.loadingContainer = element(by.xpath('//div[@class="loader-container"]'));
        this.cashDown = element(by.className('ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min'));
        this.price = element(by.xpath("//div[@class='price']/div[@class='ng-star-inserted']"));
        this.annualMileageDefault = element(by.xpath('//*[@id="mat-radio-3"]/label/span[2]/span[2]'));
        this.creditRatingDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-vehicle-details/div[1]/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-credit-score/div/div/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.termsDefault = element.all(by.xpath("//mat-radio-group//span[@class='terms-mobile' or @class='terms']"))
        this.termSelectedDefault = element(by.xpath('(//app-payment-option-list//mat-radio-button//input[@type="radio"])[2]'));
        this.tabDefault = element(by.xpath('//div[@role="tablist"]//div[@class="mat-tab-label-content"][contains(text(),"Lease")]'));
        this.tabFinance = element(by.xpath('//mat-tab-header//div[@class="mat-tab-label-content"][contains(text(),"Finance")]'));
        this.tabCash = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-vehicle-details/div[1]/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[3]')); 
        this.termSelectedFinance = element(by.xpath('(//app-payment-option-list//mat-radio-button//input[@type="radio"])[2]'));
        this.creditRatingFinance = element(by.xpath('//app-credit-score//mat-select//span[contains(text(),"Excellent Credit (720-850")]'));
      //  this.paymentOptionsList = element.all(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-vehicle-details/div[1]/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[4]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button'));
        this.paymentOptionsList = element.all(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div[2]/app-vehicle-details/div[1]/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[4]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/fieldset/mat-radio-group/mat-radio-button'));
        this.annualMileageOption1 = element(by.xpath("//span[.='10,000']"));
        this.financeOrOwnButton = element(by.css('.trade-in-container .action-buttons .finance-vehicle-button')); //*[@id="trade-in-container"]/div[2]/div[1] 
        //kbb modal elements -- start
        this.kbbModal = element(by.xpath('//*[@id="kbb-modal-component"]/app-kbb-modal')); 
        this.kbbModalYear = element(by.xpath("//select[@id='Vehicle_Selection_YearId']"));  //element(by.css("#Vehicle_Selection_YearId")); 
        this.kbbModalBrand = element(by.xpath('//select[@id="Vehicle_Selection_ManufacturerId"]'));
        this.kbbModalModel = element(by.xpath("//select[@id='Vehicle_Selection_ModelId']"));
        this.kbbModalStyle = element(by.xpath("//select[@id='Vehicle_Configuration_VehicleId']"));
        this.kbbModalEngine = element(by.xpath("//select[@id='Vehicle_Configuration_EngineId']"));
        this.kbbModalTransmission = element(by.xpath("//select[@id='Vehicle_Configuration_TransmissionId']"));
        this.kbbModalDrivetrain = element(by.xpath("//select[@id='Vehicle_Configuration_DrivetrainId']"));
        this.kbbModalMileage = element(by.xpath("//*[@id='Vehicle_Configuration_Mileage']")); 
        this.kbbModalZip = element(by.xpath("//*[@id='Vehicle_Configuration_ZipCode']"));
        this.kbbModalColor = element(by.xpath('//select[@id="Vehicle_Configuration_ColorId"]')); //element(by.className('colorSection'));
        this.kbbModalNextButton = element(by.css('.kbbButton1'));
        this.kbbModalNext2Button = element(by.xpath('//*[@id="NextButton"]'));
        this.kbbModalYearSelect = element(by.xpath('//*[@id="Vehicle_Selection_YearId"]/option[12]')); 
        this.kbbModalBrandSelect = element(by.xpath('//*[@id="Vehicle_Selection_ManufacturerId"]/option[13]')); 
        //kbb modal elements -- end

        //this.selectAccessories = element(by.xpath('//*[@id="accessories-summary-container"]/div[2]'));
        this.selectAccessories = element(by.xpath("//div[text()=' Select Accessories ']"));
        this.accessoriesModal = element(by.className('accessory-model'));
        this.accessoriesViewDetail = element.all(by.xpath('//div[@class="accessory-card-view-part"]//span[@class="text-button view-details"][contains(text(),"View details")]'));
        this.accessoriesDetailModal = element(by.xpath('//accessories-list-model//div[@class="accessory-detail-content"]'));
       // this.accessoriesDetailModalSelect = element(by.xpath('//div[@class="accessory-detail-content-header-select ng-star-inserted"]//span[@class="primary-button large right-align ng-star-inserted"][contains(text(),"Remove") or contains(text(),"Select")]'));
        this.accessoriesDetailModalSelect = element(by.xpath('//span[contains(@class,"primary-button large right-align")][contains(text(),"Remove") or contains(text(),"Select")]'));

        // this.accessoriesCardWrapper = element.all(by.className('card-wrapper'));
        this.accessoriesCardWrapper = element.all(by.xpath("//div[contains(@class,'card-wrapper')]"));
		this.accessoriesCardWrapper_elem = element.all(by.xpath("//div[contains(@class,'card-highlight')]"));
       // this.accessoriesPrice = element.all(by.className('accessory-price'));
		this.accessoriesPrice = element(by.xpath('(//div[@class="accessory-card-price-select"])[1]/span[contains(text(),"$")]'));
        this.accessoriesSelectedCount = element(by.className('accessory-model-header-selected'));
     //   this.accessoriesSelectedTotal = element(by.className('accessory-model-header-total'));
        this.accessoriesSelectedTotal = element(by.xpath("//div[contains(@class,'accessory-model-header-total')]"));
      //  this.accessoriesCheckBox = element.all(by.xpath('//div[@class="accessory-card-price-select"]//div[contains(@class,"accessory-checkbox ng-star-inserted")]//mat-checkbox//span[@class="mat-checkbox-inner-container"]'));
        this.accessoriesCheckBox = element.all(by.xpath('//div[contains(@class,"accessory-checkbox")]//mat-checkbox//span[@class="mat-checkbox-inner-container"]'));

        this.accessoriesDoneButton = element(by.xpath('//div//span[@class="accessory-model-header-done"]//span[contains(text(),"Done")]'));
        this.accessoriesList = element(by.className('accessory-display'));
        this.accessoriesRemoveAll = element(by.xpath('//*[@id="accessories-list-model"]/accessories-list-model/div/div[2]/div/div[2]/span[2]/span'));
        this.accessoriesRemove = element(by.xpath('//div[@class="accessory-display ng-star-inserted"]//div[text()="Remove"]'));
       // this.ppLearnMore = element(by.xpath('//*[@id="product-container"]/div/div[2]/vdp-product-list/div/div[2]/div[1]/span[2]'));
        this.ppLearnMore = element(by.xpath('(//vdp-product-list//span[contains(@class,"learn-more-btn")]//a)[last()]'));

     //   this.ppModalPlanName = element(by.xpath('//*[@id="protection-product-modal-header"]'));
        this.ppModalPlanName = element(by.xpath('//div[@class="protection-product-modal-header"]'));

      //  this.ppModalPlanDesc = element(by.xpath('//*[@id="protection-product-text"]/div/div/p'));
        this.ppModalPlanDesc = element(by.xpath('//*[@id="protection-product-text"]/div/div'));
      //  this.ppModalVideo = element(by.xpath('//*[@id="protection-products-modal-container"]/div[3]/video'));
        this.ppModalVideo = element(by.xpath('//div[@class="protection-products-container"]//div//video'));
        
       // this.ppModalCoverageLength = element(by.className('select-content'));  
        this.ppModalCoverageLength = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/con-slim-combobox/div/mat-form-field/div'));
        
        this.ppModalTotalDue = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/span[1]'));
       // this.ppModalSelectButton = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/div'));
        this.ppModalSelectButton = element(by.xpath('//div[contains(@class,"select-button")]'));
        this.ppModalPlanDetails = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[3]/div/div'));
        this.ppModalViewBrochure = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[4]'));
        this.ppModalFooter = element(by.className('product-footer-container'));
        
       // this.ppPlanSelectCbClick = element.all(by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div')); 
        this.ppPlanSelectCbClick = element(by.xpath('(//vdp-product-list//span[contains(@class,"mat-checkbox-label")])[last()]')); 
        this.ppPlanSelectCb = element(by.xpath('(//vdp-product-list//input[contains(@class,"mat-checkbox-input")])[last()]')); 
        this.ppPlanSelectCb1 = element(by.xpath('(//vdp-product-list//input[contains(@class,"mat-checkbox-input")])[last()]'));
        this.ppTerm = element(by.className('term'));
        this.ppTotal = element(by.className('product-container-content-total'));
        this.dueAtSigning =  element(by.xpath('//div[@class="term-length"]/div[2]/span'));  //element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[2]/vdp-pricing-summary/div/div[3]/div[1]/div/div[2]/div[2]/span'));
       // this.ppPlanOptionClick = element.all(by.className('product-type')); 
        this.ppPlanOptionClick = element(by.xpath('(//vdp-product-list//div[contains(@class,"mat-select-arrow")])[last()-2]'));
        this.ppPlanOption = element.all(by.css('mat-option > .mat-option-text > span')); 
        this.alertModal = element(by.className('mat-dialog-title'));
        this.alertModalButton = element(by.css('.got-it'));
       // this.paymentOptionRb1 = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[1]/label/div[1]/input'));
        this.paymentOptionRb1 = element(by.xpath('(//app-payment-option-list//mat-radio-button//span//input[@class="mat-radio-input"])[last()]'));
        
        this.productContainer = element(by.xpath('//*[@id="product-container"]')); //*[@id="product-container"]

        this.vin = element(by.className('vin'));
        this.vehicleTitle = element(by.className('vehicle-title'));
        this.dgIcon = element(by.className('dg-inline-save-heart'));
        
        this.advertisedPrice = element(by.xpath("//div[@class='price']"));
      //  this.unlockSavings = element(by.className("unlock-saving"));
        this.unlockSavings = element(by.xpath("(//span[contains(text(),'Unlock Savings')])[1]"));
        this.extColor = element(by.xpath("//div[@class='vehicle-info']//span[normalize-space()='Exterior']"));
        this.intColor = element(by.xpath("//div[@class='vehicle-info']//span[normalize-space()='Interior']"));
        this.engine = element(by.xpath("//div[@class='vehicle-info']//div[@class='description limitToTwoLines']"));
        this.estMpg = element(by.xpath("//span[text()=' est.mpg ']//preceding-sibling::span"));
        this.packageAcc = element(by.xpath("//span[contains(text(),'package')]"));
        this.viewVehDetails = element(by.xpath("//a[text()='View All Vehicle Details']"));
        this.toyotaCareImg = element(by.xpath("//div[@class='care-view']"));
        this.toyotaSafetySense = element(by.xpath("//div[@class='vehicle-info-item ng-star-inserted']//a[text()='Toyota Safety Sense']//parent::span//preceding-sibling::img"));
        this.carousel = element(by.className('carousel'));
        this.vehDetailModalVin = element(by.xpath('//div[@id="vehicle-detail-vin"]'));
        this.vehDetailModalVehicleTitle = element(by.xpath('//div[@id="vehicle-detail-title"]'));
        this.vehDetailModalExtColor = element(by.xpath('//div[@class="vehicleDetailRightDescriptionContainer"]/div[1]/div/span[2]'));
        this.vehDetailModalIntColor = element(by.xpath('//div[@class="vehicleDetailRightDescriptionContainer"]/div[2]/div/span[2]'));
        this.vehDetailModalEstMpg = element(by.xpath('//div[@class="vehicleDetailLeftDescriptionContainer"]/div[1]/div[2]'));
        this.vehDetailModalEngine = element(by.xpath('//div[@class="vehicleDetailLeftDescriptionContainer"]/div[2]/div[2]'));
        this.vehDetailModalTab1 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[1]'));
        this.vehDetailModalTab2 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[2]'));
        this.vehDetailModalTab3 = element.all(by.xpath("//div[@class='mat-tab-labels']//div[contains(text(),'Safety Features')]"));
        this.vehDetailModalArrow = element(by.xpath('//div[@class="rightArrowContainer"]'));
        this.vehDetailModalTab4 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[4]'));
        this.vehDetailModalTab4mobile = element(by.xpath("//div[@class='mat-tab-labels']//div[contains(text(),'Package & Accessories')]"));
        this.vehDetailModalDisclosure = element(by.xpath('//div[@class="Disclosure"]'));
       // this.carouselImgRight = element(by.xpath('//img[@alt="arrowRight"]'));
        this.carouselImgRight = element(by.xpath('//img[@alt="right arrow"][contains(@class,"arrow-right-small") or contains(@class,"arrow-right-large")]'));
        this.additionalDealerSavings = element(by.xpath('//div[@class="flexBox AdditionalDealerSavings"]'));

        this.confirmAvailabilityForUnlockDealer = element(by.xpath('//div[@class="text-button ng-star-inserted"][contains(text()," Confirm Availability ")]'));
        this.confirmAvailabilityForNoUnlockDealerOnDesktop = element(by.css('button.confirm-availability'));
        this.confirmAvailabilityForNoUnlockDealerOnMobile = element(by.css('.confirm-availability-btn'));
        this.mstcMultiLeadFormModal = element(by.className('smart-price-modal-container'));
        this.mstcMultiLeadFormModalPaymentTerm = element(by.css('div.price-sub-con > .prefix'));
        this.mstcMultiLeadFormModalFirstName = element(by.xpath('//div[@class="customer-name-field"]/con-textfield[1]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.mstcMultiLeadFormModalLastName = element(by.xpath('//div[@class="customer-name-field"]/con-textfield[2]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.mstcMultiLeadFormModalZipError = element(by.css('div.customer-zip-field .mat-error'));
    //  this.mstcMultiLeadFormModalTitle = element(by.css('.smart-price-modal-header'));
        this.mstcMultiLeadFormModalTitle = element(by.xpath('//span[text()="Availability Requested!"]'));
    // this.mstcMultiLeadFormModalReturnToPage = element(by.xpath('//div[@class="return-to-page"]/button'));
        this.mstcMultiLeadFormModalReturnToPage = element(by.css(".return-to-page > .primary-button"));
      //  this.startPurchaseForUnlockDealer = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-vehicle-details/div[1]/div[2]/div[2]/section/vdp-pricing-summary/div/div[3]/div[2]/button[2]'));
        this.startPurchaseForUnlockDealer = element(by.xpath("//div[contains(@class,'price-details')]//button[contains(text(),'Start Purchase')]"));
      //  this.startPurchaseForNoUnlockDealer = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/div/app-vehicle-details/div[1]/div[2]/div[2]/section/vdp-pricing-summary/div/div[3]/div[2]/button[1]'));
        this.startPurchaseForNoUnlockDealer = element(by.xpath('//button[contains(@class,"start-purchase-bdd")]'));
        // this.startPurchaseForUnlockDealer = element(by.xpath('//div[@class="price-details"]/button[2]'));
       // this.startPurchaseForNoUnlockDealer = element(by.xpath('//div[@class="price-details"]/button[1]'));
        this.rightPaneMenu = element(by.xpath('//div[@class="menu-items ng-star-inserted"]'));    //element(by.css("div.right-pane > div.menu-items"));
        this.signInBtn = element(by.xpath("//div[@class='sign-in menu-button ng-star-inserted']")); //element(by.css('.sign-in'));
        
        this.profileIcon = element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]'));
        this.zipCodeModal = element(by.xpath("//div[@class='zip-code-container']"));
        this.closeZipCodeModal = element(by.xpath('//div[@class="close-btn-container"]'));
        this.confirmZipText = element(by.className('text-button confirm_zip'));
        this.zipTaxDesc = element(by.className('edit_zip_tax_desc'));
        this.chsFinanceBtn = element(by.xpath('//div[@class="finance_buttons"]/button'));
        this.zipCodeModalInput = element(by.id('textInput'));
        this.zipCodeModalDoneBtn = element(by.xpath('//*[@id="zip-form"]/div/button'));
        this.zipCodeWarningModal = element(by.id('zipCode-warning-modal-panel'));
        this.zipCodeWarningDoneButton = element(by.xpath('//*[@id="zipCode-warning-modal-panel"]/app-zip-code-warning-modal/div[1]/button'));
        this.reviewDealZipCode = element(by.xpath('//span[@class="text-link custom_zip_button"]'));
        this.editDetailsBtn = element(by.className('text-button edit_Details_button'));
        this.financeOption = element.all(by.className('mat-radio-button'));
        this.tfsFinance = this.financeOption.first();
        this.ownFinance = this.financeOption.last();
        this.applyFinanceModal = element(by.className('apply-finance-modal-container'));
        this.acceptApplyFinanceModalBtn = element(by.className('primary-button large accept_button'));
        this.notNowApplyFinanceModalBtn = element(by.className('secondary-button large back_button'));
        this.authTfsCb = element(by.xpath('//div[@class="con-checkbox"]/mat-checkbox'))
        this.confirmAndSubmitButton = element(by.xpath('//div[@class="finance_buttons"]/button'));
        this.saveHearts = element.all(by.css('.dg-inline-save-heart'));
        this.saveHeartActive = element(by.css('.dg-encircle.active'));
        this.saveHeartTooltip = element(by.css('.dg-tooltip'));

        this.estimateTabs = element.all(by.className('mat-tab-label-content'));
        this.estimateAmount = element(by.className('term ng-star-inserted'));

        this.MSRP = element(by.className('ng-star-inserted'));
        this.vehicleName = element(by.className('vehicle-title'));
        this.vehicleVin = element(by.className('vin'));

        this.preferredContacts = element.all(by.xpath('//div[@class="preferred-contact-selection"]/con-checkbox'));
        this.submitToDealerButton = element(by.xpath('//div[@class="finance_buttons"]/button'));

        this.startPurchaseWaitSpinner = element(by.className('spinner'));
        this.reviewDealPageTitle = element(by.className('review-deal-header-content'));
    }
}
