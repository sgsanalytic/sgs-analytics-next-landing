"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Globe, Users } from "lucide-react";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

const METRICS = [
  {
    key: "projects" as const,
    value: 50,
    suffix: "+",
    icon: Briefcase,
  },
  {
    key: "industries" as const,
    value: 8,
    suffix: "+",
    icon: Globe,
  },
  {
    key: "consultants" as const,
    value: 15,
    suffix: "+",
    icon: Users,
  },
] as const;

export const TrustedByProof = () => {
  const t = useTranslations("trustedByProof");

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-muted/30 text-foreground"
      data-trusted-metrics
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {METRICS.map(({ key, value, suffix, icon: Icon }) => (
            <MetricCard
              key={key}
              label={t(`metrics.${key}`)}
              value={value}
              suffix={suffix}
              icon={Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MetricCard = ({ label, value, suffix, icon: Icon }: MetricCardProps) => {
  const displayValue = useAnimatedCounter(value);

  return (
    <Card className="group overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="flex flex-col items-center gap-4 p-6 sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tabular-nums text-primary">
            {displayValue}
            {suffix}
          </div>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
