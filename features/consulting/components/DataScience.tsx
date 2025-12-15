import React from "react";

const USE_CASES = [
  "Churn",
  "Fraude",
  "Segmentación de clientes",
  "Forecasting",
  "Optimización de procesos",
];

export const DataScience = () => {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              Data Science e Inteligencia Artificial
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Data Science e Inteligencia Artificial Aplicada
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Implementamos modelos predictivos e inteligencia artificial para casos de uso empresariales, integrando prácticas de <span className="text-primary font-semibold">MLOps</span> para su operación en entornos productivos.
          </p>

          {/* Use Cases Tags */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Casos de uso:
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
