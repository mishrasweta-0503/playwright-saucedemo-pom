//Page Object Model
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    page : Page;
    readonly addBackpackButton: Locator;
    readonly shoppingCartLink: Locator;
    readonly cartBadge: Locator;

    //constructor
    constructor(page : Page) {
        this.page = page;
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }
    //method
    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }
    async goToCart() {
        await this.shoppingCartLink.click();

    }

}