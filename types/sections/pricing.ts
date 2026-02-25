export interface IPricingCard {
    title: string;
    price: string;
    features: string[];
    ctaLabel: string;
    isPopular?: boolean;
}

export interface IPricingSection {
    title: string;
    cards: IPricingCard[];
}
