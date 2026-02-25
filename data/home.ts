import { INavLink } from '@/types/layout/Navigation';
import { IHeroContent, ISectionContent } from '@/types/sections/Content';
import { IPricingSection } from '@/types/sections/pricing';
import { IAccordionSection } from '@/types/sections/accordion';
import { ICarouselSection } from '@/types/sections/carousel';
import { IVenuesSectionProps } from '@/types/sections/venues';
import { IFeatureSection } from '@/types/sections/features';
import { IGallerySection } from '@/types/sections/gallery';
import { ITestimonialSection } from '@/types/sections/testimonial';
import { IFAQSection } from '@/types/sections/faq';
import { IContactSection, IVisitVenueSection } from '@/types/sections/contact';
import { IFooterData } from '@/types/layout/Footer';

export const siteConfig = {
    logo: "The Luxury Resort",
    copyright: `© ${new Date().getFullYear()} The Luxury Resort. All rights reserved.`,
    footerDescription: "The Luxury Resort has been creating unforgettable wedding experiences for over 50 years. Our commitment to excellence ensures your special day is perfect."
};

export const navLinks: INavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Venues', href: '#venues' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export const heroData: IHeroContent = {
    title: "Luxury resort and wedding venue",
    paragraphs: [
        "Nestled in the heart of breathtaking landscapes, our luxury resort offers an unparalleled setting for your dream wedding. With pristine gardens, elegant architecture, and world-class amenities, we create unforgettable moments that last a lifetime."
    ],
    imageSrc: "/hero1.png",
    imageAlt: "Wedding couple at luxury resort",
    ctaLabel: "Explore More",
    ctaHref: "#venues"
};

export const historySection: ISectionContent = {
    title: "A History of Romance",
    paragraphs: [
        "For over half a century, our venue has been the backdrop to countless love stories. What began as a private estate in 1965 has evolved into one of the most sought-after wedding destinations in the region.",
        "Our grounds have witnessed the union of thousands of couples, each celebration as unique as the love it honors. From intimate ceremonies to grand receptions, we've perfected the art of bringing wedding dreams to life.",
        "The timeless architecture and meticulously maintained gardens create an atmosphere of elegance and romance, ensuring your special day is nothing short of magical."
    ],
    imageSrc: "/hero2.png",
    imageAlt: "Elegant garden gazebo"
};

export const nourishmentSection: ISectionContent = {
    title: "Nourishing Visions",
    paragraphs: [
        "Every detail matters when it comes to your special day. Our experienced team works closely with you to bring your vision to life, from the grandest elements to the smallest touches.",
        "We believe in creating experiences that reflect your unique love story. Our flexible spaces can be transformed to match any theme or style, whether you envision a classic, romantic celebration or a modern, contemporary affair.",
        "With dedicated wedding planners, world-class catering, and attention to every detail, we ensure your celebration exceeds all expectations."
    ],
    imageSrc: "/hero3.png",
    imageAlt: "Grand hall with chandelier",
    reverse: true
};

export const planningSection: ISectionContent = {
    title: "We stage it your dream",
    paragraphs: [
        "Your wedding should be a reflection of your unique love story. Our dedicated team of professionals works tirelessly to transform your vision into reality, handling every detail with care and precision.",
        "From the initial consultation to the last dance, we're with you every step of the way. Our experienced coordinators ensure a seamless celebration, allowing you to relax and cherish every moment.",
        "With meticulous planning, creative design, and flawless execution, we create unforgettable experiences that you and your guests will treasure forever."
    ],
    imageSrc: "/wine_glass.png", // Using hero1 as a placeholder for the glasses image in the request
    imageAlt: "Champagne glasses for wedding toast",
    reverse: false
};

export const cateringSection: IFeatureSection = {
    title: "Catering",
    paragraphs: [
        "Our award-winning culinary team creates exceptional dining experiences tailored to your taste and vision. From elegant plated dinners to lavish buffets, every dish is prepared with the finest ingredients and presented with artistry.",
        "We accommodate all dietary requirements and preferences, ensuring every guest enjoys a memorable meal. Our sommelier can pair each course with the perfect wines from our extensive collection."
    ],
    imageSrc: "/hero3.png", // Placeholder for the cheese board image
    imageAlt: "Artisanal catering spread",
    lists: [
        {
            title: "Menu Options",
            items: ["Plated dinners", "Buffet service", "Cocktail receptions", "Custom menus"]
        },
        {
            title: "Specialties",
            items: ["Artisan appetizers", "Premium entrees", "Signature desserts", "Wine pairings"]
        }
    ]
};

