"use client";

import Link from "next/link";
import Product from "@/components/Product";
import Faq from "@/components/Faq";
import CustomSolutionsCarousel from "@/components/CustomSolutionsCarousel";
import LastMile from "@/public/last-delivery.png";
import Glide from "@/public/glide.png";
import Consultancy from "@/public/products/consultancy.jpg";
import { Clock, DollarSign, Leaf, Shield } from "lucide-react";
import { Product as ProductType, FAQ } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { useMemo } from "react";
import Image from "next/image";
import CareersBanner from "@/public/careers/careers-banner.jpg";
import { motion } from "motion/react";

export default function Home() {
  const { locale } = useLocale();
  const products: ProductType[] = [
    {
      title: "ZiBot Last Mile Delivery Robot System",
      description:
        "The Last Mile Delivery System uses our robot to take food deliveries from restaurants to consumers' locations.",
      image: LastMile,
      link: "/products/zibot",
      features: [
        { title: "24/7 Operation", subtitle: "Always Available", icon: Clock },
        { title: "Cost Effective", subtitle: "Reduced Labor", icon: DollarSign },
        { title: "Eco-Friendly", subtitle: "Zero Emissions", icon: Leaf },
        { title: "Reliable", subtitle: "Consistent Service", icon: Shield },
      ],
    },
    {
      title: "Glide",
      description:
        "Introducing Fainzy's Glide, an innovative autonomous scooter that you can summon just like an Uber. Glide offers a seamless travel experience, allowing you to navigate your surroundings effortlessly while minimizing physical contact. Simply request a ride via the app, and your personal scooter will arrive to take you wherever you need to go!",
      image: Glide,
      link: "#glide",
      features: [
        { title: "24/7 Operation", subtitle: "Always Available", icon: Clock },
        { title: "Cost Effective", subtitle: "Reduced Labor", icon: DollarSign },
        { title: "Eco-Friendly", subtitle: "Zero Emissions", icon: Leaf },
        { title: "Reliable", subtitle: "Consistent Service", icon: Shield },
      ],
      reverse: true,
    },
    {
      title: "Fainzy Consultancy Services",
      description:
        "The Last Mile Delivery System uses our robot to take food deliveries from restaurants to consumers' locations.",
      image: Consultancy,
      link: "#consultancy",
      features: [
        { title: "24/7 Operation", subtitle: "Always Available", icon: Clock },
        { title: "Cost Effective", subtitle: "Reduced Labor", icon: DollarSign },
        { title: "Eco-Friendly", subtitle: "Zero Emissions", icon: Leaf },
        { title: "Reliable", subtitle: "Consistent Service", icon: Shield },
      ],
    },
  ];

  const customSolutions = [
    {
      id: "customized-robots",
      category: "Custom Solution",
      title: "Customized Robots",
      description:
        "Fainzy Technologies can make customized robots suitable for your needs. Please contact us for more details.",
      features: [
        { title: "Health Robot", subtitle: "ALWAYS AVAILABLE" },
        { title: "Cost Effective", subtitle: "REDUCED LABOR" },
        { title: "Eco-Friendly", subtitle: "ZERO EMISSIONS" },
        { title: "Reliable", subtitle: "CONSISTENT SERVICE" },
      ],
      images: [{ src: "/products/custom-solutions.png", alt: "Customized Robots" }],
    },
    {
      id: "iot-solutions",
      category: "Custom Solution",
      title: "IoT Solutions",
      description:
        "Web Development, Mobile Application Development, Deep learning Algorithm development, Autonomous driving software solutions",
      features: [
        { title: "Web Development", subtitle: "MODERN SOLUTIONS" },
        { title: "Mobile Apps", subtitle: "iOS & ANDROID" },
        { title: "Deep Learning", subtitle: "AI ALGORITHMS" },
        { title: "Autonomous Driving", subtitle: "SMART SOFTWARE" },
      ],
      images: [{ src: "/products/consultancy.jpg", alt: "IoT Solutions" }],
    },
    {
      id: "mirax",
      category: "Custom Solution",
      title: "MiraX",
      description:
        "Our in-restaurant delivery robot designed to minimize physical contact between staff and customers, seamlessly delivering orders throughout your establishment.",
      features: [
        { title: "Contactless", subtitle: "MINIMAL CONTACT" },
        { title: "Efficient", subtitle: "FAST DELIVERY" },
        { title: "Smart Navigation", subtitle: "AUTONOMOUS" },
        { title: "User-Friendly", subtitle: "EASY TO USE" },
      ],
      images: [{ src: "/products/mirax.png", alt: "MiraX" }],
    },
    {
      id: "food-ordering",
      category: "Food Service",
      title: "Efficient Food Ordering System",
      description:
        "Connect restaurants and customers on a unified platform where orders are seamlessly processed and delivered by our autonomous robot fleet.",
      features: [
        { title: "Unified Platform", subtitle: "ONE SOLUTION" },
        { title: "Robot Fleet", subtitle: "AUTONOMOUS DELIVERY" },
        { title: "Real-time Tracking", subtitle: "LIVE UPDATES" },
        { title: "Seamless Integration", subtitle: "EASY SETUP" },
      ],
      images: [{ src: "/products/efficient.jpg", alt: "Efficient Food Ordering" }],
    },
    {
      id: "hotel-delivery",
      category: "Hospitality",
      title: "Hotel Robot Delivery System",
      description:
        "In-door hotel delivery robot that handles guest requests through an integrated tablet system, delivering items directly to rooms with precision.",
      features: [
        { title: "Tablet Integration", subtitle: "EASY REQUESTS" },
        { title: "Room Delivery", subtitle: "DIRECT TO ROOM" },
        { title: "24/7 Service", subtitle: "ALWAYS AVAILABLE" },
        { title: "Precision Navigation", subtitle: "ACCURATE DELIVERY" },
      ],
      images: [{ src: "/products/hotel.png", alt: "Hotel Robot Delivery" }],
    },
  ];

  // Filter FAQs based on locale: content: 1 = English, content: 2 = Japanese
  const filteredFaqs = useMemo(() => {
    const faqs: FAQ[] = [
      {
        id: 14,
        created: "2022-08-11T06:12:58.011000+09:00",
        modified: "2022-12-06T01:04:40.138262+09:00",
        question: "ファインジー・テクノロジーへの投資・提携を希望します。",
        answer:
          "Fainzy Technologies は、常に新しい戦略的パートナーシップを模索しています。お問い合わせフォームからご連絡ください（その際、必ず「投資・パートナーシップ」を理由に選択してください）。",
        content: 2,
      },
      {
        id: 13,
        created: "2022-08-11T06:11:26.474000+09:00",
        modified: "2022-12-06T01:04:46.975079+09:00",
        question: "I would like to invest or partner with Fainzy Technologies",
        answer:
          'Fainzy Technologies is always looking new strategic partnerships. Therefore, please contact using the Contact US Form, (Make sure to select "Invest/Partnership" as the Reason)',
        content: 1,
      },
      {
        id: 12,
        created: "2022-08-11T06:10:07.908000+09:00",
        modified: "2022-12-06T01:04:54.552230+09:00",
        question: "カスタムロボットの製作に興味があるのですが、どうすればよいですか？",
        answer:
          "お問い合わせフォームよりお問い合わせください（理由は必ず「カスタムロボット」を選択してください）。",
        content: 2,
      },
      {
        id: 11,
        created: "2022-08-11T06:06:27.756000+09:00",
        modified: "2022-12-06T01:05:01.914229+09:00",
        question: "I am interested in making a custom robot, what do I do?",
        answer:
          'Please contact us using the Contact Us Form, (make sure to select "Custom Robot" as the Reason)',
        content: 1,
      },
      {
        id: 10,
        created: "2022-06-23T01:07:45.496000+09:00",
        modified: "2022-12-06T01:05:10.408127+09:00",
        question: "カスタムロボットは作れますか？",
        answer: "はい、お客様のニーズやご要望に合わせたカスタムロボットの製作が可能です。",
        content: 2,
      },
      {
        id: 1,
        created: "2022-06-23T01:02:23.487000+09:00",
        modified: "2022-12-06T01:05:34.467257+09:00",
        question: "What is Fainzy Technologies' specialty?",
        answer:
          "We specialize on (1)advanced autonomous driving systems, (2)making robots, (3)mobile app and website development, and, (4)AI applications using deep learning",
        content: 1,
      },
      {
        id: 2,
        created: "2022-06-23T01:02:43.270000+09:00",
        modified: "2022-12-06T01:05:46.489298+09:00",
        question: "ファインジー・テクノロジーズの得意分野は何ですか？",
        answer:
          "(1)高度な自律走行システム、(2)ロボット製作、(3)モバイルアプリ・ウェブサイト開発、(4)ディープラーニングによるAIアプリケーションに特化した事業展開を行っています。",
        content: 2,
      },
      {
        id: 3,
        created: "2022-06-23T01:03:19.303000+09:00",
        modified: "2022-12-06T01:06:03.884077+09:00",
        question: "How can I apply for a role?",
        answer:
          'Please contact us using the Contact Us Form, (make sure to select "Apply For A Role" as the Reason.',
        content: 1,
      },
      {
        id: 4,
        created: "2022-06-23T01:05:13.969000+09:00",
        modified: "2022-12-06T01:06:14.896997+09:00",
        question: "どのように応募すればよいのですか？",
        answer: "お問い合わせフォームよりご連絡ください（必ず「応募する」を選択してください）。",
        content: 2,
      },
      {
        id: 5,
        created: "2022-06-23T01:05:35.495000+09:00",
        modified: "2022-12-06T01:06:36.446826+09:00",
        question: "What type of robots do you have?",
        answer: "Restaurant robot and last-mile delivery robot.",
        content: 1,
      },
      {
        id: 6,
        created: "2022-06-23T01:06:02.372000+09:00",
        modified: "2022-12-06T01:06:49.085976+09:00",
        question: "どのようなロボットをお持ちですか？",
        answer: "レストランロボットとラストワンマイルデリバリーロボット。",
        content: 2,
      },
      {
        id: 7,
        created: "2022-06-23T01:06:19.302000+09:00",
        modified: "2022-12-06T01:07:00.780299+09:00",
        question: "I am interested in a robot, what do I do?",
        answer:
          'Please contact us using the Contact Us Form, (make sure to select "Robot Sales" as the Reason)',
        content: 1,
      },
      {
        id: 8,
        created: "2022-06-23T01:06:40.541000+09:00",
        modified: "2022-12-06T01:07:14.966906+09:00",
        question: "ロボットに興味があるのですが、どうしたらいいですか？",
        answer:
          "お問い合わせフォームよりお問い合わせください（理由は必ず「ロボット販売」を選択してください）。",
        content: 2,
      },
      {
        id: 9,
        created: "2022-06-23T01:07:27.037000+09:00",
        modified: "2022-12-06T01:07:23.440005+09:00",
        question: "Can you make custom robots?",
        answer: "Yes, we can make custom robots to fit your needs and requirements.",
        content: 1,
      },
    ];

    const contentId = locale === "en" ? 1 : 2;
    return faqs.filter((faq) => faq.content === contentId);
  }, [locale]);

  return (
    <>
      <header>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src={CareersBanner}
            alt="careers banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,11,0.3)] to-[rgba(10,10,11,0.7)]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 sm:px-6 py-24"
          >
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-white tracking-[-1.12px] mb-4">
              Our Products & Services
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
              At Fainzy Technologies, we&apos;re pioneering the next generation of robotics and AI
              solutions that will transform industries worldwide.
            </p>
          </motion.div>
        </section>
      </header>
      <main className="py-16">
        <section>
          <div className="container min-h-[100vh] py-[100px]">
            {products.map((product, i) => (
              <div
                key={i}
                className="flex gap-6 md:gap-8 lg:gap-[55px] items-center relative shrink-0 w-full"
              >
                <Product {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Glide Anchor Section */}
        <section id="glide" className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Glide - Autonomous Scooter
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
              Introducing Fainzy&apos;s Glide, an innovative autonomous scooter that you can summon
              just like an Uber. Glide offers a seamless travel experience, allowing you to navigate
              your surroundings effortlessly while minimizing physical contact. Simply request a
              ride via the app, and your personal scooter will arrive to take you wherever you need
              to go!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-md font-semibold text-base transition-all duration-300"
            >
              Contact Us for Demo
            </Link>
          </div>
        </section>

        {/* Consultancy Anchor Section */}
        <section id="consultancy" className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Fainzy Consultancy Services
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
              Expert robotics and AI consulting services to help transform your business. Our
              experienced team provides comprehensive solutions including autonomous driving
              systems, robot development, mobile and web application development, and AI
              applications using deep learning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-md font-semibold text-base transition-all duration-300"
            >
              Learn More About Our Services
            </Link>
          </div>
        </section>

        <section>
          <CustomSolutionsCarousel solutions={customSolutions} />
          <div className="container flex justify-center py-12">
            <Link
              href="/custom-solutions"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-md font-semibold text-base transition-all duration-300"
            >
              Explore Custom Solutions
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </section>
        <section>
          <div className="container min-h-[100vh] py-[100px]">
            <Faq faqs={filteredFaqs} />
          </div>
        </section>
      </main>
    </>
  );
}
