"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product as ProductType } from "@/types";

export default function Product({
  title,
  description,
  image,
  features,
  reverse = false,
  link,
}: ProductType) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[95vh] py-8 md:py-12 lg:py-[50px] items-center justify-between rounded-[12px] gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`flex flex-col gap-4 md:gap-[17px] min-h-[auto] lg:min-h-[70vh] items-start justify-between px-4 md:px-6 lg:px-[30px] py-0 ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="flex flex-col gap-4 md:gap-[17px] items-start">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-extrabold leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-[62px] text-white uppercase"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-normal leading-[1.6] md:leading-[1.8] lg:leading-[40px] text-base md:text-lg lg:text-xl text-white"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              className="bg-white text-[#121212] hover:bg-white hover:text-black rounded-[12px] px-6 py-3 text-lg md:text-xl font-normal transition-all duration-500 ease-in-out mt-2"
              asChild
            >
              <motion.a href={link || "#"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Learn more</span>
              </motion.a>
            </Button>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[24px] w-full pt-6 md:pt-8 lg:pt-[33px] border-t border-[rgba(255,255,255,0.08)]">
          {features?.map((feature, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col gap-[4px] items-start"
            >
              {feature.icon && <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white mb-2" />}
              <p className="text-xl md:text-2xl lg:text-[28px] leading-[1.3] lg:leading-[42px] text-neutral-50 tracking-[-0.28px]">
                {feature.title}
              </p>
              <p className="font-normal text-xs md:text-[13px] leading-[1.5] text-neutral-500 tracking-[1px] uppercase">
                {feature.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className={`h-[300px] md:h-[400px] lg:h-[459px] relative ${reverse ? "lg:order-1" : ""}`}
      >
        <Image
          alt={title}
          height={1000}
          width={1000}
          className="w-full h-full object-contain"
          src={image}
        />
      </motion.div>
    </div>
  );
}
