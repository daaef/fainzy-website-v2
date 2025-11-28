import { getContactPageData } from '@/lib/api/contact';
import type { ContactPage } from '@/lib/api/types';
import ContactPageClient from './ContactPageClient';

export const revalidate = 60;

// Fallback data for when CMS is unavailable
function getFallbackContactData(): ContactPage {
  return {
    id: 0,
    title: 'Contact Page',
    heroSection: {
      title: 'Get in touch',
      description: "Having a question about our robotics solutions or want to explore partnership opportunities? We're here to help.",
    },
    socialMedia: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      instagram: 'https://www.instagram.com',
    },
    contactInfo: {
      email: 'info@fainzy.ai',
      phone: '+81(0)52-3153-1939',
      officeAddress: {
        en: 'Nagoya University Incubation Facility, Furo-cho, Chikusa Ward, Nagoya, Aichi 464-0814, Japan',
        ja: '〒464-0814 愛知県名古屋市千種区不老町 名古屋大学 インキュベーション施設',
      },
    },
    mapLocation: {
      latitude: 35.157308228381325,
      longitude: 136.96488391534322,
    },
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
}

export default async function Contact() {
  const contactData = await getContactPageData();
  const data = contactData || getFallbackContactData();

  return <ContactPageClient initialData={data} />;
}
