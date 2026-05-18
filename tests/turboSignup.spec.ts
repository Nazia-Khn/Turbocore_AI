import { test } from '@playwright/test'
import dotenv from 'dotenv';
import Data from '../TestData/TurboLoginInputs.json'
import { TurboLogin } from '../Pages/Functions/TurboLogin'
import { LoginPage } from '../Pages/locators/turboLoginPage'
import { SignupPage } from '../Pages/locators/turboSignupPage';
import { TurboSignup } from '../Pages/Functions/turboSignup';


test.describe("Verifying Sign up Functionality", async () => {
    test('Verify sign up link visibility', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        const signupPage = new TurboSignup(new SignupPage(page))

         await loginPage.navigateToLogin()
        await signupPage.clickSignUpLink();
        await signupPage.verifySignUpLink();
    })

      test('Verify code (6-digit Code Screen)', async({page})=>{
         const loginPage = new TurboLogin(new LoginPage(page))
       const signupPage = new TurboSignup(new SignupPage(page))
            await loginPage.navigateToLogin()
           await signupPage.clickSignUpLink()
            // await page.waitForTimeout(5000);
           await loginPage.emailFill(Data.Email)
           await page.waitForTimeout(5000);
                await loginPage.clickContinueButton('123456');


    })
})