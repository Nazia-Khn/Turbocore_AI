import { test } from '@playwright/test'
import Data from "../TestData/TurboLoginInputs.json"
import { TurboLogin } from "../Pages/Functions/TurboLogin"
import { LoginPage } from "../Pages/locators/turboLoginPage"


test.describe("Verifying Login Functionality", async () => {
    test('Log in Turbocore With valid credentials', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.password)
        await loginPage.assertDashboard()
    })
    test('Log in Turbocore With empty email', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.emptyEmail)
        await loginPage.EmailErrorMsg()
    })
    test('Verifying Log in Turbocore With valid Email and invalid Password', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.worngPassword)
        await loginPage.wrongPasswordMsg()
    })
    test('Verifying Log in Turbocore With invalid Email and invalid Password', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.wrongEmail)
        await loginPage.PasswordFill(Data.worngPassword)
        await loginPage.wrongPasswordMsg()
    })
    test('Verifying Log in Turbocore With valid Email and empty password', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.emptyPassword)
        await loginPage.passwordRequireMsg()
    })
    test.only('Log in Turbocore With invalid email', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.invalidMail)
        await loginPage.InvalidEmailMsg()
    })
})
