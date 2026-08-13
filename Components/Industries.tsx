const industries = [
  "Tecnología",
  "Finanzas",
  "Seguros",
  "Retail",
  "Manufactura",
  "Salud",
  "Telecomunicaciones",
  "Gobierno",
  "Servicios profesionales",
];

export default function Industries() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Cobertura</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          Experiencia aplicable a cualquier industria
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {industries.map((ind) => (
            <div
              key={ind}
              className="card-hover rounded-xl border border-line bg-panel px-4 py-6 text-center"
            >
              <span className="font-display text-sm font-600">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
