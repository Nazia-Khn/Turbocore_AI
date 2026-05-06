import { test } from '@playwright/test'
import Data from '../TestData/TurboLoginInputs.json'
import { TurboLogin } from '../Pages/Functions/TurboLogin'
import { LoginPage } from '../Pages/locators/turboLoginPage'

test.describe("Verifying Sign up Functionality", async () => {
    test('Verify sign up link visibility', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
         await loginPage.navigateToLogin()
        await loginPage.clickSignUpLink();
        await loginPage.verifySignUpLink();
    })
})