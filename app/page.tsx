import { Consulting } from "@/features/consulting";
import { ContactUs } from "@/features/contactForm";

export default function Home() {
  return (
    <div>
      <main className="pt-16 space-y-6">
        <Consulting />
        <ContactUs />
      </main>
    </div>
  );
}
