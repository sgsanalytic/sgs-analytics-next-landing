import { Consulting } from "@/features/consulting";
import { ContactUs } from "@/features/contactForm";
import { GeneralServices } from "@/features/generalServices";
import { BasicHero } from "@/features/basicHero";
import { AboutServices } from "@/features/aboutServices";

export default function Home() {
  return (
    <div>
      <main className="pt-16 space-y-6">
        <BasicHero />
        <Consulting />
        <GeneralServices />
        <AboutServices />
        <ContactUs />
      </main>
    </div>
  );
}
