import { OurContact } from "@/features/ourContact";
import { ContactUs } from "@/features/contactForm";

export default function ContactPage() {
  return (
    <div>
      <main className="pt-16">
        {/* Contact Information Section */}
        <OurContact />

        {/* Contact Form Section */}
        <ContactUs />
      </main>
    </div>
  );
}
