import {
  Database,
  Workflow,
  BarChart3,
  Zap,
  Cloud,
  Shield,
} from "lucide-react";
import { AboutService } from "../../interfaces";

export const ABOUT_SERVICES: AboutService[] = [
  {
    id: "consultorias-datos",
    titulo: "Consultorías de datos",
    descripcion:
      "Descubra el potencial ilimitado de sus datos con SGS Analytics, su socio integral en Consultoría de Datos y Analytics as a Service. Desde la gestión eficaz de datos hasta la transformación de big data en decisiones estratégicas, ofrecemos soluciones personalizadas que impulsan la innovación y el rendimiento empresarial. Con nosotros, su viaje hacia la excelencia en datos comienza ahora.",
    icono: Database,
  },
  {
    id: "desarrollos-etl",
    titulo: "Desarrollos ETL",
    descripcion:
      "Optimice la gestión de datos con nuestros servicios de Desarrollo de ETL (Extract, Transform, Load) en SGS Analytics. Simplificamos el flujo de datos, desde la extracción hasta la carga, asegurando una integración sin fisuras y la disponibilidad oportuna de información clave. Nuestro enfoque personalizado garantiza una arquitectura ETL eficiente, impulsando la calidad y agilidad en la toma de decisiones. Confíe en nosotros para convertir sus datos en activos estratégicos con nuestro servicio líder en desarrollo ETL.",
    icono: Workflow,
  },
  {
    id: "business-intelligence",
    titulo: "Business intelligence",
    descripcion:
      "El Business Intelligence para empresas aporta un valor significativo, permitiendo a las empresas obtener ventajas competitivas. Mediante las soluciones de business intelligence, las empresas pueden mejorar significativamente su toma de decisiones, incrementar la eficiencia operativa y obtener ventajas competitivas sostenibles.",
    icono: BarChart3,
  },
  {
    id: "automatizacion-procesos",
    titulo: "Automatización de procesos",
    descripcion:
      "Transforme su operación con la eficiencia de la automatización de procesos de SGS Analytics. Simplificamos y optimizamos sus flujos de trabajo, eliminando tareas manuales y liberando tiempo valioso. Desde la identificación de oportunidades hasta la implementación de soluciones robustas, ofrecemos servicios de automatización que impulsan la productividad y la agilidad empresarial. ¡Dele a su equipo la libertad de enfocarse en lo importante mientras nosotros hacemos el trabajo pesado!",
    icono: Zap,
  },
  {
    id: "transformacion-digital",
    titulo: "Transformación digital",
    descripcion:
      "Aceleramos la transformación digital de las empresas mediante arquitecturas en la nube, DevOps y automatización en AWS, Azure y GCP. Somos expertos en seguridad, eficiencia operativa y optimización de costos en entornos cloud, garantizando escalabilidad y resultados sostenibles.",
    icono: Cloud,
  },
  {
    id: "data-governance-services",
    titulo: "Data Governance Services",
    descripcion:
      "Garantizamos la excelencia en la gestión de datos para potenciar su estrategia analítica. Desde la creación de políticas y seguridad hasta la definición de roles, optimizamos la calidad y confiabilidad de sus datos. Con SGS Analytics, transformamos información en inteligencia para impulsar su éxito.",
    icono: Shield,
  },
];
