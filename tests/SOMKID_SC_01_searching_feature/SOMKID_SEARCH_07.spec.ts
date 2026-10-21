import { test } from '../../fixtures/baseTest';
import { testData } from '../../test-data/testData.data';

test.describe('SCENARIO-การค้นหา', () => {
  test('SOMKID_SEARCH_07-ค้นหาสินค้าโดยเลือกแท็บประเภทสินค้า (category chip)', async ({mainPage, productListPage}) => {
    await mainPage.validateHeader();
    await mainPage.selectCategory(testData.categoryName.trackter);
    await productListPage.validateHeaderCategory(testData.categoryName.trackter);
    await productListPage.validateSearchResultCount();
    await productListPage.validateProductInfo(testData.productInfo.trackter);
  });
});