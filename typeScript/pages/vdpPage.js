"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VdpPage = void 0;
const protractor_1 = require("protractor");
class VdpPage {
    constructor() {
        this.cashDown = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[1]/app-cash-down/div/ngx-slider/span[9]'));
        this.price = protractor_1.element(protractor_1.by.xpath("//div[@class='price']/div[@class='ng-star-inserted']"));
        this.annualMileageDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[2]/app-annual-mileage/div/con-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.creditRatingDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/div[1]/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.termsDefault = protractor_1.element.all(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button/label/div[2]/span[2]/span[3]'));
        this.termSelectedDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.tabDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[1]'));
        this.tabFinance = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]'));
        this.termSelectedFinance = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[2]/div/app-finance/div/div[2]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[4]'));
        this.creditRatingFinance = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[2]/div/app-finance/div/div[2]/div[1]/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.paymentOptionsList = protractor_1.element.all(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button'));
        this.annualMileageOption1 = protractor_1.element(protractor_1.by.xpath("//span[.='10,000']"));
        this.financeOrOwnButton = protractor_1.element(protractor_1.by.css('.trade-in-container .action-buttons .finance-vehicle-button')); //*[@id="trade-in-container"]/div[2]/div[1] 
        //kbb modal elements -- start
        this.kbbModal = protractor_1.element(protractor_1.by.xpath('//*[@id="kbb-modal-component"]/app-kbb-modal'));
        this.kbbModalYear = protractor_1.element(protractor_1.by.xpath("//select[@id='Vehicle_Selection_YearId']")); //element(by.css("#Vehicle_Selection_YearId")); 
        this.kbbModalBrand = protractor_1.element(protractor_1.by.xpath('//select[@id="Vehicle_Selection_ManufacturerId"]'));
        this.kbbModalModel = protractor_1.element(protractor_1.by.xpath("//select[@id='Vehicle_Selection_ModelId']"));
        this.kbbModalStyle = protractor_1.element(protractor_1.by.xpath("//select[@id='Vehicle_Configuration_VehicleId']"));
        this.kbbModalEngine = protractor_1.element(protractor_1.by.xpath("//select[@id='Vehicle_Configuration_EngineId']"));
        this.kbbModalTransmission = protractor_1.element(protractor_1.by.xpath("//select[@id='Vehicle_Configuration_TransmissionId']"));
        this.kbbModalDrivetrain = protractor_1.element(protractor_1.by.xpath("//select[@id='Vehicle_Configuration_DrivetrainId']"));
        this.kbbModalMileage = protractor_1.element(protractor_1.by.xpath("//*[@id='Vehicle_Configuration_Mileage']"));
        this.kbbModalZip = protractor_1.element(protractor_1.by.xpath("//*[@id='Vehicle_Configuration_ZipCode']"));
        this.kbbModalColor = protractor_1.element(protractor_1.by.xpath('//select[@id="Vehicle_Configuration_ColorId"]')); //element(by.className('colorSection'));
        this.kbbModalNextButton = protractor_1.element(protractor_1.by.css('.kbbButton1'));
        this.kbbModalNext2Button = protractor_1.element(protractor_1.by.xpath('//*[@id="NextButton"]'));
        this.kbbModalYearSelect = protractor_1.element(protractor_1.by.xpath('//*[@id="Vehicle_Selection_YearId"]/option[12]'));
        this.kbbModalBrandSelect = protractor_1.element(protractor_1.by.xpath('//*[@id="Vehicle_Selection_ManufacturerId"]/option[13]'));
        //kbb modal elements -- end
        this.selectAccessories = protractor_1.element(protractor_1.by.xpath('//*[@id="accessories-summary-container"]/div[2]'));
        this.accessoriesModal = protractor_1.element(protractor_1.by.className('accessory-model'));
        this.accessoriesViewDetail = protractor_1.element.all(protractor_1.by.css('div.accessory-model-list > div .text-button'));
        this.accessoriesDetailModal = protractor_1.element(protractor_1.by.className('accessory-detail-content'));
        this.accessoriesDetailModalSelect = protractor_1.element(protractor_1.by.className('accessory-detail-content-header-select'));
        this.accessoriesCardWrapper = protractor_1.element.all(protractor_1.by.className('card-wrapper'));
        this.accessoriesPrice = protractor_1.element.all(protractor_1.by.className('accessory-price'));
        this.accessoriesSelectedCount = protractor_1.element(protractor_1.by.className('accessory-model-header-selected'));
        this.accessoriesSelectedTotal = protractor_1.element(protractor_1.by.className('accessory-model-header-total'));
        this.accessoriesCheckBox = protractor_1.element.all(protractor_1.by.className('accessory-checkbox'));
        this.accessoriesDoneButton = protractor_1.element(protractor_1.by.xpath('//*[@id="accessories-list-model"]/accessories-list-model/div/div[2]/div/div[3]/span/span'));
        this.accessoriesList = protractor_1.element(protractor_1.by.className('accessory-display'));
        this.accessoriesRemove = protractor_1.element(protractor_1.by.xpath('//*[@id="accessories-summary-container"]/div[3]/div/div[2]/div[2]'));
        this.accessoriesRemoveAll = protractor_1.element(protractor_1.by.xpath('//*[@id="accessories-list-model"]/accessories-list-model/div/div[2]/div/div[2]/span[2]/span'));
        this.ppLearnMore = protractor_1.element(protractor_1.by.xpath('//*[@id="product-container"]/div/div[2]/vdp-product-list/div/div[2]/div[1]/span[2]'));
        this.ppModalPlanName = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-product-modal-header"]'));
        this.ppModalPlanDesc = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-product-text"]/div/div/p'));
        this.ppModalVideo = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-container"]/div[3]/video'));
        this.ppModalCoverageLength = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/con-slim-combobox/div/mat-form-field/div'));
        this.ppModalTotalDue = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/span[1]'));
        this.ppModalSelectButton = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/div'));
        this.ppModalPlanDetails = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[3]/div/div'));
        this.ppModalViewBrochure = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[4]'));
        this.ppModalFooter = protractor_1.element(protractor_1.by.className('product-footer-container'));
        this.ppPlanSelectCbClick = protractor_1.element.all(protractor_1.by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div'));
        this.ppPlanSelectCb = protractor_1.element.all(protractor_1.by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div/input'));
        this.ppTerm = protractor_1.element(protractor_1.by.className('term'));
        this.ppTotal = protractor_1.element(protractor_1.by.className('product-container-content-total'));
        this.dueAtSigning = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[2]/vdp-pricing-summary/div/div[3]/div[1]/div/div[2]/div[2]/span'));
        this.ppPlanOptionClick = protractor_1.element.all(protractor_1.by.className('product-type'));
        this.ppPlanOption = protractor_1.element.all(protractor_1.by.css('mat-option > .mat-option-text > span'));
        this.alertModal = protractor_1.element(protractor_1.by.className('mat-dialog-title'));
        this.alertModalButton = protractor_1.element(protractor_1.by.css('.got-it'));
        this.paymentOptionRb1 = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[1]/label/div[1]/input'));
        this.productContainer = protractor_1.element(protractor_1.by.xpath('//*[@id="product-container"]')); //*[@id="product-container"]
    }
}
exports.VdpPage = VdpPage;
