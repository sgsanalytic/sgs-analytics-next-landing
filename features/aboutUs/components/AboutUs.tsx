import React from "react";
import { AboutUsCarrousel } from "./AboutUsCarrousel";
import {
  Certification,
  Experience,
} from "../utils/constants/aboutUs.constants";

interface AboutUsProps {
  certifications: Certification[];
  experiences: Experience[];
}

export const AboutUs = ({ certifications, experiences }: AboutUsProps) => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              Nosotros
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
            Nosotros
          </h2>
          
          <div className="space-y-6 md:space-y-8 max-w-3xl">
            <div className="space-y-3">
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                SGS Analytics es una empresa de <span className="text-primary">ingeniería de datos</span>, <span className="text-primary">cloud</span> e <span className="text-primary">inteligencia artificial</span> con sede en Latinoamérica.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ayudamos a organizaciones a centralizar, analizar y gobernar sus datos mediante soluciones de:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">Data Engineering</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">Power BI</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">Machine Learning</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">Automatización</span>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">Optimización de costos en la nube (FinOps)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Trabajamos con <span className="text-foreground font-semibold">equipos ejecutivos, financieros y de tecnología</span> para convertir los datos en <span className="text-foreground font-semibold">decisiones de negocio confiables</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Carousels Section */}
        <AboutUsCarrousel
          certifications={certifications}
          experiences={experiences}
        />
      </div>
    </section>
  );
};
