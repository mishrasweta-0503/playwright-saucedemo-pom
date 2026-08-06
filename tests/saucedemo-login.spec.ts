import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';

//first argument is feature name, send arg is an arrow function
//inside the describe block, define an individual test
//{page} gives you a fresh, isolated browser tab

test.describe('SauceDemo Login', () => {
    test('should log in with valid credentials',async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','secret_sauce');;
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //testing the expected outcome if login is successfull
        await expect(page.getByText('Products')).toBeVisible();
    })
    test('if logged in with invalid credentials',async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('locked_out_user','secret_sauce');
        await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
    })
    test('should add item to cart and navigate to cart page',async({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','secret_sauce');
        await inventoryPage.addBackpackToCart();
        await expect(inventoryPage.cartBadge).toContainText('1');
        await inventoryPage.goToCart();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    })
    test('should complete purchase flow successfully',async({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','secret_sauce');
        await inventoryPage.addBackpackToCart();
        await expect(inventoryPage.cartBadge).toContainText('1');
        await inventoryPage.goToCart();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        await cartPage.proceedToCheckout();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await checkoutPage.fillInformation('Alex', 'Jones', '12345');
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        await checkoutOverviewPage.finishCheckout();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        await expect(checkoutOverviewPage.completeHeader).toHaveText('Thank you for your order!');
    })
})