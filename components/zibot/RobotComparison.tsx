"use client";

import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {motion} from "motion/react";

interface Spec {
    value: string;
    label: string;
}

interface RobotComparisonProps {
    robot1Image: string;
    specs: Spec[];
}

export default function RobotComparison({ robot1Image, specs }: RobotComparisonProps) {
    return (
        <div className="w-full">
            {/* Robot Image */}
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-100px"}}
                transition={{duration: 0.7}}
                className="flex items-center justify-center gap-8 md:gap-16 mb-8 sm:mb-12"
            >
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[55vh]">
                    <Image
                        src={robot1Image}
                        alt="ZiBot Model 1"
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </motion.div>

            {/* Specifications */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:h-[150px] gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {specs.map((spec, index) => (
                    <>
                        <motion.div
                            key={index}
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                                {spec.value}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400">
                                {spec.label}
                            </p>
                        </motion.div>
                        {index < specs.length - 1 && <Separator orientation="vertical" className="hidden sm:block" />}
                    </>
                ))}
            </div>
        </div>
    );
}
