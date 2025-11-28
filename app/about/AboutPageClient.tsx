"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { AboutPage } from "@/lib/api/types";
import { getAboutPageData } from "@/lib/api/about";
import { getMediaUrl } from "@/lib/media-url";

interface AboutPageClientProps {
  initialData: AboutPage;
}

export default function AboutPageClient({ initialData }: AboutPageClientProps) {
  const { locale } = useLocale();
  const [data, setData] = useState<AboutPage>(initialData);

  useEffect(() => {
    getAboutPageData(locale as 'en' | 'ja')
      .then((newData) => {
        if (newData) setData(newData);
      })
      .catch((error) => {
        console.error('Error refetching about page data:', error);
      });
  }, [locale]);

  const hasHeroSection = data.heroSection?.title;
  const hasFoundedSection = data.foundedSection?.title && (data.foundedSection?.paragraphs || []).length > 0;
  const hasPeopleBanner = data.peopleBannerSection?.title && data.peopleBannerSection?.description;
  const hasVisionSection = data.visionSection?.title && (data.visionSection?.paragraphs || []).length > 0;
  const hasLeadershipSection = (data.leadershipSection?.teamMembers || []).length > 0;
  const hasCtaSection = data.ctaSection?.title && data.ctaSection?.description;

  return (
    <>
      {hasHeroSection && (
        <header>
          <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[802px] flex items-center justify-center overflow-hidden relative">
            <Image
              className="absolute w-full h-full object-cover"
              src={getMediaUrl(data.heroSection?.bannerImage) || '/about/about-banner.jpg'}
              height={1000}
              width={1000}
              alt={data.heroSection?.title || 'About banner'}
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
              className="relative z-10 text-center px-4 sm:px-6 mt-24"
            >
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-white tracking-[-1.12px] mb-4">
                {data.heroSection?.title}
              </h1>
              <p className="text-neutral-400 text-base sm:text-lg max-w-md mx-auto">
                {data.heroSection?.subtitle}
              </p>
            </motion.div>
          </section>
        </header>
      )}
      <main>
        {hasFoundedSection && (
          <section className="py-12 md:py-20 lg:py-[100px]">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-[528px] lg:flex-shrink-0"
                >
                  <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[16px] overflow-hidden shadow-xl">
                    <Image
                      src={getMediaUrl(data.foundedSection?.image) || '/about/founded.jpg'}
                      height={1000}
                      width={1000}
                      className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm object-cover"
                      alt="Founded"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="flex-1 space-y-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-[-0.8px] leading-tight"
                  >
                    {data.foundedSection?.title}
                  </motion.h2>
                  {(data.foundedSection?.paragraphs || []).map((paragraph, index) => (
                    <motion.p
                      key={paragraph.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                    >
                      {paragraph.text}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}
        {hasPeopleBanner && (
          <section className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[567px] flex items-end overflow-hidden relative">
          <Image
            className="absolute w-full h-full object-cover"
            src={getMediaUrl(data.peopleBannerSection?.bannerImage) || '/about/people-banner.jpg'}
            alt="people banner"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,11,0.95)] via-[rgba(10,10,11,0.6)] to-[rgba(10,10,11,0.3)]" />
          <div className="relative z-10 container pb-12 md:pb-16 lg:pb-[64px]">
            <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-16">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-white tracking-[-0.96px] leading-tight lg:max-w-[533px]"
              >
                {data.peopleBannerSection?.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-neutral-50 text-sm sm:text-base leading-relaxed flex-1 lg:max-w-[947px]"
              >
                {data.peopleBannerSection?.description}
              </motion.p>
            </div>
          </div>
        </section>
        )}
        {hasVisionSection && (
          <section className="py-12 md:py-20 lg:py-[100px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full lg:w-[528px] lg:flex-shrink-0"
              >
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[16px] bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] overflow-hidden shadow-xl">
                  <Image 
                    src={getMediaUrl(data.visionSection?.image) || '/about/vision.jpg'}
                    alt="Vision" 
                    height={1000} 
                    width={1000} 
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="flex-1 space-y-6"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-[-0.4px] leading-tight"
                >
                  {data.visionSection?.title}
                </motion.h2>
                {(data.visionSection?.paragraphs || []).map((paragraph, index) => (
                  <motion.p
                    key={paragraph.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                  >
                    {paragraph.text}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        )}
        {hasLeadershipSection && (
          <section className="py-12 md:py-20 lg:py-[100px] bg-[#0a0a0b]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16 lg:mb-20"
            >
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[32px] text-white tracking-[-0.6px] mb-4">
                {data.leadershipSection?.title}
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                {data.leadershipSection?.subtitle}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {(data.leadershipSection?.teamMembers || []).map((member, index) => (
                <motion.div
                  key={member.id || member.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-[#0a0a0b] p-0 border-0 rounded-[16px] overflow-hidden h-full">
                    <CardContent className="p-0 relative">
                      <div className="relative w-full h-[300px] sm:h-[320px] lg:h-[340px] bg-gradient-to-br from-[#2a2a2b] to-[#1a1a1b] overflow-hidden rounded-[16px]">
                        <div className="absolute inset-0 h-full flex items-center justify-center">
                          <Image
                            src={getMediaUrl(member.imageUrl)}
                            className="w-full h-full object-cover"
                            alt={member.name}
                            height={1000}
                            width={1000}
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 w-full">
                          <div className="px-4 py-3 rounded-[12px] bg-[rgba(10,10,11,0.6)] backdrop-blur-sm text-white">
                            <div className="text-sm font-semibold leading-tight">{member.name}</div>
                            <div className="text-[12px] text-neutral-300">{member.role}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        )}
        {hasCtaSection && (
          <section className="min-h-[400px] relative md:min-h-[500px] lg:min-h-[551px] flex items-center justify-center overflow-hidden">
          <Image
            src={getMediaUrl(data.ctaSection?.bannerImage) || '/about/join.jpg'}
            alt="join us"
            className="w-full h-full object-cover absolute"
            height={1000}
            width={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(10,10,11)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.95)] via-[rgba(10,10,11,0.7)] to-[rgba(10,10,11,0.95)]" />
          <div className="relative z-10 container px-4 sm:px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-white tracking-[-0.96px] mb-6 max-w-4xl mx-auto leading-tight"
            >
              {data.ctaSection?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10"
            >
              {data.ctaSection?.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {(data.ctaSection?.buttons || []).map((button, index) => (
                <Button
                  key={button.id || index}
                  variant={button.variant === 'outline' ? 'outline' : 'default'}
                  className={
                    button.variant === 'outline'
                      ? "bg-transparent group border-2 border-white text-white hover:bg-white rounded-[8px] px-8 py-6 font-semibold text-[15px] transition-all duration-300 w-full sm:w-auto"
                      : "bg-neutral-50 hover:bg-white text-[#0a0a0b] rounded-[8px] px-8 py-6 font-semibold text-[15px] transition-all duration-300 w-full sm:w-auto"
                  }
                  asChild
                >
                  <motion.a href={button.link} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {button.text}
                  </motion.a>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>
        )}
      </main>
    </>
  );
}
