import { test } from '../../fixtures/baseTest';
import { testData } from '../../test-data/testData.data';

test.describe('SCENARIO-การค้นหา', () => {
  test('SOMKID_SEARCH_01-ค้นหาสินค้าด้วยชื่อของสินค้าที่ถูกต้อง', async ({mainPage, productListPage}) => {
    await mainPage.validateHeader();
    await mainPage.searchProduct(testData.searchName.validProductFullName);
    await productListPage.validateHeaderSearching(testData.searchName.validProductFullName);
    await productListPage.validateSearchResultCount();
    await productListPage.validateProductInfo(testData.productInfo.engine);
  });
});