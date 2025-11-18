import React from "react";
import { AboutUsCarrousel } from "./AboutUsCarrousel";

export const AboutUs = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            Nosotros
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-2">
            Expertos certificados que convierten la tecnología en resultados.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Equipo de ingenieros expertos con más de 40 certificaciones.
          </p>
        </div>

        {/* Carousels Section */}
        <AboutUsCarrousel />
      </div>
    </section>
  );
};
