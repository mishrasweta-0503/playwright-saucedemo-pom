//Page represents the browser tab, Locator is the tool to find elements

import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    page : Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly errorMessage: Locator;

    constructor(page:Page){
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]')
    }
    async fillInformation(firstName: string, lastName: string, postalCode: string){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }
    async getErrorMessageText(): Promise<string> {
        return (await this.errorMessage.textContent()) || '';
    }
}