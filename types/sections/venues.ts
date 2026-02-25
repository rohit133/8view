export interface IVenueItem {
    title: string;
    capacity: string;
    imageSrc: string;
    imageAlt: string;
}

export interface IVenuesSectionProps {
    venues: IVenueItem[];
}
