import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const AboutUsTeaser = () => {
  const t = useTranslations('about');
  return (
    <section className="py-16 md:py-24 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-2">
            {t('teaser.description1')}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {t('teaser.description2')}
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/about-us-experience">
              {t('teaser.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

