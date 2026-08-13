const pillars = [
  { label: "Capacitación", desc: "Contenido aplicado, no genérico." },
  { label: "Consultoría", desc: "Diagnóstico y diseño de solución." },
  { label: "Metodología", desc: "Marcos probados, adaptados a tu operación." },
  { label: "Tecnología", desc: "Herramientas que dan visibilidad real." },
  { label: "Acompañamiento", desc: "Seguimiento hasta que el cambio se sostiene." },
];

export default function TrustSection() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Nuestra filosofía</span>
          <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
            No capacitamos. Transformamos.
          </h2>
          <p className="mt-5 text-lg text-dim">
            Una capacitación aislada puede transmitir conocimiento. Una transformación real
            cambia la forma en que un equipo trabaja.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className="card-hover rounded-2xl border border-line bg-panel p-5"
            >
              <span className="font-mono text-xs text-dim">0{i + 1}</span>
              <h3 className="mt-3 font-display text-base font-600">{p.label}</h3>
              <p className="mt-2 text-sm text-dim">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
