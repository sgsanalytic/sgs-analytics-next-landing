import React from "react";
import { useTranslations } from "next-intl";

export const FinOps = () => {
  const t = useTranslations('consulting.finOps');
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('badge')}
            </span>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {t('title')}
          </h2>
          
          {/* Highlighted Stat */}
          <div className="my-8 md:my-12">
            <div className="inline-flex flex-col items-center p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <span className="text-5xl md:text-7xl font-bold text-primary">
                20-40%
              </span>
              <span className="text-base md:text-lg text-muted-foreground mt-2">
                {t('reduction')}
              </span>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            {t.rich('description', {
              finops: (chunks) => <span className="text-primary font-semibold">{chunks}</span>
            })}
          </p>

          {/* Cloud Providers */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">{t('platforms')}</span>
            <div className="flex gap-3">
              <span className="px-5 py-2.5 text-sm font-bold bg-[#FF9900]/10 text-[#FF9900] rounded-lg border border-[#FF9900]/20">
                AWS
              </span>
              <span className="px-5 py-2.5 text-sm font-bold bg-[#0089D6]/10 text-[#0089D6] rounded-lg border border-[#0089D6]/20">
                Azure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
