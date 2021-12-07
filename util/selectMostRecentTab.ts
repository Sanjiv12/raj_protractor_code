import { browser } from 'protractor';

export async function selectMostRecentTab() {
    await browser.getAllWindowHandles().then(async function (handles) {
        const newestWindow = handles[handles.length - 1];
        await browser.switchTo().window(newestWindow);
    });
}