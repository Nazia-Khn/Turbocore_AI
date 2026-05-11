import { test } from '@playwright/test'
import Data from "../TestData/TurboLoginInputs.json"
import { TurboLogin } from "../Pages/Functions/TurboLogin"
import { LoginPage } from "../Pages/locators/turboLoginPage"
let loginPage: TurboLogin

test.describe("Verifying Login Functionality", async () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new TurboLogin(new LoginPage(page))
        await loginPage.navigateToLogin()
    })
    test('Log in Turbocore With valid credentials', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.password)
        await loginPage.assertDashboard()
    })
    test('Log in Turbocore With empty email', async ({ page }) => {
        await loginPage.emailFill(Data.empty)
        await loginPage.EmailErrorMsg()
    })
    test('Verifying Log in Turbocore With valid Email and invalid Password', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.worngPassword)
        await loginPage.wrongPasswordMsg()
    })
    test('Verifying Log in Turbocore With invalid Email and invalid Password', async ({ page }) => {
        await loginPage.emailFill(Data.wrongEmail)
        await loginPage.PasswordFill(Data.worngPassword)
        await loginPage.wrongPasswordMsg()
    })
    test('Verifying Log in Turbocore With valid Email and empty password', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.PasswordFill(Data.empty)
        await loginPage.passwordRequireMsg()
    })
    test('Log in Turbocore With invalid email', async ({ page }) => {
        await loginPage.emailFill(Data.invalidMail)
        await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Special Email characters only', async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        // await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Maximum length email', async ({ page }) => {
        await loginPage.emailFill(Data.maxEmailLength)
        await loginPage.PasswordFill(Data.password)
        // await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Email field Max limit exceed', async ({ page }) => {
        await loginPage.emailFill(Data.maxExeedEamil)
        await loginPage.InvalidEmailMsg()
    })
    test('TC_LP_Verify Edit Email ', async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        await loginPage.EditLink()
    })
    test('TC_LP_Verify "Reset Password" Link', async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        await loginPage.ResetPassword()
    })
    // ------------------------------------------------
    test('Verify Password Masking ',async ({ page }) => {
    
    // ------------------------------------------------//

    test('Verify Password Masking',async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        await loginPage.verifyPasswordMasking(Data.password)
    })
    test('TC_LP_Verify Show/Hide Password Icon', async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        await loginPage.ResetPassword()
    })
    test('TC_LP_Verify Valid Email address_OnForgotPasswordPage', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()

    })
    test('TC_LP_Verify with Invalid OTP', async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        await loginPage.ResetPassword()
        await loginPage.verifyOTP(Data.inValidOTP)
        await loginPage.AssertionForOTP(Data.inValidOTP)
    })
    test('TC_LP_Verify OTP with Empty filed', async ({ page }) => {
        await loginPage.emailFill(Data.specialchars)
        await loginPage.ResetPassword()
        await loginPage.verifyOTP(Data.empty)
        await loginPage.AssertionForOTP(Data.empty)
    })
    test('TC_LP_Verify the OTP more than 6 digit code', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()
        await loginPage.verifyOTP(Data.maxOtp)
        await loginPage.AssertionForOTP(Data.maxOtp)
    })
    test('TC_LP_Verify the OTP less than 6 digit code', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()
        await loginPage.verifyOTP(Data.minOtp)
        await loginPage.AssertionForOTP(Data.minOtp)

    })

    test.only('TC_LP_Verify the Error message after entering too many incorrect password', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()
        const maxLimitOtp = Data.multipleOTPmaxLimit;
        for (let i = 0; i < maxLimitOtp.length; i++) {
            await loginPage.verifyOTP(maxLimitOtp[i])
        }
        await loginPage.AssertionForMultipleOtpMaxLimit();

    })
    test('TC_LP_Verify Resend Button', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()
        await loginPage.verifyResendButton()
    })
    test('TC_LP _Go Back Navigation', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()
        await loginPage.verifyResendButton()
        await loginPage.clickGoBackButton()
    })
    test('TC_LP_Back to Turbocore button', async ({ page }) => {
        await loginPage.emailFill(Data.Email)
        await loginPage.ResetPassword()
        await loginPage.verifyResendButton()
        await loginPage.clickGoBackButton()
        await loginPage.clickBackToTurbocore()
    })
})
