import { IEnquiryFormData } from '@/types/forms/EnquiryForm';

export interface IEnquiryHookReturn {
    submitEnquiry: (data: IEnquiryFormData) => Promise<{ success: boolean; error?: string }>;
    isSubmitting: boolean;
}
