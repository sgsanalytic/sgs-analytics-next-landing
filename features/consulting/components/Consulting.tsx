import React from "react";
import Link from "next/link";
import { CarouselConsulting } from "./CarouselConsulting";
import { ACCORDION_ITEMS } from "../utils/constants/consulting.constants";
import { Button } from "@/components/ui/button";

export const Consulting = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-10 md:mb-14">
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                Consultoría
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Estrategias Efectivas
              <span className="text-primary"> con Datos</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Impulsamos la transformación digital de las empresas mediante IA,
              automatización, nube y analítica avanzada. Convertimos los datos
              en estrategia, eficiencia y crecimiento.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Agenda una consulta</Link>
            </Button>
          </div>

          {/* Right Stats - 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 content-center">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50 text-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                Áreas de expertise
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50 text-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                40+
              </div>
              <div className="text-sm text-muted-foreground">
                Certificaciones
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50 text-center col-span-2 sm:col-span-1 hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Soporte continuo
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <CarouselConsulting items={ACCORDION_ITEMS} />
        </div>
      </div>
    </section>
  );
};
