export interface IGalleryItem {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
}

export interface IGallerySection {
    title: string;
    items: IGalleryItem[];
}
