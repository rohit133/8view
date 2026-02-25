'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ICarouselSection } from '@/types/sections/carousel';

export const Carousel = ({ items }: ICarouselSection) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <section className="py-20 bg-cream">
            <div className="luxury-container">
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl group">
                    {/* Slides */}
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay for text legibility */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end">
                                <p className="text-white/60 text-sm mb-2 font-inter">
                                    {index + 1}/{items.length}
                                </p>
                                <h3 className="text-white text-3xl font-playfair">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-12 right-12 z-20 flex gap-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full h-1.5 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-1.5'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
