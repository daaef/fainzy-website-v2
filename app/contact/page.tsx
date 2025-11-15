"use client";

import { useState } from "react";

import MapClient from "@/app/contact/MapClient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function Contact() {
  const [reason, setReason] = useState<string>("");
  const { locale } = useLocale();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up form submission (API call / email)
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("contact submit", { ...data, reason });
    // Clear form optionally
    form.reset();
    setReason("");
  }

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
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                    >
                      <Twitter size={16} className="text-neutral-50" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 bg-[rgba(250,250,250,0.05)] rounded-md flex items-center justify-center border border-[rgba(38,38,38,0.15)] hover:bg-[rgba(250,250,250,0.08)]"
                    >
                      <Linkedin size={16} className="text-neutral-50" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
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

              {/* Right column - contact form */}
              <div className="bg-[#111113] rounded-[16px] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-neutral-400 text-sm">
                    Please fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="mt-2 h-[51px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="mt-2 h-[51px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Enter subject"
                      className="mt-2 h-[51px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message here"
                      className="mt-2 h-[135px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px] py-[14px] resize-none"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-white">Reason</label>
                    <div className="mt-2 w">
                      <Select value={reason} onValueChange={(v) => setReason(v)}>
                        <SelectTrigger className="h-[49px] w-full bg-transparent border-[rgba(255,255,255,0.15)] text-white text-[14px] px-[16px]">
                          <SelectValue
                            placeholder="Select a Reason"
                            className="text-[rgba(255,255,255,0.5)]"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111113] border-[rgba(255,255,255,0.15)] text-white">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="bg-neutral-50 hover:bg-neutral-200 text-[#0a0a0b] h-auto w-full rounded-[12px] px-[36px] py-[14px]"
                    >
                      <span className="font-semibold text-[15px]">Submit</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-8">
          <div className="container">
            <div className="rounded-lg overflow-hidden">
              <MapClient
                address={
                  locale === "ja"
                    ? "〒464-0814 愛知県名古屋市千種区不老町 名古屋大学 インキュベーション施設"
                    : "Nagoya University Incubation Facility, Furo-cho, Chikusa Ward, Nagoya, Aichi 464-0814, Japan"
                }
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
