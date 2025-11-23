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

export default function HomeClient() {
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
        "Our consulting services help businesses integrate autonomous robotic solutions efficiently. From feasibility studies to deployment and maintenance, we guide you through every step of the adoption process to ensure optimal performance and ROI.",
      image: Consultancy,
      link: "/custom-solutions",
      features: [
        { title: "Expert Analysis", subtitle: "Comprehensive Solutions", icon: CheckCircle },
        { title: "Custom Integration", subtitle: "Tailored to Your Needs", icon: Package },
        { title: "Full Support", subtitle: "End-to-End Guidance", icon: Shield },
        { title: "Proven Results", subtitle: "Maximize ROI", icon: DollarSign },
      ],
    },
  ];

  const industryData = [
    {
      icon: Package,
      title: locale === "ja" ? "ラストマイル配送" : "Last-Mile Delivery",
      description:
        locale === "ja"
          ? "ホテル、レストラン、住宅地などのラストマイル配送を効率化し、配送コストを削減。"
          : "Efficient last-mile delivery for hotels, restaurants, and residential areas with reduced delivery costs.",
    },
    {
      icon: UtensilsCrossed,
      title: locale === "ja" ? "飲食業界" : "Food & Beverage",
      description:
        locale === "ja"
          ? "レストランやホテルの配膳、下膳作業を自動化し、スタッフの負担を軽減。"
          : "Automated table service and bussing for restaurants and hotels, lightening staff workload.",
    },
    {
      icon: Hotel,
      title: locale === "ja" ? "ホスピタリティ" : "Hospitality",
      description:
        locale === "ja"
          ? "ホテルのルームサービスやアメニティ配送を24時間自動化。"
          : "24/7 automated room service and amenity delivery for hotels.",
    },
    {
      icon: MapPin,
      title: locale === "ja" ? "住宅地・オフィス" : "Residential & Office",
      description:
        locale === "ja"
          ? "住宅地やオフィスビル内での荷物配送を自動化し、利便性を向上。"
          : "Automated package delivery within residential and office buildings for improved convenience.",
    },
    {
      icon: Globe2,
      title: locale === "ja" ? "その他多様な業界" : "Versatile Industries",
      description:
        locale === "ja"
          ? "病院、学校、商業施設など、様々な場所で活用可能な汎用性。"
          : "Versatile enough to be used in hospitals, schools, commercial facilities, and more.",
    },
  ];

  return (
    <>
      <main>
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
            WheelGesturesPlugin(),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            <CarouselItem>
              <ZiBotSlide />
            </CarouselItem>

            <CarouselItem>
              <GlideSlide />
            </CarouselItem>

            <CarouselItem>
              <ConsultancySlide />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 sm:left-8" />
          <CarouselNext className="right-4 sm:right-8" />
          <CarouselDots className="bottom-8" />
        </Carousel>

        <AboutSection />

        <section className="py-12 md:py-20 lg:py-[100px]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] mb-4 text-white">
                {locale === "ja" ? "製品ラインナップ" : "Our Products"}
              </h2>
              <p className="text-neutral-400 max-w-3xl mx-auto">
                {locale === "ja"
                  ? "Fainzyは、最先端の自律走行ロボットソリューションを提供し、様々な業界の課題を解決します。"
                  : "Fainzy provides cutting-edge autonomous robot solutions that solve challenges across various industries."}
              </p>
            </div>
            {products.map((product, index) => (
              <Product key={index} {...product} reverse={product.reverse} />
            ))}
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-[100px] bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1b]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] mb-4 text-white">
                {locale === "ja" ? "対応業界" : "Industries We Serve"}
              </h2>
              <p className="text-neutral-400 max-w-3xl mx-auto">
                {locale === "ja"
                  ? "ZiBotは様々な業界での導入実績があり、それぞれの現場に最適化されたソリューションを提供します。"
                  : "ZiBot has been successfully deployed across various industries, providing optimized solutions for each environment."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryData.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0a0a0b] border border-[rgba(250,250,250,0.08)] p-6 rounded-[16px] hover:border-[rgba(250,250,250,0.16)] transition-all"
                  >
                    <Icon className="w-10 h-10 text-neutral-50 mb-4" />
                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-[100px]">
          <CustomSolutionsCarousel solutions={customSolutions} />
        </section>
      </main>
    </>
  );
}
