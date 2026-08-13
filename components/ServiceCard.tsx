import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  topics: string[];
  icon: LucideIcon;
}

export default function ServiceCard({ number, title, description, topics, icon: Icon }: ServiceCardProps) {
  return (
    <div className="card-hover flex flex-col rounded-2xl border border-line bg-panel p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-dim">{number}</span>
        <Icon size={20} className="text-accent2" strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-display text-lg font-600">{title}</h3>
      <p className="mt-2 text-sm text-dim">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {topics.slice(0, 4).map((t) => (
          <li
            key={t}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-dim"
          >
            {t}
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className="mt-6 text-sm font-semibold text-accent2 hover:text-accent1"
      >
        Ver solución →
      </a>
    </div>
  );
}
