import { ImapFlow } from 'imapflow';
import { simpleParser } from 'mailparser';
import dotenv from 'dotenv';

dotenv.config();

export async function getOTP(): Promise<string> {

    const client = new ImapFlow({
        host: 'imap.gmail.com',
        port: 993,
        secure: true,

        auth: {
            user: process.env.EMAIL_USER!,
            pass: process.env.EMAIL_PASS!,
        },

        tls: {
            rejectUnauthorized: false,
        },
    });

    // Connect Gmail
    await client.connect();

    console.log('Connected to Gmail');

    // Lock inbox
    let lock = await client.getMailboxLock('INBOX');

    try {

        console.log('Waiting for OTP email...');

        // Wait few seconds
        await new Promise(resolve => setTimeout(resolve, 10000));

        // Get latest email
        const messages = client.fetch(
            '1:*',
            {
                envelope: true,
                source: true,
            }
        );

        let latestMessage: any;

        for await (const message of messages) {
            latestMessage = message;
        }

        if (!latestMessage) {
            throw new Error('No emails found');
        }

        const parsed = await simpleParser(
            latestMessage.source
        );

        const body = parsed.text || '';

        console.log('Email Body:', body);

        // Extract OTP
        const otpMatch = body.match(/\d{6}/);

        if (!otpMatch) {
            throw new Error('OTP not found');
        }

        return otpMatch[0];

    } finally {

        lock.release();

        await client.logout();
    }
}