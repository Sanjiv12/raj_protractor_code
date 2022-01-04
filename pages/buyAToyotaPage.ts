import { element, by } from "protractor";
export class BuyAToyotaPage {
    public selectButton = element(by.xpath('//*[@id="modal-root"]/div[3]/div/div[1]/section/div/ul/li/button'));
    public continueButton = element(by.xpath('//*[@id="modal-root"]/div[3]/div/div[1]/section/div[2]/div[2]/button'));
    public zipCodeField = element(by.xpath('//*[@id="main-navigation"]/nav/div[1]/div/ul[2]/li[3]/span[2]/input'));
}