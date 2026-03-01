'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IContactSection } from '@/types/sections/contact';
import { useEnquiry } from '@/hooks/useEnquiry';
import { enquirySchema, EnquiryInputData } from '@/lib/validations/enquiry';

export const ContactForm = ({ title, description }: IContactSection) => {
    const { submitEnquiry, isSubmitting } = useEnquiry();

    // Setup React Hook Form with Zod validation
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
            vision: '',
            interest: 'General Enquiry'
        }
    });

    const onSubmit = async (data: EnquiryInputData) => {
        // We know interest is in defaultValues, but TS might complain if we don't handle it
        const submitData = { ...data, interest: 'General Enquiry' };

        // Pass to the existing submit hook which formats the payload correctly
        const result = await submitEnquiry(submitData as any);

        if (result.success) {
            toast.success('Your enquiry has been received.', {
                description: 'We will contact you shortly.',
                duration: 5000,
            });
            // Clear form
            reset();
        } else {
            // Check if error is validation error from API
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
                    : 'Something went wrong. Please try again later.';

                toast.error(safeMessage);
            }
        }
    };

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-[#344E41] mb-6 font-playfair">
                        {title}
                    </h2>
                    <p className="text-gray-500 font-inter max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* First Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-inter">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="..."
                                {...register('firstName')}
                                className={`border p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs font-inter">{errors.firstName.message}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 font-inter">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="..."
                                {...register('lastName')}
                                className={`border p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter ${errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs font-inter">{errors.lastName.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 font-inter">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                {...register('email')}
                                className={`border p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs font-inter">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 font-inter">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="(123) 456-7890"
                                {...register('phone')}
                                className={`border p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs font-inter">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* Wedding Date */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weddingDate" className="text-sm font-medium text-gray-700 font-inter">
                                Preferred Wedding Date
                            </label>
                            <input
                                type="date"
                                id="weddingDate"
                                {...register('weddingDate')}
                                className={`border p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter ${errors.weddingDate ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.weddingDate && (
                                <p className="text-red-500 text-xs font-inter">{errors.weddingDate.message}</p>
                            )}
                        </div>

                        {/* Guests Count */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="guestsCount" className="text-sm font-medium text-gray-700 font-inter">
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                id="guestsCount"
                                placeholder="100"
                                {...register('guestsCount')}
                                className={`border p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter ${errors.guestsCount ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.guestsCount && (
                                <p className="text-red-500 text-xs font-inter">{errors.guestsCount.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Wedding Vision */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="vision" className="text-sm font-medium text-gray-700 font-inter">
                            Tell us about your wedding vision
                        </label>
                        <textarea
                            id="vision"
                            rows={4}
                            {...register('vision')}
                            placeholder="Share your ideas, questions, or special requirements..."
                            className={`border p-4 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter resize-none ${errors.vision ? 'border-red-500' : 'border-gray-200'}`}
                        ></textarea>
                    </div>

                    <div className="text-center pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-12 py-4 bg-[#344E41] text-white font-medium rounded-md hover:bg-[#2d4338] transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
