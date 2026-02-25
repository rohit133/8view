import Image from 'next/image';
import { ISectionContent } from '@/types/sections/Content';

export const AlternatingSection = ({ title, paragraphs, imageSrc, imageAlt, reverse = false }: ISectionContent) => {
    return (
        <section className="py-20 md:py-32">
            <div className={`luxury-container flex flex-col md:flex-row items-center gap-12 md:gap-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                {/* Text content */}
                <div className="w-full md:w-[50%]">
                    <h2 className="text-4xl md:text-5xl mb-8 text-sage">
                        {title}
                    </h2>
                    <div className="space-y-6">
                        {paragraphs.map((p, idx) => (
                            <p key={idx} className="text-gray-600 leading-relaxed font-light">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Image content */}
                <div className="w-full md:w-[50%]">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl p-1">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
