"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "en" | "ja";

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [mounted, setMounted] = useState(false);

    // Load saved locale from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedLocale = localStorage.getItem("locale") as Locale | null;
        if (savedLocale && (savedLocale === "en" || savedLocale === "ja")) {
            setLocaleState(savedLocale);
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase();
            const detectedLocale = browserLang.startsWith("ja") ? "ja" : "en";
            setLocaleState(detectedLocale);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null;
    }

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
}
