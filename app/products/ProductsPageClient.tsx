"use client";

import Link from "next/link";
import Product from "@/components/Product";
import Faq from "@/components/Faq";
import CustomSolutionsCarousel from "@/components/CustomSolutionsCarousel";
import { Product as ProductType } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ProductsPage } from "@/lib/api/types";
import { getProductsPageData } from "@/lib/api/products";
import { getMediaUrl } from "@/lib/media-url";
import { iconMap } from "@/lib/icon-map";

interface ProductsPageClientProps {
  initialData: ProductsPage;
}

export default function ProductsPageClient({ initialData }: ProductsPageClientProps) {
  const { locale } = useLocale();
  const [data, setData] = useState<ProductsPage>(initialData);

  useEffect(() => {
    getProductsPageData(locale as 'en' | 'ja')
      .then((newData) => {
        if (newData) setData(newData);
      })
      .catch((error) => {
        console.error('Error refetching products page data:', error);
      });
  }, [locale]);

  // Map CMS products data to component format
  const products: ProductType[] = useMemo(() => {
    return (data.products || []).map((product) => ({
      title: product.title,
      description: product.description,
      image: getMediaUrl(product.image) as string,
      id: product.id,
      link: product.link,
      reverse: product.reverse || false,
      features: (product.features || []).map((feature) => ({
        title: feature.title,
        subtitle: feature.subtitle,
        icon: iconMap[feature.icon],
      })),
    }));
  }, [data.products]);

  // Map CMS custom solutions data
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

  // Filter FAQs by locale
  const filteredFaqs = useMemo(() => {
    return (data.faqs || [])
      .filter((faq) => faq.locale === locale)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((faq, index) => ({
        id: index + 1,
        created: data.createdAt,
        modified: data.updatedAt,
        question: faq.question,
        answer: faq.answer,
        content: faq.locale === 'en' ? 1 : 2,
      }));
  }, [data.faqs, locale, data.createdAt, data.updatedAt]);

  const hasHeroSection = data.heroSection?.title;
  const hasProducts = products.length > 0;
  const hasCustomSolutions = (customSolutions || []).length > 0;
  const hasFaqs = filteredFaqs.length > 0;

  return (
    <>
      {hasHeroSection && (
        <header>
          <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[802px] flex items-center justify-center overflow-hidden">
            <Image
              className="absolute w-full h-full object-cover"
              src={getMediaUrl(data.heroSection?.bannerImage) || '/careers/careers-banner.jpg'}
              height={1000}
              width={1000}
              alt={data.heroSection?.title || 'Products banner'}
            />
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_96px),repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_96px)]" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,11,0.3)] via-[rgba(10,10,11,0.5)] to-[rgba(10,10,11,0.7)]" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center px-4 sm:px-6 mt-24 max-w-4xl"
            >
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-white tracking-[-1.12px] mb-4">
                {data.heroSection?.title}
              </h1>
              <p className="text-neutral-400 text-base sm:text-lg max-w-3xl mx-auto">
                {data.heroSection?.subtitle}
              </p>
            </motion.div>
          </section>
        </header>
      )}
      <main className="py-16">
        {hasProducts && (
          <section>
            <div className="container min-h-[100vh] py-[100px]">
              {products.map((product, i) => (
                <div
                  key={product.id || i}
                  id={product.id}
                  className="flex gap-6 md:gap-8 lg:gap-[55px] items-center relative shrink-0 w-full scroll-mt-32"
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
