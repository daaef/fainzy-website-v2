"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Feature {
  title: string;
  subtitle: string;
}

interface SolutionImage {
  src: string;
  alt: string;
}

interface Solution {
  id: string;
  category: string;
  title: string;
  description: string;
  images: SolutionImage[];
  features: Feature[];
}

interface CustomSolutionsCarouselProps {
  solutions: Solution[];
}

export default function CustomSolutionsCarousel({ solutions }: CustomSolutionsCarouselProps) {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-5 rounded-[12px]">
            {solutions.map((solution, index) => (
              <CarouselItem
                key={solution.id}
                className="lg:basis-2/3 bg-[#121212] rounded-[12px] last-of-type:mr-[20px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center"
                >
                  {/* Content Container */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full h-full p-5">
                    {/* Left Text Content - 1/3 width on desktop */}
                    <div className="lg:col-span-1 z-10 flex flex-col justify-between h-full">
                      <div className="space-y-4 lg:space-y-6">
                        <p className="text-xs sm:text-sm font-medium tracking-wider text-neutral-400 uppercase">
                          {solution.category}
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                          {solution.title}
                        </h2>
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>

                      {/* Features Grid - Bottom Left */}
                      {solution.features.length > 0 && (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-8 lg:mt-12">
                          {solution.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                              className="flex flex-col"
                            >
                              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                {feature.title}
                              </h3>
                              <p className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider">
                                {feature.subtitle}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Side - Image + Contact Button - 2/3 width on desktop */}
                    <div className="lg:col-span-1 relative h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-center">
                      {/* Image */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-[75%]"
                      >
                        <Image
                          src={solution.images[0].src}
                          alt={solution.images[0].alt}
                          fill
                          className="object-contain rounded-[18px] h-[200px] w-[200px]"
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          priority={index === 0}
                        />
                      </motion.div>

                      {/* Contact Button - Bottom Right */}
                      <div className="flex justify-end items-end">
                        <a
                          href="/contact"
                          className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-neutral-200 transition-colors text-sm sm:text-base"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
