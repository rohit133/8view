import { IEnquiry } from '@/types/database/Enquiry';

export interface IEnquiryService {
    createEnquiry(data: Partial<IEnquiry>): Promise<IEnquiry>;
    getAllEnquiries(): Promise<IEnquiry[]>;
}
