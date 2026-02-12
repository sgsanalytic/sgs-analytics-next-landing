import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe } from "lucide-react";
import type { TeamMember } from "../utils/constants/leadership.constants";

export interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
  showStack?: boolean;
}

export const TeamCard = ({ member, featured, showStack }: TeamCardProps) => {
  const t = useTranslations("leadership");
  const Icon = member.icon;

  return (
    <Card
      className={`group overflow-hidden border border-border/50 bg-card/95 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        featured ? "py-5 sm:py-6" : "py-5"
      }`}
    >
      <CardHeader className="pb-3 sm:pb-4 px-5 sm:px-6 pt-0">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Icon className="h-5 w-5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight">
              {member.name}
            </h3>
            <span className="mt-1.5 inline-block rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] sm:text-xs font-medium text-muted-foreground tracking-wide">
              {member.role}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-5 sm:px-6 pt-0">
        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("focus")}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {member.focus}
          </p>
        </div>

        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("skills")}
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="inline-block rounded-md bg-muted/70 px-2 py-1 text-xs text-foreground/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {showStack && member.stack && (
          <div>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
              {t("stack")}
            </span>
            <p className="mt-1 text-sm leading-relaxed text-foreground/90">
              {member.stack}
            </p>
          </div>
        )}

        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("certifications")}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {member.certifications}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {member.english && (
            <span className="text-xs text-muted-foreground">
              {t("english")}: {member.english}
            </span>
          )}
          {member.usClientsRemote && (
            <div className="flex items-center gap-1.5 rounded-md bg-primary/5 border border-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary">
              <Globe className="h-3.5 w-3.5 shrink-0" />
              <span>{t("usClientsRemote")}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
