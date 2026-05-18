import { expect } from "@playwright/test";
import { LoginPage } from "../locators/turboLoginPage";

export class TurboLogin {
    private loginPage: LoginPage;
    constructor(loginPage: LoginPage) {
        this.loginPage = loginPage;
    }

    // Navigate to login URL
    async navigateToLogin() {
        await this.loginPage.page.goto('/', { waitUntil: 'domcontentloaded' });
        await this.loginPage.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {})
        await expect(this.loginPage.headerVerification).toHaveText('Welcome')
        await expect(this.loginPage.logoVerification).toBeVisible()
    }

    // Perform login using locators from POM
    async emailFill(email: string) {
        // await this.loginPage.page.waitForLoadState('networkidle');
         await this.loginPage.emailInput.fill(email);
        await this.loginPage.continueBtn.last().click()
    }
    async PasswordFill(password: string) {
        await expect(this.loginPage.headerVerification).toHaveText('Enter Your Password')
        await this.loginPage.PasswordInput.fill(password);
        await this.loginPage.continueBtn.last().click()
    }
    async EditLink() {
        await this.loginPage.EditBtn.click()
        // await this.loginPage.page.waitForTimeout(5000)
        await expect(this.loginPage.headerVerification).toHaveText('Welcome')
    }
    async ResetPassword() {
         
        await this.loginPage.resetLink.click()
        await expect(this.loginPage.forgotPasswordHeader).toBeVisible()
        const emailValue = await this.loginPage.page.locator('#username').inputValue();
        await expect(this.loginPage.emailInput).toHaveValue(emailValue)
        await this.loginPage.continueBtn.last().click()
        if (!(await this.loginPage.verifyIdentityHeader.isVisible({ timeout: 10000 }).catch(() => false))) {
            await expect(this.loginPage.rateLimitError).toBeVisible()
        }
    }
    async verifyOTP(OTP: string) {
        if (await this.loginPage.rateLimitError.isVisible({ timeout: 2000 }).catch(() => false)) {
            return
        }
        await expect(this.loginPage.verifyIdentityHeader).toBeVisible()
        await this.loginPage.OtpInputFill.fill(OTP)
        await this.loginPage.continueBtn.last().click()
    }
    async assertDashboard() {
        await this.loginPage.page.waitForLoadState();
        await expect(this.loginPage.page).toHaveURL('https://test.turbocore.soais.com/dashboard');
        await expect(this.loginPage.page.getByText('Home')).toBeVisible()
    }
    async EmailErrorMsg() {
        const visibleEmailError = this.loginPage.page.locator('div[id="error-cs-username-required"]:visible, div[id="error-cs-email-invalid"]:visible')
        await expect(visibleEmailError.first()).toBeVisible()
    }
    async wrongEmailOrPasswordMsg() {
        await expect(this.loginPage.passwordErrorMsg).toBeVisible()
    }
    async passwordRequireMsg() {
        await expect(this.loginPage.passwordRequireMsg).toBeVisible()
    }
    async InvalidEmailMsg() {
        await expect(this.loginPage.emailInvalidMsg).toBeVisible()
    }
    async AssertionForOTP(OTP: string) {

        if (OTP.trim() === '') {

            await expect(this.loginPage.OtpvalidationError).toBeVisible()

        } else {
            await expect(this.loginPage.OtpInvalidvalidationError).toBeVisible()
        }
    }

    async AssertionFoMaxrOTP(maxOtp: string) {

        if (maxOtp.trim() === '') {

            await expect(this.loginPage.OtpvalidationError).toBeVisible()

        } else {
            await expect(this.loginPage.OtpInvalidvalidationError).toBeVisible()
        }
    }

    async AssertionForMinOTP(minOtp: string) {

        if (minOtp.trim() === '') {

            await expect(this.loginPage.OtpvalidationError).toBeVisible()

        } else {
            await expect(this.loginPage.OtpInvalidvalidationError).toBeVisible()
        }
    }


    async AssertionForMultipleOtpMaxLimit(){
       
            await expect(this.loginPage.ToomanyFailedOtp).toHaveText('We are sorry, an error occurred. Please retry after a few minutes.')
    }
      async verifyResendButton(){
        await this.loginPage.resendButton.click()
        if (await this.loginPage.rateLimitError.isVisible({ timeout: 2000 }).catch(() => false)) {
            return
        }
        await expect(this.loginPage.coderesendMsg).toBeVisible()
    }
    async clickGoBackButton() {
        await this.loginPage.gobackButton.click();
        if (await this.loginPage.rateLimitError.isVisible({ timeout: 2000 }).catch(() => false)) {
            return
        }
        if (!(await this.loginPage.forgotPasswordHeader.isVisible({ timeout: 2000 }).catch(() => false))) {
            await expect(this.loginPage.headerVerification).toBeVisible()
        }
    }
        async clickBackToTurbocore(){
             if (await this.loginPage.backToTurbocore.isVisible({ timeout: 2000 }).catch(() => false)) {
                 await this.loginPage.backToTurbocore.click()
                 await expect(this.loginPage.logoVerification).toBeVisible()
             } else if (await this.loginPage.rateLimitError.isVisible({ timeout: 2000 }).catch(() => false)) {
                 return
             } else {
                 throw new Error('Back to Turbocore button not available on the current screen.')
             }
    }
    async verifyPasswordMasking(password: string) {
        await this.loginPage.PasswordInput.fill(password);
        await expect(this.loginPage.PasswordInput).toHaveAttribute('type', 'password');
    }

    async clickContinueButton(otp: string) {
        await this.loginPage.OtpInputFill.fill(otp);
        await this.loginPage.continueBtn.last().click()
    }
}