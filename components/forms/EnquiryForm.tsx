'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IEnquiryFormProps } from '@/types/forms/EnquiryForm';
import { useEnquiry } from '@/hooks/useEnquiry';
import { enquirySchema, EnquiryInputData } from '@/lib/validations/enquiry';

export const EnquiryForm = ({ initialInterest = '', onSuccess, onCancel }: IEnquiryFormProps) => {
    const { submitEnquiry, isSubmitting } = useEnquiry();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<EnquiryInputData>({
        resolver: zodResolver(enquirySchema) as any,
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            weddingDate: '',
            guestsCount: '',
            interest: initialInterest,
            vision: ''
        }
    });

    const onSubmit = async (data: EnquiryInputData) => {
        const submitData = { ...data, interest: data.interest || 'General Enquiry' };
        const result = await submitEnquiry(submitData as any);

        if (result.success) {
            toast.success('Your enquiry has been received.', {
                description: 'We will contact you shortly.',
                duration: 5000,
            });
            reset();
            onSuccess?.();
        } else {
            const errorAny = result.error as any;
            if (errorAny && typeof errorAny === 'object' && ('fieldErrors' in errorAny || 'formErrors' in errorAny)) {

                const fieldErrorMessages = errorAny.fieldErrors
                    ? Object.values(errorAny.fieldErrors).flat().filter(Boolean).join(', ')
                    : '';
                const formErrorMessages = errorAny.formErrors?.length
                    ? errorAny.formErrors.join(', ')
                    : '';

                const combinedMessage = [formErrorMessages, fieldErrorMessages].filter(Boolean).join(' | ');

                toast.error('Validation failed. Please check the fields.', {
                    description: combinedMessage || 'Invalid data provided.'
                });
            } else {
                const safeMessage = typeof result.error === 'string'
                    ? result.error
                    : 'Something went wrong. Please try again.';

                toast.error(safeMessage);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        {...register('firstName')}
                        className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="John"
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-xs font-inter">{errors.firstName.message}</p>
                    )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        {...register('lastName')}
                        className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Doe"
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-xs font-inter">{errors.lastName.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs font-inter">{errors.email.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs font-inter">{errors.phone.message}</p>
                    )}
                </div>

                {/* Wedding Date */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="weddingDate" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Preferred Date
                    </label>
                    <input
                        type="date"
                        id="weddingDate"
                        {...register('weddingDate')}
                        className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.weddingDate ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    {errors.weddingDate && (
                        <p className="text-red-500 text-xs font-inter">{errors.weddingDate.message}</p>
                    )}
                </div>

                {/* Guests Count */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="guestsCount" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Number of Guests
                    </label>
                    <input
                        type="number"
                        id="guestsCount"
                        {...register('guestsCount')}
                        className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.guestsCount ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="150"
                    />
                    {errors.guestsCount && (
                        <p className="text-red-500 text-xs font-inter">{errors.guestsCount.message}</p>
                    )}
                </div>
            </div>

            {/* Interest */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="interest" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                    Interest *
                </label>
                <input
                    type="text"
                    id="interest"
                    {...register('interest')}
                    className={`border-b py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800 ${errors.interest ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="E.g. Classic Package, Grand Ballroom"
                />
                {errors.interest && (
                    <p className="text-red-500 text-xs font-inter">{errors.interest.message}</p>
                )}
            </div>

            {/* Wedding Vision */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="vision" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                    Tell us about your wedding vision
                </label>
                <textarea
                    id="vision"
                    rows={3}
                    {...register('vision')}
                    placeholder="Share your ideas, questions, or special requirements..."
                    className={`border p-3 rounded-lg focus:border-sage outline-none transition-colors font-inter text-gray-800 resize-none bg-gray-50/50 ${errors.vision ? 'border-red-500' : 'border-gray-100'}`}
                ></textarea>
                {errors.vision && (
                    <p className="text-red-500 text-xs font-inter">{errors.vision.message}</p>
                )}
            </div>

            <div className="flex items-center gap-4 pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-sage text-white font-medium rounded-lg hover:bg-sage/90 transition-all transform hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-inter tracking-wider"
                >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-4 border border-gray-200 text-gray-500 font-medium rounded-lg hover:bg-gray-50 transition-colors font-inter"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};
