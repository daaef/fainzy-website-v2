/**
 * Payload CMS Type Definitions
 *
 * These types are copied from the auto-generated payload-types.ts
 * in the CMS project to ensure type safety across the frontend.
 *
 * Source: /Users/apple/Fainzy/cms/src/payload-types.ts
 */

export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}

export interface HomePage {
  id: number;
  title: string;
  locale: 'en' | 'ja';
  heroSlides?:
    | Array<{
        type: 'zibot' | 'glide' | 'consultancy' | 'custom';
        title?: string | null;
        subtitle?: string | null;
        cursiveText?: string | null;
        image?: (number | null) | Media;
        ctaText?: string | null;
        ctaLink?: string | null;
        id?: string | null;
      }>
    | null;
  videoSection: {
    enabled?: boolean | null;
    videoUrl: string;
    posterImage?: (number | null) | Media;
  };
  aboutSection: {
    foundation: {
      label?: string | null;
      title: string;
      description: string;
      ctaText?: string | null;
      ctaLink?: string | null;
    };
    purpose: {
      label?: string | null;
      title: string;
      description: string;
      image: number | Media;
    };
    vision: {
      label?: string | null;
      title: string;
      description: string;
      image: number | Media;
    };
    mission: {
      label?: string | null;
      title: string;
      description: string;
      image: number | Media;
      highlights?:
        | Array<{
            title: string;
            subtitle: string;
            id?: string | null;
          }>
        | null;
    };
  };
  products?:
    | Array<{
        title: string;
        description: string;
        image?: (number | null) | Media;
        link: string;
        reverse?: boolean | null;
        features?:
          | Array<{
              title: string;
              subtitle: string;
              icon:
                | 'Clock'
                | 'DollarSign'
                | 'Leaf'
                | 'Shield'
                | 'Package'
                | 'CheckCircle'
                | 'UtensilsCrossed'
                | 'Hotel';
              id?: string | null;
            }>
          | null;
        id?: string | null;
      }>
    | null;
  customSolutions?:
    | Array<{
        id: string;
        category: string;
        title: string;
        description: string;
        images?:
          | Array<{
              image: number | Media;
              id?: string | null;
            }>
          | null;
        features?:
          | Array<{
              title: string;
              subtitle: string;
              id?: string | null;
            }>
          | null;
      }>
    | null;
  metricsSection?:
    | {
        title?: string | null;
        subtitle?: string | null;
        animatedStats?:
          | Array<{
              value: number;
              label: string;
              icon:
                | 'Package'
                | 'UtensilsCrossed'
                | 'Hotel'
                | 'MapPin'
                | 'Globe2'
                | 'CheckCircle';
              id?: string | null;
            }>
          | null;
        staticStats?:
          | Array<{
              value: string;
              label: string;
              icon: 'MapPin' | 'Globe2' | 'CheckCircle';
              id?: string | null;
            }>
          | null;
      }
    | null;
  faqs?:
    | Array<{
        question: string;
        answer: string;
        locale: 'en' | 'ja';
        order?: number | null;
        id?: string | null;
      }>
    | null;
  seo?:
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        keywords?: string | null;
      }
    | null;
  updatedAt: string;
  createdAt: string;
}

/**
 * Payload CMS Response Wrapper
 * Used for collection queries that return paginated results
 */
export interface CMSResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface AboutPage {
  id: number;
  title: string;
  locale: 'en' | 'ja';
  heroSection: {
    title: string;
    subtitle: string;
    bannerImage?: (number | null) | Media;
  };
  foundedSection: {
    title: string;
    paragraphs?:
      | Array<{
          text: string;
          id?: string | null;
        }>
      | null;
    image?: (number | null) | Media;
  };
  peopleBannerSection: {
    title: string;
    description: string;
    bannerImage?: (number | null) | Media;
  };
  visionSection: {
    title: string;
    paragraphs?:
      | Array<{
          text: string;
          id?: string | null;
        }>
      | null;
    image?: (number | null) | Media;
  };
  leadershipSection: {
    title: string;
    subtitle: string;
    teamMembers?:
      | Array<{
          name: string;
          role: string;
          imageUrl: number | Media;
          id?: string | null;
        }>
      | null;
  };
  ctaSection: {
    title: string;
    description: string;
    bannerImage?: (number | null) | Media;
    buttons?:
      | Array<{
          text: string;
          link: string;
          variant: 'primary' | 'outline';
          id?: string | null;
        }>
      | null;
  };
  seo?:
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        keywords?: string | null;
      }
    | null;
  updatedAt: string;
  createdAt: string;
}

