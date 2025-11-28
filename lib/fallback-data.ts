/**
 * Fallback Data
 *
 * Provides hardcoded fallback data when CMS is unavailable.
 * This ensures the site remains functional even if the CMS is down.
 */

import { HomePage } from '@/lib/api/types';

export function getFallbackData(locale: 'en' | 'ja'): HomePage {
  return {
    id: 0,
    title: 'Home Page Fallback',
    locale,
    heroSlides: [
      {
        type: 'zibot',
        title: 'ZiBot',
        subtitle: 'Last Mile Delivery Robot',
        ctaText: 'Learn More',
        ctaLink: '/products/zibot',
      },
      {
        type: 'glide',
        title: 'Glide',
        subtitle: 'Autonomous Scooter',
        ctaText: 'Discover',
        ctaLink: '#glide',
      },
      {
        type: 'consultancy',
        title: 'Consultancy',
        subtitle: 'Expert Solutions',
        ctaText: 'Get Started',
        ctaLink: '/custom-solutions',
      },
    ],
    videoSection: {
      enabled: true,
      videoUrl: '/videos/zibot.mp4',
    },
    aboutSection: {
      foundation: {
        title: 'Our Foundation',
        description: 'Building the future of autonomous robotics',
      },
      purpose: {
        title: 'Purpose',
        description: 'Revolutionizing delivery with cutting-edge technology',
        image: 0,
      },
      vision: {
        title: 'Vision',
        description: 'A world where autonomous systems enhance daily life',
        image: 0,
      },
      mission: {
        title: 'Mission',
        description: 'Delivering innovation through robotics',
        image: 0,
        highlights: [
          { title: 'Innovation', subtitle: 'Cutting-edge technology' },
          { title: 'Reliability', subtitle: 'Consistent performance' },
          { title: 'Sustainability', subtitle: 'Eco-friendly solutions' },
        ],
      },
    },
    products: [
      {
        title: 'ZiBot Last Mile Delivery Robot System',
        description:
          'The Last Mile Delivery System uses our robot to take food deliveries from restaurants to consumers\' locations.',
        link: '/products/zibot',
        features: [
          { title: '24/7 Operation', subtitle: 'Always Available', icon: 'Clock' },
          { title: 'Cost Effective', subtitle: 'Reduced Labor', icon: 'DollarSign' },
          { title: 'Eco-Friendly', subtitle: 'Zero Emissions', icon: 'Leaf' },
          { title: 'Reliable', subtitle: 'Consistent Service', icon: 'Shield' },
        ],
      },
      {
        title: 'Glide',
        description:
          'Introducing Fainzy\'s Glide, an innovative autonomous scooter that you can summon just like an Uber.',
        link: '#glide',
        reverse: true,
        features: [
          { title: '24/7 Operation', subtitle: 'Always Available', icon: 'Clock' },
          { title: 'Cost Effective', subtitle: 'Reduced Labor', icon: 'DollarSign' },
          { title: 'Eco-Friendly', subtitle: 'Zero Emissions', icon: 'Leaf' },
          { title: 'Reliable', subtitle: 'Consistent Service', icon: 'Shield' },
        ],
      },
      {
        title: 'Fainzy Consultancy Services',
        description:
          'Our consulting services help businesses integrate autonomous robotic solutions efficiently.',
        link: '/custom-solutions',
        features: [
          { title: 'Expert Analysis', subtitle: 'Comprehensive Solutions', icon: 'CheckCircle' },
          { title: 'Custom Integration', subtitle: 'Tailored to Your Needs', icon: 'Package' },
          { title: 'Full Support', subtitle: 'End-to-End Guidance', icon: 'Shield' },
          { title: 'Proven Results', subtitle: 'Maximize ROI', icon: 'DollarSign' },
        ],
      },
    ],
    metricsSection: {
      animatedStats: [
        { value: 150, label: 'Robots in active service', icon: 'Package' },
        { value: 45, label: 'Restaurants using the robot delivery system', icon: 'UtensilsCrossed' },
        { value: 30, label: 'Hotels using the robot delivery system', icon: 'Hotel' },
      ],
      staticStats: [
        { value: '25+', label: 'Active Deployments', icon: 'MapPin' },
        { value: '8+', label: 'Countries Served', icon: 'Globe2' },
        { value: '500K+', label: 'Deliveries Completed', icon: 'CheckCircle' },
      ],
    },
    faqs:
      locale === 'en'
        ? [
            {
              question: "What is Fainzy Technologies' specialty?",
              answer:
                'We specialize on (1)advanced autonomous driving systems, (2)making robots, (3)mobile app and website development, and, (4)AI applications using deep learning',
              locale: 'en',
            },
            {
              question: 'How can I apply for a role?',
              answer:
                'Please contact us using the Contact Us Form, (make sure to select "Apply For A Role" as the Reason.',
              locale: 'en',
            },
            {
              question: 'What type of robots do you have?',
              answer: 'Restaurant robot and last-mile delivery robot.',
              locale: 'en',
            },
            {
              question: 'I am interested in a robot, what do I do?',
              answer:
                'Please contact us using the Contact Us Form, (make sure to select "Robot Sales" as the Reason)',
              locale: 'en',
            },
            {
              question: 'Can you make custom robots?',
              answer: 'Yes, we can make custom robots to fit your needs and requirements.',
              locale: 'en',
            },
            {
              question: 'I am interested in making a custom robot, what do I do?',
              answer:
                'Please contact us using the Contact Us Form, (make sure to select "Custom Robot" as the Reason)',
              locale: 'en',
            },
          ]
        : [
            {
              question: 'ファインジー・テクノロジーズの得意分野は何ですか？',
              answer:
                '(1)高度な自律走行システム、(2)ロボット製作、(3)モバイルアプリ・ウェブサイト開発、(4)ディープラーニングによるAIアプリケーションに特化した事業展開を行っています。',
              locale: 'ja',
            },
            {
              question: 'どのように応募すればよいのですか？',
              answer: 'お問い合わせフォームよりご連絡ください（必ず「応募する」を選択してください）。',
              locale: 'ja',
            },
            {
              question: 'どのようなロボットをお持ちですか？',
              answer: 'レストランロボットとラストワンマイルデリバリーロボット。',
              locale: 'ja',
            },
            {
              question: 'ロボットに興味があるのですが、どうしたらいいですか？',
              answer:
                'お問い合わせフォームよりお問い合わせください（理由は必ず「ロボット販売」を選択してください）。',
              locale: 'ja',
            },
            {
              question: 'カスタムロボットは作れますか？',
              answer: 'はい、お客様のニーズやご要望に合わせたカスタムロボットの製作が可能です。',
              locale: 'ja',
            },
            {
              question: 'カスタムロボットの製作に興味があるのですが、どうすればよいですか？',
              answer:
                'お問い合わせフォームよりお問い合わせください（理由は必ず「カスタムロボット」を選択してください）。',
              locale: 'ja',
            },
          ],
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
}
