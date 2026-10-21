import { Page, expect} from '@playwright/test';
import { BasePage } from './basePage';
import { ReplacementPartInfo, PeripheralsInfo, EngineInfo, WalkBehindTractorInfo, TrackterInfo } from '../types/dataType.type';

export class ProductInfoPage extends BasePage{
    constructor(page: Page) {
        super(page);
    };

    async validateHeader() {
        await expect(this.page.locator('span', {hasText: 'รายละเอียดสินค้า'})).toBeVisible();
    };

    async verifyProductInfo() {
        await expect(this.page.locator('h1[class="thai-wrap font-kanit text-[20px] font-bold leading-[1.4] text-ink"]',{hasText: 'ล้อใบพายกันจม มิตรชาวนา แขนปรับได้ สำหรับแทรกเตอร์คูโบต้า 34-52 แรงม้า'})).toBeVisible();
        await expect(this.page.locator('span[class="font-kanit text-[24px] font-bold leading-[1.3] text-orange"]',{hasText: '฿12,500'})).toBeVisible();
        await expect(this.page.locator('button[aria-label="ผ่อนเริ่มต้นประมาณ 650 บาท/เดือน"]')).toBeVisible();
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
    }

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