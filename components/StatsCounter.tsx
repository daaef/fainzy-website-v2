"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StatMetric } from "@/types";

export default function StatsCounter({ value, label, icon: Icon, delay = 0 }: StatMetric) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleInView = () => {
        if (!hasAnimated) {
            const target = parseInt(value.toString());
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, 16);

            setHasAnimated(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            onViewportEnter={handleInView}
            whileHover={{ scale: 1.05 }}
            className="w-full"
        >
            <Card className="bg-[#111113] rounded-[16px] h-full border-0">
                <CardContent className="flex flex-col items-center justify-center gap-[10px] p-6 md:p-8 lg:p-10">
                    <div className="bg-[rgba(250,250,250,0.05)] rounded-[16px] p-4 md:p-5">
                        <Icon className="w-8 h-8 md:w-9 md:h-9 text-white" />
                    </div>
                    <p className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1] text-white tracking-[-1.12px]">
                        {count}+
                    </p>
                    <p className="text-sm md:text-[15px] text-center text-neutral-400 tracking-[1px] uppercase leading-[1.5]">
                        {label}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
