import { IPricingSection } from '@/types/sections/pricing';

export const Pricing = ({ title, cards }: IPricingSection) => {
    return (
        <section className="py-20 bg-cream/50">
            <div className="luxury-container">
                <h2 className="text-center text-4xl md:text-5xl mb-16 text-sage">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 rounded-xl transition-all duration-300 flex flex-col ${card.isPopular
                                    ? 'bg-sage text-white shadow-2xl scale-105 z-10'
                                    : 'bg-white text-sage border border-gray-100 shadow-sm hover:shadow-md'
                                }`}
                        >
                            {card.isPopular && (
                                <div className="absolute top-4 right-4 bg-white text-sage text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                                    Popular
                                </div>
                            )}

                            <h3 className={`text-2xl mb-2 ${card.isPopular ? 'text-white' : 'text-sage'}`}>
                                {card.title}
                            </h3>
                            <div className={`text-3xl font-inter font-semibold mb-8 ${card.isPopular ? 'text-white' : 'text-gray-900'}`}>
                                {card.price}
                            </div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {card.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                                        <svg className={`shrink-0 w-5 h-5 ${card.isPopular ? 'text-white/60' : 'text-sage/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={card.isPopular ? 'text-white/80' : 'text-gray-600'}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 border transition-colors ${card.isPopular
                                    ? 'bg-white text-sage border-white hover:bg-gray-100'
                                    : 'bg-transparent text-sage border-sage hover:bg-sage/5'
                                }`}>
                                {card.ctaLabel}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
