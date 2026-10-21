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
};