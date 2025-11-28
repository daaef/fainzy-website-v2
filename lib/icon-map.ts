/**
 * Icon Mapping Utility
 *
 * Maps icon string names from CMS to Lucide React icon components
 */

import {
  Clock,
  DollarSign,
  Leaf,
  Shield,
  Package,
  CheckCircle,
  UtensilsCrossed,
  Hotel,
  MapPin,
  Globe2,
  LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Clock,
  DollarSign,
  Leaf,
  Shield,
  Package,
  CheckCircle,
  UtensilsCrossed,
  Hotel,
  MapPin,
  Globe2,
};

/**
 * Get icon component by name
 *
 * @param iconName - Name of the icon from CMS
 * @returns Lucide icon component or Package as fallback
 */
export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Package;
}
