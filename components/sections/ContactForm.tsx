'use client';

import { useState } from 'react';
import { IContactSection, IContactFormData } from '@/types/sections/contact';

export const ContactForm = ({ title, description }: IContactSection) => {
    const [formData, setFormData] = useState<IContactFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        weddingDate: '',
        guestsCount: '',
        vision: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    weddingDate: '',
                    guestsCount: '',
                    vision: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
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

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* First Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-inter">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 font-inter">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 font-inter">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 font-inter">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter"
                            />
                        </div>

                        {/* Wedding Date */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weddingDate" className="text-sm font-medium text-gray-700 font-inter">
                                Preferred Wedding Date
                            </label>
                            <input
                                type="date"
                                id="weddingDate"
                                name="weddingDate"
                                value={formData.weddingDate}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter"
                            />
                        </div>

                        {/* Guests Count */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="guestsCount" className="text-sm font-medium text-gray-700 font-inter">
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                id="guestsCount"
                                name="guestsCount"
                                value={formData.guestsCount}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter"
                            />
                        </div>
                    </div>

                    {/* Wedding Vision */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="vision" className="text-sm font-medium text-gray-700 font-inter">
                            Tell us about your wedding vision
                        </label>
                        <textarea
                            id="vision"
                            name="vision"
                            rows={4}
                            value={formData.vision}
                            onChange={handleChange}
                            placeholder="Share your ideas, questions, or special requirements..."
                            className="border border-gray-200 p-4 rounded-md focus:border-[#344E41] outline-none transition-colors font-inter resize-none"
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

                    {submitStatus === 'success' && (
                        <p className="text-green-600 text-center font-medium animate-fade-in">
                            Thank you! Your enquiry has been received. We will contact you shortly.
                        </p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-600 text-center font-medium">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};
