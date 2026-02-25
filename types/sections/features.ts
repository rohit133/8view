export interface IFeatureList {
    title: string;
    items: string[];
}

export interface IFeatureSection {
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    lists: IFeatureList[];
    reverse?: boolean;
}
