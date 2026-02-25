'use client';

import { useState } from 'react';
import { IFAQSection } from '@/types/sections/faq';

export const FAQ = ({ title, items }: IFAQSection) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#FFFFFF]">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl text-center mb-10 text-sage">
                    {title}
                </h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-0">
                            <button onClick={() => toggle(index)} className="w-full py-3 flex items-center justify-between text-left group">
                                <h5 className="text-sm md:text-md font-inter text-gray-800 group-hover:text-sage transition-colors">
                                    {item.question}
                                </h5>
                                <span className={`text-sage transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-500 font-inter leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
