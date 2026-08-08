import { test, expect } from '../fixtures/page-fixtures';
import differentCheckouts from '../data/checkoutInputs.json';

test.describe('Data-Driven Checkout Tests', () => {
    for(const checkout of differentCheckouts){
        test(`Should handle ${checkout.testDescription}`,async({page,inventoryPage, cartPage, checkoutPage}) => {
            await page.goto('https://www.saucedemo.com/inventory.html');
            await inventoryPage.addBackpackToCart();
            await inventoryPage.goToCart();
            await cartPage.proceedToCheckout();
            await checkoutPage.fillInformation(checkout.firstName,checkout.lastName,checkout.postalCode);
            await expect(checkoutPage.errorMessage).toContainText(checkout.expectedErrorMessage!)
        })
    }
})