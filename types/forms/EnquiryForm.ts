export interface IEnquiryFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    weddingDate: string;
    guestsCount: string;
    interest: string;
    vision: string;
}

export interface IEnquiryFormProps {
    initialInterest?: string;
    onSuccess?: () => void;
    onCancel?: () => void;
}
