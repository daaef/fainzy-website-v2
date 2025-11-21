"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Product from "@/components/Product";
import ZiBotSlide from "@/components/ZiBotSlide";
import AboutSection from "@/components/AboutSection";
import Metrics from "@/components/Metrics";
import Faq from "@/components/Faq";
import LastMile from "@/public/last-delivery.png";
import Consultancy from "@/public/products/consultancy.jpg";
import Glide from "@/public/glide.png";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import {
  Clock,
  DollarSign,
  Leaf,
  Shield,
  Package,
  UtensilsCrossed,
  Hotel,
  MapPin,
  Globe2,
  CheckCircle,
} from "lucide-react";
import { Product as ProductType, FAQ, StatMetric, StaticStat } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { useMemo } from "react";
import GlideSlide from "@/components/GlideSlide";
import ConsultancySlide from "@/components/ConsultancySlide";
import CustomSolutionsCarousel from "@/components/CustomSolutionsCarousel";
import { customSolutions } from "@/data/customSolutions";

export default function Home() {
  const { locale } = useLocale();
  const products: ProductType[] = [
    {
      title: "ZiBot Last Mile Delivery Robot System",
      description:
        "The Last Mile Delivery System uses our robot to take food deliveries from restaurants to consumers' locations.",
      image: LastMile,
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
      features: [
        { title: "24/7 Operation", subtitle: "Always Available", icon: Clock },
        { title: "Cost Effective", subtitle: "Reduced Labor", icon: DollarSign },
        { title: "Eco-Friendly", subtitle: "Zero Emissions", icon: Leaf },
        { title: "Reliable", subtitle: "Consistent Service", icon: Shield },
      ],
    },
  ];

  const animatedStats: StatMetric[] = [
    { value: 150, label: "Robots in active service", icon: Package, delay: 0 },
    {
      value: 45,
      label: "Restaurants using the robot delivery system",
      icon: UtensilsCrossed,
      delay: 0.1,
    },
    { value: 30, label: "Hotels using the robot delivery system", icon: Hotel, delay: 0.2 },
  ];

  const staticStats: StaticStat[] = [
    { value: "25+", label: "Active Deployments", icon: MapPin },
    { value: "8+", label: "Countries Served", icon: Globe2 },
    { value: "500K+", label: "Deliveries Completed", icon: CheckCircle },
  ];

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

  // Filter FAQs based on locale: content: 1 = English, content: 2 = Japanese
  const filteredFaqs = useMemo(() => {
    const contentId = locale === "en" ? 1 : 2;
    return faqs.filter((faq) => faq.content === contentId);
  }, [locale, faqs]);

  return (
    <>
      <header className="bg-background text-foreground flex flex-col mb-[150px]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnMouseEnter: true,
            }),
            WheelGesturesPlugin(),
          ]}
          className="w-full pt-[20vh] min-h-[90vh] overflow-y-hidden overflow-x-hidden"
        >
          <CarouselContent>
            <CarouselItem key={"ZibotSlide1"} className="h-[60vh]">
              <ZiBotSlide />
            </CarouselItem>
            <CarouselItem key={"GlideSlide"} className="h-[60vh]">
              <GlideSlide />
            </CarouselItem>
            <CarouselItem key={"ConsultancySlide"} className="h-[60vh]">
              <ConsultancySlide />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </header>
      <main className="py-16">
        <section id="video">
          <div className="container pb-[100px]">
            <div className="flex justify-center">
              <video
                width="640"
                height="360"
                className="max-w-[1200px] w-full rounded-[23px]"
                autoPlay
                muted
                playsInline
                loop
                controls
                preload="none"
              >
                <source src="/videos/zibot.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
        <AboutSection />
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
            <Metrics animatedStats={animatedStats} staticStats={staticStats} />
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
