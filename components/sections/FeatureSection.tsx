import Image from 'next/image';
import { IFeatureSection } from '@/types/sections/features';

export const FeatureSection = ({ title, paragraphs, imageSrc, imageAlt, lists, reverse = false }: IFeatureSection) => {
    return (
        <section className="py-20 md:py-32">
            <div className={`luxury-container flex flex-col md:flex-row items-center gap-12 md:gap-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>

                {/* Image Content */}
                <div className="w-full md:w-[45%]">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl p-1">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-[55%]">
                    <h2 className="text-4xl md:text-5xl mb-8 text-sage">
                        {title}
                    </h2>

                    <div className="space-y-6 mb-12">
                        {paragraphs.map((para, idx) => (
                            <p key={idx} className="text-gray-500 leading-relaxed font-inter">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {lists.map((list, idx) => (
                            <div key={idx}>
                                <h4 className="text-xl font-playfair text-sage mb-4">
                                    {list.title}
                                </h4>
                                <ul className="space-y-2">
                                    {list.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="text-gray-500 text-sm font-inter flex items-center gap-2">
                                            <span className="w-1 h-1 bg-gray-500 rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
