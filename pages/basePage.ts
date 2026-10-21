import { Page, expect} from '@playwright/test';

export class BasePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
   };

   async openSomkidshopWebsite() {
    await this.page.goto('https://somkidshop.com/');
   };

   async acceptCookies() {

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
};