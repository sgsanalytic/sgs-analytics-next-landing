import React from "react";
import Link from "next/link";
import { AccordionConsulting } from "./AccordionConsulting";
import { ACCORDION_ITEMS } from "../utils/constants/consulting.constants";
import { Button } from "@/components/ui/button";

export const Consulting = () => {
  return (
    <section className="py-6 bg-background text-foreground container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <article className=" space-y-6 content-center">
        <h2 className="text-4xl font-bold">Consultoría</h2>
        <p className="text-lg text-muted-foreground">
          Impulsamos la transformación digital de las empresas mediante IA,
          automatización, nube y analítica avanzada. En SGS Analytics
          convertimos los datos en estrategia, eficiencia y crecimiento,
          integrando gobernanza, tecnología y visión empresarial para generar
          resultados medibles y sostenibles.
        </p>
        <Button asChild className="text-xl p-6">
          <Link href="/contact">Contáctanos</Link>
        </Button>
      </article>
      <article className="space-y-6">
        <AccordionConsulting items={ACCORDION_ITEMS} />
      </article>
    </section>
  );
};
