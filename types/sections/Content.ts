export interface ISectionContent {
    className?: string;
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    backgroundColor?: string;
}

export interface IHeroContent extends ISectionContent {
    ctaLabel: string;
    ctaHref: string;
}
