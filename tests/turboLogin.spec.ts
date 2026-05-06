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
    test('Log in Turbocore With invalid email', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.invalidMail)
        await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Special Email characters only', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.specialchars)
        await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Maximum length email', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.maxEmailLength)
        await loginPage.PasswordFill(Data.password)
        // await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Email field Max limit exceed', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))

        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.maxExeedEamil)
        await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Verify Edit Email Functionality', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.specialchars)
        await loginPage.EditLink()
    })
    test('TC_LP_Verify "Reset Password" Link', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        await loginPage.navigateToLogin()
        await loginPage.emailFill(Data.specialchars)
        await loginPage.ResetLink()
    })
})
