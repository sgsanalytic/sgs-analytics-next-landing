import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { GENERAL_SERVICES_ITEMS } from "../utils/constant";

export const GeneralServices = () => {
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-background text-foreground container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-center">
        <article className="flex justify-center items-center order-2 lg:order-1">
          <div className="w-full max-w-md lg:max-w-full">
            <Image
              src="/ilustrations/ils_14.svg"
              alt="General Services"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </article>
        <article className="space-y-4 sm:space-y-6 content-center order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Servicios generales
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Conoce nuestros soluciones enfocadas al entendimiento de sus
            problemáticas y aliniadas a sus objetivos
          </p>
          <ul className="space-y-2 sm:space-y-3 list-none">
            {GENERAL_SERVICES_ITEMS.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground transition-colors hover:text-primary group"
              >
                <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-primary" />
                </div>
                <span className="flex-1">{item.title}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
