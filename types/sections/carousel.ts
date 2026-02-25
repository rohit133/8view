export interface ICarouselItem {
    imageSrc: string;
    imageAlt: string;
    title: string;
}

export interface ICarouselSection {
    items: ICarouselItem[];
}
