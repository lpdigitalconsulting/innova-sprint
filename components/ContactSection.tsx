import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contacto" className="border-t border-line py-24">
      <div className="mx-auto max-w-3xl px-6">
        <span className="section-eyebrow">Contacto</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          Hablemos del reto de tu organización
        </h2>
        <p className="mt-4 text-lg text-dim">
          Completa el formulario y un especialista te contactará para agendar tu sesión
          estratégica.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
