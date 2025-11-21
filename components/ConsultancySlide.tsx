"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ConsultancySlide() {
  return (
    <div className="p-1">
      <div className="relative pt-[100px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[101px] text-center text-white absolute w-full top-0"
        >
          <h2 className="font-bold text-center leading-18">
            Fainzy <br />
            Consultancy
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/slides/consultancy.png"
            className="h-[35vh] w-full object-contain mt-10 relative"
            alt="ZiBot"
            height={1000}
            width={3000}
          />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute w-full text-center top-[45vh] px-4"
        >
          <Button
            className="mt-6 md:mt-10 py-3 md:py-4 px-6 md:px-8 border border-white rounded-[4px] bg-transparent hover:bg-white hover:text-black text-white md:text-lg lg:text-xl font-normal transition-all duration-500 ease-in-out"
            asChild
          >
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
