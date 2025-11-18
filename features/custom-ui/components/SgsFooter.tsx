import Link from "next/link";
import { NAVIGATION_LINKS } from "../utils/constants/navigation";
import { CONTACT_INFO } from "@/features/ourContact/utils/constants/contact.constants";

export const SgsFooter = () => {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Marca + breve descripción */}
        <div>
          <h2 className="text-xl font-semibold">SGS Analytics</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Impulsamos la transformación digital de las empresas mediante IA,
            automatización, nube y analítica avanzada.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-medium mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Información de contacto */}
        <div>
          <h3 className="text-lg font-medium mb-2">Contáctanos</h3>
          <ul className="text-sm space-y-1">
            {CONTACT_INFO.map((contact) => (
              <li key={contact.id}>
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {contact.footerText}: {contact.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>Copyright © 2025 SGS Analytics. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
