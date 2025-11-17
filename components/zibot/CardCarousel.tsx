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
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CardCarouselProps {
  cards: Card[];
  title?: string;
  subtitle?: string;
  navigationPosition?: "side" | "top-right";
  cardsPerView?: number;
}

export default function CardCarousel({
  cards,
  title,
  subtitle,
  navigationPosition = "side",
  cardsPerView = 3,
}: CardCarouselProps) {
  const basisClass =
    cardsPerView === 4
      ? "md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
      : cardsPerView === 5
        ? "md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
        : cardsPerView === 6
          ? "basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
          : "md:basis-1/2 lg:basis-1/3";

  return (
    <div className="w-full">
      {/* Header with optional navigation */}
      {(title || subtitle) && (
        <div className="flex items-start justify-between mb-8">
          <div className="max-w-3xl">
            {title && <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          className="w-full pb-24"
        >
          <CarouselContent className="-ml-6">
            {cards.map((card) => (
              <CarouselItem key={card.id} className={`pl-6 ${basisClass}`}>
                <div className="flex flex-col">
                  {/* Square Image Container */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-800 mb-4">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                  {/* Text Content Below Image */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {navigationPosition === "side" ? (
            <>
              <CarouselPrevious className="hidden md:flex absolute bottom-4 left-4 top-auto -translate-y-0 text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="hidden md:flex absolute bottom-4 left-20 top-auto -translate-y-0 text-white border-white hover:bg-white hover:text-black" />
            </>
          ) : (
            <>
              <CarouselPrevious className="absolute bottom-4 left-4 top-auto translate-y-0 text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="absolute bottom-4 left-20 top-auto translate-y-0 text-white border-white hover:bg-white hover:text-black" />
            </>
          )}
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
}
