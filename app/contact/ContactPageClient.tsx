"use client";

import MapClient from "@/app/contact/MapClient";
import ContactForm from "./ContactForm";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function ContactPageClient() {
  const { locale } = useLocale();

  return (
    <>
      <main className="pt-[150px]">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h1 className="font-bold text-5xl md:text-[56px] text-white tracking-[-1.12px] mb-6">
                    Get in touch
                  </h1>

                  <p className="text-neutral-400 text-base md:text-lg max-w-[520px] leading-relaxed mb-6">
                    Having a question about our robotics solutions or want to explore partnership
                    opportunities? We&apos;re here to help. Reach out to our team and we&apos;ll get
                    back to you as soon as possible.
                  </p>

                  <div className="flex items-center gap-4 mb-8">
                    <a
                      href="https://twitter.com"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                    >
                      <Twitter size={16} className="text-neutral-50" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                    >
                      <Linkedin size={16} className="text-neutral-50" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                    >
                      <Instagram size={16} className="text-neutral-50" />
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[13px] text-neutral-400 uppercase tracking-[0.7px] mb-2">
                        Email
                      </p>
                      <p className="text-white font-medium">info@fainzy.ai</p>
                    </div>

                    <div>
                      <p className="text-[13px] text-neutral-400 uppercase tracking-[0.7px] mb-2">
                        Phone
                      </p>
                      <p className="text-white font-medium">+81(0)52-3153-1939</p>
                    </div>

                    <div>
                      <p className="text-[13px] text-neutral-400 uppercase tracking-[0.7px] mb-2">
                        {locale === "ja" ? "オフィス" : "Office"}
                      </p>
                      <p className="text-neutral-50 text-sm leading-relaxed">
                        {locale === "ja"
                          ? "〒464-0814 愛知県名古屋市千種区不老町 名古屋大学 インキュベーション施設"
                          : "Nagoya University Incubation Facility, Furo-cho, Chikusa Ward, Nagoya, Aichi 464-0814, Japan"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111113] rounded-[16px] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <MapClient
              lat={35.157308228381325}
              lng={136.96488391534322}
              lockToCoordinates={true}
              address={
                locale === "ja"
                  ? "〒464-0814 愛知県名古屋市千種区不老町 名古屋大学 インキュベーション施設"
                  : "Nagoya University Incubation Facility, Furo-cho, Chikusa Ward, Nagoya, Aichi 464-0814, Japan"
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}
