import React from "react";
import { useTranslations } from "next-intl";

export const DataScience = () => {
  const t = useTranslations('consulting.dataScience');
  
  const USE_CASES = [
    t('churn'),
    t('fraude'),
    t('segmentacion'),
    t('forecasting'),
    t('optimizacion'),
  ];
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('badge')}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {t('title')}
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {t.rich('description', {
              mlops: (chunks) => <span className="text-primary font-semibold">{chunks}</span>
            })}
          </p>

          {/* Use Cases Tags */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {t('useCases')}
            </p>
            <div className="flex flex-wrap gap-3">
              {USE_CASES.map((useCase) => (
                <span
                  key={useCase}
                  className="px-4 py-2 text-sm md:text-base font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