export const pricingData: IPricingSection = {
    title: "Packages & Pricing",
    cards: [
        {
            title: "Classic",
            price: "$12,000",
            features: [
                "Ceremony & reception venue (6 hours)",
                "Tables, chairs & linens",
                "Basic decoration package",
                "Bridal suite access",
                "Complimentary parking"
            ],
            ctaLabel: "Learn More"
        },
        {
            title: "Premium",
            price: "$18,500",
            features: [
                "Everything in Classic",
                "Extended venue access (8 hours)",
                "Premium decoration & florals",
                "Professional photography (4 hours)",
                "Wedding coordinator"
            ],
            ctaLabel: "Learn More",
            isPopular: true
        },
        {
            title: "Luxury",
            price: "$28,000",
            features: [
                "Everything in Premium",
                "Full day venue access",
                "Luxury catering & bar service",
                "Photo & video (full day)",
                "Spa access for bridal party"
            ],
            ctaLabel: "Learn More"
        }
    ]
};

export const accordionData: IAccordionSection = {
    title: "Lorem Ipsum Pricing Title",
    description: "Our boutique hotel can hold receptions for up to 400 guests and provides a variety of venues.",
    items: [
        {
            title: "Princess Ceremony",
            price: "€4,600",
            description: "A fairy-tale setting designed for the most romantic celebrations. Includes a dedicated floral path, premium seating, and a sunset backdrop."
        },
        {
            title: "Radiant Ceremony",
            price: "€6,800",
            description: "Illuminate your love with our signature lighting and garden arrangement. Perfect for late afternoon ceremonies transitioning into evening."
        },
        {
            title: "Suntory Greenery",
            price: "€8,900",
            description: "Connect with nature in our lush botanical gardens. A serene and peaceful environment surrounded by exotic flora and century-old trees."
        },
        {
            title: "Elopement Package",
            price: "€9,950",
            description: "An intimate and luxurious experience for just the two of you. Includes a private chef, champagne toast, and overnight suite stay."
        },
        {
            title: "Le Visions Spa Package",
            price: "€1,000",
            description: "Pre-wedding pampering for the bridal party. Full access to our thermal circuit, signature massages, and organic skin treatments."
        }
    ],
    imageSrc: "/people_weeding_ceremony.png",
    imageAlt: "People at wedding ceremony",
    ctaLabel: "Enquiry Button"
};

export const carouselData: ICarouselSection = {
    items: [
        { imageSrc: "/hero3.png", imageAlt: "Orangedale Ballroom", title: "Orangedale Ballroom" },
        { imageSrc: "/hero1.png", imageAlt: "Outdoor Terrace", title: "Outdoor Terrace" },
        { imageSrc: "/hero2.png", imageAlt: "Garden Pavilion", title: "Garden Pavilion" },
        { imageSrc: "/people_weeding_ceremony.png", imageAlt: "Sunset Deck", title: "Sunset Deck" },
        { imageSrc: "/pool.png", imageAlt: "The Grand Hall", title: "The Grand Hall" }
    ]
};

export const venuesData: IVenuesSectionProps = {
    venues: [
        {
            title: "Grand Ballroom",
            capacity: "Capacity: 200-300 guests",
            imageSrc: "/hero3.png",
            imageAlt: "Grand Ballroom with chandelier"
        },
        {
            title: "Garden Terrace",
            capacity: "Capacity: 150-200 guests",
            imageSrc: "/hero2.png",
            imageAlt: "Poolside Garden Terrace"
        }
    ]
};

