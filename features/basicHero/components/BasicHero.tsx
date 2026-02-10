import Link from "next/link";
import { useTranslations } from "next-intl";
import { LottieCustomProyecjt } from "@/features/lotties/components/LottieCustomProyecjt";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";

export const BasicHero = () => {
  const t = useTranslations('hero');

  const bullets = [
    t('bullets.usHours'),
    t('bullets.seniorLed'),
    t('bullets.cloudSoftware'),
    t('bullets.mobileApp'),
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-background text-foreground container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-center">
        <article className="flex justify-center items-center order-2 lg:order-1">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
            <LottieCustomProyecjt className="w-full h-full" />
          </div>
        </article>

        {/* Content Section */}
        <article className="space-y-4 sm:space-y-6 content-center order-1 lg:order-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t('description')}
          </p>

          {/* Bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">{t('contactButton')}</Link>
            </Button>
          </div>
        </article>
      </div>

      {/* Video placeholder */}
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-muted/50 border border-border">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-colors hover:bg-primary">
              <Play className="h-8 w-8 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
