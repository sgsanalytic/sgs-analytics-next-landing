export const ServicesHero = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
             Ingeniería de Datos y Analítica
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
          Ingeniería de Datos y Analítica Empresarial
          </h1>
          <div className="space-y-4 max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Diseñamos y construimos arquitecturas de datos modernas que permiten a las empresas centralizar información desde múltiples fuentes, automatizar procesos ETL/ELT y garantizar calidad y confiabilidad de los datos para análisis y reporting.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-sm text-muted-foreground">Tecnologías:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  Azure
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  AWS
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  Databricks
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  Snowflake
                </span>
                <span className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  SQL Server
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

