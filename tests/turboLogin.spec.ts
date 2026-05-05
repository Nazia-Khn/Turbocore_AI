import { test } from '@playwright/test'
import Data from "../TestData/TurboLoginInputs.json"
import { TurboLogin } from "../Pages/Functions/TurboLogin"
import { LoginPage } from "../Pages/locators/turboLoginPage"


test.describe("Verifying Login Functionality", async () => {
    test('Log in Turbocore With valid crede', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.password)
        await loginPage.assertDashboard()
    })
    test.only('Log in Turbocore With empty email', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.emptyEmail)
        await loginPage.EmailErrorMsg()
    })
})
