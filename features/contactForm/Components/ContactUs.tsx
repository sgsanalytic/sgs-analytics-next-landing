import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  return (
    <section className="py-6 bg-background text-foreground">
      <div className="container mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-bold">Contacto</h2>
        <ContactForm />
      </div>
    </section>
  );
};
