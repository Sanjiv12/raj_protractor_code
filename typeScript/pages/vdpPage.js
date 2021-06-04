"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VdpPage = void 0;
const protractor_1 = require("protractor");
class VdpPage {
    constructor() {
        this.cashDown = protractor_1.element(protractor_1.by.className('ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min'));
        this.price = protractor_1.element(protractor_1.by.xpath("//div[@class='price']/div[@class='ng-star-inserted']"));
        this.annualMileageDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[2]/app-annual-mileage/div/con-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.creditRatingDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/div[1]/con-slim-combobox/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span'));
        this.termsDefault = protractor_1.element.all(protractor_1.by.xpath("//span[@class='terms']"));
        this.termSelectedDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[2]'));
        this.tabDefault = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[1]'));
        this.tabFinance = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]'));
        this.tabCash = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[3]'));
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
        this.ppModalCoverageLength = protractor_1.element(protractor_1.by.className('select-content')); //element(by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/con-slim-combobox/div/mat-form-field/div'));
        this.ppModalTotalDue = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/span[1]'));
        this.ppModalSelectButton = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[2]/div/div'));
        this.ppModalPlanDetails = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[3]/div/div'));
        this.ppModalViewBrochure = protractor_1.element(protractor_1.by.xpath('//*[@id="protection-products-modal-component"]/vdp-protection-products-model/protection-products-model-content/div/div[4]'));
        this.ppModalFooter = protractor_1.element(protractor_1.by.className('product-footer-container'));
        this.ppPlanSelectCbClick = protractor_1.element.all(protractor_1.by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div'));
        this.ppPlanSelectCb = protractor_1.element.all(protractor_1.by.xpath('//html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[1]/div[4]/vpd-protection-product/div/div/div[2]/vdp-product-list/div/div[3]/div[2]/con-checkbox/div/mat-checkbox/label/div/input'));
        this.ppTerm = protractor_1.element(protractor_1.by.className('term'));
        this.ppTotal = protractor_1.element(protractor_1.by.className('product-container-content-total'));
        this.dueAtSigning = protractor_1.element(protractor_1.by.xpath('//div[@class="term-length"]/div[2]/span')); //element(by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div/section[2]/vdp-pricing-summary/div/div[3]/div[1]/div/div[2]/div[2]/span'));
        this.ppPlanOptionClick = protractor_1.element.all(protractor_1.by.className('product-type'));
        this.ppPlanOption = protractor_1.element.all(protractor_1.by.css('mat-option > .mat-option-text > span'));
        this.alertModal = protractor_1.element(protractor_1.by.className('mat-dialog-title'));
        this.alertModalButton = protractor_1.element(protractor_1.by.css('.got-it'));
        this.paymentOptionRb1 = protractor_1.element(protractor_1.by.xpath('/html/body/main/app-root/mat-drawer-container/mat-drawer-content/app-vehicle-details/div/div[2]/div[1]/section/div[1]/vdp-payment-estimation/div/mat-tab-group/div/mat-tab-body[1]/div/app-lease/div/div[3]/app-payment-option-list/div/mat-radio-group/div/con-payment-radiobutton-list/div/mat-radio-group/mat-radio-button[1]/label/div[1]/input'));
        this.productContainer = protractor_1.element(protractor_1.by.xpath('//*[@id="product-container"]')); //*[@id="product-container"]
        this.vin = protractor_1.element(protractor_1.by.className('vin'));
        this.vehicleTitle = protractor_1.element(protractor_1.by.className('vehicle-title'));
        this.dgIcon = protractor_1.element(protractor_1.by.className('dg-inline-save-heart'));
        this.advertisedPrice = protractor_1.element(protractor_1.by.xpath("//div[@class='price']"));
        this.unlockSavings = protractor_1.element(protractor_1.by.xpath("//div[@class='price']/span[2]"));
        this.extColor = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[1]/div[1]/div[2]/span[2]'));
        this.intColor = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[1]/div[2]/div[2]/span[2]'));
        this.engine = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[1]/div[2]'));
        this.estMpg = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[2]/div[2]'));
        this.packageAcc = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[3]/div[2]'));
        this.viewVehDetails = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[2]/div[3]/div[3]/div/span'));
        this.toyotaCareImg = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[3]/div[1]/img'));
        this.toyotaSafetySense = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicle-info"]/div[4]/div[3]/div[2]'));
        this.carousel = protractor_1.element(protractor_1.by.className('carousel'));
        this.vehDetailModalVin = protractor_1.element(protractor_1.by.xpath('//div[@id="vehicle-detail-vin"]'));
        this.vehDetailModalVehicleTitle = protractor_1.element(protractor_1.by.xpath('//div[@id="vehicle-detail-title"]'));
        this.vehDetailModalExtColor = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicleDetailRightDescriptionContainer"]/div[1]/div/span[2]'));
        this.vehDetailModalIntColor = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicleDetailRightDescriptionContainer"]/div[2]/div/span[2]'));
        this.vehDetailModalEstMpg = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicleDetailLeftDescriptionContainer"]/div[1]/div[2]'));
        this.vehDetailModalEngine = protractor_1.element(protractor_1.by.xpath('//div[@class="vehicleDetailLeftDescriptionContainer"]/div[2]/div[2]'));
        this.vehDetailModalTab1 = protractor_1.element.all(protractor_1.by.xpath('//div[@class="mat-tab-labels"]/div[1]'));
        this.vehDetailModalTab2 = protractor_1.element.all(protractor_1.by.xpath('//div[@class="mat-tab-labels"]/div[2]'));
        this.vehDetailModalTab3 = protractor_1.element.all(protractor_1.by.xpath('//div[@class="mat-tab-labels"]/div[3]'));
        this.vehDetailModalTab4 = protractor_1.element.all(protractor_1.by.xpath('//div[@class="mat-tab-labels"]/div[4]'));
        this.vehDetailModalDisclosure = protractor_1.element(protractor_1.by.xpath('//div[@class="Disclosure"]'));
        this.carouselImgRight = protractor_1.element(protractor_1.by.xpath('//img[@alt="arrowRight"]'));
        this.additionalDealerSavings = protractor_1.element(protractor_1.by.xpath('//div[@class="AdditionalDealerSavings flexBox"]'));
        this.sendEstimateToDealer = protractor_1.element(protractor_1.by.xpath('//div[@class="text-button send-estimate-text"]'));
        this.sendEstimateModal = protractor_1.element(protractor_1.by.xpath('//div[@class="smart-price-modal-container ng-star-inserted"]'));
        this.sendEstimateModalPaymentTerm = protractor_1.element(protractor_1.by.css('div.price-sub-con > .prefix'));
        this.sendEstimateModalFirstName = protractor_1.element(protractor_1.by.xpath('//div[@class="customer-name-field"]/con-textfield[1]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.sendEstimateModalLastName = protractor_1.element(protractor_1.by.xpath('//div[@class="customer-name-field"]/con-textfield[2]/div/mat-form-field/div/div[1]/div[3]/input'));
        this.sendEstimateModalZipError = protractor_1.element(protractor_1.by.css('div.customer-zip-field .mat-error'));
        this.sentEstimateModalTitle = protractor_1.element(protractor_1.by.css('.smart-price-modal-header'));
        this.sentEstimateModalreturnToPage = protractor_1.element(protractor_1.by.xpath('//div[@class="return-to-page"]/button'));
        this.startPurchase = protractor_1.element(protractor_1.by.xpath('//div[@class="price-details"]/button[2]'));
        this.rightPaneMenu = protractor_1.element(protractor_1.by.xpath('//div[@class="menu-items ng-star-inserted"]')); //element(by.css("div.right-pane > div.menu-items"));
        this.signInBtn = protractor_1.element(protractor_1.by.xpath("//div[@class='sign-in menu-button ng-star-inserted']")); //element(by.css('.sign-in'));
        this.profileIcon = protractor_1.element(protractor_1.by.xpath('//*[@id="dg-component-nav-menu-desktop"]'));
        this.zipCodeModal = protractor_1.element(protractor_1.by.xpath("//div[@class='zip-code-container']"));
        this.closeZipCodeModal = protractor_1.element(protractor_1.by.xpath('//div[@class="close-btn-container"]'));
        this.confirmZipText = protractor_1.element(protractor_1.by.className('text-button confirm_zip'));
        this.zipTaxDesc = protractor_1.element(protractor_1.by.className('edit_zip_tax_desc'));
        this.chsFinanceBtn = protractor_1.element(protractor_1.by.xpath('//div[@class="finance_buttons"]/button'));
        this.zipCodeModalInput = protractor_1.element(protractor_1.by.id('textInput'));
        this.zipCodeModalDoneBtn = protractor_1.element(protractor_1.by.xpath('//div[@class="zip-container"]/button'));
        this.reviewDealZipCode = protractor_1.element(protractor_1.by.xpath('//span[@class="text-link custom_zip_button"]'));
        this.editDetailsBtn = protractor_1.element(protractor_1.by.className('text-button edit_Details_button'));
        this.ownFinance = protractor_1.element(protractor_1.by.className('own-finance'));
        this.tfsFinance = protractor_1.element(protractor_1.by.className('tfs-finance'));
        this.applyFinanceModal = protractor_1.element(protractor_1.by.className('apply-finance-modal-container'));
        this.acceptApplyFinanceModalBtn = protractor_1.element(protractor_1.by.xpath('//section[@class="apply-finance-modal-body"]/button[1]'));
        this.notNowApplyFinanceModalBtn = protractor_1.element(protractor_1.by.xpath('//section[@class="apply-finance-modal-body"]/button[2]'));
        this.authTfsCb = protractor_1.element(protractor_1.by.xpath('//div[@class="con-checkbox"]/mat-checkbox'));
    }
}
exports.VdpPage = VdpPage;
