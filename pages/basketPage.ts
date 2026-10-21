import { Page, expect} from '@playwright/test';
import { BasePage } from './basePage';
import { BasketInfo } from '../types/dataType.type';

export class BasketPage extends BasePage{
    constructor(page: Page) {
        super(page);
    };

    async validateHeader() {
        await expect(this.page.locator('h1', {hasText: 'ตะกร้าจัดชุด'})).toBeVisible();
        await expect(this.page.locator('p', {hasText: 'รวมรายการที่สนใจไว้ก่อน แล้วส่งให้ร้านสรุปราคาให้'})).toBeVisible();
    };

    async verifyProductInfo(basketInfo: BasketInfo) {
        const productLocator = this.page.locator('a', {hasText: basketInfo.product.name});
        await expect(productLocator).toBeVisible();
        const priceLocator = this.page.locator('span[class="font-kanit text-sm font-semibold text-navy"]', {hasText: `${basketInfo.product.price} บาท`});
        await expect(priceLocator).toBeVisible();
        const quantityLocator = this.page.locator('span', {hasText: basketInfo.quantity.toString()}).first();
        await expect(quantityLocator).toBeVisible();
    };

    async verifyPaymentMethods() {
        await expect(this.page.locator('span', {hasText: 'วิธีชำระ'})).toBeVisible();
        await expect(this.page.getByRole('button', {name: 'ซื้อเงินสด', exact: true})).toBeVisible();
        await expect(this.page.getByRole('button', {name: 'ผ่อน', exact: true})).toBeVisible();
    };

    async verifyAmount(amount: string) {
        const calculatedAmount = await this.calculateAmount(amount, 1);
        await expect(this.page.locator('span', {hasText: 'ยอดรวมโดยประมาณ'})).toBeVisible();
        await expect(this.page.locator('span[data-testid="cart-total"]', {hasText: `${calculatedAmount} บาท`})).toBeVisible();
    };

    async verifyDeliveryAddress() {
        await expect(this.page.locator('h2', {hasText: 'ส่งของไปที่ไหน'})).toBeVisible();
        await expect(this.page.locator('p', {hasText: 'เลือกอำเภอ แล้วเลือกตำบล ไว้คิดค่าส่งให้คร่าวๆ'})).toBeVisible();
        await expect(this.page.locator('button[aria-label="ที่อยู่ส่งของ"]')).toBeVisible();
        await expect(this.page.locator('button', {hasText: 'มารับเองที่ร้าน'})).toBeVisible();
    };

    async verifyContactInfo() {
        await expect(this.page.locator('label', {hasText: 'เบอร์โทรให้ร้านโทรกลับ (ไม่บังคับ)'})).toBeVisible();
        await expect(this.page.locator('p', {hasText: 'ใส่เบอร์ไว้ ร้านโทรกลับได้ ถ้าส่ง LINE ไม่ผ่าน'})).toBeVisible();
        await expect(this.page.locator('input[id="callback-phone"]')).toBeVisible();
    };

    async validateAddressHintLabel() {
        await expect(this.page.locator('p[data-testid="address-hint"]')).toBeVisible();
    };

    async validateSendButton() {
        await expect(this.page.locator('button', {hasText: 'ส่งรายการ · ซื้อเงินสด'})).toBeVisible();
    };

    async clickSendButton() {
        await this.validateSendButton();
        await this.page.locator('button', {hasText: 'ส่งรายการ · ซื้อเงินสด'}).click({delay: 500});
    };

    async validateClearBasketButton() {
        await expect(this.page.locator('button', {hasText: 'ล้างตะกร้า'})).toBeVisible();
    };

    async clickClearBasketButton() {
        await this.validateClearBasketButton();
        await this.page.locator('button', {hasText: 'ล้างตะกร้า'}).click({delay: 500});
    };

    async verifyBasketIsEmpty() {
        await expect(this.page.locator('p', {hasText: 'ตะกร้ายังว่าง เลือกเครื่อง โครง และอุปกรณ์ใส่รวมกันได้ แล้วส่งให้ร้านทีเดียว'})).toBeVisible();
        await expect(this.page.locator('a', {hasText: 'ไปเลือกรถไถเดินตาม'})).toBeVisible();
    };
};