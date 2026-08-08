import {test as setup, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = '.auth/user.json';

setup('authenticate as standard_user', async ({ page }) => { 
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.context().storageState({ path: authFile });
})