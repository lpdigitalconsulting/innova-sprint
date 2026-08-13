"use client";

import { useState } from "react";

const modalities = ["In Company", "Virtual", "Presencial", "Híbrida"];
const personalization = ["Industria", "Nivel de experiencia", "Herramientas utilizadas", "Metodología", "Objetivos", "Problemas actuales"];

const programs = [
  {
    name: "Administración y Gestión de Proyectos",
    desc: "El curso base: cómo se dirige un proyecto de principio a fin, con el criterio de quien lo ha hecho en portafolios reales.",
    duration: "16 horas · 2 días",
    profile: "PM junior a semi-senior",
    modules: ["Ciclo de vida del proyecto", "Definición de alcance", "Estructura de desglose (WBS)", "Estimación y presupuesto", "Cierre y lecciones aprendidas"],
  },
  {
    name: "Planeación y Seguimiento de Proyectos",
    desc: "Cómo construir un plan que sobreviva el primer contacto con la realidad, y cómo darle seguimiento sin perseguir a nadie.",
    duration: "12 horas · 2 días",
    profile: "PM / Coordinador de proyectos",
    modules: ["Cronograma y ruta crítica", "Línea base (baseline)", "Earned Value (EVM)", "Reportes de avance ejecutivo", "Control de cambios"],
  },
  {
    name: "Gestión de Riesgos",
    desc: "Anticipar problemas antes de que se conviertan en crisis — con matrices y dueños de riesgo, no con intuición.",
    duration: "8 horas · 1 día",
    profile: "PM / Líder de proyecto",
    modules: ["Identificación de riesgos", "Matriz de probabilidad e impacto", "Planes de mitigación", "Asignación de risk owners", "Monitoreo continuo"],
  },
  {
    name: "Agile / Scrum",
    desc: "Scrum aplicado a equipos reales, no el marco de teoría de certificación sin contexto de negocio.",
    duration: "16 horas · 2 días",
    profile: "Scrum Master / Product Owner / Equipo",
    modules: ["Agile mindset", "Roles y ceremonias Scrum", "Product Backlog y estimación", "Sprint Planning y Review", "Retrospectivas efectivas", "Métricas ágiles (velocity, burndown)"],
  },
  {
    name: "MS Project",
    desc: "La herramienta que todos usan pero pocos dominan — de cronogramas básicos a reportes ejecutivos de portafolio.",
    duration: "12 horas · 2 días",
    profile: "PM / Coordinador de proyectos",
    modules: ["Configuración inicial y WBS", "Dependencias entre tareas", "Gestión de recursos", "Ruta crítica y baselines", "Reportes y exportación ejecutiva"],
  },
  {
    name: "Power BI Aplicado a Proyectos",
    desc: "Nuestro mayor diferenciador: convertir datos de proyectos en dashboards que la dirección realmente usa para decidir.",
    duration: "16 horas · 2 días",
    profile: "PM con foco en datos / PMO",
    modules: ["Modelado de datos de proyecto", "Dashboards de avance y presupuesto", "Visualización de riesgos e issues", "KPIs de portafolio", "Storytelling ejecutivo con datos"],
  },
  {
    name: "Liderazgo y Manejo de Equipos",
    desc: "Las habilidades blandas que en realidad son las más difíciles — dirigir personas, no solo tareas.",
    duration: "12 horas · 2 días",
    profile: "PM / Líder de equipo",
    modules: ["Estilos de liderazgo situacional", "Comunicación efectiva", "Manejo de conflictos", "Motivación y retención de talento", "Feedback y desarrollo de equipo"],
  },
  {
    name: "Negociación y Gestión de Stakeholders",
    desc: "Cómo alinear prioridades cuando todos los interesados creen que su prioridad es la más importante.",
    duration: "12 horas · 2 días",
    profile: "PM / Gerente de proyecto",
    modules: ["Mapeo de stakeholders", "Estrategias de negociación", "Comunicación con altos directivos", "Manejo de expectativas", "Resolución de conflictos de interés"],
  },
];

export default function TrainingPrograms() {
  const [active, setActive] = useState(0);
  const p = programs[active];

  return (
    <section id="capacitacion" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Capacitación empresarial</span>
          <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
            Capacitación que sucede donde realmente importa: en tus proyectos.
          </h2>
          <p className="mt-5 text-lg text-dim">
            No creemos en cursos genéricos. Diseñamos experiencias de aprendizaje alineadas con
            los retos reales de cada organización.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel p-7">
            <h3 className="font-display text-base font-600">Modalidades</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {modalities.map((m) => (
                <span key={m} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-dim">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-7">
            <h3 className="font-display text-base font-600">Personalización</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {personalization.map((p2) => (
                <span key={p2} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-dim">
                  {p2}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a href="#contacto" className="mt-8 inline-block rounded-xl bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-bg">
          Diseñar capacitación para mi equipo
        </a>

        {/* Programas interactivos */}
        <div className="mt-20">
          <span className="section-eyebrow">Programas</span>
          <h3 className="mt-4 font-display text-2xl font-700">Programas empaquetados</h3>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {programs.map((prog, i) => (
              <button
                key={prog.name}
                onClick={() => setActive(i)}
                className={`rounded-full border px-5 py-2.5 font-mono text-sm transition-all ${
                  active === i
                    ? "border-transparent bg-accent-gradient font-bold text-bg"
                    : "border-line bg-panel text-dim hover:border-accent2/40 hover:text-ink"
                }`}
              >
                {prog.name}
              </button>
            ))}
          </div>

          <div className="mt-7 rounded-[20px] border border-line bg-panel p-9">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <h4 className="font-display text-2xl font-700">{p.name}</h4>
                <p className="mt-2 max-w-md text-sm text-dim">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-dim">⏱ {p.duration}</span>
                <span className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-dim">🎯 {p.profile}</span>
              </div>
            </div>

            <div className="relative mt-9 pl-1.5">
              <div className="absolute bottom-1.5 left-4 top-1.5 w-0.5 bg-accent-gradient opacity-40" />
              {p.modules.map((m, i) => (
                <div key={m} className="relative py-0 pb-5 pl-11 last:pb-0">
                  <div className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel2 font-mono text-xs text-accent2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h5 className="font-display text-sm font-600">{m}</h5>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-block rounded-xl bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-bg"
            >
              Cotizar este programa →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
