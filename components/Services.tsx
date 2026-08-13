import {
  ClipboardList,
  Building2,
  GitBranch,
  CalendarClock,
  BarChart3,
  Users,
  ShieldAlert,
  Rocket,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "Project Management",
    description: "Administración integral de proyectos, de la planeación al cierre.",
    topics: ["Alcance", "Cronograma", "Presupuesto", "KPIs"],
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "PMO & Project Governance",
    description: "Diseñamos y evolucionamos el gobierno de proyectos de tu organización.",
    topics: ["Portafolio", "Priorización", "RACI", "Reporting"],
    icon: Building2,
  },
  {
    number: "03",
    title: "Agile & Scrum",
    description: "Capacitación y acompañamiento para equipos que adoptan agilidad.",
    topics: ["Scrum", "Kanban", "Product Backlog", "Métricas Agile"],
    icon: GitBranch,
  },
  {
    number: "04",
    title: "MS Project",
    description: "Capacitación práctica orientada a portafolios reales.",
    topics: ["WBS", "Ruta crítica", "Baselines", "Earned Value"],
    icon: CalendarClock,
  },
  {
    number: "05",
    title: "Power BI para Project Managers",
    description: "Convertimos datos de proyectos en información ejecutiva.",
    topics: ["Avance", "Riesgos", "Recursos", "Portafolio"],
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Liderazgo & Stakeholder Management",
    description: "Habilidades para líderes de proyectos que negocian y deciden.",
    topics: ["Negociación", "Influencia", "Comunicación ejecutiva"],
    icon: Users,
  },
  {
    number: "07",
    title: "Gestión de Riesgos",
    description: "Anticipamos problemas antes de que se conviertan en crisis.",
    topics: ["Risk matrix", "Mitigación", "Risk owners", "Monitoreo"],
    icon: ShieldAlert,
  },
  {
    number: "08",
    title: "Transformación Digital",
    description: "Conectamos procesos, tecnología y personas.",
    topics: ["Automatización", "Change management", "Tech roadmap"],
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Soluciones</span>
          <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
            Soluciones diseñadas para equipos de alto desempeño
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
