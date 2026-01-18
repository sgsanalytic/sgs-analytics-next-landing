import Link from "next/link";
import { useTranslations } from "next-intl";
import { LottieCustomProyecjt } from "@/features/lotties/components/LottieCustomProyecjt";
import { Button } from "@/components/ui/button";

export const BasicHero = () => {
  const t = useTranslations('hero');
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-background text-foreground container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-center">
        <article className="flex justify-center items-center order-2 lg:order-1">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
            <LottieCustomProyecjt className="w-full h-full" />
          </div>
        </article>
        <article className="space-y-4 sm:space-y-6 content-center order-1 lg:order-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t('description')}
          </p>
          <div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">{t('contactButton')}</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};
