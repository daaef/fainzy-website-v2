"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useLocaleValue() {
  const { locale } = useLocale();
  return locale;
}
