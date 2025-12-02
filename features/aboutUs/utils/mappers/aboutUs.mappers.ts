import {
  IAboutUsCertification,
  IAboutUsExperience,
} from "../../interfaces/aboutUs.interfaces";
import { Certification, Experience } from "../constants/aboutUs.constants";

/**
 * Construye la URL completa de una imagen de Strapi
 */
const getStrapiImageUrl = (url: string | undefined): string => {
  if (!url) {
    return "https://placehold.co/200x200/6A00F4/FFFFFF?text=No+Image";
  }

  // Si la URL ya es completa (http:// o https://), retornarla directamente
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // Si es una ruta relativa, construir la URL completa con la base de Strapi
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";

  // Asegurarse de que la URL base no termine con / y la ruta no empiece con /
  const baseUrl = strapiBaseUrl.endsWith("/")
    ? strapiBaseUrl.slice(0, -1)
    : strapiBaseUrl;
  const imagePath = url.startsWith("/") ? url : `/${url}`;

  return `${baseUrl}${imagePath}`;
};

/**
 * Mapea los datos de certificaciones de Strapi al formato del componente
 */
export const mapCertificationsToComponent = (
  certifications: IAboutUsCertification[]
): Certification[] => {
  return certifications.map((cert) => ({
    id: cert.documentId || String(cert.id),
    provider: cert.provider,
    name: cert.name,
    type: cert.type,
    imageUrl: getStrapiImageUrl(cert.imageUrl?.url),
  }));
};

/**
 * Mapea los datos de experiencias de Strapi al formato del componente
 */
export const mapExperiencesToComponent = (
  experiences: IAboutUsExperience[]
): Experience[] => {
  return experiences.map((exp) => ({
    id: exp.documentId || String(exp.id),
    company: exp.company,
    logoUrl: getStrapiImageUrl(exp.logoUrl?.url),
  }));
};

