"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

interface Feature {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface LargeFeatureCarouselProps {
  features: Feature[];
}

export default function LargeFeatureCarousel({ features }: LargeFeatureCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full pb-24"
    >
      <CarouselContent className="-ml-6">
        {features.map((feature) => (
          <CarouselItem key={feature.id} className="pl-6 md:basis-2/3">
            <div className="flex flex-col">
              {/* Large Image Container */}
              <div className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden bg-gray-800 mb-6">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
              </div>
              {/* Text Content Below Image */}
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex absolute bottom-4 left-4 top-auto -translate-y-0 text-white border-white hover:bg-white hover:text-black" />
      <CarouselNext className="hidden md:flex absolute bottom-4 left-20 top-auto -translate-y-0 text-white border-white hover:bg-white hover:text-black" />
      <CarouselDots />
    </Carousel>
  );
}
