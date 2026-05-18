import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly headerVerification: Locator
  readonly logoVerification: Locator
  readonly emailInput: Locator;
  readonly emailErrorMsg: Locator
  readonly emailInvalidMsg: Locator
  readonly emailErrorMsgs: Locator
  readonly PasswordInput: Locator;
  readonly passwordErrorMsg: Locator
  readonly passwordRequireMsg: Locator
  readonly continueBtn: Locator;
  readonly EditBtn: Locator;
  readonly resetLink: Locator;
  readonly passwordIconBtn: Locator;
  readonly OtpvalidationError: Locator;
  readonly OtpInvalidvalidationError: Locator;
  readonly OtpInputFill:Locator
  readonly resendButton:Locator
  readonly coderesendMsg:Locator
  readonly gobackButton :Locator
  readonly backToTurbocore :Locator
  readonly ToomanyFailedOtp: Locator
  readonly forgotPasswordHeader: Locator
  readonly verifyIdentityHeader: Locator
  readonly rateLimitError: Locator
  constructor(page: Page) {
    this.page = page
    this.logoVerification = page.locator('header[id="screen-header"]>img')
    this.headerVerification = page.locator('header[id="screen-header"]>h1')
    this.emailInput = page.locator('input[id="email"]');
    this.emailErrorMsg = page.locator('div[id="error-cs-username-required"]')
    this.emailInvalidMsg = page.locator('div[id="error-cs-email-invalid"]')
    this.emailErrorMsgs = page.locator('div[id="error-cs-username-required"], div[id="error-cs-email-invalid"]')
    this.PasswordInput = page.locator('input[id="password"]');
    this.passwordErrorMsg = page.locator('span[id="error-element-password"]')
    this.passwordRequireMsg = page.locator('div[id="error-cs-password-required"]')
    this.continueBtn = page.getByText('Continue')
    this.EditBtn = page.locator('a[aria-label="Edit email address"]')
    this.resetLink = page.getByText('Reset password')
    this.passwordIconBtn = page.locator('button[aria-label="Show password"]')
    this.OtpvalidationError = page.locator('div[id="error-cs-code-required"]')
    this.OtpInvalidvalidationError = page.locator('span[id="error-element-code"]')
    this.OtpInputFill = page.locator('input[id="code"], input[name="code"], label#code-label input')

    this.ToomanyFailedOtp = page.locator('h3.error-subtitle')
    this.forgotPasswordHeader = page.locator('text=Forgot Your Password?')
    this.verifyIdentityHeader = page.locator('text=Verify Your Identity')
    this.rateLimitError = page.getByText('We are sorry, an error occurred. Please retry after a few minutes.')
  // Verify Your Identity
    this.resendButton = page.getByText('Resend')
    this.coderesendMsg=page.getByText('Code has been resent.')
    this.gobackButton = page.getByText('Go back')
    this.backToTurbocore =  page.getByText('Back to Turbocore')

    // Verify Your Identity

  }
}