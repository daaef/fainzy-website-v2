"use client";

import Image from "next/image";

interface BenefitItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface BenefitSection {
    heading: string;
    subheading: string;
    items: BenefitItem[];
}

interface BenefitGridProps {
    title: string;
    sections: BenefitSection[];
}

export default function BenefitGrid({ title, sections }: BenefitGridProps) {
    return (
        <div className="w-full">
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                {title}
            </h2>

            {/* Sections */}
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-16 last:mb-0">
                    {/* Section Heading */}
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {section.heading}
                        </h3>
                        <p className="text-base text-gray-400">
                            {section.subheading}
                        </p>
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {section.items.map((item) => (
                            <div key={item.id} className="flex flex-col">
                                <div className="w-full aspect-square bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-base font-semibold text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
