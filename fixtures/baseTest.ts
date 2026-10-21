import { test as base, chromium, Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ProductListPage } from '../pages/productListPage';
import { ProductInfoPage } from '../pages/productInfoPage';

type MyFixtures = {
  mainPage: MainPage;
  productListPage: ProductListPage;
  productInfoPage: ProductInfoPage;
  page: Page;
};

export const test = base.extend<MyFixtures>({
  page: async ({}, use) => {
    // จัดการเชื่อมต่อ Real Device ผ่าน CDP ตรงนี้ที่เดียว
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    const defaultContext = browser.contexts()[0];
    const page = defaultContext.pages()[0] || await defaultContext.newPage();
    
    await use(page);

    // ปิดการเชื่อมต่อหลังเทสเสร็จ
    await browser.close();
  },

  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },

  productListPage: async ({ page }, use) => {
    await use(new ProductListPage(page));
  },

  productInfoPage: async ({ page }, use) => {
    await use(new ProductInfoPage(page));
  },
});

export { expect } from '@playwright/test';