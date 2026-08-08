//Page Object Model
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    page : Page;
    readonly addBackpackButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly shoppingCartLink: Locator;
    readonly cartBadge: Locator;

    //constructor
    constructor(page : Page) {
        this.page = page;
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }
    //method
    async addBackpackToCart() {
        if(await this.removeBackpackButton.isVisible()){
            await this.removeBackpackButton.click()
        }
        await this.addBackpackButton.click();
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }

}