import mongoose, { Schema } from 'mongoose';
import { IEnquiryDocument } from '@/types/database/Enquiry';

const EnquirySchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    weddingDate: { type: Date },
    guestsCount: { type: Number },
    interest: { type: String, required: true },
    vision: { type: String },
}, {
    timestamps: true
});

export default mongoose.models.Enquiry || mongoose.model<IEnquiryDocument>('Enquiry', EnquirySchema);
