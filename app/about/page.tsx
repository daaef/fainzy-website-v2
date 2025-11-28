import { cookies } from 'next/headers';
import AboutPageClient from './AboutPageClient';
import { getAboutPageData } from '@/lib/api/about';
import type { AboutPage } from '@/lib/api/types';

export const revalidate = 60;

// Fallback data for when CMS is unavailable
function getFallbackAboutData(locale: 'en' | 'ja'): AboutPage {
  return {
    id: 0,
    title: 'About Page',
    locale,
    heroSection: {
      title: 'About Us',
      subtitle: 'All you need to know about us',
    },
    foundedSection: {
      title: 'Founded in 2018. Headquartered in Nagoya.',
      paragraphs: [
        {
          text: 'Founded in 2018 and headquartered in Moscow, Idaho, Fainzy Technologies is at the forefront of robotics and artificial intelligence innovation.',
        },
        {
          text: 'Our team of world-class engineers, researchers, and designers work tirelessly to create intelligent systems that enhance productivity, improve safety, and unlock new possibilities across industries.',
        },
      ],
    },
    peopleBannerSection: {
      title: 'The People Behind The Innovation',
      description: 'To revolutionize robotics and AI, we need exceptional talent. Based in Nagoya, our team operates across multiple continents.',
    },
    visionSection: {
      title: 'Our Vision',
      paragraphs: [
        {
          text: 'We envision a world where intelligent machines work seamlessly alongside humans, amplifying our capabilities and freeing us to focus on what matters most.',
        },
      ],
    },
    leadershipSection: {
      title: 'Our leadership',
      subtitle: 'The brilliant minds driving innovation at Fainzy Technologies',
      teamMembers: [],
    },
    ctaSection: {
      title: "Let's do great things together",
      description: "We're looking for talented individuals who are passionate about robotics, AI, and building the future.",
      buttons: [
        { text: 'View Open Positions', link: '/careers', variant: 'primary' },
        { text: 'Get in Touch', link: '/contact', variant: 'outline' },
      ],
    },
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
}

export default async function AboutPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value as 'en' | 'ja') || 'en';

  const aboutData = await getAboutPageData(locale);
  const data = aboutData || getFallbackAboutData(locale);

  return <AboutPageClient initialData={data} />;
}
