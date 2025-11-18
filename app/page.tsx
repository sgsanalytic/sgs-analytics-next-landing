import { BasicHero } from "@/features/basicHero";
import { Consulting } from "@/features/consulting";
import { ServicesTeaser, AboutUsTeaser, HomeCTA } from "@/features/home";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        {/* Hero Section */}
        <BasicHero />

        {/* Consulting Hero */}
        <Consulting />

        {/* Services Teaser */}
        <ServicesTeaser />

        {/* About Us Teaser */}
        <AboutUsTeaser />

        {/* CTA Section */}
        <HomeCTA />
      </main>
    </div>
  );
}
