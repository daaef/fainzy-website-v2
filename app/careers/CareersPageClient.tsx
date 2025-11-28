"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CareersPage } from "@/lib/api/types";
import { getCareersPageData } from "@/lib/api/careers";
import { getMediaUrl } from "@/lib/media-url";
import { useLocale } from "@/contexts/LocaleContext";
import JobsGrid from "./JobsGrid";

interface CareersPageClientProps {
  initialData: CareersPage;
}

export default function CareersPageClient({ initialData }: CareersPageClientProps) {
  const { locale } = useLocale();
  const [data, setData] = useState<CareersPage>(initialData);

  useEffect(() => {
    getCareersPageData()
      .then((newData) => {
        if (newData) setData(newData);
      })
      .catch((error) => {
        console.error('Error refetching careers page data:', error);
      });
  }, [locale]);

  const hasHeroSection = data.heroSection?.title;
  const hasIntroSection = data.introSection?.description;
  const hasDepartments = (data.departmentsSection?.departments || []).length > 0;
  const hasMissionSection = data.missionSection?.title;
  const hasFacilitiesSection = data.facilitiesSection?.title;
  const hasBenefitsSection = data.benefitsSection?.title;
  const hasInnovationSection = data.innovationSection?.title;
  const hasGrowthSection = data.growthSection?.title;
  const hasPeopleImage = !!data.peopleImageSection?.image;
  const hasCtaSection = data.ctaSection?.title;

  return (
    <>
      {hasHeroSection && (
        <header>
          <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[802px] flex items-center justify-center overflow-hidden">
            <Image
              className="absolute w-full h-full object-cover"
              src={getMediaUrl(data.heroSection?.backgroundImage) || '/careers/careers-banner.jpg'}
              height={1000}
              width={1000}
              alt={data.heroSection?.title || 'Careers'}
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

      <main>
        {hasIntroSection && (
          <section className="py-12 md:py-16">
            <div className="container">
              <p className="text-center text-neutral-400 max-w-3xl mx-auto">
                {data.introSection?.description}
              </p>
            </div>
          </section>
        )}

        {hasDepartments && (
          <section className="py-12 md:py-20">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(data.departmentsSection?.departments || []).map((dept, index) => (
                  <div key={dept.id || index} className="bg-[#1a1a1b] rounded-[8px] overflow-hidden">
                    {dept.image && (
                      <div className="h-48 relative">
                        <Image
                          src={getMediaUrl(dept.image)}
                          alt={dept.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{dept.title}</h3>
                      <p className="text-neutral-400">{dept.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {data.departmentsSection?.ctaButtonText && (
                <div className="mt-8 flex justify-center">
                  <Button className="bg-neutral-50 text-[#0a0a0b] rounded-[8px] px-6 py-3 font-semibold">
                    {data.departmentsSection.ctaButtonText}
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}

        {hasMissionSection && (
          <section className="py-12 md:py-20 bg-[#0a0a0b]">
            <div className="container flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] mb-4">
                  {data.missionSection?.title}
                </h2>
                <p className="text-neutral-400">{data.missionSection?.description}</p>
              </div>
              {data.missionSection?.image && (
                <div className="w-full lg:w-1/2 rounded-[8px] overflow-hidden shadow-xl">
                  <Image
                    src={getMediaUrl(data.missionSection.image)}
                    alt="mission"
                    width={1200}
                    height={800}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {hasFacilitiesSection && (
          <section className="relative min-h-[50vh] overflow-hidden">
            <Image
              src={getMediaUrl(data.facilitiesSection?.backgroundImage) || '/careers/world-class-banner.jpg'}
              alt="world class"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-[rgba(10,10,11,0.75)]" />
            <div className="relative z-10 container py-20">
              <div className="max-w-2xl">
                <h2 className="font-bold text-4xl mb-4">{data.facilitiesSection?.title}</h2>
                <p className="text-neutral-400">{data.facilitiesSection?.description}</p>
              </div>
            </div>
          </section>
        )}

        {hasBenefitsSection && (
          <section className="py-16">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-bold text-3xl mb-4">{data.benefitsSection?.title}</h3>
                <p className="text-neutral-400 mb-6">{data.benefitsSection?.description}</p>
                <ul className="text-neutral-400 list-disc list-inside space-y-2">
                  {(data.benefitsSection?.benefits || []).map((benefit, index) => (
                    <li key={benefit.id || index}>{benefit.benefit}</li>
                  ))}
                </ul>
              </div>
              {data.benefitsSection?.image && (
                <div className="rounded-[8px] overflow-hidden shadow-lg h-80">
                  <Image
                    src={getMediaUrl(data.benefitsSection.image)}
                    alt="benefits"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={800}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {hasInnovationSection && (
          <section className="py-16 bg-[#0a0a0b]">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {data.innovationSection?.image && (
                <div className="rounded-[8px] overflow-hidden shadow-lg h-80">
                  <Image
                    src={getMediaUrl(data.innovationSection.image)}
                    alt="innovation"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={800}
                  />
                </div>
              )}
              <div>
                <h3 className="font-bold text-3xl mb-4">{data.innovationSection?.title}</h3>
                <p className="text-neutral-400">{data.innovationSection?.description}</p>
              </div>
            </div>
          </section>
        )}

        {hasGrowthSection && (
          <section className="py-16">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-bold text-3xl mb-4">{data.growthSection?.title}</h3>
                <p className="text-neutral-400">{data.growthSection?.description}</p>
              </div>
              {data.growthSection?.image && (
                <div className="rounded-[8px] overflow-hidden shadow-lg h-80">
                  <Image
                    src={getMediaUrl(data.growthSection.image)}
                    alt="continuous growth"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={800}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {hasPeopleImage && (
          <section className="py-0">
            <div className="w-full h-72 relative overflow-hidden">
              <Image
                src={getMediaUrl(data.peopleImageSection?.image)}
                alt="team"
                fill
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,11,0.85)] to-transparent" />
            </div>
          </section>
        )}

        {hasCtaSection && (
          <section className="py-16 bg-[#0a0a0b]">
            <div className="container text-center">
              <h2 className="font-bold text-4xl mb-4">{data.ctaSection?.title}</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                {data.ctaSection?.description}
              </p>
              <Button asChild>
                <Link
                  href="#open-positions"
                  className="bg-neutral-50 text-[#0a0a0b] rounded-[8px] px-6 py-3 font-semibold"
                >
                  {data.ctaSection?.buttonText}
                </Link>
              </Button>
            </div>
          </section>
        )}

        <section id="open-positions" className="py-16 bg-[#0a0a0b]">
          <div className="container">
            <JobsGrid jobs={data.jobs} />
          </div>
        </section>
      </main>
    </>
  );
}
