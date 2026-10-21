import { Page, expect} from '@playwright/test';
import { BasePage } from './basePage';

export class MainPage extends BasePage{
    constructor(page: Page) {
        super(page);
    };

    async validateHeader() {
        await expect(this.page.locator('span', {hasText: 'somkidshop'}).first()).toBeVisible();
        await expect(this.page.locator('span', {hasText: 'สมคิดช็อป'}).first()).toBeVisible();
    };

    async validateSearchField() {
        await expect(this.page.locator('input[aria-label="ค้นหาสินค้า"]')).toBeVisible();
    };

    async validateSearchButton() {
        await expect(this.page.locator('button[aria-label="เริ่มค้นหา"]')).toBeVisible();
    };

    async clickSearchButton() {
        this.validateSearchButton()
        await this.page.locator('button[aria-label="เริ่มค้นหา"]').click({delay: 300});
    };

    async searchProduct(product: string) {
        await this.validateSearchField();
        await this.page.locator('input[aria-label="ค้นหาสินค้า"]').fill(product);
        await this.clickSearchButton();
    };

    async validateCategory() {
        await expect(this.page.locator('nav[data-testid="category-chips"]')).toBeVisible();
        const categoryChips = this.page.locator('[data-testid="category-chips"] a');
        const categoryName = await categoryChips.evaluateAll((links) => 
        links.map((link) => {
            const clone = link.cloneNode(true) as HTMLElement;
            const span = clone.querySelector('span');
            if (span) span.remove();
            return clone.innerText.trim();
            // clone.querySelector('span')?.remove();
            // return clone.textContent?.trim() || '';
        }));

        const expectedCategories = [
            'แทรกเตอร์',
            'รถไถเดินตาม',
            'เครื่องยนต์',
            'อุปกรณ์ต่อพ่วง',
            'อะไหล่',
            'มือสอง'
        ];

        expect(categoryName).toEqual(expectedCategories);
    };

    async selectCategory(category: string) {
        await this.validateCategory()
        await this.page.locator('a', {hasText: category}).click();
    };

    async validateSellAndTurnButton() {
        await expect(this.page.locator('a[data-testid="sell-chip"]', {hasText: 'ขายให้ร้าน / เทิร์น'})).toBeVisible();
    };

    async clickSellAndTurnButton() {
        await this.validateSellAndTurnButton();
        await this.page.locator('a', {hasText: 'ขายให้ร้าน / เทิร์น'}).click();
    };

    async shopInfomation() {
        await expect(this.page.locator('section[data-testid="shop-trust"]')).toBeVisible();
    };

    async validateReviewSection() {
        await expect(this.page.locator('section[data-testid="latest-reviews"]')).toBeVisible();
        await expect(this.page.locator('h2', {hasText: 'รีวิวล่าสุด'})).toBeVisible();
        await expect(this.page.locator('a', {hasText: 'ดูทั้งหมด'}).nth(0)).toBeVisible();
    };

    async clickViewAllReviewSection() {

    };

    async validateSecondHandProductSection() {
        await expect(this.page.locator('h2', {hasText: 'มือสองเข้าใหม่'})).toBeVisible();
        await expect(this.page.locator('a', {hasText: 'ดูทั้งหมด'}).nth(1)).toBeVisible();
    };

    async clickViewAllSecondHandProductSection() {

    };

    async validateFirstHandProductSection() {
        await expect(this.page.locator('h2', {hasText: 'รถไถเดินตาม มือ 1'})).toBeVisible();
        await expect(this.page.locator('a', {hasText: 'ดูทั้งหมด'}).nth(2)).toBeVisible();
    };

    async clickViewAllFirstHandProductSection() {

    };

    async clickMainMenuTab(mainMenuName: string) {
        await expect(this.page.locator('a', {hasText: mainMenuName})).toBeVisible();
        await this.page.locator('a', {hasText: mainMenuName}).click({delay: 300});
    };
};