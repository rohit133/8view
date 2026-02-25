'use client';

import { useState } from 'react';
import { IVisitVenueSection } from '@/types/sections/contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

export const VisitVenue = ({
    title,
    address,
    contact,
    email,
    hours,
    bookingTitle = "Ready to book your dream wedding?",
    bookingDescription = "Contact us today to schedule a tour and consultation",
    directionsCta = "Get Directions",
    tourCta = "Schedule a Tour"
}: IVisitVenueSection) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="py-24 bg-[#F5F1E8]">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl text-center text-[#344E41] mb-16 font-playfair">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* Working Google Map Embed */}
                    <div className="rounded-lg shadow-xl overflow-hidden h-full min-h-[400px] border border-gray-100">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${address.street}, ${address.district}, ${address.city}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        ></iframe>
                    </div>

                    {/* Contact Info container */}
                    <div className="flex flex-col justify-between py-2">
                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 bg-[#344E41] rounded-full flex items-center justify-center text-white shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#344E41] mb-1 font-inter">Address</h3>
                                    <p className="text-gray-600 font-inter leading-relaxed">
                                        {address.street}<br />
                                        {address.district}<br />
                                        {address.city}
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 bg-[#344E41] rounded-full flex items-center justify-center text-white shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#344E41] mb-1 font-inter">Contact</h3>
                                    <p className="text-gray-600 font-inter leading-relaxed">
                                        Phone: {contact.phone}<br />
                                        Fax: {contact.fax}
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 bg-[#344E41] rounded-full flex items-center justify-center text-white shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#344E41] mb-1 font-inter">Email</h3>
                                    <p className="text-gray-600 font-inter leading-relaxed">
                                        {email.primary}<br />
                                        {email.secondary}
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 bg-[#344E41] rounded-full flex items-center justify-center text-white shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#344E41] mb-1 font-inter">Viewing Hours</h3>
                                    <p className="text-gray-600 font-inter leading-relaxed">
                                        {hours.weekdays}<br />
                                        {hours.weekends}<br />
                                        <span className="text-sm italic mt-1 block text-gray-400 font-inter">{hours.note}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="px-10 py-3 bg-[#334D41] text-white font-medium rounded-sm hover:bg-[#2d4338] transition-all shadow-md font-inter text-sm tracking-wide">
                                {directionsCta}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ready to book Section */}
                <div className="mt-32 text-center">
                    <h2 className="text-4xl md:text-5xl text-[#344E41] mb-4 font-playfair">
                        {bookingTitle}
                    </h2>
                    <p className="text-gray-500 font-inter mb-16">
                        {bookingDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* Call Us */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-14 h-14 bg-[#344E41] rounded-full flex items-center justify-center text-white mb-2">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-playfair text-[#344E41]">Call Us</h3>
                            <p className="text-gray-600 font-inter">{contact.phone}</p>
                            <p className="text-gray-400 text-sm font-inter">Mon-Sun 9am-8pm</p>
                        </div>

                        {/* Email Us */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-14 h-14 bg-[#344E41] rounded-full flex items-center justify-center text-white mb-2">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-playfair text-[#344E41]">Email Us</h3>
                            <p className="text-gray-600 font-inter">{email.primary}</p>
                            <p className="text-gray-400 text-sm font-inter">We reply within 24 hours</p>
                        </div>

                        {/* Visit Us */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-14 h-14 bg-[#344E41] rounded-full flex items-center justify-center text-white mb-2">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-playfair text-[#344E41]">Visit Us</h3>
                            <p className="text-gray-600 font-inter">{address.street}</p>
                            <p className="text-gray-400 text-sm font-inter">By appointment only</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-[#344E41] text-white font-medium rounded-md hover:bg-[#2d4338] transition-all transform hover:scale-[1.02] shadow-lg font-inter"
                    >
                        {tourCta}
                    </button>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={tourCta}
            >
                <EnquiryForm
                    initialInterest="Site Tour"
                    onSuccess={() => setIsModalOpen(false)}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </section>
    );
};
