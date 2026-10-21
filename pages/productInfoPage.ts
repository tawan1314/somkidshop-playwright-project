import { Page, expect} from '@playwright/test';
import { BasePage } from './basePage';
import { ReplacementPartInfo, PeripheralsInfo, EngineInfo, WalkBehindTractorInfo, TrackterInfo } from '../types/dataType.type';

export class ProductInfoPage extends BasePage{
    constructor(page: Page) {
        super(page);
    };

    get productDetailLocator() { return this.page.locator('span', {hasText: 'รายละเอียดสินค้า'}) };
    get productNameLocator() { return this.page.locator('h1[class="thai-wrap font-kanit text-[20px] font-bold leading-[1.4] text-ink"]') };
    get productPriceLocator() { return this.page.locator('span[class="font-kanit text-[24px] font-bold leading-[1.3] text-orange"]') };
    get productInstallmentLocator() { return this.page.locator('button[aria-label="ผ่อนเริ่มต้นประมาณ 650 บาท/เดือน"]') };

    async validateHeader() {
        await expect(this.productDetailLocator).toBeVisible();
    };

    async verifyProductInfo(productInfo: ReplacementPartInfo | PeripheralsInfo | EngineInfo | WalkBehindTractorInfo | TrackterInfo) {
        await expect(this.productNameLocator.filter({hasText: productInfo.name})).toBeVisible();
        await expect(this.productPriceLocator.filter({hasText: productInfo.price})).toBeVisible();
        // await expect(this.productInstallmentLocator).toBeVisible();
        // await expect(this.page.locator('h1[class="font-kanit text-[24px] font-bold leading-[1.3] text-orange"]',{hasText: '฿12,500'})).toBeVisible();
        // await expect(this.page.locator('h1[class="font-kanit text-[24px] font-bold leading-[1.3] text-orange"]',{hasText: '฿12,500'})).toBeVisible();
    };

    async clickBackButton() {
        await expect(this.page.locator('button[aria-label="ย้อนกลับ"]')).toBeVisible();
        await this.page.locator('button[aria-label="ย้อนกลับ"]').click({delay: 500});
    };

    async validateAddToCartButton() {
        await expect(this.page.locator('button[aria-label="ใส่ตะกร้า"]')).toBeVisible();
    };

    async clickAddToCartButton() {
        await this.validateAddToCartButton();
        await this.page.locator('button[aria-label="ใส่ตะกร้า"]').click({delay: 500});
        await this.validateViewCartButton();
    };

    async validateViewCartButton() {
        await expect(this.page.locator('a[aria-label="ดูตะกร้า"]')).toBeVisible();
    };

    async clickViewCartButton() {
        await this.validateViewCartButton();
        await this.page.locator('a[aria-label="ดูตะกร้า"]').click({delay: 500});
    };

    async validateNumberOfItemsInCart(expectedCount: number) {
        const cartCountLocator = this.page.locator('span[class="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 font-kanit text-[14px] font-bold leading-none text-navy"]');
        await expect(cartCountLocator).toHaveText(expectedCount.toString());
    };

    async validateCartButton() {
        await expect(this.page.locator('a[aria-label="ตะกร้าจัดชุด"]')).toBeVisible();
    };

    async clickCartButton() {
        await this.validateCartButton();
        await this.page.locator('a[aria-label="ตะกร้าจัดชุด"]').click({delay: 500});
    };
};