import { $, ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class VdpPage {

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
    public accessoriesPrice : ElementArrayFinder;
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
    public ppPlanSelectCb : ElementArrayFinder;
    public ppTerm : ElementFinder;
    public ppTotal : ElementFinder;
    public dueAtSigning : ElementFinder;
    public ppPlanOptionClick : ElementArrayFinder;
    public ppPlanOption : ElementArrayFinder;
    public ppPlanSelectCbClick : ElementArrayFinder;
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
    public vehDetailModalDisclosure : ElementFinder;
    public carouselImgRight : ElementFinder;
    public additionalDealerSavings : ElementFinder;
    public sendEstimateToDealer : ElementFinder;
    public sendEstimateModal : ElementFinder;
    public sendEstimateModalPaymentTerm : ElementFinder;
    public sendEstimateModalFirstName : ElementFinder;
    public sendEstimateModalLastName : ElementFinder;
    public sendEstimateModalZipError : ElementFinder;
    public sentEstimateModalTitle : ElementFinder;
    public sentEstimateModalreturnToPage : ElementFinder;
    public startPurchase : ElementFinder;
    public rightPaneMenu : ElementFinder;
    public signInBtn : ElementFinder;
    public profileIcon : ElementFinder;
    public zipCodeModal : ElementFinder;
    public closeZipCodeModal : ElementFinder;
    public confirmZipText : ElementFinder;
    public zipTaxDesc : ElementFinder;
    public chsFinanceBtn : ElementFinder;
    public zipCodeModalInput : ElementFinder;
    public zipCodeModalDoneBtn : ElementFinder;
    public reviewDealZipCode : ElementFinder;
    public editDetailsBtn : ElementFinder;
    public ownFinance : ElementFinder;
    public tfsFinance : ElementFinder;
    public applyFinanceModal : ElementFinder;
    public acceptApplyFinanceModalBtn : ElementFinder;
    public notNowApplyFinanceModalBtn : ElementFinder;
    public authTfsCb : ElementFinder;

    public saveHearts: ElementArrayFinder;
    public saveHeartActive : ElementFinder;
    public saveHeartTooltip : ElementFinder; 

    public estimateTabs : ElementArrayFinder;
    public estimateAmount : ElementFinder;
    public MSRP : ElementFinder; 
    public vehicleName: ElementFinder; 
    public vehicleVin : ElementFinder;    
    constructor() {
        this.cashDown = element(by.className('ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min'));
        this.price = element(by.xpath("//div[@class='price']/div[@class='ng-star-inserted']"));
        this.annualMileageDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[2]/app-annual-mileage/div/con-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.creditRatingDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/div[1]/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.termsDefault = element.all(by.xpath("//span[@class='terms']"))
        this.termSelectedDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.tabDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[1]'));
        this.tabFinance = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]'));
        this.tabCash = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[3]')); 
        this.termSelectedFinance = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[2]/div/app-finance/div/div[2]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[4]'));
        this.creditRatingFinance = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[2]/div/app-finance/div/div[2]/div[1]/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.paymentOptionsList = element.all(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button'));
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

        this.selectAccessories = element(by.xpath('//*[@id="accessories-summary-container"]/div[2]'));
        this.accessoriesModal = element(by.className('accessory-model'));
        this.accessoriesViewDetail = element.all(by.css('div.accessory-model-list > div .text-button'));
        this.accessoriesDetailModal = element(by.className('accessory-detail-content'));
        this.accessoriesDetailModalSelect = element(by.className('accessory-detail-content-header-select'));
        this.accessoriesCardWrapper = element.all(by.className('card-wrapper'));
        this.accessoriesPrice = element.all(by.className('accessory-price'));
        this.accessoriesSelectedCount = element(by.className('accessory-model-header-selected'));
        this.accessoriesSelectedTotal = element(by.className('accessory-model-header-total'));
        this.accessoriesCheckBox = element.all(by.className('accessory-checkbox'));
        this.accessoriesDoneButton = element(by.xpath('//*[@id="accessories-list-model"]/accessories-list-model/div/div[2]/div/div[3]/span/span'));
        this.accessoriesList = element(by.className('accessory-display'));
        this.accessoriesRemove = element(by.xpath('//*[@id="accessories-summary-container"]/div[3]/div/div[2]/div[2]'));
        this.accessoriesRemoveAll = element(by.xpath('//*[@id="accessories-list-model"]/accessories-list-model/div/div[2]/div/div[2]/span[2]/span'));
        
        this.ppLearnMore = element(by.xpath('//*[@id="product-container"]/div/div[2]/vdp-product-list/div/div[2]/div[1]/span[2]'));
        this.ppModalPlanName = element(by.xpath('//*[@id="protection-product-modal-header"]'));
        this.ppModalPlanDesc = element(by.xpath('//*[@id="protection-product-text"]/div/div/p'));
        this.ppModalVideo = element(by.xpath('//*[@id="protection-products-modal-container"]/div[3]/video'));

        this.ppModalCoverageLength = element(by.className('select-content'));  //element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/con-slim-combobox/div/mat-form-field/div'));
        this.ppModalTotalDue = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/span[1]'));
        this.ppModalSelectButton = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/div'));
        this.ppModalPlanDetails = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[3]/div/div'));
        this.ppModalViewBrochure = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[4]'));
        this.ppModalFooter = element(by.className('product-footer-container'));
        
        this.ppPlanSelectCbClick = element.all(by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div')); 
        this.ppPlanSelectCb = element.all(by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div/input')); 
        this.ppTerm = element(by.className('term'));
        this.ppTotal = element(by.className('product-container-content-total'));
        this.dueAtSigning =  element(by.xpath('//div[@class="term-length"]/div[2]/span'));  //element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[2]/vdp-pricing-summary/div/div[3]/div[1]/div/div[2]/div[2]/span'));
        this.ppPlanOptionClick = element.all(by.className('product-type')); 
        this.ppPlanOption = element.all(by.css('mat-option > .mat-option-text > span')); 
        this.alertModal = element(by.className('mat-dialog-title'));
        this.alertModalButton = element(by.css('.got-it'));
        this.paymentOptionRb1 = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[1]/label/div[1]/input'));
        this.productContainer = element(by.xpath('//*[@id="product-container"]')); //*[@id="product-container"]

        this.vin = element(by.className('vin'));
        this.vehicleTitle = element(by.className('vehicle-title'));
        this.dgIcon = element(by.className('dg-inline-save-heart'));
        this.advertisedPrice = element(by.xpath("//div[@class='price']"));
        this.unlockSavings = element(by.xpath("//div[@class='price']/span[2]"));
        this.extColor = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[1]/div[1]/div[2]/span[2]'));
        this.intColor = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[1]/div[2]/div[2]/span[2]'));
        this.engine = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[1]/div[2]'));
        this.estMpg = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[2]/div[2]'));
        this.packageAcc = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[3]/div[2]'));
        this.viewVehDetails = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[3]/div[3]/div/span'));
        this.toyotaCareImg = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[3]/div[1]/img'));
        this.toyotaSafetySense = element(by.xpath('//div[@class="vehicle-info"]/div[4]/div[3]/div[2]'));
        this.carousel = element(by.className('carousel'));
        this.vehDetailModalVin = element(by.xpath('//div[@id="vehicle-detail-vin"]'));
        this.vehDetailModalVehicleTitle = element(by.xpath('//div[@id="vehicle-detail-title"]'));
        this.vehDetailModalExtColor = element(by.xpath('//div[@class="vehicleDetailRightDescriptionContainer"]/div[1]/div/span[2]'));
        this.vehDetailModalIntColor = element(by.xpath('//div[@class="vehicleDetailRightDescriptionContainer"]/div[2]/div/span[2]'));
        this.vehDetailModalEstMpg = element(by.xpath('//div[@class="vehicleDetailLeftDescriptionContainer"]/div[1]/div[2]'));
        this.vehDetailModalEngine = element(by.xpath('//div[@class="vehicleDetailLeftDescriptionContainer"]/div[2]/div[2]'));
        this.vehDetailModalTab1 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[1]'));
        this.vehDetailModalTab2 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[2]'));
        this.vehDetailModalTab3 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[3]'));
        this.vehDetailModalTab4 = element.all(by.xpath('//div[@class="mat-tab-labels"]/div[4]'));
        this.vehDetailModalDisclosure = element(by.xpath('//div[@class="Disclosure"]'));
        this.carouselImgRight = element(by.xpath('//img[@alt="arrowRight"]'));
        this.additionalDealerSavings = element(by.xpath('//div[@class="AdditionalDealerSavings flexBox"]'));

        this.sendEstimateToDealer = element(by.xpath('//div[@class="text-button send-estimate-text"]'));
        this.sendEstimateModal = element(by.xpath('//div[@class="smart-price-modal-container ng-star-inserted"]'));
        this.sendEstimateModalPaymentTerm = element(by.css('div.price-sub-con > .prefix'));
        this.sendEstimateModalFirstName = element(by.xpath('//div[@class="customer-name-field"]/con-textfield[1]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.sendEstimateModalLastName = element(by.xpath('//div[@class="customer-name-field"]/con-textfield[2]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.sendEstimateModalZipError = element(by.css('div.customer-zip-field .mat-error'));
        this.sentEstimateModalTitle = element(by.css('.smart-price-modal-header'));
        this.sentEstimateModalreturnToPage = element(by.xpath('//div[@class="return-to-page"]/button'));
        this.startPurchase = element(by.xpath('//div[@class="price-details"]/button[2]'));

        this.rightPaneMenu = element(by.xpath('//div[@class="menu-items ng-star-inserted"]'));    //element(by.css("div.right-pane > div.menu-items"));
        this.signInBtn = element(by.xpath("//div[@class='sign-in menu-button ng-star-inserted']")); //element(by.css('.sign-in'));
        
        this.profileIcon = element(by.xpath('//*[@id="dg-component-nav-menu-desktop"]'));
        this.zipCodeModal = element(by.xpath("//div[@class='zip-code-container']"));
        this.closeZipCodeModal = element(by.xpath('//div[@class="close-btn-container"]'));
        this.confirmZipText = element(by.className('text-button confirm_zip'));
        this.zipTaxDesc = element(by.className('edit_zip_tax_desc'));
        this.chsFinanceBtn = element(by.xpath('//div[@class="finance_buttons"]/button'));
        this.zipCodeModalInput = element(by.id('textInput'));
        this.zipCodeModalDoneBtn = element(by.xpath('//div[@class="zip-container"]/button'));
        this.reviewDealZipCode = element(by.xpath('//span[@class="text-link custom_zip_button"]'));
        this.editDetailsBtn = element(by.className('text-button edit_Details_button'));
        this.ownFinance = element(by.className('own-finance'));
        this.tfsFinance = element(by.className('tfs-finance'));

        this.applyFinanceModal = element(by.className('apply-finance-modal-container'));
        this.acceptApplyFinanceModalBtn = element(by.xpath('//section[@class="apply-finance-modal-body"]/button[1]'));
        this.notNowApplyFinanceModalBtn = element(by.xpath('//section[@class="apply-finance-modal-body"]/button[2]'));
        this.authTfsCb = element(by.xpath('//div[@class="con-checkbox"]/mat-checkbox'))

        this.saveHearts = element.all(by.css('.dg-inline-save-heart'));
        this.saveHeartActive = element(by.css('.dg-encircle.active'));
        this.saveHeartTooltip = element(by.css('.dg-tooltip'));

        this.estimateTabs = element.all(by.className('mat-tab-label-content'));
        this.estimateAmount = element(by.className('term ng-star-inserted'));

        this.MSRP = element(by.className('ng-star-inserted'));
        this.vehicleName = element(by.className('vehicle-title'));
        this.vehicleVin = element(by.className('vin'));

    }
}