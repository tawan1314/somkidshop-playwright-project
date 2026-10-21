import { test as base, chromium, Page, devices } from '@playwright/test';
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
    if (process.env.CI) {
      // ถ้ารันบน GitHub Actions (ไม่มีมือถือจริง ให้ใช้ Mobile Emulation)
      const browserInstance = await chromium.launch({ headless: true });
      const context = await browserInstance.newContext({ ...devices['Pixel 5'] });
      const page = await context.newPage();
      await use(page);
      await browserInstance.close();
    } else {
      // ถ้ารันบนคอมตัวเอง (ต่อมือถือจริงผ่านพอร์ต 9222)
      const browser = await chromium.connectOverCDP('http://localhost:9222');
      const defaultContext = browser.contexts()[0];
      const page = defaultContext 
        ? (defaultContext.pages()[0] || await defaultContext.newPage()) 
        : await browser.newPage();
      await use(page);
      await browser.close();
    }
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