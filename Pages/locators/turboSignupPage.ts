import { Page, Locator } from "@playwright/test";

export class SignupPage {
  readonly page: Page;

  //SignUp Locators
  readonly signupLink : Locator ;
  readonly signupHeader : Locator;

   constructor(page: Page) {
    this.page= page
    
    this.signupLink = page.getByText('Sign up');
    this.signupHeader = page.getByText('Create Your Account');
    
  }
}