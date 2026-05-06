import { expect } from "@playwright/test";
import { LoginPage } from "../locators/turboLoginPage";
import { SignupPage } from "../locators/turboSignupPage";

export class TurboSignup {
    
    private signupPage : SignupPage;


    constructor(signupPage: SignupPage) {
     
        this.signupPage = signupPage;
    }

   

     async clickSignUpLink(){
        await this.signupPage.signupLink.click();
    }
    async verifySignUpLink(){
        await this.signupPage.page.waitForTimeout(5000)
       await expect(this.signupPage.signupHeader).toBeVisible()
    }
}