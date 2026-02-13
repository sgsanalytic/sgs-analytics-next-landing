import React from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CASE_STUDY_IDS,
  type CaseStudyId,
} from "../utils/constants/caseStudies.constants";

function CaseStudyCard({ caseId }: { caseId: CaseStudyId }) {
  const t = useTranslations("caseStudies");
  const tCase = useTranslations(`caseStudies.cases.${caseId}`);

  return (
    <Card className="group relative h-full flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <CardHeader className="pb-2">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {tCase("industry")}
        </span>
        <CardTitle className="text-xl md:text-2xl leading-tight">
          {tCase("title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 pt-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {t("labels.problem")}
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {tCase("problem")}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {t("labels.approach")}
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {tCase("approach")}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {t("labels.result")}
          </p>
          <p className="text-sm text-foreground leading-relaxed font-medium">
            {tCase("result")}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-border/50 text-xs text-muted-foreground">
          <span>
            <span className="font-medium text-foreground">
              {t("labels.duration")}:
            </span>{" "}
            {tCase("duration")}
          </span>
          <span>
            <span className="font-medium text-foreground">
              {t("labels.team")}:
            </span>{" "}
            {tCase("teamSize")}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export const CaseStudies = () => {
  const t = useTranslations("caseStudies");

  return (
    <section className="py-16 md:py-24 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CASE_STUDY_IDS.map((caseId) => (
            <CaseStudyCard key={caseId} caseId={caseId} />
          ))}
        </div>
      </div>
    </section>
  );
};
