import React from "react";
import { Shield, Eye, Lock, CheckCircle } from "lucide-react";

const PILLARS = [
  {
    icon: CheckCircle,
    title: "Calidad",
    description: "Datos confiables y precisos",
  },
  {
    icon: Eye,
    title: "Trazabilidad",
    description: "Seguimiento completo del ciclo de vida",
  },
  {
    icon: Lock,
    title: "Seguridad",
    description: "Protección y cumplimiento normativo",
  },
  {
    icon: Shield,
    title: "Gobernanza",
    description: "Uso adecuado de la información",
  },
];

export const DataGovernance = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                Gobierno y Calidad de Datos
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Gobierno y Calidad de Datos
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ayudamos a las organizaciones a establecer modelos de gobierno de datos basados en el framework <span className="text-primary font-semibold">DAMA</span>, asegurando el uso adecuado de la información para la toma de decisiones.
            </p>
          </div>

          {/* Right - Pillars Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-5 md:p-6 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <pillar.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
