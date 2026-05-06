import { expect } from "@playwright/test";
import { LoginPage } from "../locators/turboLoginPage";

export class TurboLogin {
    private loginPage: LoginPage;

    constructor(loginPage: LoginPage) {
        this.loginPage = loginPage;
    }

    // Navigate to login URL
    async navigateToLogin() {
        await this.loginPage.page.goto('/');
        await expect(this.loginPage.headerVerification).toHaveText('Welcome')
        await expect(this.loginPage.logoVerification).toBeVisible()
    }

    // Perform login using locators from POM
    async emailFill(email: string) {
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
        await expect(this.loginPage.headerVerification).toHaveText('Welcome')
    }
      async ResetLink() {
        await this.loginPage.resetLink.click()
        await expect(this.loginPage.headerVerification).toHaveText('Forgot Your Password?')
    }
    async assertDashboard() {
        await this.loginPage.page.waitForLoadState();
        await expect(this.loginPage.page).toHaveURL('https://test.turbocore.soais.com/dashboard');
        await expect(this.loginPage.page.getByText('Home')).toBeVisible()
    }
    async EmailErrorMsg() {
        await this.loginPage.page.waitForTimeout(5000)
        await expect(this.loginPage.emailErrorMsg).toBeVisible()
    }
    async wrongPasswordMsg() {
        await expect(this.loginPage.passwordErrorMsg).toBeVisible()
    }
    async passwordRequireMsg() {
        await expect(this.loginPage.passwordRequireMsg).toBeVisible()
    }
    async InvalidEmailMsg() {
        await expect(this.loginPage.emailInvalidMsg).toBeVisible()
    }
    
}