import { MapPin, Phone, Headphones } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface ContactInfo {
  id: string;
  title: string;
  description: string;
  value: string;
  footerText: string;
  href: string;
  icon: LucideIcon;
}

export const getContactInfo = (t: (key: string) => string): ContactInfo[] => [
  {
    id: "location",
    title: t("info.location.title"),
    description: t("info.location.description"),
    value: t("info.location.value"),
    footerText: t("info.location.footerText"),
    href: "https://www.google.com/maps/search/?api=1&query=14.5917826,-90.5280677",
    icon: MapPin,
  },
  {
    id: "phone",
    title: t("info.phone.title"),
    description: t("info.phone.description"),
    footerText: t("info.phone.footerText"),
    value: "+502 5915 9360",
    href: "tel:+50259159360",
    icon: Phone,
  },
  {
    id: "support",
    title: t("info.support.title"),
    description: t("info.support.description"),
    footerText: t("info.support.footerText"),
    value: "info@sgsanalytic.com",
    href: "mailto:info@sgsanalytic.com",
    icon: Headphones,
  },
];
