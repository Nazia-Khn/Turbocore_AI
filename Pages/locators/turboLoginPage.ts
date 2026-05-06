import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly headerVerification :Locator
   readonly logoVerification :Locator
  readonly emailInput: Locator;
<<<<<<< HEAD
  readonly continueBtn: Locator;
  readonly PasswordInput: Locator;
  readonly emailErrorMsg : Locator;

  //SignUp Locators
  readonly signupLink : Locator ;
  readonly signupHeader : Locator;
=======
  readonly emailErrorMsg : Locator
  readonly emailInvalidMsg : Locator
  readonly PasswordInput: Locator; 
  readonly passwordErrorMsg:Locator
  readonly passwordRequireMsg:Locator
  readonly continueBtn: Locator;
>>>>>>> bd11746b78622a4487011cd8d1bfaa9ace0344cf

  constructor(page: Page) {
    this.page= page
    this.logoVerification = page.locator('header[id="screen-header"]>img')
    this.headerVerification = page.locator('header[id="screen-header"]>h1')
    this.emailInput = page.locator('input[id="username"]');
    this.emailErrorMsg = page.locator('div[id="error-cs-username-required"]')
<<<<<<< HEAD

    this.signupLink = page.getByText('Sign up');
    this.signupHeader = page.getByText('Create Your Account');
    
=======
    this.emailInvalidMsg= page.locator('div[id="error-cs-email-invalid"]')
    this.PasswordInput = page.locator('input[id="password"]');
    this.passwordErrorMsg = page.locator('span[id="error-element-password"]')
    this.passwordRequireMsg = page.locator('div[id="error-cs-password-required"]')
    this.continueBtn= page.getByText('Continue') 
>>>>>>> bd11746b78622a4487011cd8d1bfaa9ace0344cf
  }
}