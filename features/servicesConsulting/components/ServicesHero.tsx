import { getTranslations } from "next-intl/server";

export const ServicesHero = async () => {
  const t = await getTranslations('services');
  
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            {t('mainTitle')}
          </h1>
          <div className="space-y-4 max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-sm text-muted-foreground">{t('technologies')}</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  {t('azure')}
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  {t('aws')}
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  {t('databricks')}
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  {t('snowflake')}
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  {t('sqlServer')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

