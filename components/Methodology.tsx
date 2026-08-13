"use client";

import { motion } from "framer-motion";

const diagnosticSteps = [
  { n: "01", label: "Diagnóstico" },
  { n: "02", label: "Diseño" },
  { n: "03", label: "Implementación" },
  { n: "04", label: "Medición" },
];

const cycle = ["Diagnosticar", "Diseñar", "Capacitar", "Implementar", "Medir", "Mejorar"];

export default function Methodology() {
  return (
    <section id="metodologia" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Diagnóstico empresarial</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          Antes de capacitar, entendemos.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-dim">No proponemos cursos. Diseñamos soluciones.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {diagnosticSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-line bg-panel p-6">
              <span className="font-mono text-sm text-accent2">{s.n}</span>
              <p className="mt-2 font-display text-base font-600">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Proceso circular */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-700">Nuestro enfoque</h3>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {cycle.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full border border-line bg-panel px-5 py-2.5 font-mono text-sm text-dim"
                >
                  {step}
                </motion.div>
                {i < cycle.length - 1 && (
                  <span className="text-accent2">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
