import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly emailInput: Locator;
  readonly continueBtn: Locator;
<<<<<<< HEAD
  readonly EditBtn: Locator;
  readonly resetLink: Locator;
=======
  readonly PasswordInput: Locator;
  readonly emailErrorMsg : Locator;

  

>>>>>>> e8299b43ad67ccfd12305c95ade62b4a70dc6401
  constructor(page: Page) {
    this.page= page
    this.emailInput = page.locator('input[id="username"]');
    this.continueBtn= page.getByText('Continue')
    this.PasswordInput = page.locator('input[id="password"]');
<<<<<<< HEAD
    this.passwordErrorMsg = page.locator('span[id="error-element-password"]')
    this.passwordRequireMsg = page.locator('div[id="error-cs-password-required"]')
    this.continueBtn= page.getByText('Continue') 
    this.EditBtn = page.locator('a[aria-label="Edit email address"]')
    this.resetLink =  page.getByText('Reset password')
=======
    this.emailErrorMsg = page.locator('div[id="error-cs-username-required"]')

        
>>>>>>> e8299b43ad67ccfd12305c95ade62b4a70dc6401
  }
}