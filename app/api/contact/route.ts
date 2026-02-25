import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, weddingDate, guestsCount, vision } = body;

        // Log the submission details securely to server logs
        console.log('--- NEW CONTACT FORM SUBMISSION ---');
        console.log('Timestamp:', new Date().toISOString());
        console.log('Details:', JSON.stringify(body, null, 2));
        console.log('------------------------------------');

        // Check if SMTP is configured
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn('--- SMTP NOT CONFIGURED ---');
            console.warn('Submission saved to server logs only.');
            console.warn('---------------------------');
            return NextResponse.json({
                message: 'Enquiry received and logged. (Email delivery pending configuration)'
            }, { status: 200 });
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email to Admin
        const adminMailOptions = {
            from: `"Resort Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO_EMAIL,
            bcc: email,
            subject: `New Wedding Enquiry: ${firstName} ${lastName}`,
            text: `
                New Wedding Enquiry Details:
                
                Name: ${firstName} ${lastName}
                Email: ${email}
                Phone: ${phone}
                Wedding Date: ${weddingDate || 'Not specified'}
                Guests: ${guestsCount || 'Not specified'}
                
                Vision/Message:
                ${vision}
            `,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #344E41;">New Wedding Enquiry</h2>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Preferred Date:</strong> ${weddingDate || 'Not specified'}</p>
                    <p><strong>Estimated Guests:</strong> ${guestsCount || 'Not specified'}</p>
                    <hr />
                    <h3>Wedding Vision:</h3>
                    <p>${vision.replace(/\n/g, '<br>')}</p>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(adminMailOptions);

        return NextResponse.json({ message: 'Enquiry submitted successfully via email' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
    }
}
