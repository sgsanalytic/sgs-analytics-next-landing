import {
  Database,
  Workflow,
  BarChart3,
  Zap,
  Cloud,
  Shield,
} from "lucide-react";
import { AboutService } from "../../interfaces";

export const getAboutServices = (t: (key: string) => string): AboutService[] => [
  {
    id: "consultorias-datos",
    titulo: t("items.consultorias-datos.titulo"),
    descripcion: t("items.consultorias-datos.descripcion"),
    icono: Database,
  },
  {
    id: "desarrollos-etl",
    titulo: t("items.desarrollos-etl.titulo"),
    descripcion: t("items.desarrollos-etl.descripcion"),
    icono: Workflow,
  },
  {
    id: "business-intelligence",
    titulo: t("items.business-intelligence.titulo"),
    descripcion: t("items.business-intelligence.descripcion"),
    icono: BarChart3,
  },
  {
    id: "automatizacion-procesos",
    titulo: t("items.automatizacion-procesos.titulo"),
    descripcion: t("items.automatizacion-procesos.descripcion"),
    icono: Zap,
  },
  {
    id: "transformacion-digital",
    titulo: t("items.transformacion-digital.titulo"),
    descripcion: t("items.transformacion-digital.descripcion"),
    icono: Cloud,
  },
  {
    id: "data-governance-services",
    titulo: t("items.data-governance-services.titulo"),
    descripcion: t("items.data-governance-services.descripcion"),
    icono: Shield,
  },
];
