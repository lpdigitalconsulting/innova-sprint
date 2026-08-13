"use client";

import { useState } from "react";

// Número de WhatsApp de Innova Sprint (confirmado por el fundador, formato: 52 + 10 dígitos)
const WHATSAPP_NUMBER = "525532779717";

const interestOptions = [
  "Capacitación",
  "Consultoría PMO",
  "Agile / Scrum",
  "Project Management",
  "Power BI",
  "MS Project",
  "Gestión de riesgos",
  "Liderazgo",
  "Transformación digital",
  "Otro",
];

const modalityOptions = ["In Company", "Virtual", "Presencial", "Híbrida"];

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = new FormData(e.currentTarget);
    const get = (k: string) => (form.get(k) as string)?.trim() || "—";

    const message = [
      "Hola, quiero información sobre Innova Sprint 👋",
      "",
      `*Nombre:* ${get("nombre")}`,
      `*Empresa:* ${get("empresa")}`,
      `*Cargo:* ${get("cargo")}`,
      `*Email:* ${get("email")}`,
      `*Teléfono:* ${get("telefono")}`,
      `*Personas a capacitar:* ${get("personas")}`,
      `*Servicio de interés:* ${get("servicio")}`,
      `*Modalidad:* ${get("modalidad")}`,
      `*Mensaje:* ${get("mensaje")}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-panel p-8 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Empresa" name="empresa" required />
        <Field label="Cargo" name="cargo" />
        <Field label="Email corporativo" name="email" type="email" required />
        <Field label="Teléfono" name="telefono" type="tel" />
        <Field label="Número aproximado de personas a capacitar" name="personas" type="number" />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-dim">¿Qué necesitas?</label>
          <select
            name="servicio"
            required
            className="w-full rounded-lg border border-line bg-panel2 px-4 py-2.5 text-sm text-ink focus:border-accent2 focus:outline-none"
          >
            <option value="">Selecciona una opción</option>
            {interestOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-dim">Modalidad</label>
          <select
            name="modalidad"
            className="w-full rounded-lg border border-line bg-panel2 px-4 py-2.5 text-sm text-ink focus:border-accent2 focus:outline-none"
          >
            {modalityOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm text-dim">Mensaje</label>
        <textarea
          name="mensaje"
          rows={4}
          className="w-full rounded-lg border border-line bg-panel2 px-4 py-2.5 text-sm text-ink focus:border-accent2 focus:outline-none"
          placeholder="Cuéntanos el reto que enfrenta tu equipo de proyectos"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-bg md:w-auto disabled:opacity-70"
      >
        Enviar por WhatsApp
      </button>
      <p className="mt-3 text-xs text-dim">
        Al enviar, se abrirá WhatsApp con tu mensaje ya redactado — solo confirmas el envío.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-dim">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-line bg-panel2 px-4 py-2.5 text-sm text-ink focus:border-accent2 focus:outline-none"
      />
    </div>
  );
}
