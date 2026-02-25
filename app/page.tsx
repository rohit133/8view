import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { AlternatingSection } from '@/components/sections/AlternatingSection';
import { Pricing } from '@/components/sections/Pricing';
import { AccordionSection } from '@/components/sections/AccordionSection';
import { Carousel } from '@/components/sections/Carousel';
import { VenuesGrid } from '@/components/sections/VenuesGrid';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { Testimonial } from '@/components/sections/Testimonial';
import { FAQ } from '@/components/sections/FAQ';
import { ContactForm } from '@/components/sections/ContactForm';
import { VisitVenue } from '@/components/sections/VisitVenue';
import { Footer } from '@/components/layout/Footer';

import {
  siteConfig,
  navLinks,
  heroData,
  historySection,
  nourishmentSection,
  planningSection,
  cateringSection,
  pricingData,
  accordionData,
  carouselData,
  venuesData,
  galleryData,
  testimonialData,
  faqData,
  contactData,
  visitVenueData,
  footerData
} from '@/data/home';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation links={navLinks} logo={siteConfig.logo} />

      <Hero {...heroData} />

      <div id="about">
        <AlternatingSection {...historySection} />
      </div>

      <AlternatingSection className='bg-[#FFFFFF]' {...nourishmentSection} />

      <div id="packages">
        <Pricing {...pricingData} />
      </div>

      <AccordionSection {...accordionData} />

      <Carousel {...carouselData} />

      <div id="venues">
        <VenuesGrid {...venuesData} />
      </div>

      <FeatureSection {...cateringSection} />

      <AlternatingSection {...planningSection} />

      <div id="gallery">
        <GalleryGrid {...galleryData} />
      </div>

      <Testimonial {...testimonialData} />

      <FAQ {...faqData} />

      <div id="contact">
        <ContactForm {...contactData} />
        <VisitVenue {...visitVenueData} />
      </div>


      <Footer {...footerData} />
    </main>
  );
}
