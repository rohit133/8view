import Image from 'next/image';
import { IHeroContent } from '@/types/sections/Content';

export const Hero = ({ title, paragraphs, imageSrc, imageAlt, ctaLabel, ctaHref }: IHeroContent) => {
    return (
        <section className="pt-15">
            <div className="flex flex-col md:flex-row min-h-[600px]">
                {/* Image Left */}
                <div className="relative w-full md:w-1/2 min-h-[400px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="w-full md:w-1/2 bg-sage p-12 md:p-24 flex flex-col justify-center">
                    <h1 className="text-white text-5xl md:text-7xl mb-8 leading-tight">
                        {title}
                    </h1>
                    <div className="space-y-6 max-w-lg">
                        {paragraphs.map((p, idx) => (
                            <p key={idx} className="text-white/80 text-lg leading-relaxed font-light">
                                {p}
                            </p>
                        ))}
                    </div>
                    <div className="mt-12">
                        <a
                            href={ctaHref}
                            className="inline-block bg-white text-sage px-8 py-3 font-medium transition-all hover:bg-gray-100 uppercase tracking-widest text-sm"
                        >
                            {ctaLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
