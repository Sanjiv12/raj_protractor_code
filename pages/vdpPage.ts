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
    


    constructor() {
        this.cashDown = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[1]/app-cash-down/div/ngx-slider/span[9]')); 
        this.price = element(by.xpath("//div[@class='price']/div[@class='ng-star-inserted']"));
        this.annualMileageDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[2]/app-annual-mileage/div/con-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.creditRatingDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/div[1]/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.termsDefault = element.all(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button/label/div[2]/span[2]/span[3]')); 
        this.termSelectedDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.tabDefault = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[1]'));
        this.tabFinance = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]'));
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

        this.ppModalCoverageLength = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/con-slim-combobox/div/mat-form-field/div'));
        this.ppModalTotalDue = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/span[1]'));
        this.ppModalSelectButton = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/div'));
        this.ppModalPlanDetails = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[3]/div/div'));
        this.ppModalViewBrochure = element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[4]'));
        this.ppModalFooter = element(by.className('product-footer-container'));
        
        this.ppPlanSelectCbClick = element.all(by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div')); 
        this.ppPlanSelectCb = element.all(by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div/input')); 
        this.ppTerm = element(by.className('term'));
        this.ppTotal = element(by.className('product-container-content-total'));
        this.dueAtSigning = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[2]/vdp-pricing-summary/div/div[3]/div[1]/div/div[2]/div[2]/span'));
        this.ppPlanOptionClick = element.all(by.className('product-type')); 
        this.ppPlanOption = element.all(by.css('mat-option > .mat-option-text > span')); 
        this.alertModal = element(by.className('mat-dialog-title'));
        this.alertModalButton = element(by.css('.got-it'));
        this.paymentOptionRb1 = element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[1]/label/div[1]/input'));
        
        this.productContainer = element(by.xpath('//*[@id="product-container"]')); //*[@id="product-container"]
    }
}