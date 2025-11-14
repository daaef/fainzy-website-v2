"use client";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {motion} from "motion/react";

interface Robot {
    image: string;
    height: "small" | "medium" | "large";
}

interface PricingTier {
    name: string;
    badge?: string;
    badgeColor?: string;
    price: string;
    commission: string;
    features: string[];
    buttonText: string;
    buttonVariant?: "default" | "outline";
}

interface PricingSectionProps {
    title: string;
    description: string;
    robot: Robot;
    pricingTiers: PricingTier[];
}

export default function PricingSection({title, description, robot, pricingTiers}: PricingSectionProps) {
    return (
        <div className="w-full">
            {/* Robot Image */}
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-100px"}}
                transition={{duration: 0.7}}
                className="flex items-end justify-center gap-4 md:gap-8 mb-12 sm:mb-16"
            >
                <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh]">
                    <Image
                        src={robot.image}
                        alt="ZiBot Model"
                        fill
                        className="object-contain w-full"
                    />
                </div>
            </motion.div>

            {/* Title and Description */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.2}}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {title}
                </h2>
                <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 max-w-3xl">
                    {description}
                </p>
            </motion.div>

            {/* Pricing Tiers - Responsive Layout */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 mb-8">
                {pricingTiers.map((tier, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.3 + (index * 0.1)}}
                        className="text-center md:text-left"
                    >
                        {/* Tier Name and Badge */}
                        <div className="mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 md:gap-8 lg:gap-16">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{tier.name}</h3>
                            {tier.badge && (
                                <Badge
                                    variant="outline"
                                    className={`inline-block text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full ${tier.badgeColor || 'text-orange-500 bg-orange-500/10'} h-[24px] sm:h-[28px] rounded-[4px] border-[rgba(38,38,38,0.15)] flex items-center`}
                                >
                                    <span>{tier.badge}</span>
                                </Badge>
                            )}
                        </div>

                        {/* Price and Commission */}
                        <div className="mb-4">
                            <p className="text-white text-sm sm:text-base mb-1">{tier.price}</p>
                            <p className="text-white text-sm sm:text-base font-semibold">{tier.commission}</p>
                        </div>

                        {/* Features */}
                        <ul className="space-y-2 mb-6 text-xs sm:text-sm text-gray-400">
                            {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <Button
                            className={`${tier.buttonVariant === 'outline' ? 'bg-transparent border border-white hover:bg-white hover:text-black text-white' : 'bg-white text-black hover:bg-gray-200'} px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold`}
                        >
                            {tier.buttonText}
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
