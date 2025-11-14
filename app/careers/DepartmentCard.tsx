import Image, { StaticImageData } from "next/image";

interface DepartmentCardProps {
    image: StaticImageData | string;
    title: string;
    description: string;
}

export default function DepartmentCard({ image, title, description }: DepartmentCardProps) {
    return (
        <article className="flex flex-col bg-transparent rounded-[8px] overflow-hidden shadow-sm">
            {/* Image area - responsive height */}
            <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-gray-800">
                {typeof image === "string" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <Image src={image} alt={title} fill className="absolute inset-0 w-full h-full object-cover" />
                )}
            </div>

            {/* Content area */}
            <div className="p-4 sm:p-5">
                <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight">{title}</h3>
                <p className="text-neutral-400 mt-2 text-sm leading-relaxed">{description}</p>
            </div>
        </article>
    );
}
