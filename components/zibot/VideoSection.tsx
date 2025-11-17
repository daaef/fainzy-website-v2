"use client";

interface VideoSectionProps {
  videoSrc: string;
  poster: string;
  title?: string;
  description?: string;
  overlayText?: string;
  overlayPosition?: "bottom-left" | "center" | "top-left";
  titlePosition?: "above" | "below";
  height?: "small" | "medium" | "large";
}

export default function VideoSection({
  videoSrc,
  poster,
  title,
  description,
  overlayText,
  overlayPosition = "bottom-left",
  titlePosition = "above",
  height = "medium",
}: VideoSectionProps) {
  const heightClass =
    height === "small"
      ? "h-[300px] md:h-[400px]"
      : height === "large"
        ? "h-[400px] md:h-[500px]"
        : "h-[300px] md:h-[400px] lg:h-[500px]";

  const overlayPositionClass =
    overlayPosition === "center"
      ? "absolute inset-0 flex items-center justify-center"
      : overlayPosition === "top-left"
        ? "absolute top-8 left-8"
        : "absolute bottom-8 left-8";

  return (
    <div className="w-full">
      {/* Title and Description Above Video */}
      {titlePosition === "above" && (title || description) && (
        <div className="mb-6">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>}
          {description && <p className="text-base text-gray-400 leading-relaxed">{description}</p>}
        </div>
      )}

      {/* Video Container */}
      <div className={`relative w-full ${heightClass} rounded-3xl overflow-hidden`}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay Text */}
        {overlayText && (
          <div className={overlayPositionClass}>
            <p className="text-white text-3xl font-bold">{overlayText}</p>
          </div>
        )}
      </div>

      {/* Title and Description Below Video */}
      {titlePosition === "below" && (title || description) && (
        <div className="mt-6">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>}
          {description && <p className="text-base text-gray-400 leading-relaxed">{description}</p>}
        </div>
      )}
    </div>
  );
}
