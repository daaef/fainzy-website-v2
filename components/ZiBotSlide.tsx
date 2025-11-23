"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ZiBotSlide() {
  return (
    <div className="p-1">
      <div className="relative h-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl md:top-0 top-[10vh] xl:text-[131px] text-center text-white absolute w-full "
        >
          <h2 className="font-bold text-center font-zibot">ZiBot</h2>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[35vh] top-[10vh] w-full relative"
        >
          <Image
            src="/slides/zibot.png"
            className="h-full w-full object-contain"
            alt="ZiBot"
            height={1000}
            width={3000}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute w-full text-center px-4 top-[30vh]"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-shadow-lg">
            Anything Anytime Anywhere
          </p>
          <p className="font-cursive text-2xl sm:text-3xl md:text-4xl text-shadow-lg">Delivery</p>
          <Button
            className="mt-6 md:mt-10 py-3 md:py-4 px-6 md:px-8 border border-white rounded-[4px] bg-transparent hover:bg-white hover:text-black text-white md:text-lg lg:text-xl font-normal transition-all duration-500 ease-in-out"
            asChild
          >
            <motion.a
              href="/products/zibot"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
