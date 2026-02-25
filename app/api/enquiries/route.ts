import { NextResponse } from 'next/server';
import { enquiryService } from '@/services/EnquiryService';

export async function GET() {
    try {
        const enquiries = await enquiryService.getAllEnquiries();
        return NextResponse.json({ success: true, data: enquiries }, { status: 200 });
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        const { firstName, lastName, email, phone, interest } = body;
        if (!firstName || !lastName || !email || !phone || !interest) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const enquiry = await enquiryService.createEnquiry(body);
        return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
    } catch (error) {
        console.error('Error creating enquiry:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
