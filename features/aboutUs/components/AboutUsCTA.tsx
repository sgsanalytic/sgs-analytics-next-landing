import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AboutUsCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          ¿Quieres trabajar con nosotros?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Conoce más sobre nuestro equipo y experiencia. Estamos listos para
          ayudarte a alcanzar tus objetivos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contáctanos</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/services-consulting">Ver nuestros servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

