export interface IContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    weddingDate?: string;
    guestsCount?: string;
    vision: string;
}

export interface IContactSection {
    title: string;
    description: string;
}

export interface IVisitVenueSection {
    title: string;
    address: {
        street: string;
        district: string;
        city: string;
    };
    contact: {
        phone: string;
        fax: string;
    };
    email: {
        primary: string;
        secondary: string;
    };
    hours: {
        weekdays: string;
        weekends: string;
        note: string;
    };
}
