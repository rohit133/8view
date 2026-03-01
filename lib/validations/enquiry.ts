import { z } from 'zod';

export const enquirySchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .regex(/^[0-9]+$/, { message: "Phone number can only contain digits" }),
    weddingDate: z.string().optional().refine((date) => {
        if (!date) return true;
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to midnight to allow today's date
        return selectedDate >= today;
    }, { message: "Wedding date cannot be in the past" }),
    guestsCount: z.coerce.number().optional().or(z.literal('')),
    vision: z.string().optional(),
    interest: z.string().optional() // We add this in the submit handler
});

export type EnquiryInputData = z.infer<typeof enquirySchema>;

