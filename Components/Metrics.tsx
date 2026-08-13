// Cifras reales de la trayectoria profesional del equipo fundador (CV verificado).
// Enmarcadas como experiencia del fundador, NO como métricas agregadas de Innova Sprint
// como empresa nueva — evita afirmar resultados de la empresa que aún no existen.
const metrics = [
  { value: "+10", label: "Años liderando estrategia de TI y transformación digital" },
  { value: "120+", label: "Proyectos en portafolios dirigidos simultáneamente" },
  { value: "32", label: "Personas en equipos multidisciplinarios liderados" },
  { value: "3", label: "Certificaciones activas: PMP, CSM y CDTO" },
];

export default function Metrics() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Experiencia que respalda el método</span>
        <h2 className="mt-4 mb-10 font-display text-3xl font-700 leading-tight md:text-4xl">
          No partimos de cero. El fundador ya lo hizo a esta escala.
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center md:text-left">
              <p className="font-display text-4xl font-700 text-transparent bg-accent-gradient bg-clip-text">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-dim">{m.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-dim">
          Cifras de la trayectoria profesional del equipo fundador (banca, retail, automotriz y
          salud) — no cifras agregadas de Innova Sprint como empresa nueva.
        </p>
      </div>
    </section>
  );
}
