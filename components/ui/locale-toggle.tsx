"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LocaleToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [currentLocale, setCurrentLocale] = React.useState<string>("es");
  const router = useRouter();

  // Evitar hidratación incorrecta y obtener locale actual
  React.useEffect(() => {
    setMounted(true);
    // Obtener locale actual desde cookie
    const locale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1] || "es";
    setCurrentLocale(locale);
  }, []);

  const handleLocaleChange = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    
    // Establecer cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Actualizar estado
    setCurrentLocale(newLocale);
    
    // Refrescar la página para aplicar el cambio
    router.refresh();
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Cambiar idioma">
        <Globe className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLocaleChange}
      aria-label={`Cambiar idioma a ${currentLocale === "es" ? "inglés" : "español"}`}
      title={currentLocale === "es" ? "EN" : "ES"}
    >
      <Globe className="h-5 w-5" />
    </Button>
  );
}
