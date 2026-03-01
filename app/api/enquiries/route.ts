import { NextResponse } from 'next/server';
import { enquiryService } from '@/services/EnquiryService';
import { enquirySchema } from '@/lib/validations/enquiry';

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
        const validationResult = enquirySchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                { success: false, error: validationResult.error.flatten() },
                { status: 400 }
            );
        }

        const dataToSave = {
            ...validationResult.data,
            weddingDate: validationResult.data.weddingDate ? new Date(validationResult.data.weddingDate) : undefined,
            guestsCount: validationResult.data.guestsCount === '' ? undefined : validationResult.data.guestsCount
        };

        const enquiry = await enquiryService.createEnquiry(dataToSave);
        return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
    } catch (error) {
        console.error('Error creating enquiry:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
