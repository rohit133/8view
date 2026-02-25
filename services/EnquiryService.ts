import nodemailer from 'nodemailer';
import dbConnect from '@/lib/db/mongodb';
import Enquiry from '@/models/Enquiry';
import { IEnquiry } from '@/types/database/Enquiry';
import { IEnquiryService } from '@/types/services/IEnquiryService';

export class EnquiryService implements IEnquiryService {
    private async sendEmailNotification(data: Partial<IEnquiry>) {
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn('⚠️ SMTP not configured. Email notification skipped.');
            return;
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_TO_EMAIL,
            subject: `New Enquiry: ${data.interest} from ${data.firstName} ${data.lastName}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #344E41;">New Wedding Enquiry</h2>
                    <p><strong>Interest:</strong> ${data.interest}</p>
                    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Preferred Date:</strong> ${data.weddingDate || 'Not specified'}</p>
                    <p><strong>Estimated Guests:</strong> ${data.guestsCount || 'Not specified'}</p>
                    <hr />
                    <h3>Vision/Message:</h3>
                    <p>${data.vision?.replace(/\n/g, '<br>') || 'No message provided'}</p>
                </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('✅ Email notification sent successfully');
        } catch (error) {
            console.error('❌ Failed to send email notification:', error);
        }
    }

    async createEnquiry(data: Partial<IEnquiry>): Promise<IEnquiry> {
        await dbConnect();
        const enquiry = await Enquiry.create(data);

        // Asynchronously send email notification
        this.sendEmailNotification(data);

        return enquiry;
    }

    async getAllEnquiries(): Promise<IEnquiry[]> {
        await dbConnect();
        const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
        return enquiries;
    }
}

export const enquiryService = new EnquiryService();