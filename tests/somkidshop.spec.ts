import { test, chromium } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ProductListPage } from '../pages/productListPage';
import { ProductInfoPage } from '../pages/productInfoPage';

test.describe('Validate Somkimshop mainpage', () => {
  let mainPage: MainPage;
  let productListPage: ProductListPage;
  let productInfoPage: ProductInfoPage;

  test('Test SomkidShop on Real Android Device', async () => {
    // เชื่อมต่อกับ Chrome บนมือถือผ่านพอร์ต Debugging
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    const defaultContext = browser.contexts()[0];
    const page = await defaultContext.pages()[0] || await defaultContext.newPage();

    mainPage = new MainPage(page);
    productListPage = new ProductListPage(page);
    productInfoPage = new ProductInfoPage(page);
    await page.goto('https://somkidshop.com/');

    await mainPage.validateHeader();
    await mainPage.searchProduct('คูโบต้า');
    await productListPage.validateSearchResultCount();
    await productListPage.selectProduct();
    await productInfoPage.validateHeader();
    // await productInfoPage.verifyProductInfo();
    await productInfoPage.clickBackButton();
    await mainPage.clickMainMenuTab('หน้าแรก');
    await mainPage.validateSellAndTurnButton();
    await mainPage.selectCategory('แทรกเตอร์');
    await productListPage.validateHeaderCategory('แทรกเตอร์');
    await mainPage.clickMainMenuTab('หน้าแรก');
    await mainPage.validateReviewSection();
    await mainPage.validateSecondHandProductSection();
    await mainPage.validateFirstHandProductSection();
    await mainPage.selectCategory('สินค้าทั้งหมด');
    await productListPage.validateHeaderAllProduct();
    await productListPage.validateSearchResultCount();
    await productListPage.selectProduct();
    await productInfoPage.validateHeader();
    await productInfoPage.verifyProductInfo();
    await productInfoPage.clickBackButton();
    await browser.close();
  });
});