"use client";

import Image from "next/image";

interface GridItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface RobotTopViewGridProps {
    robotImage: string;
    title?: string;
    subtitle?: string;
    gridItems: GridItem[];
    gridCols?: 3 | 6;
}

export default function RobotTopViewGrid({
    robotImage,
    title,
    subtitle,
    gridItems,
    gridCols = 6,
}: RobotTopViewGridProps) {
    const gridClass = gridCols === 3
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6";

    return (
        <div className="w-full">
            {/* Top-down Robot Image */}
            <div className="relative w-full h-[70vh] mx-auto mb-16">
                <Image
                    src={robotImage}
                    alt="ZiBot Top View"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Optional Header */}
            {(title || subtitle) && (
                <div className="mb-12">
                    {title && (
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-gray-400 text-lg">{subtitle}</p>
                    )}
                </div>
            )}

            {/* Grid of Features */}
            <div className={gridClass}>
                {gridItems.map((item) => (
                    <div key={item.id} className="flex flex-col">
                        <div className="w-full aspect-square bg-gray-800 rounded-xl mb-3 overflow-hidden relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className={`${gridCols === 3 ? 'text-base' : 'text-xs'} font-semibold text-white mb-2`}>
                            {item.title}
                        </h4>
                        <p className={`${gridCols === 3 ? 'text-sm' : 'text-xs'} text-gray-400 leading-relaxed`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
