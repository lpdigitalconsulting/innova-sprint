"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Strategy", x: 60, y: 40 },
  { label: "Portfolio", x: 200, y: 100 },
  { label: "Programs", x: 60, y: 160 },
  { label: "Projects", x: 200, y: 220 },
  { label: "Teams", x: 60, y: 280 },
  { label: "Results", x: 200, y: 340 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];

export default function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
            Innovamos · Agilizamos · Transformamos
          </span>

          <h1 className="mt-7 font-display text-4xl font-700 leading-[1.05] tracking-tight md:text-5xl lg:text-[3.4rem]">
            Transformamos la forma en que las organizaciones{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              ejecutan sus proyectos.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-dim">
            Consultoría, capacitación y transformación para equipos que necesitan convertir
            estrategia en resultados.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-xl bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-bg"
            >
              Agenda una sesión estratégica
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-line px-7 py-3.5 text-sm font-semibold text-ink hover:border-accent1/50"
            >
              Conoce nuestras soluciones
            </a>
          </div>
        </div>

        {/* Signature: node graph — Project Management Operating System */}
        <div className="relative mx-auto h-[380px] w-[260px]">
          <svg viewBox="-100 -20 420 420" className="h-full w-full">
            {edges.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="url(#edgeGradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.2, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}
            <defs>
              <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1AA6FF" />
                <stop offset="100%" stopColor="#01E9FE" />
              </linearGradient>
            </defs>
            {nodes.map((n, i) => (
              <g key={n.label}>
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r="5"
                  fill="#01E9FE"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r="10"
                  fill="none"
                  stroke="#01E9FE"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0], scale: [1, 2.2, 2.2] }}
                  transition={{
                    duration: 2.4,
                    delay: 1 + i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                />
                <text
                  x={n.x + (n.x < 130 ? -14 : 14)}
                  y={n.y + 4}
                  textAnchor={n.x < 130 ? "end" : "start"}
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fill="#8B93A3"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </header>
  );
}
