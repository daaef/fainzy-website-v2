"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Use setTimeout to defer state update and avoid cascading renders
      const timer = setTimeout(() => setShowBanner(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Store consent in localStorage
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-6"
        >
          <p className="text-foreground/60 text-xs sm:text-sm">
            We use cookies for better service.
          </p>
          <button
            onClick={handleAccept}
            className="py-1 px-4 font-bold inline-block border-2 border-white rounded-[4px] text-sm hover:text-black cursor-pointer hover:bg-white transition-all duration-500 ease-in-out uppercase whitespace-nowrap"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
