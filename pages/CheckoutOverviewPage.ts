import { Page, Locator } from "@playwright/test";

export class CheckoutOverviewPage {
    page : Page;
    readonly finishButton: Locator;
    readonly completeHeader: Locator;

    constructor(page:Page){
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('.complete-header');
    }
    async finishCheckout(){
        await this.finishButton.click()
    }
}