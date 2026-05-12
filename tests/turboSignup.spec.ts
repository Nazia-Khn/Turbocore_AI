import { test } from '@playwright/test'
import dotenv from 'dotenv';
import { TurboLogin } from '../Pages/Functions/TurboLogin'
import { LoginPage } from '../Pages/locators/turboLoginPage'
import { SignupPage } from '../Pages/locators/turboSignupPage';
import { TurboSignup } from '../Pages/Functions/turboSignup';
import { getOTP } from '../Utils/emailUtils';


test.describe("Verifying Sign up Functionality", async () => {
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
          const serverId = process.env.MAILOSAUR_SERVER_ID;
          const testEmail = `testuser@${serverId}.mailosaur.net`;
            await loginPage.navigateToLogin()
           await signupPage.clickSignUpLink()
            await page.waitForTimeout(5000);
           await loginPage.emailFill(testEmail)
           await page.waitForTimeout(5000);
            console.log('OTP sent to:', testEmail);
         const otp = await getOTP(testEmail);
             console.log('OTP:', otp);
                await loginPage.clickContinueButton(otp);


    })
})