export interface ProductsPage {
  id: number;
  title: string;
  locale: 'en' | 'ja';
  heroSection: {
    title: string;
    subtitle: string;
    bannerImage?: (number | null) | Media;
  };
  products?:
    | Array<{
        id: string;
        title: string;
        description: string;
        image?: (number | null) | Media;
        link: string;
        reverse?: boolean | null;
        features?:
          | Array<{
              title: string;
              subtitle: string;
              icon:
                | 'Clock'
                | 'DollarSign'
                | 'Leaf'
                | 'Shield'
                | 'Package'
                | 'CheckCircle'
                | 'UtensilsCrossed'
                | 'Hotel';
              id?: string | null;
            }>
          | null;
      }>
    | null;
  customSolutions?:
    | Array<{
        id: string;
        category: string;
        title: string;
        description: string;
        images?:
          | Array<{
              image: number | Media;
              id?: string | null;
            }>
          | null;
        features?:
          | Array<{
              title: string;
              subtitle: string;
              id?: string | null;
            }>
          | null;
      }>
    | null;
  faqs?:
    | Array<{
        question: string;
        answer: string;
        locale: 'en' | 'ja';
        order?: number | null;
        id?: string | null;
      }>
    | null;
  seo?:
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        keywords?: string | null;
      }
    | null;
  updatedAt: string;
  createdAt: string;
}

export interface CareersPage {
  id: number;
  title: string;
  heroSection: {
    title: string;
    subtitle: string;
    backgroundImage?: (number | null) | Media;
  };
  introSection: {
    description: string;
  };
  departmentsSection: {
    departments?: Array<{
      title: string;
      description: string;
      image?: (number | null) | Media;
      id?: string | null;
    }> | null;
    ctaButtonText?: string | null;
  };
  missionSection: {
    title: string;
    description: string;
    image?: (number | null) | Media;
  };
  facilitiesSection: {
    title: string;
    description: string;
    backgroundImage?: (number | null) | Media;
  };
  benefitsSection: {
    title: string;
    description: string;
    benefits?: Array<{
      benefit: string;
      id?: string | null;
    }> | null;
    image?: (number | null) | Media;
  };
  innovationSection: {
    title: string;
    description: string;
    image?: (number | null) | Media;
  };
  growthSection: {
    title: string;
    description: string;
    image?: (number | null) | Media;
  };
  peopleImageSection?: {
    image?: (number | null) | Media;
  } | null;
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
  };
  jobs?: Job[] | null;
  seo?:
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        keywords?: string | null;
      }
    | null;
  updatedAt: string;
  createdAt: string;
}

export interface ContactPage {
  id: number;
  title: string;
  heroSection: {
    title: string;
    description: string;
  };
  socialMedia?: {
    twitter?: string | null;
    linkedin?: string | null;
    instagram?: string | null;
  } | null;
  contactInfo: {
    email: string;
    phone: string;
    officeAddress: {
      en: string;
      ja: string;
    };
  };
  mapLocation?: {
    latitude?: number | null;
    longitude?: number | null;
  } | null;
  seo?:
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        keywords?: string | null;
      }
    | null;
  updatedAt: string;
  createdAt: string;
}

export interface Job {
  id?: string | null;
  title: string;
  slug: string;
  location: string;
  date: string;
  type: 'Full time' | 'Part time' | 'Contract' | 'Internship';
  salary?: string | null;
  skills?:
    | Array<{
        skill: string;
        id?: string | null;
      }>
    | null;
  description?: string | null;
  responsibilities?:
    | Array<{
        responsibility: string;
        id?: string | null;
      }>
    | null;
  requirements?:
    | Array<{
        requirement: string;
        id?: string | null;
      }>
    | null;
  qualifications?:
    | Array<{
        qualification: string;
        id?: string | null;
      }>
    | null;
  benefits?:
    | Array<{
        benefit: string;
        id?: string | null;
      }>
    | null;
  techStack?:
    | Array<{
        tech: string;
        id?: string | null;
      }>
    | null;
  imageKey?: 'product' | 'engineering' | 'innovation' | 'worldclass' | 'people' | null;
  applyBefore?: string | null;
}

export interface BlogPost {
  id: number | string;
  title: string;
  slug: string;
  category: 'business' | 'technology' | 'case-study' | 'careers' | 'sustainability';
  description: string;
  featuredImage?: (number | null) | Media;
  publishedDate: string;
  readTime?: string | null;
  featured?: boolean;
  content?: { root?: { children?: unknown[] } } | null; // richText content
  views?: number | null;
  likes?: number | null;
  author?: { id: string; name?: string } | string | null; // relationship to users
  seo?:
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        keywords?: string | null;
      }
    | null;
  updatedAt: string;
  createdAt: string;
}
