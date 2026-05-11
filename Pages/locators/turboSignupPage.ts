import { Page, Locator } from "@playwright/test";

export class SignupPage {
  readonly page: Page;

  //SignUp Locators
  readonly signupLink : Locator ;
  readonly signupHeader : Locator;
  readonly emailInput: Locator;
  readonly continueBtn: Locator;
  readonly OtpInputFill:Locator


   constructor(page: Page) {
    this.page= page
    
    this.signupLink = page.getByText('Sign up');
    this.signupHeader = page.getByText('Create Your Account');
    this.emailInput = page.locator('input[id="username"]');
    this.continueBtn = page.getByText('Continue') 
    this.OtpInputFill = page.locator('label[id="code-label"]')
  }
}