import { Consulting } from "@/features/consulting";
import { ContactUs } from "@/features/contactForm";
import { GeneralServices } from "@/features/generalServices";

export default function Home() {
  return (
    <div>
      <main className="pt-16 space-y-6">
        <Consulting />
        <GeneralServices />
        <ContactUs />
      </main>
    </div>
  );
}
