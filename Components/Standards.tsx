const standards = [
  { tag: "Portafolio & Escalamiento", name: "SAFe", suffix: "6.0", desc: "Scaled Agile Framework para coordinar múltiples equipos y trenes de entrega." },
  { tag: "Gestión de Proyectos", name: "PMI", suffix: "/ PMBOK", desc: "Estándar global de dirección de proyectos — base de la certificación PMP." },
  { tag: "Agilidad de Equipo", name: "Scrum", suffix: ".org", desc: "Marco Scrum aplicado a producto, backlog y ceremonias de entrega." },
  { tag: "Flujo Continuo", name: "Kanban", suffix: "Method", desc: "Gestión visual de flujo de trabajo y límites de trabajo en curso." },
  { tag: "Gobierno Formal", name: "PRINCE2", suffix: "®", desc: "Metodología de gobierno de proyectos orientada a procesos y control." },
  { tag: "Transformación", name: "CDTO", suffix: "Framework", desc: "Liderazgo de transformación digital a nivel estratégico y de negocio." },
];

export default function Standards() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Marcos de referencia</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          Trabajamos sobre estándares reconocidos, no sobre criterio propio.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-dim">
          Cada programa se construye alineado a los marcos que ya usan las organizaciones que
          evalúan proveedores serios.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s) => (
            <div key={s.name} className="card-hover rounded-2xl border border-line bg-panel p-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-dim">{s.tag}</span>
              <h4 className="mt-2.5 font-display text-lg font-700">
                {s.name} <span className="bg-accent-gradient bg-clip-text text-transparent">{s.suffix}</span>
              </h4>
              <p className="mt-2 text-sm text-dim">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
