import { test } from '../../fixtures/baseTest';
import { testData } from '../../test-data/testData.data';

test.describe('SCENARIO-รูปภาพของสินค้า', () => {
  test('SOMKID_PRODUCT_PIC_01-รูปภาพของสินค้า', async ({mainPage, productListPage, productInfoPage}) => {
    await mainPage.validateHeader();
    await mainPage.searchProduct(testData.searchName.validProductFullName);
    await productListPage.validateHeaderSearching(testData.searchName.validProductFullName);
    await productListPage.validateSearchResultCount();
    await productListPage.selectProduct();
    await productInfoPage.validateHeader();
  });
});