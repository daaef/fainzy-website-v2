"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image, { StaticImageData } from "next/image";

type Member = {
  name: string;
  role: string;
  imageUrl?: StaticImageData;
  videoUrl?: string;
  impact?: string;
  tags?: string[];
  linkedin?: string;
};

export default function TeamSpotlight({
  open,
  member,
  onClose,
}: {
  open: boolean;
  member?: Member;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200]"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 sm:inset-x-10 md:inset-x-20 lg:inset-x-40 top-20 bottom-20 bg-[#0b0b0c] border border-[rgba(255,255,255,0.08)] rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative flex-1 min-h-[40%] lg:min-h-full">
                {member.videoUrl ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={member.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={typeof member.imageUrl === "object" ? undefined : undefined}
                  />
                ) : (
                  <Image
                    src={member.imageUrl ?? ""}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 60vw, 100vw"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(10,10,11,0.98)] via-[rgba(10,10,11,0.7)] to-transparent" />
              </div>
              <div className="w-full lg:w-[420px] p-6 sm:p-8 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base">{member.role}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                  >
                    ✕
                  </button>
                </div>
                {member.impact && (
                  <div className="text-neutral-300 text-sm sm:text-base">
                    <p>{member.impact}</p>
                  </div>
                )}
                {member.tags && member.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {member.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md text-[11px] font-medium bg-[rgba(255,255,255,0.06)] text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-black hover:bg-neutral-200 px-5 py-3 rounded-md text-sm font-semibold"
                  >
                    Contact Us
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.2)] text-white hover:bg-white hover:text-black px-5 py-3 rounded-md text-sm font-semibold"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
