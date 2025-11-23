"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import AboutBanner from "@/public/about/about-banner.jpg";
import Founded from "@/public/about/founded.jpg";
import PeopleBanner from "@/public/about/people-banner.jpg";
import Vision from "@/public/about/vision.jpg";
import Jude from "@/public/about/jude.jpg";
import Emma from "@/public/about/emmanuel.jpg";
import Patric from "@/public/about/patrick.jpg";
import Mike from "@/public/about/mike.jpg";
import Laz from "@/public/about/laz.jpg";
import Tatsuya from "@/public/about/tatsuya.jpg";
import Hiroyuki from "@/public/about/hiroyuki.jpg";
import Join from "@/public/about/join.jpg";

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: StaticImageData;
}

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    { name: "Dr. Jude Nwadiuto", role: "Co-Founder & CEO", imageUrl: Jude },
    { name: "Emmanuel Omeogah", role: "Co-Founder & Tech Lead", imageUrl: Emma },
    { name: "Patric John", role: "Co-Founder & Design Lead", imageUrl: Patric },
    { name: "Michael Nwadiuto", role: "Co-Founder & Project Lead", imageUrl: Mike },
    { name: "Lazarus Nwankwo", role: "Developer", imageUrl: Laz },
    { name: "Prof. Tatsuya Suzuki", role: "Special Advisor", imageUrl: Tatsuya },
    { name: "Assoc. Prof Hiroyuki Okuda", role: "Technical Advisor", imageUrl: Hiroyuki },
  ];

  return (
    <>
      <header>
        <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[802px] flex items-center justify-center overflow-hidden relative">
          <Image
            className="absolute w-full h-full object-cover"
            src={AboutBanner}
            height={1000}
            width={1000}
            alt="about banner"
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
              About Us
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-md mx-auto">
              All you need to know about us
            </p>
          </motion.div>
        </section>
      </header>
      <main>
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
                    src={Founded}
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
                  Founded in 2018. Headquartered in Nagoya.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                >
                  Founded in 2018 and headquartered in Moscow, Idaho, Fainzy Technologies is at the
                  forefront of robotics and artificial intelligence innovation. We believe that the
                  intersection of cutting-edge technology and human ingenuity holds the key to
                  solving tomorrow&apos;s challenges.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                >
                  Our team of world-class engineers, researchers, and designers work tirelessly to
                  create intelligent systems that enhance productivity, improve safety, and unlock
                  new possibilities across industries.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                >
                  From autonomous robotics to advanced AI solutions, we&apos;re committed to
                  building technology that makes a meaningful impact on the world. Our vision is to
                  democratize access to cutting-edge automation and intelligence, empowering
                  businesses and communities globally.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[567px] flex items-end overflow-hidden relative">
          <Image
            className="absolute w-full h-full object-cover"
            src={PeopleBanner}
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
                The People Behind The Innovation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-neutral-50 text-sm sm:text-base leading-relaxed flex-1 lg:max-w-[947px]"
              >
                To revolutionize robotics and AI, we need exceptional talent. Based in Nagoya, our
                team operates across multiple continents. With expertise spanning robotics, software
                engineering, and AI research, we design, build, test and deploy our innovations
                in-house.
              </motion.p>
            </div>
          </div>
        </section>
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
                  <Image src={Vision} alt="Vision" height={1000} width={1000} />
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
                  Our Vision
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                >
                  We envision a world where intelligent machines work seamlessly alongside humans,
                  amplifying our capabilities and freeing us to focus on what matters most -
                  creativity, innovation, and meaningful human connection.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                >
                  Through continuous research and development, we&apos;re pushing the boundaries of
                  what&apos;s possible in robotics and AI, creating solutions that are not just
                  technologically advanced, but also accessible, reliable, and built to last.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-[100px] bg-[#0a0a0b]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16 lg:mb-20"
            >
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-white tracking-[-0.96px] mb-4">
                Meet The Dream Team!
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                The brilliant minds driving innovation at Fainzy Technologies
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-[#0a0a0b] p-0 border-0 rounded-[16px] overflow-hidden h-full">
                    <CardContent className="p-0 relative">
                      <div className="relative w-full h-[280px] sm:h-[300px] lg:h-[320px] bg-gradient-to-br from-[#2a2a2b] to-[#1a1a1b] overflow-hidden">
                        <div className="absolute inset-0 h-full flex items-center justify-center text-neutral-700 text-xs">
                          <Image
                            src={member?.imageUrl ?? ""}
                            className="w-full h-full object-cover"
                            alt={member.name}
                            height={1000}
                            width={1000}
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[rgba(10,10,11,0.98)] via-[rgba(10,10,11,0.75)] to-transparent pointer-events-none" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                        <h3 className="font-semibold text-base sm:text-lg text-white mb-1 leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-sm text-neutral-400 leading-snug">{member.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="min-h-[400px] relative md:min-h-[500px] lg:min-h-[551px] flex items-center justify-center overflow-hidden">
          <Image
            src={Join}
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
              Let&apos;s do great things together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10"
            >
              We&apos;re looking for talented individuals who are passionate about robotics, AI, and
              building the future. Explore opportunities to work on cutting-edge technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                className="bg-neutral-50 hover:bg-white text-[#0a0a0b] rounded-[8px] px-8 py-6 font-semibold text-[15px] transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <motion.a href="/careers" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  View Open Positions
                </motion.a>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent group border-2 border-white text-white hover:bg-white rounded-[8px] px-8 py-6 font-semibold text-[15px] transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Get in Touch
                </motion.a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
