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

export const CONTACT_INFO: ContactInfo[] = [
  {
    id: "location",
    title: "Ubicación",
    description: "Nuestra dirección",
    value: "Ciudad de Guatemala",
    footerText: "Ubicación",
    href: "https://www.google.com/maps/search/?api=1&query=14.5917826,-90.5280677",
    icon: MapPin,
  },
  {
    id: "phone",
    title: "Información del contacto",
    description: "Puedes escribir o llamar",
    footerText: "Teléfono",
    value: "+502 5915 9360",
    href: "tel:+50259159360",
    icon: Phone,
  },
  {
    id: "support",
    title: "Soporte especializado",
    description: "Soporte 24/7",
    footerText: "Correo electrónico",
    value: "info@sgsanalytics.com",
    href: "mailto:info@sgsanalytics.com",
    icon: Headphones,
  },
];
