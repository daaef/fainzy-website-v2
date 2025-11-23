"use client";

import { motion } from "motion/react";
import Image from "next/image";
import CareersBanner from "@/public/careers/careers-banner.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src={CareersBanner}
        alt="careers banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,11,0.3)] to-[rgba(10,10,11,0.7)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 py-24"
      >
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-white tracking-[-1.12px] mb-4">
          Join Us in Building the Future
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
          At Fainzy Technologies, we&apos;re pioneering the next generation of robotics and AI
          solutions that will transform industries worldwide.
        </p>
      </motion.div>
    </section>
  );
}
