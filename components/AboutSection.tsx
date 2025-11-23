"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 lg:py-[100px] flex flex-col items-start"
        >
          <h6 className="text-[#737373] font-normal leading-[19.5px] text-[13px] tracking-[1.5px] uppercase">
            Our Foundation
          </h6>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-[20px] pb-12 md:pb-16 w-full">
            <div>
              <h2 className="font-bold mt-2 leading-[1.2] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white tracking-[-1.04px] max-w-full lg:max-w-[1231px]">
                Imagine the future we can build for humanity
              </h2>
              <p className="mt-4 font-normal leading-[1.6] md:leading-[1.8] lg:leading-[28.8px] text-lg md:text-xl lg:text-[25px] text-neutral-400">
                From autonomous delivery robots to cutting-edge AI solutions, our technology is
                transforming how services reach people, making delivery faster, safer, and more
                efficient through innovation and robotics.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center lg:items-start"
            >
              <Button
                className="py-4 px-8 border border-white rounded-[4px] bg-transparent hover:bg-white hover:text-black text-white text-sm md:text-base font-semibold leading-[21px] transition-all duration-500 ease-in-out mt-6"
                asChild
              >
                <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Get Started
                </motion.a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-6 md:gap-8 lg:gap-[20px] items-center pb-12 md:pb-16">
          <div className="p-6 md:p-8 lg:p-10">
            <h6 className="text-[#737373] font-normal leading-[19.5px] text-[13px] tracking-[1.5px] uppercase">
              Purpose
            </h6>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mt-6 md:mt-8 font-bold leading-none">
              Revolutionizing Last-Mile Delivery
            </h2>
            <p className="text-base md:text-lg lg:text-xl mt-4">
              To create intelligent, autonomous delivery solutions that transform how goods and
              services reach people, making delivery faster, safer, and more efficient through
              cutting-edge robotics.
            </p>
          </div>
          <div className="min-h-[300px] md:min-h-[500px] lg:min-h-[600px] rounded-[12px] overflow-hidden">
            <Image
              width={1000}
              height={600}
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover object-top"
              src="/purpose.jpg"
              alt="Purpose"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 865px"
            />
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[48px] pb-12 md:pb-16">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[12px] overflow-hidden"
          >
            <div className="rounded-[12px] overflow-hidden">
              <Image
                width={500}
                height={500}
                className="w-full h-[200px] md:h-[250px] lg:h-[280px] object-cover object-top"
                src="/vision.jpg"
                alt="Vision"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-[40px]">
              <h6 className="text-[#737373] font-normal leading-[19.5px] text-[13px] tracking-[1.5px] uppercase">
                Vision
              </h6>
              <h2 className="text-xl md:text-2xl lg:text-[30px] mt-6 md:mt-8 font-bold leading-none">
                A World Where Robots Serve Humanity
              </h2>
              <p className="mt-4 text-base md:text-lg lg:text-xl">
                We envision a future where autonomous delivery robots become integral partners in
                seamlessly navigating cities and communities to deliver goods with precision,
                reliability, and sustainability.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="h-auto lg:h-[600px] rounded-[12px] overflow-hidden relative"
          >
            <Image
              width={1000}
              height={1000}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top"
              src="/mission.png"
              alt="Mission"
            />
            <div className="absolute flex flex-col justify-between w-full h-full bg-[linear-gradient(45deg,rgba(17,17,19,0.95),rgba(17,17,19,0.7))] top-0 p-6 md:p-8 lg:p-[40px]">
              <div>
                <h6 className="text-[#737373] font-normal leading-[19.5px] text-[13px] tracking-[1.5px] uppercase">
                  Mission
                </h6>
                <h2 className="text-xl md:text-2xl lg:text-[30px] font-bold mt-6 md:mt-8 leading-none">
                  Pioneering the New Normal
                </h2>
                <p className="mt-4 text-base md:text-lg lg:text-xl">
                  To develop and deploy advanced robotic delivery systems that prioritize safety,
                  efficiency, and accessibility. We are committed to continuous innovation,
                  exceptional quality, and creating solutions that transform lives.
                </p>
              </div>
              <div>
                <Separator className="mb-4 bg-[#535353] h-[1px]" />
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
                  <div>
                    <h3 className="font-bold text-2xl md:text-[30px]">Safety</h3>
                    <p className="text-[#737373] font-normal leading-[19.5px] text-[13px] tracking-[1.5px] uppercase">
                      First Priority
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl md:text-[30px]">Innovation</h3>
                    <p className="text-[#737373] font-normal leading-[19.5px] text-[13px] tracking-[1.5px] uppercase">
                      Continuous
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
