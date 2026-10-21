import { Page, expect} from '@playwright/test';

export class BasePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
   };

   async capturePage(caseNo: string, page: string, filename: string) {
    await this.page.screenshot({
        path: `resultPictures/${caseNo}/${page}/${filename}`,
        fullPage: true
    });
   };

   async calculateAmount(amount: string, quantity: number): Promise<string> {
    const amountNumber = parseFloat(amount.replace(/,/g, ''));
    const totalAmount = amountNumber * quantity;
    return totalAmount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
   };

   async swipe(direction: 'up' | 'down' | 'left' | 'right', distance: number, locator: string) {
        switch (direction) {
            case 'up':
                await this.page.locator(locator).evaluate((element, distance) => {
                    element.scrollBy(0, -distance);
                }, distance);
                break;
            case 'down':
                await this.page.locator(locator).evaluate((element, distance) => {
                    element.scrollBy(0, distance);
                }, distance);
                break;
            case 'left':
                await this.page.locator(locator).evaluate((element, distance) => {
                    element.scrollBy(-distance, 0);
                }, distance);
                break;
            case 'right':
                await this.page.locator(locator).evaluate((element, distance) => {
                    element.scrollBy(distance, 0);
                }, distance);
                break;
        };
    };
};