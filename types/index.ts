import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";

export interface FAQ {
  id: number;
  created: string;
  modified: string;
  question: string;
  answer: string;
  content: number;
}

export interface Feature {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
}

export interface Product {
  title: string;
  description: string;
  image: StaticImageData;
  features: Feature[];
  reverse?: boolean;
  link?: string;
  id?: string;
}

export interface StatMetric {
  value: string | number;
  label: string;
  icon: LucideIcon;
  delay?: number;
}

export interface StaticStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
