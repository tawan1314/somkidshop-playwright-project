import { Page, expect} from '@playwright/test';

export class BasePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
   };

   async openSomkidshopWebsite() {
    await this.page.goto('https://somkidshop.com/');
    await this.acceptCookies();
   };

   async acceptCookies() {
    if (await this.page.locator('div[aria-label="การใช้คุกกี้"]').isVisible()) {
        await this.page.getByRole('button', { name: 'ยอมรับ', exact: true }).click();
    };
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