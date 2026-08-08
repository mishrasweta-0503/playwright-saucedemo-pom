import { test, expect } from '../fixtures/page-fixtures';
import differentUsers from '../data/users.json';

test.use({ storageState: { cookies: [], origins: [] } }); //reset storage state so login tests run in a fresh, logged-out context

test.describe('Data-Driven Login Tests', () => {
    for(const user of differentUsers){
        test(`Should handle ${user.testDescription}`,async({page,loginPage}) => {
            await loginPage.goto();
            await loginPage.login(user.username,user.password);
            if(user.shouldPass == true){
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
            } else {
                await expect(loginPage.errorMessage).toContainText(user.expectedErrorMessage!)
            }
        })
    }
})