import Link from "next/link";
import { NAVIGATION_LINKS } from "../utils/constants/navigation";

export const SgsFooter = () => {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Marca + breve descripción */}
        <div>
          <h2 className="text-xl font-semibold">SGS Analytics</h2>
          <p className="mt-2 text-sm">
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
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Información de contacto */}
        <div>
          <h3 className="text-lg font-medium mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="tel:+50259159360" target="_blank">
                Phone: +502 5915 9360
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=14.5917826,-90.5280677"
                target="_blank"
              >
                Location: Ciudad de Guatemala
              </Link>
            </li>
            <li>
              <Link href="mailto:info@sgsanalytics.com" target="_blank">
                Support 24/7
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>Copyright © 2025 SGS Analytics. All rights reserved.</p>
      </div>
    </footer>
  );
};
