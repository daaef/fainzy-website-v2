"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/lib/api/types";
import JobBanner from "@/public/job/job-banner.jpg";
import JoinImg from "@/public/careers/join-us.jpg";

// Motion variants moved outside component to avoid redefinition each render (performance + lint best practice)
const variantsContainer = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};
const variantsItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

interface JobDetailClientProps {
  job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  return (
    <>
      <header>
        <section className="relative h-[472px] w-full overflow-clip">
          <Image
            src={JobBanner}
            alt={`Job banner for ${job.title}`}
            fill
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,11,0.4)] to-[rgba(10,10,11,0.95)]" />
          <div className="absolute inset-x-0 top-[239px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={variantsContainer}
              className="flex flex-col gap-6 max-w-5xl"
            >
              <motion.div variants={variantsItem}>
                <Link
                  href="/careers"
                  className="flex items-center gap-2 text-neutral-50 hover:underline"
                >
                  {/* ...existing svg ... */}
                  <svg className="size-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M8 12.6667L3.33333 8L8 3.33333"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.6667 8H3.33333"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Back to Careers</span>
                </Link>
              </motion.div>
              <motion.h1
                variants={variantsItem}
                className="text-4xl sm:text-5xl md:text-[56px] leading-tight tracking-[-1.12px]"
              >
                {job.title}
              </motion.h1>
              <motion.div
                variants={variantsItem}
                className="flex flex-wrap items-center gap-4 md:gap-6 text-neutral-50"
              >
                {/* ...existing meta info... */}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </header>

      <main>
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={variantsContainer}
              className="flex-1 flex flex-col gap-8 md:gap-12 max-w-prose"
            >
              {/* Job Description */}
              {job.description && (
                <motion.div variants={variantsItem} className="flex flex-col gap-4">
                  <h2 className="text-xl md:text-[24px] leading-[36px]">Job Description</h2>
                  <p className="text-neutral-400 text-[15px] md:text-[16px] leading-[25.6px]">
                    {job.description}
                  </p>
                </motion.div>
              )}

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <motion.div variants={variantsItem} className="flex flex-col gap-6">
                  <h2 className="text-xl md:text-[24px] leading-[36px]">{job.title}</h2>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg md:text-[18px] leading-[27px]">Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-[15px] md:text-[16px] leading-[25.6px]">
                      {job.responsibilities.map((item, index) => (
                        <li key={item.id || index}>{item.responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Requirements */}
              {job.requirements && job.requirements.length > 0 && (
                <motion.div variants={variantsItem} className="flex flex-col gap-3">
                  <h3 className="text-lg md:text-[18px] leading-[27px]">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-[15px] md:text-[16px] leading-[25.6px]">
                    {job.requirements.map((item, index) => (
                      <li key={item.id || index}>{item.requirement}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Qualifications */}
              {job.qualifications && job.qualifications.length > 0 && (
                <motion.div variants={variantsItem} className="flex flex-col gap-3">
                  <h3 className="text-lg md:text-[18px] leading-[27px]">Qualifications</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-[15px] md:text-[16px] leading-[25.6px]">
                    {job.qualifications.map((item, index) => (
                      <li key={item.id || index}>{item.qualification}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Benefits */}
              {job.benefits && job.benefits.length > 0 && (
                <motion.div variants={variantsItem} className="flex flex-col gap-3">
                  <h3 className="text-lg md:text-[18px] leading-[27px]">Benefits</h3>
                  <ul className="list-none pl-5 space-y-2 text-neutral-400 text-[15px] md:text-[16px] leading-[25.6px]">
                    {job.benefits.map((item, index) => (
                      <li key={item.id || index}>{item.benefit}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:max-w-sm flex flex-col gap-6"
            >
              {/* Apply Now Card */}
              <div className="bg-[#111113] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex flex-col gap-5">
                <h3 className="text-[18px] md:text-[20px] leading-[30px]">Ready to Apply?</h3>
                <Link href="#apply" className="w-full inline-block">
                  <span className="block w-full bg-neutral-50 text-[#0a0a0b] hover:bg-neutral-200 py-3 text-center font-semibold rounded">
                    APPLY NOW
                  </span>
                </Link>
                {job.applyBefore && (
                  <p className="text-neutral-500 text-[12px] text-center">
                    Application deadline: {job.applyBefore}
                  </p>
                )}
              </div>

              {/* Job Details Card */}
              <div className="bg-[#111113] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex flex-col gap-5">
                <h3 className="text-[18px] leading-[27px]">Job Details</h3>
                <div className="flex flex-col gap-4">
                  {job.applyBefore && (
                    <>
                      <div className="flex flex-col gap-1">
                        <p className="text-neutral-500 text-[12px] uppercase tracking-wider">
                          Apply Before
                        </p>
                        <p className="text-white text-[15px]">{job.applyBefore}</p>
                      </div>
                      <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                    </>
                  )}
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-500 text-[12px] uppercase tracking-wider">
                      Posted On
                    </p>
                    <p className="text-white text-[15px]">{job.date}</p>
                  </div>
                  <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-500 text-[12px] uppercase tracking-wider">
                      Job Type
                    </p>
                    <p className="text-white text-[15px]">{job.type}</p>
                  </div>
                  <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-500 text-[12px] uppercase tracking-wider">
                      Salary Range
                    </p>
                    <p className="text-white text-[15px]">{job.salary}</p>
                  </div>
                  <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-500 text-[12px] uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-white text-[15px]">{job.location}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              {job.techStack && job.techStack.length > 0 && (
                <div className="bg-[#111113] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex flex-col gap-4">
                  <h3 className="text-[18px] leading-[27px]">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((item, index) => (
                      <Badge
                        key={item.id || index}
                        variant="outline"
                        className="bg-[rgba(250,250,250,0.05)] border-[rgba(255,255,255,0.08)] text-neutral-400 px-3 py-1.5"
                      >
                        {item.tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* About Company Card */}
              <div className="bg-[#111113] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-[18px] leading-[27px]">About Fainzy Technologies</h3>
                <p className="text-neutral-400 text-[14px] leading-[23.8px]">
                  Fainzy Technologies is an AI and Robotics-powered technology firm, pioneering the
                  development of autonomous delivery robots and innovative logistics solutions.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl md:text-3xl leading-[48px] tracking-tight"
            >
              Apply For This Job
            </motion.h2>
            <form id="apply" className="w-full max-w-2xl flex flex-col gap-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-white">
                    Your Name*
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="First and Last name"
                    className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-[rgba(255,255,255,0.5)] h-12"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-white">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@domain.com"
                    className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-[rgba(255,255,255,0.5)] h-12"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number*
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  placeholder="+234"
                  className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-[rgba(255,255,255,0.5)] h-12"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="resume" className="text-white">
                  Attach Resume*
                </Label>
                <Label
                  htmlFor="resume"
                  className="bg-[#0a0a0b] border border-[rgba(218,218,218,0.25)] rounded-lg h-28 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-[rgba(218,218,218,0.4)] transition-colors"
                >
                  <p className="text-neutral-400 text-sm">Upload Resume</p>
                  <p className="text-neutral-500 text-xs">PDF, DOC, DOCX (Max 10 MB)</p>
                </Label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="coverletter" className="text-white">
                  Cover Letter*
                </Label>
                <Textarea
                  id="coverletter"
                  name="coverletter"
                  required
                  minLength={100}
                  placeholder="Tell us why you'd be great (min 100 characters)."
                  className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-[rgba(255,255,255,0.5)] min-h-[152px] resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1"
                  aria-required="true"
                />
                <Label
                  htmlFor="terms"
                  className="text-neutral-400 text-sm leading-relaxed cursor-pointer"
                >
                  I agree for Fainzy Technologies to process my data in accordance with their Terms
                  of Service and Privacy Policy.*
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-neutral-50 text-[#0a0a0b] hover:bg-neutral-200 border border-neutral-800 py-3.5"
              >
                SUBMIT APPLICATION
              </Button>
            </form>
          </div>
        </div>
      </main>

      <section className="relative flex items-center justify-center overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[551px]">
        <Image
          src={JoinImg}
          alt="Team collaboration"
          fill
          className="w-full h-full object-cover absolute"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(10,10,11)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.95)] via-[rgba(10,10,11,0.7)] to-[rgba(10,10,11,0.95)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 container px-4 sm:px-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-white tracking-[-0.96px] mb-6 max-w-4xl mx-auto leading-tight"
          >
            Let&apos;s do great things together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10"
          >
            We&apos;re looking for talented individuals who are passionate about robotics, AI, and
            building the future. Explore opportunities to work on cutting-edge technology.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="bg-neutral-50 hover:bg-white text-[#0a0a0b] rounded-[8px] px-8 py-6 font-semibold text-[15px] transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Open Positions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0a0a0b] rounded-[8px] px-8 py-6 font-semibold text-[15px] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