export const galleryData: IGallerySection = {
    title: "Moments to Remember",
    items: [
        {
            title: "Floral Design",
            subtitle: "Custom arrangements",
            imageSrc: "/hero2.png",
            imageAlt: "Beautiful wedding bouquet"
        },
        {
            title: "Poolside Events",
            subtitle: "Outdoor elegance",
            imageSrc: "/people_weeding_ceremony.png",
            imageAlt: "Aerial view of resort pool"
        },
        {
            title: "Intimate Moments",
            subtitle: "Captured forever",
            imageSrc: "/hero1.png",
            imageAlt: "Wedding couple kissing"
        },
        {
            title: "Celebrations",
            subtitle: "Joyful memories",
            imageSrc: "/hero3.png",
            imageAlt: "Wedding guests dancing"
        }
    ]
};

export const testimonialData: ITestimonialSection = {
    quote: "The Luxury Resort provided the perfect backdrop for our special day. The staff went above and beyond to make sure we and our guests had an unforgettable experience. Highly recommended!",
    author: "Jessica & Ryan",
    date: "May 2025"
};

export const faqData: IFAQSection = {
    title: "Frequently Asked Questions",
    items: [
        {
            question: "How far in advance should we book our wedding?",
            answer: "We recommend booking at least 12-18 months in advance, especially for popular weekend dates during the peak wedding season."
        },
        {
            question: "Do you offer wedding planning services?",
            answer: "Yes, all our packages include the services of a dedicated wedding coordinator who will assist with the planning process and ensure everything runs smoothly on your special day."
        },
        {
            question: "Can we bring our own vendors?",
            answer: "We have a curated list of preferred vendors who are familiar with our venue. However, you are welcome to bring outside vendors, provided they meet our insurance requirements and are approved by our team."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Our cancellation policy varies depending on the timing of the cancellation. Details are outlined in our wedding contract, and we also recommend purchasing wedding insurance."
        },
        {
            question: "Do you accommodate dietary restrictions?",
            answer: "Absolutely. Our culinary team is experienced in catering to various dietary needs, including vegetarian, vegan, gluten-free, and nut-allergy requirements."
        },
        {
            question: "Is there accommodation available for guests?",
            answer: "Yes, we offer a range of luxury rooms and suites for your guests. As part of your wedding package, we can provide a special room block rate for your attendees."
        }
    ]
};

export const contactData: IContactSection = {
    title: "Plan Your Dream Wedding",
    description: "Fill out the form below and our wedding specialists will contact you within 24 hours"
};

export const visitVenueData: IVisitVenueSection = {
    title: "Visit Our Venue",
    address: {
        street: "123 Paradise Lane",
        district: "Luxury District",
        city: "New York, NY 10001"
    },
    contact: {
        phone: "(555) 123-4567",
        fax: "(555) 123-4568"
    },
    email: {
        primary: "weddings@luxuryresort.com",
        secondary: "events@luxuryresort.com"
    },
    hours: {
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        weekends: "Saturday - Sunday: 10:00 AM - 8:00 PM",
        note: "By appointment only"
    }
};

export const footerData: IFooterData = {
    about: {
        title: "About Us",
        description: siteConfig.footerDescription
    },
    quickLinks: {
        title: "Quick Links",
        links: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Venues", href: "/venues" },
            { label: "Packages", href: "/packages" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" }
        ]
    },
    services: {
        title: "Services",
        links: [
            { label: "Wedding Planning", href: "/services#planning" },
            { label: "Catering", href: "/services#catering" },
            { label: "Photography", href: "/services#photography" },
            { label: "Floral Design", href: "/services#floral" },
            { label: "Entertainment", href: "/services#entertainment" },
            { label: "Accommodations", href: "/services#accommodations" }
        ]
    },
    connect: {
        title: "Connect With Us",
        description: "Newsletter: Stay updated with our latest offerings and exclusive deals.",
        social: [
            { platform: "Facebook", href: "#", iconName: "facebook" },
            { platform: "Instagram", href: "#", iconName: "instagram" },
            { platform: "Twitter", href: "#", iconName: "twitter" },
            { platform: "Email", href: "mailto:info@luxuryresort.com", iconName: "mail" }
        ]
    },
    bottom: {
        copyright: siteConfig.copyright,
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Sitemap", href: "/sitemap" }
        ]
    }
};
