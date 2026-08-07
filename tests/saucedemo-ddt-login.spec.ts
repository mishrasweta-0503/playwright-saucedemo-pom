import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import differentUsers from '../data/users.json';

test.describe('Data-Driven Login Tests', () => {
    for(const user of differentUsers){
        test(`Should handle ${user.testDescription}`,async({page}) => {
            const loginPage = new LoginPage(page);
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