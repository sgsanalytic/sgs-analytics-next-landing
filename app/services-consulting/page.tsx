import { ServicesHero } from "@/features/servicesConsulting";
import { Consulting } from "@/features/consulting";
import { GeneralServices } from "@/features/generalServices";
import { AboutServices } from "@/features/aboutServices";
import { ContactForm } from "@/features/contactForm";

export default function ServicesConsultingPage() {
  return (
    <div>
      <main className="pt-16 container">
        {/* Hero Section */}
        <ServicesHero />

        {/* Consulting Section */}
        <Consulting />

        {/* General Services Section */}
        <GeneralServices />

        {/* Detailed Services Section */}
        <AboutServices />

        {/* CTA Section */}
        <section className="px-4">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
