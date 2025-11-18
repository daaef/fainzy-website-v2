"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  image: StaticImageData | string;
  learnLink: string;
  className?: string;
}

export default function ProductCard({ title, image, learnLink, className = "" }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col items-center justify-between min-h-[320px] md:min-h-[380px] ${className}`}
    >
      {/* Image Container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full h-[200px] md:h-[240px] relative mb-6 flex items-center justify-center"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-4 px-4">
        {title}
      </h3>

      {/* Action Links */}
      <div className="flex items-center gap-4 text-sm md:text-base">
        <Link
          href={learnLink}
          className="text-neutral-300 hover:text-white underline underline-offset-4 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </motion.div>
  );
}
