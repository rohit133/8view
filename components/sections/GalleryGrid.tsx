import Image from 'next/image';
import { IGallerySection } from '@/types/sections/gallery';

export const GalleryGrid = ({ title, items }: IGallerySection) => {
    return (
        <section className="py-20 bg-[#FFFFFF]">
            <div className="luxury-container">
                <h2 className="text-4xl md:text-5xl text-center mb-16 text-sage">
                    {title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group"
                        >
                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h4 className="text-white text-xl font-playfair mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-white/70 text-sm font-inter">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
