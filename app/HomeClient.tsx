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
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Product as ProductType, StatMetric, StaticStat } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { useState, useEffect, useMemo } from "react";
import GlideSlide from "@/components/GlideSlide";
import ConsultancySlide from "@/components/ConsultancySlide";
import CustomSolutionsCarousel from "@/components/CustomSolutionsCarousel";
import { HomePage } from "@/lib/api/types";
import { getHomePageData } from "@/lib/api/home";
import { iconMap } from "@/lib/icon-map";
import { getMediaUrl } from "@/lib/media-url";

// Helper to convert null to undefined
const nullToUndefined = <T,>(value: T | null | undefined): T | undefined => value ?? undefined;

interface HomeClientProps {
  initialData: HomePage;
}

export default function HomeClient({ initialData }: HomeClientProps) {
  const { locale } = useLocale();
  const [data, setData] = useState<HomePage>(initialData);

  // Refetch data when locale changes on client side
  useEffect(() => {
      getHomePageData(locale as 'en' | 'ja')
        .then((newData) => {
          if (newData) setData(newData);
        })
        .catch((error) => {
          console.error('Error refetching home page data:', error);
        });
  }, [locale, data.locale]);
  // Map CMS products data to component format
  const products: ProductType[] = useMemo(() => {
    return (data.products || []).map((product) => ({
      title: product.title,
      description: product.description,
      image: getMediaUrl(product.image) as string,
      link: product.link,
      reverse: product.reverse || false,
      features: (product.features || []).map((feature) => ({
        title: feature.title,
        subtitle: feature.subtitle,
        icon: iconMap[feature.icon],
      })),
    }));
  }, [data.products]);

  // Map CMS metrics data to component format
  const animatedStats: StatMetric[] = useMemo(() => {
    return (data.metricsSection?.animatedStats || []).map((stat, index) => ({
      value: stat.value,
      label: stat.label,
      icon: iconMap[stat.icon],
      delay: index * 0.1,
    }));
  }, [data.metricsSection]);

  const staticStats: StaticStat[] = useMemo(() => {
    return (data.metricsSection?.staticStats || []).map((stat) => ({
      value: stat.value,
      label: stat.label,
      icon: iconMap[stat.icon],
    }));
  }, [data.metricsSection]);

  // Map CMS FAQs data to component format and filter by locale
  const filteredFaqs = useMemo(() => {
    const cmsFaqs = (data.faqs || [])
      .filter((faq) => faq.locale === locale)
      .map((faq, index) => ({
        id: index + 1,
        created: data.createdAt,
        modified: data.updatedAt,
        question: faq.question,
        answer: faq.answer,
        content: faq.locale === 'en' ? 1 : 2,
      }));
    return cmsFaqs;
  }, [data.faqs, locale, data.createdAt, data.updatedAt]);

  // Custom solutions from CMS
  const customSolutions = useMemo(() => {
      return data?.customSolutions?.map((solution) => ({
        id: solution.id,
        category: solution.category,
        title: solution.title,
        description: solution.description,
        images: (solution.images || []).map((img) => ({
          src: getMediaUrl(img.image),
          alt: solution.title,
        })),
        features: (solution.features || []).map((feature) => ({
          title: feature.title,
          subtitle: feature.subtitle,
        })),
      }));
  }, [data.customSolutions]);

  const hasHeroSlides = (data.heroSlides || []).length > 0;
  const hasVideoSection = data.videoSection?.enabled && data.videoSection?.videoUrl;
  const hasProducts = products.length > 0;
  const hasCustomSolutions = (customSolutions || []).length > 0;
  const hasMetrics = (animatedStats.length > 0 || staticStats.length > 0);
  const hasFaqs = filteredFaqs.length > 0;

  return (
    <>
      {hasHeroSlides && (
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
              {(data.heroSlides || []).map((slide) => {
                const imageUrl = getMediaUrl(slide.image) || undefined;
                const title = slide.title || undefined;
                const subtitle = slide.subtitle || undefined;
                const cursiveText = slide.cursiveText || undefined;
                const ctaText = slide.ctaText || undefined;
                const ctaLink = slide.ctaLink || undefined;
                
                if (slide.type === "zibot") {
                  return (
                    <CarouselItem key={slide.id} className="h-[60vh]">
                      <ZiBotSlide title={title} subtitle={subtitle} cursiveText={cursiveText} imageUrl={imageUrl} ctaText={ctaText} ctaLink={ctaLink} />
                    </CarouselItem>
                  );
                }
                if (slide.type === "glide") {
                  return (
                    <CarouselItem key={slide.id} className="h-[60vh]">
                      <GlideSlide title={title} subtitle={subtitle} cursiveText={cursiveText} imageUrl={imageUrl} ctaText={ctaText} ctaLink={ctaLink} />
                    </CarouselItem>
                  );
                }
                return (
                  <CarouselItem key={slide.id} className="h-[60vh]">
                    <ConsultancySlide title={title} subtitle={subtitle} cursiveText={cursiveText} imageUrl={imageUrl} ctaText={ctaText} ctaLink={ctaLink} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselDots />
          </Carousel>
        </header>
      )}
      <main className="py-16">
        {hasVideoSection && (
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
                  <source src={data.videoSection?.videoUrl || "/videos/zibot.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}
        <AboutSection
          foundation={{
            label: nullToUndefined(data.aboutSection?.foundation?.label),
            title: nullToUndefined(data.aboutSection?.foundation?.title),
            description: nullToUndefined(data.aboutSection?.foundation?.description),
            ctaText: nullToUndefined(data.aboutSection?.foundation?.ctaText),
            ctaLink: nullToUndefined(data.aboutSection?.foundation?.ctaLink),
          }}
          purpose={{
            label: nullToUndefined(data.aboutSection?.purpose?.label),
            title: nullToUndefined(data.aboutSection?.purpose?.title),
            description: nullToUndefined(data.aboutSection?.purpose?.description),
            imageUrl: nullToUndefined(getMediaUrl(data.aboutSection?.purpose?.image)),
          }}
          vision={{
            label: nullToUndefined(data.aboutSection?.vision?.label),
            title: nullToUndefined(data.aboutSection?.vision?.title),
            description: nullToUndefined(data.aboutSection?.vision?.description),
            imageUrl: nullToUndefined(getMediaUrl(data.aboutSection?.vision?.image)),
          }}
          mission={{
            label: nullToUndefined(data.aboutSection?.mission?.label),
            title: nullToUndefined(data.aboutSection?.mission?.title),
            description: nullToUndefined(data.aboutSection?.mission?.description),
            imageUrl: nullToUndefined(getMediaUrl(data.aboutSection?.mission?.image)),
            highlights: data.aboutSection?.mission?.highlights?.map((h) => ({ title: h.title || '', subtitle: nullToUndefined(h.subtitle) })),
          }}
        />
        {hasProducts && (
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
        )}
        {hasCustomSolutions && customSolutions && (
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
        )}
        {hasMetrics && (
          <section>
            <div className="container min-h-[100vh] py-[100px]">
              <Metrics 
                title={data.metricsSection?.title}
                subtitle={data.metricsSection?.subtitle}
                animatedStats={animatedStats} 
                staticStats={staticStats} 
              />
            </div>
          </section>
        )}
        {hasFaqs && (
          <section>
            <div className="container min-h-[100vh] py-[100px]">
              <Faq faqs={filteredFaqs} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
