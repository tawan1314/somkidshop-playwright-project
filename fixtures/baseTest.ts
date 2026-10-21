import { test as base, chromium, Page, devices } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ProductListPage } from '../pages/productListPage';
import { ProductInfoPage } from '../pages/productInfoPage';
import { BasketPage } from '../pages/basketPage';

type MyFixtures = {
  mainPage: MainPage;
  productListPage: ProductListPage;
  productInfoPage: ProductInfoPage;
  basketPage: BasketPage;
  page: Page;
};

export const test = base.extend<MyFixtures>({
  page: async ({}, use) => {
    if (process.env.CI) {
      const browserInstance = await chromium.launch({ headless: true });
      const context = await browserInstance.newContext({ ...devices['Pixel 5'] });
      await context.clearCookies({ domain: 'somkidshop.com' });
      const page = await context.newPage();
      await page.goto('https://somkidshop.com/');
      if (await page.locator('div[aria-label="การใช้คุกกี้"]').isVisible()) {
        await page.getByRole('button', { name: 'ยอมรับ', exact: true }).click();
      };
      await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('somkid-consent', 'accepted');
      });
      await use(page);
      await browserInstance.close();
    } else {
      const browser = await chromium.connectOverCDP('http://localhost:9222');
      const defaultContext = browser.contexts()[0];
      const page = defaultContext 
        ? (defaultContext.pages()[0] || await defaultContext.newPage()) 
        : await browser.newPage();
      if (defaultContext) {
        await defaultContext.clearCookies({ domain: 'somkidshop.com' });
      };
      await page.goto('https://somkidshop.com/');
      if (await page.locator('div[aria-label="การใช้คุกกี้"]').isVisible()) {
        await page.getByRole('button', { name: 'ยอมรับ', exact: true }).click();
      };
      await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('somkid-consent', 'accepted');
      });
      await page.reload();
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

  basketPage: async ({ page }, use) => {
    await use(new BasketPage(page));
  },
});

export { expect } from '@playwright/test';