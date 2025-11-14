import {
  Clock,
  DollarSign,
  Leaf,
  Shield,
  Package,
  UtensilsCrossed,
  Hotel,
  MapPin,
  Globe2,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

// Spacing constants for consistent responsive design
export const SPACING = {
  section: "py-12 md:py-16 lg:py-24",
  sectionSm: "py-8 md:py-12 lg:py-16",
  container: "px-4 sm:px-6 lg:px-8",
  cardGap: "gap-6 md:gap-8",
  gridGap: "gap-6 md:gap-8 lg:gap-12",
} as const;

// Typography scale
export const TYPOGRAPHY = {
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  h4: "text-lg sm:text-xl md:text-2xl",
  body: "text-base md:text-lg",
  small: "text-sm md:text-base",
} as const;

// Icon mapping for product features
export const PRODUCT_FEATURE_ICONS: Record<string, LucideIcon> = {
  "24/7 Operation": Clock,
  "Cost Effective": DollarSign,
  "Eco-Friendly": Leaf,
  Reliable: Shield,
} as const;

// Icon mapping for statistics
export const STAT_ICONS = {
  robots: Package,
  restaurants: UtensilsCrossed,
  hotels: Hotel,
  deployments: MapPin,
  countries: Globe2,
  deliveries: CheckCircle,
} as const;

// Design tokens matching current design
export const COLORS = {
  background: "#0A0A0B",
  cardBg: "#101010",
  cardBgAlt: "#111112",
  textPrimary: "#FFFFFF",
  textMuted: "#737373",
  textSecondary: "#878787",
  borderSubtle: "rgba(255,255,255,0.08)",
  borderInput: "rgba(255,255,255,0.1)",
  inputBg: "rgba(255,255,255,0.03)",
  hoverBg: "rgba(255,255,255,0.02)",
} as const;

// Border radius values
export const RADIUS = {
  sm: "8px",
  md: "12px",
  lg: "16px",
} as const;
