'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { IEnquiryFormData, IEnquiryFormProps } from '@/types/forms/EnquiryForm';
import { useEnquiry } from '@/hooks/useEnquiry';

export const EnquiryForm = ({ initialInterest = '', onSuccess, onCancel }: IEnquiryFormProps) => {
    const { submitEnquiry, isSubmitting } = useEnquiry();
    const [formData, setFormData] = useState<IEnquiryFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        weddingDate: '',
        guestsCount: '',
        interest: initialInterest,
        vision: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await submitEnquiry(formData);

        if (result.success) {
            toast.success('Your enquiry has been received.', {
                description: 'We will contact you shortly.',
                duration: 5000,
            });
            onSuccess?.();
        } else {
            toast.error(result.error || 'Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                        placeholder="John"
                    />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                        placeholder="Doe"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                {/* Wedding Date */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="weddingDate" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Preferred Date
                    </label>
                    <input
                        type="date"
                        id="weddingDate"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleChange}
                        className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                    />
                </div>

                {/* Guests Count */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="guestsCount" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                        Number of Guests
                    </label>
                    <input
                        type="number"
                        id="guestsCount"
                        name="guestsCount"
                        value={formData.guestsCount}
                        onChange={handleChange}
                        className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                        placeholder="150"
                    />
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
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="border-b border-gray-200 py-2 focus:border-sage outline-none transition-colors font-inter text-gray-800"
                    placeholder="E.g. Classic Package, Grand Ballroom"
                />
            </div>

            {/* Wedding Vision */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="vision" className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-inter">
                    Tell us about your wedding vision
                </label>
                <textarea
                    id="vision"
                    name="vision"
                    rows={3}
                    value={formData.vision}
                    onChange={handleChange}
                    placeholder="Share your ideas, questions, or special requirements..."
                    className="border border-gray-100 p-3 rounded-lg focus:border-sage outline-none transition-colors font-inter text-gray-800 resize-none bg-gray-50/50"
                ></textarea>
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
