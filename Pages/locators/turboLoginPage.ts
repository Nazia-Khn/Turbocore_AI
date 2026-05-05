import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly emailInput: Locator;
  readonly continueBtn: Locator;
  readonly PasswordInput: Locator;
  readonly emailErrorMsg : Locator

  constructor(page: Page) {
    this.page= page
    this.emailInput = page.locator('input[id="username"]');
    this.continueBtn= page.getByText('Continue')
    this.PasswordInput = page.locator('input[id="password"]');
    this.emailErrorMsg = page.locator('div[id="error-cs-username-required"]')
  }
}