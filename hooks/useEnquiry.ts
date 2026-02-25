'use client';

import { useState } from 'react';
import { IEnquiryFormData } from '@/types/forms/EnquiryForm';
import { IEnquiryHookReturn } from '@/types/hooks/Enquiry';

export const useEnquiry = (): IEnquiryHookReturn => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitEnquiry = async (data: IEnquiryFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                return { success: true };
            } else {
                return { success: false, error: result.error || 'Something went wrong. Please try again.' };
            }
        } catch (error) {
            return { success: false, error: 'Failed to send enquiry. Please check your connection.' };
        } finally {
            setIsSubmitting(false);
        }
    };

    return { submitEnquiry, isSubmitting };
};
