import { test as baseTest, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

interface MyFixtures {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
}

export const test= baseTest.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    checkoutOverviewPage: async ({ page }, use) => {
        await use(new CheckoutOverviewPage(page));
    },
})

export { expect } from '@playwright/test';