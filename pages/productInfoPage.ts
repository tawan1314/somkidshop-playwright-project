import { Page, expect} from '@playwright/test';
import { BasePage } from './basePage';
import { ReplacementPartInfo, PeripheralsInfo, EngineInfo, WalkBehindTractorInfo, TrackterInfo } from '../types/dataType.type';

export class ProductInfoPage extends BasePage{
    constructor(page: Page) {
        super(page);
    };

    get productDetailLocator() { return this.page.locator('span', {hasText: 'รายละเอียดสินค้า'}) };
    get productNameLocator() { return this.page.locator('h1[class="thai-wrap font-kanit text-[20px] font-bold leading-[1.4] text-ink"]') };
    get productDescLocator() { return this.page.locator('div[class="font-kanit text-[14px] font-normal leading-[1.4] text-ink"]') };
    get productPriceLocator() { return this.page.locator('span[class="font-kanit text-[24px] font-bold leading-[1.3] text-orange"]') };
    get productInstallmentLocator() { return this.page.locator('button[aria-label="ผ่อนเริ่มต้นประมาณ 650 บาท/เดือน"]') };
    get productBrandLocator() { return this.page.locator('dt', {hasText: 'ยี่ห้อ'}).locator('xpath=following-sibling::dd') };
    // EngineInfo
    get productEngineSeriesLocator() { return this.page.locator('dt', {hasText: 'ซีรีส์'}).locator('xpath=following-sibling::dd') };
    get productEngineModelLocator() { return this.page.locator('dt', {hasText: 'รุ่น'}).locator('xpath=following-sibling::dd') };
    get productEnginePowerLocator() { return this.page.locator('dt', {hasText: 'แรงม้า'}).locator('xpath=following-sibling::dd') };
    get productEngineStartingSystemLocator() { return this.page.locator('dt', {hasText: 'ระบบสตาร์ท'}).locator('xpath=following-sibling::dd') };
    // ReplacementPartInfo
    get productPartOeTypeLocator() { return this.page.locator('dt', {hasText: 'แท้หรือเทียบ'}).locator('xpath=following-sibling::dd') };
    get productPartCodeLocator() { return this.page.locator('dt', {hasText: 'รหัสอะไหล่'}).locator('xpath=following-sibling::dd') };
    get productPartTypeLocator() { return this.page.locator('dt', {hasText: 'ประเภทอะไหล่'}).locator('xpath=following-sibling::dd') };
    get productPartUseWithModelLocator() { return this.page.locator('dt', {hasText: 'ใช้กับรุ่น'}).locator('xpath=following-sibling::dd') };
    get productPartUseWithCarTypeLocator() { return this.page.locator('dt', {hasText: 'ใช้กับรถ'}).locator('xpath=following-sibling::dd') };
    // PeripheralsInfo
    get productPeripheralsBrandLocator() { return this.page.locator('dt', {hasText: 'ยี่ห้อ'}).locator('xpath=following-sibling::dd') };
    get productPeripheralsTypeLocator() { return this.page.locator('dt', {hasText: 'ชนิดอุปกรณ์'}).locator('xpath=following-sibling::dd') };
    // WalkBehindTractorInfo
    get productWalkBehindTractorPowerLocator() { return this.page.locator('dt', {hasText: 'แรงม้า'}).locator('xpath=following-sibling::dd') };
    get productWalkBehindTractorModelLocator() { return this.page.locator('dt', {hasText: 'ยี่ห้อโครง'}).locator('xpath=following-sibling::dd') };
    get productWalkBehindTractorEngineBrandLocator() { return this.page.locator('dt', {hasText: 'ยี่ห้อเครื่อง'}).locator('xpath=following-sibling::dd') };
    // TrackterInfo
    get productTrackterModelLocator() { return this.page.locator('dt', {hasText: 'รุ่น'}).locator('xpath=following-sibling::dd') };
    get productTrackterPowerLocator() { return this.page.locator('dt', {hasText: 'แรงม้า'}).locator('xpath=following-sibling::dd') };
    get productTrackterDriveTrainLocator() { return this.page.locator('dt', {hasText: 'ระบบขับเคลื่อน'}).locator('xpath=following-sibling::dd') };

    get productPictureLocator() { return this.page.locator('div[data-product-gallery]') };
    get productPictureFullScreenLocator() { return this.page.getByRole('dialog', { name: 'รูปของ' }) };

    async validateHeader() {
        await expect(this.productDetailLocator).toBeVisible();
    };

    async verifyEngineInfo(productInfo: EngineInfo) {
        await expect(this.productNameLocator.filter({hasText: productInfo.name})).toBeVisible();
        await expect(this.productPriceLocator.filter({hasText: `฿${productInfo.price}`})).toBeVisible();
        await expect(this.productBrandLocator.filter({hasText: productInfo.brand})).toBeVisible();
        await expect(this.productEngineSeriesLocator.filter({hasText: productInfo.series})).toBeVisible();
        await expect(this.productEngineModelLocator.filter({hasText: productInfo.model})).toBeVisible();
        await expect(this.productEnginePowerLocator.filter({hasText: productInfo.power})).toBeVisible();
        await expect(this.productEngineStartingSystemLocator.filter({hasText: productInfo.startingSystem})).toBeVisible();
    };

