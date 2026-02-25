export interface IAccordionItem {
    title: string;
    price: string;
    description?: string;
}

export interface IAccordionSection {
    title: string;
    description: string;
    items: IAccordionItem[];
    imageSrc: string;
    imageAlt: string;
    ctaLabel: string;
}
