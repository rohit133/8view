import Image from 'next/image';
import { ITestimonialSection } from '@/types/sections/testimonial';

export const Testimonial = ({ quote, author, date, authorImage }: ITestimonialSection) => {
    return (
        <section className="py-24 bg-sage text-white overflow-hidden relative">
            {/* Decorative background element if needed */}
            <div className="luxury-container relative z-10 text-center flex flex-col items-center">
                <div className="max-w-3xl mx-auto px-4 md:px-12">
                    <p className="text-lg md:text-xl lg:text-2xl font-playfair italic leading-relaxed mb-12">
                        "{quote}"
                    </p>

                    <div className="flex flex-row items-center justify-center">
                        {authorImage ? (
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                                <Image
                                    src={authorImage}
                                    alt={author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/10">
                                <span className="text-white/40 text-xs font-inter">IMG</span>
                            </div>
                        )}
                        <div className='flex flex-col items-start ml-4'>
                            <h5 className="text-sm font-inter font-medium tracking-wider uppercase">
                                {author}
                            </h5>
                            <p className="text-white/50 text-xs uppercase tracking-widest mt-1 font-inter">
                                {date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