    async verifyPartInfo(productInfo: ReplacementPartInfo) {
        await expect(this.productNameLocator.filter({hasText: productInfo.name})).toBeVisible();
        await expect(this.productPriceLocator.filter({hasText: `฿${productInfo.price}`})).toBeVisible();
        await expect(this.productBrandLocator.filter({hasText: productInfo.brand})).toBeVisible();
        await expect(this.productPartCodeLocator.filter({hasText: productInfo.oeType})).toBeVisible();
        await expect(this.productPartTypeLocator.filter({hasText: productInfo.code})).toBeVisible();
        await expect(this.productPartUseWithModelLocator.filter({hasText: productInfo.type})).toBeVisible();
        await expect(this.productPartUseWithCarTypeLocator.filter({hasText: productInfo.useWithModel})).toBeVisible();
    };

    async verifyPeripheralsInfo(productInfo: PeripheralsInfo) {
        await expect(this.productNameLocator.filter({hasText: productInfo.name})).toBeVisible();
        await expect(this.productPriceLocator.filter({hasText: `฿${productInfo.price}`})).toBeVisible();
        await expect(this.productBrandLocator.filter({hasText: productInfo.brand})).toBeVisible();
        await expect(this.productPeripheralsBrandLocator.filter({hasText: productInfo.brand})).toBeVisible();
        await expect(this.productPeripheralsTypeLocator.filter({hasText: productInfo.type})).toBeVisible();
    };

    async verifyWalkBehindTractorInfo(productInfo: WalkBehindTractorInfo) {
        await expect(this.productNameLocator.filter({hasText: productInfo.name})).toBeVisible();
        await expect(this.productPriceLocator.filter({hasText: `฿${productInfo.price}`})).toBeVisible();
        await expect(this.productBrandLocator.filter({hasText: productInfo.brand})).toBeVisible();
        await expect(this.productWalkBehindTractorModelLocator.filter({hasText: productInfo.model})).toBeVisible();
        await expect(this.productWalkBehindTractorPowerLocator.filter({hasText: productInfo.power})).toBeVisible();
        await expect(this.productWalkBehindTractorEngineBrandLocator.filter({hasText: productInfo.engineBrand})).toBeVisible();
    };

    async verifyTrackterInfo(productInfo: TrackterInfo) {
        await expect(this.productNameLocator.filter({hasText: productInfo.name})).toBeVisible();
        await expect(this.productPriceLocator.filter({hasText: `฿${productInfo.price}`})).toBeVisible();
        await expect(this.productBrandLocator.filter({hasText: productInfo.brand})).toBeVisible();
        await expect(this.productTrackterModelLocator.filter({hasText: productInfo.model})).toBeVisible();
        await expect(this.productTrackterPowerLocator.filter({hasText: productInfo.power})).toBeVisible();
        await expect(this.productTrackterDriveTrainLocator.filter({hasText: productInfo.driveTrain})).toBeVisible();
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

    async clickProductPicture() {
        await expect(this.productPictureLocator).toBeVisible();
        await this.productPictureLocator.click({delay: 500});
    };

    async getProductPictureCount(): Promise<number> {
        const productPictureCountLocator = 'span[data-gallery-counter]';
        await expect(this.page.locator(productPictureCountLocator)).toBeVisible();
        const productPictureCountText = await this.page.locator(productPictureCountLocator).textContent();
        const productPictureCount = parseInt(productPictureCountText?.split('/')[1] || '0', 10);
        return productPictureCount;
    }
    async swipeProductPictures(direction: 'left' | 'right', distance: number) {
        const productPictureCount = await this.getProductPictureCount();
        await this.clickProductPicture();
        for (let i = 0; i < productPictureCount - 1; i++) {
            await this.swipe(direction, distance, 'div');
            await this.page.waitForTimeout(500);
        };
    };

    async clickNextProductPictureButton() {
        const nextButtonLocator = 'button[aria-label="รูปถัดไป"]';
        await expect(this.page.locator(nextButtonLocator)).toBeVisible();
        await this.page.locator(nextButtonLocator).click({delay: 500});
    };

    async clickPreviousProductPictureButton() {
        const previousButtonLocator = 'button[aria-label="รูปก่อนหน้า"]';
        await expect(this.page.locator(previousButtonLocator)).toBeVisible();
        await this.page.locator(previousButtonLocator).click({delay: 500});
    };

    async clickCloseProductPictureButton() {
        const closeButtonLocator = 'button[aria-label="ปิด"]';
        await expect(this.page.locator(closeButtonLocator)).toBeVisible();
        await this.page.locator(closeButtonLocator).click({delay: 500});
    };

    async verifyProductPictures() {
        const productPictureCount = await this.getProductPictureCount();
        await this.clickProductPicture();
        for (let i = 0; i < productPictureCount - 1; i++) {
            await this.validateProductPicturesIsVisible();
            await this.clickNextProductPictureButton();
            await this.page.waitForTimeout(500);
        };
    };

    async validateProductPicturesIsVisible() {
        await expect(this.productPictureFullScreenLocator).toBeVisible({timeout: 3000});
    };

    async validateProductPicturesIsNotVisible() {
        await expect(this.productPictureFullScreenLocator).not.toBeVisible({timeout: 3000});
    };
};