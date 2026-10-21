import { test } from '../../fixtures/baseTest';
import { testData } from '../../test-data/testData.data';

test.describe('SCENARIO-การค้นหา', () => {
  test('SOMKID_SEARCH_02-ค้นหาสินค้าที่ไม่มีในรายการ', async ({mainPage, productListPage}) => {
    await mainPage.validateHeader();
    await mainPage.searchProduct(testData.searchName.invalidProductName);
    await productListPage.validateHeaderSearching(testData.searchName.invalidProductName);
    await productListPage.validateSearchResultCount();
    await productListPage.notFoundProductLabel();
  });
});