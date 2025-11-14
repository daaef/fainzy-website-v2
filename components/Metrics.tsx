"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { StatMetric, StaticStat } from "@/types";
import StatsCounter from "@/components/StatsCounter";

interface MetricsProps {
    animatedStats?: StatMetric[];
    staticStats?: StaticStat[];
}

export default function Metrics({ animatedStats, staticStats }: MetricsProps) {
    const defaultAnimatedStats: StatMetric[] = animatedStats || [];
    const defaultStaticStats: StaticStat[] = staticStats || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 md:gap-12 lg:gap-[48px] w-full"
        >
            {/* Header */}
            <div className="flex flex-col gap-4 items-center text-center">
                <h2 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white tracking-[-1.12px]">
                    We'll keep making impact
                </h2>
                <p className="font-normal leading-[1.5] text-base md:text-lg text-center text-neutral-500 max-w-[600px]">
                    Transforming industries with autonomous robotics technology
                </p>
            </div>

            {/* Animated Stats Grid */}
            {defaultAnimatedStats.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {defaultAnimatedStats.map((stat, i) => (
                        <StatsCounter key={i} {...stat} />
                    ))}
                </div>
            )}

            {/* Static Stats Grid */}
            {defaultStaticStats.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {defaultStaticStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="w-full"
                        >
                            <Card className="bg-[#101010] border-0 rounded-[16px] h-full">
                                <CardContent className="flex flex-col gap-[10px] items-center justify-center p-6 md:p-8 min-h-[180px] md:min-h-[209px]">
                                    <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white mb-2" />
                                    <p className="font-bold leading-[1.2] text-3xl md:text-4xl text-white tracking-[-0.8px]">
                                        {stat.value}
                                    </p>
                                    <p className="font-normal leading-[1.3] text-[#878787] text-sm md:text-[16px] text-center tracking-[1px] uppercase">
                                        {stat.label}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
