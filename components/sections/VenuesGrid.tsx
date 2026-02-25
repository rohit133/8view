import Image from 'next/image';
import { IVenuesSectionProps } from '@/types/sections/venues';

export const VenuesGrid = ({ venues }: IVenuesSectionProps) => {
    return (
        <section className="py-20 bg-[#F5F1E8]">
            <div className="luxury-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {venues.map((venue, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg group"
                        >
                            <Image
                                src={venue.imageSrc}
                                alt={venue.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Info Card */}
                            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-6 min-w-[240px] shadow-xl">
                                <h3 className="text-sage text-2xl font-playfair mb-1">
                                    {venue.title}
                                </h3>
                                <p className="text-gray-500 font-inter text-xs tracking-wider uppercase">
                                    {venue.capacity}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
