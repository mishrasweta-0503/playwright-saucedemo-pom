import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import differentCheckouts from '../data/checkoutInputs.json';

test.describe('Data-Driven Checkout Tests', () => {
    for(const checkout of differentCheckouts){
        test(`Should handle ${checkout.testDescription}`,async({page}) => {
            const loginPage = new LoginPage(page);
            const inventoryPage = new InventoryPage(page);
            const cartPage = new CartPage(page);
            const checkoutPage = new CheckoutPage(page);
            await loginPage.goto();
            await loginPage.login('standard_user','secret_sauce');
            await inventoryPage.addBackpackToCart();
            await inventoryPage.goToCart();
            await cartPage.proceedToCheckout();
            await checkoutPage.fillInformation(checkout.firstName,checkout.lastName,checkout.postalCode);
            await expect(checkoutPage.errorMessage).toContainText(checkout.expectedErrorMessage!)
        })
    }
})