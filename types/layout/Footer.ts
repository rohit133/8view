export interface IFooterLink {
    label: string;
    href: string;
}

export interface IFooterSection {
    title: string;
    links: IFooterLink[];
}

export interface IFooterData {
    about: {
        title: string;
        description: string;
    };
    quickLinks: IFooterSection;
    services: IFooterSection;
    connect: {
        title: string;
        description: string;
        social: {
            platform: string;
            href: string;
            iconName: string;
        }[];
    };
    bottom: {
        copyright: string;
        links: IFooterLink[];
    };
}
