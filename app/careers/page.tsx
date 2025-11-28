import { getCareersPageData } from '@/lib/api/careers';
import type { CareersPage } from '@/lib/api/types';
import CareersPageClient from './CareersPageClient';

export const revalidate = 60;

// Fallback data for when CMS is unavailable
function getFallbackCareersData(): CareersPage {
  return {
    id: 0,
    title: 'Careers Page',
    heroSection: {
      title: 'Join Us in Building the Future',
      subtitle: "At Fainzy Technologies, we're pioneering the next generation of robotics and AI solutions.",
    },
    introSection: {
      description: "We're looking for talented, passionate individuals who want to make a real impact.",
    },
    departmentsSection: {
      departments: [],
    },
    missionSection: {
      title: 'Our Mission',
      description: 'To accelerate the world\'s transition to sustainable automation through intelligent robotics.',
    },
    facilitiesSection: {
      title: 'World-Class Facilities',
      description: 'Work in state-of-the-art facilities equipped with the latest technology.',
    },
    benefitsSection: {
      title: 'Benefits & Perks',
      description: 'We believe in taking care of our team members.',
      benefits: [],
    },
    innovationSection: {
      title: 'Innovation at Scale',
      description: 'Work on projects that impact millions of users.',
    },
    growthSection: {
      title: 'Continuous Growth',
      description: 'We invest heavily in our team\'s development.',
    },
    ctaSection: {
      title: 'Ready to Join Us?',
      description: 'Explore our open positions and find the perfect role for you.',
      buttonText: 'Explore Open Positions',
    },
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
}

export default async function CareersPage() {
  const careersData = await getCareersPageData();
  const data = careersData || getFallbackCareersData();

  return <CareersPageClient initialData={data} />;
}
