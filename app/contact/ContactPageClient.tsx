"use client";

import MapClient from "@/app/contact/MapClient";
import ContactForm from "./ContactForm";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { useState, useEffect } from "react";
import { ContactPage } from "@/lib/api/types";
import { getContactPageData } from "@/lib/api/contact";

interface ContactPageClientProps {
  initialData: ContactPage;
}

export default function ContactPageClient({ initialData }: ContactPageClientProps) {
  const { locale } = useLocale();
  const [data, setData] = useState<ContactPage>(initialData);

  useEffect(() => {
    getContactPageData()
      .then((newData) => {
        if (newData) setData(newData);
      })
      .catch((error) => {
        console.error('Error refetching contact page data:', error);
      });
  }, [locale]);

  const hasHeroSection = data.heroSection?.title;
  const hasSocialMedia = !!(data.socialMedia?.twitter || data.socialMedia?.linkedin || data.socialMedia?.instagram);
  const hasContactInfo = data.contactInfo?.email;
  const hasMapLocation = !!(data.mapLocation?.latitude && data.mapLocation?.longitude);

  return (
    <>
      <main className="pt-[150px]">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-8">
                {hasHeroSection && (
                  <div>
                    <h1 className="font-bold text-5xl md:text-[56px] text-white tracking-[-1.12px] mb-6">
                      {data.heroSection?.title}
                    </h1>

                    <p className="text-neutral-400 text-base md:text-lg max-w-[520px] leading-relaxed mb-6">
                      {data.heroSection?.description}
                    </p>
                  </div>
                )}

                {hasSocialMedia && (
                  <div className="flex items-center gap-4 mb-8">
                    {data.socialMedia?.twitter && (
                      <a
                        href={data.socialMedia.twitter}
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                      >
                        <Twitter size={16} className="text-neutral-50" />
                      </a>
                    )}
                    {data.socialMedia?.linkedin && (
                      <a
                        href={data.socialMedia.linkedin}
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                      >
                        <Linkedin size={16} className="text-neutral-50" />
                      </a>
                    )}
                    {data.socialMedia?.instagram && (
                      <a
                        href={data.socialMedia.instagram}
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                      >
                        <Instagram size={16} className="text-neutral-50" />
                      </a>
                    )}
                  </div>
                )}

                {hasContactInfo && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-[13px] text-neutral-400 uppercase tracking-[0.7px] mb-2">
                        Email
                      </p>
                      <p className="text-white font-medium">{data.contactInfo?.email}</p>
                    </div>

                    <div>
                      <p className="text-[13px] text-neutral-400 uppercase tracking-[0.7px] mb-2">
                        Phone
                      </p>
                      <p className="text-white font-medium">{data.contactInfo?.phone}</p>
                    </div>

                    <div>
                      <p className="text-[13px] text-neutral-400 uppercase tracking-[0.7px] mb-2">
                        {locale === "ja" ? "オフィス" : "Office"}
                      </p>
                      <p className="text-neutral-50 text-sm leading-relaxed">
                        {locale === "ja"
                          ? data.contactInfo?.officeAddress?.ja
                          : data.contactInfo?.officeAddress?.en}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#111113] rounded-[16px] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {hasMapLocation && (
          <section className="py-8">
            <div className="container">
              <MapClient
                lat={data.mapLocation?.latitude || 35.157308228381325}
                lng={data.mapLocation?.longitude || 136.96488391534322}
                lockToCoordinates={true}
                address={
                  locale === "ja"
                    ? data.contactInfo?.officeAddress?.ja
                    : data.contactInfo?.officeAddress?.en
                }
              />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
