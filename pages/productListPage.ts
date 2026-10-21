import { Page, expect} from '@playwright/test';
import { BasePage } from './basePage';
import { ProductListInfo } from '../types/dataType.type';

export class ProductListPage extends BasePage{
    constructor(page: Page) {
        super(page);
    };

    async validateHeaderAllProduct() {
        await expect(this.page.locator('h1', {hasText: 'สินค้าทั้งหมด'})).toBeVisible();
    };

    async validateHeaderCategory(headerName: string) {
        await expect(this.page.locator('h1', {hasText: headerName}).first()).toBeVisible();
    };

    async validateHeaderSearching(searchingName: string) {
        const headerSearching = new RegExp(`ผลการค้นหา\\s+"${searchingName}"`)
        await expect(this.page.locator('h1', {hasText: headerSearching})).toBeVisible();
    };

    async validateProductFilter() {
        const filterButtons = this.page.locator('div.-mx-3\\.5.flex.gap-2 button').first();
        const buttonTexts = await filterButtons.allInnerTexts();
        const cleanedTexts = buttonTexts.map(text => text.trim());

        expect(cleanedTexts).toEqual(['มือ 1', 'มือสอง', 'โปรโมชั่น', 'ผ่อนได้']);
    };

    async validateProductSort() {
        const filterButtons = this.page.locator('div.-mx-3\\.5.flex.gap-2 button').nth(1);
        const buttonTexts = await filterButtons.allInnerTexts();
        const cleanedTexts = buttonTexts.map(text => text.trim());

        expect(cleanedTexts).toEqual(['มาใหม่ล่าสุด', 'ราคาน้อยไปมาก', 'ราคามากไปน้อย']);
    };

    async validateSearchResultCount() {
        const productCount = await this.page.locator('.rounded-card.bg-white.shadow-card').count();
        const productNumberLabel = new RegExp(`พบ\\s+${productCount}\\s+รายการ`);
        await expect(this.page.locator('p', {hasText: productNumberLabel})).toBeVisible();
    };

    async validateProductInfo(productInfo: ProductListInfo) {
        await expect(this.page.locator('h3', {hasText: productInfo.name})).toBeVisible();
        await expect(this.page.locator('span', {hasText: productInfo.price})).toBeVisible();
    };

    async selectProduct(productInfo?: ProductListInfo) {
        if (!productInfo) {
            await this.page.locator('.rounded-card.bg-white.shadow-card').first().click();
        } else {
            await this.validateProductInfo(productInfo);
            await this.page.locator('h3', {hasText: productInfo.name}).click();
        };
    };

    async notFoundProductLabel() {
        await expect(this.page.locator('p', {hasText: 'ไม่พบสินค้าที่ค้นหา ลองพิมพ์ยี่ห้อหรือรุ่นสั้นลง หรือทักไลน์ร้านให้ช่วยหาได้เลย'})).toBeVisible();
    };
};