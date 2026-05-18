import { test } from '@playwright/test'
import dotenv from 'dotenv';
import { TurboLogin } from '../Pages/Functions/TurboLogin'
import { LoginPage } from '../Pages/locators/turboLoginPage'
import { SignupPage } from '../Pages/locators/turboSignupPage';
import { TurboSignup } from '../Pages/Functions/turboSignup';
import Data from "../TestData/TurboLoginInputs.json"
import { getOTP } from '../Utils/emailUtils';
let loginPage: TurboLogin

test.describe("Verifying Sign up Functionality", async () => {
    test.beforeEach(async ({ page }) => {
            loginPage = new TurboLogin(new LoginPage(page))
    
            await loginPage.navigateToLogin()
            await page.waitForTimeout(3000);
        })
    test('Verify sign up link visibility', async ({ page }) => {
        const loginPage = new TurboLogin(new LoginPage(page))
        const signupPage = new TurboSignup(new SignupPage(page))

         await loginPage.navigateToLogin()
        await signupPage.clickSignUpLink();
        await signupPage.verifySignUpLink();
    })

      test.only('Verify code (6-digit Code Screen)', async({page})=>{
         const loginPage = new TurboLogin(new LoginPage(page))
       const signupPage = new TurboSignup(new SignupPage(page))
           test.setTimeout(120000);
                await signupPage.clickSignUpLink();
                await loginPage.emailFill(Data.Email)
              //  await loginPage.ResetPassword()

          // Fetch OTP from email
        const otp = await getOTP();

        console.log('Fetched OTP:', otp);

        // Enter OTP and continue
       await loginPage.clickContinueButton(otp)


    })
})