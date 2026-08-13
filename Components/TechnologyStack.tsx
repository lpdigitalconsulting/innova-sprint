const tools = [
  "Jira",
  "Azure DevOps",
  "MS Project",
  "Power BI",
  "ServiceNow",
  "SAP",
  "Microsoft 365",
  "Planner",
  "Teams",
];

export default function TechnologyStack() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Ecosistema</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          Project Management meets Technology.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-dim">
          Trabajamos con las herramientas que tu organización ya usa para dar visibilidad real al
          portafolio de proyectos.
        </p>

        <div className="relative mt-16 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-line bg-panel p-10">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-line bg-panel2 px-5 py-2.5 font-mono text-sm text-dim transition-colors hover:border-accent2/50 hover:text-ink"
            >
              {tool}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-dim">
          Referencias de ecosistema tecnológico habitual en proyectos empresariales. [VALIDAR
          INTEGRACIONES TÉCNICAS ESPECÍFICAS ANTES DE PUBLICAR]
        </p>
      </div>
    </section>
  );
}
