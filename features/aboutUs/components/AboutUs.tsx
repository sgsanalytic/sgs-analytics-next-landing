import React from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations('about');
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
            {t('title')}
          </h2>
          
          <div className="space-y-6 md:space-y-8 max-w-3xl">
            <div className="space-y-3">
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                {t.rich('intro', {
                  dataEngineering: (chunks) => <span className="text-primary">{chunks}</span>,
                  cloud: (chunks) => <span className="text-primary">{chunks}</span>,
                  ai: (chunks) => <span className="text-primary">{chunks}</span>
                })}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('helpTitle')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">{t('services.dataEngineering')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">{t('services.powerBi')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">{t('services.machineLearning')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">{t('services.automatizacion')}</span>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">{t('services.finOps')}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('teams')}
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
