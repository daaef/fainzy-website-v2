"use client";

import { useLocale as useLocaleContext } from "@/contexts/LocaleContext";

export function useClientLocale() {
  return useLocaleContext();
}
