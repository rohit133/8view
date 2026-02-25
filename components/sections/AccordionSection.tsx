'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IAccordionSection } from '@/types/sections/accordion';
import { Modal } from '@/components/ui/Modal';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

export const AccordionSection = ({ title, description, items, imageSrc, imageAlt, ctaLabel }: IAccordionSection) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-[#F5F1E8]">
            <div className="luxury-container flex flex-col md:flex-row gap-16 items-start">
                {/* Left Content */}
                <div className="w-full md:w-[60%]">
                    <h2 className="text-4xl md:text-5xl mb-6 text-sage">
                        {title}
                    </h2>
                    <p className="text-gray-500 mb-12 max-w-md">
                        {description}
                    </p>

                    <div className="space-y-1">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="group border-b border-gray-100 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors px-2"
                                onClick={() => toggleAccordion(idx)}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-inter font-medium text-gray-800">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.price}</p>
                                    </div>
                                    <div className={`text-sage transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : 'rotate-0'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-gray-600 text-sm leading-relaxed pb-2">
                                        {item.description || "Indulge in a meticulously curated wedding experience designed to celebrate your unique love story with elegance and sophistication."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-12 px-8 py-3 border border-sage text-sage uppercase tracking-widest text-sm font-medium hover:bg-sage hover:text-white transition-all"
                    >
                        {ctaLabel}
                    </button>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-[40%]">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl p-1">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Book Ceremony"
            >
                <EnquiryForm
                    initialInterest={openIndex !== null ? items[openIndex].title : ''}
                    onSuccess={() => setIsModalOpen(false)}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </section>
    );
};
