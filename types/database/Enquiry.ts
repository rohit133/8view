import { Document } from 'mongoose';

export interface IEnquiry {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    weddingDate?: Date;
    guestsCount?: number;
    interest: string;
    vision?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IEnquiryDocument extends Omit<IEnquiry, 'createdAt' | 'updatedAt'>, Document {
    createdAt: Date;
    updatedAt: Date;
}