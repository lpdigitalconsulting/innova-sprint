const reasons = [
  { title: "Experiencia real", desc: "No enseñamos únicamente teoría. Trabajamos con problemas reales de proyectos." },
  { title: "Tecnología", desc: "Combinamos metodologías con herramientas digitales." },
  { title: "Personalización", desc: "Cada organización tiene retos diferentes." },
  { title: "Orientación a resultados", desc: "Medimos impacto, no solamente horas de capacitación." },
  { title: "Visión ejecutiva", desc: "Traducimos proyectos complejos en información para la toma de decisiones." },
  { title: "Transferencia de conocimiento", desc: "El objetivo es que el equipo pueda aplicar lo aprendido inmediatamente." },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Diferenciadores</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          ¿Por qué nosotros?
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-line bg-panel p-7">
              <h3 className="font-display text-base font-600">{r.title}</h3>
              <p className="mt-2 text-sm text-dim">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
