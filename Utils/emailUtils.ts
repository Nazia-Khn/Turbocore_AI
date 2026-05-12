import Mailosaur from 'mailosaur';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const apiKey = process.env.MAILOSAUR_API_KEY;
if (!apiKey) {
    throw new Error('MAILOSAUR_API_KEY environment variable is required');
}

const mailosaur = new Mailosaur(apiKey);

export async function getOTP(email: string): Promise<string> {

    const serverId = process.env.MAILOSAUR_SERVER_ID!;

    const message = await mailosaur.messages.get(
        serverId,
        {
            sentTo: email,
        },
        {
            timeout: 20000
        }
    );

    const body = message.text?.body || '';

    console.log('Email Body:', body);

    const otpMatch = body.match(/\d{6}/);

    if (!otpMatch) {
        throw new Error('OTP not found in email');
    }

    return otpMatch[0];
}