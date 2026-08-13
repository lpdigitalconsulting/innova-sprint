export default function CTA() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-700 leading-tight md:text-4xl">
          ¿Tu próximo proyecto necesita algo más que buenas intenciones?
        </h2>
        <p className="mt-5 text-lg text-dim">
          Conversemos sobre el reto que enfrenta tu organización y diseñemos una solución a la
          medida.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="rounded-xl bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-bg"
          >
            Agenda una sesión estratégica
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-line px-7 py-3.5 text-sm font-semibold text-ink hover:border-accent1/50"
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </section>
  );
}
