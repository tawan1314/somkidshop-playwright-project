import { test } from '../../fixtures/baseTest';
import { testData } from '../../test-data/testData.data';

test.describe('SCENARIO-ลบสินค้าออกจากตะกร้า', () => {
  test('SOMKID_REMOVE_BASKET_01-ล้างสินค้าในตะกร้า', async ({mainPage, productListPage, productInfoPage, basketPage}) => {
    await mainPage.validateHeader();
    await mainPage.searchProduct(testData.searchName.validProductFullName);
    await productListPage.validateHeaderSearching(testData.searchName.validProductFullName);
    await productListPage.validateSearchResultCount();
    await productListPage.selectProduct();
    await productInfoPage.validateHeader();
    await productInfoPage.clickAddToCartButton();
    await productInfoPage.validateNumberOfItemsInCart(1);
    await productInfoPage.clickCartButton();
    await basketPage.validateHeader();
    await basketPage.verifyProductInfo({
      product: {
        name: testData.productInfo.engine.name,
        price: testData.productInfo.engine.price
      },
      quantity: testData.productInfo.engine.quantity
    });
    await basketPage.verifyPaymentMethods();
    await basketPage.verifyAmount(testData.productInfo.engine.price);
    await basketPage.verifyDeliveryAddress();
    await basketPage.verifyContactInfo();
    await basketPage.validateAddressHintLabel();
    await basketPage.validateSendButton();
    await basketPage.clickClearBasketButton();
    await basketPage.verifyBasketIsEmpty();
  });
});