"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Capacitación", href: "#capacitacion" },
  { label: "Consultoría", href: "#metodologia" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Innova Sprint" className="h-9 w-9 rounded-full" />
          <span className="font-display text-lg font-700 tracking-tight">
            INNOVA<span className="bg-accent-gradient bg-clip-text text-transparent">SPRINT</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-dim transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-bg md:inline-block"
        >
          Agenda una sesión
        </a>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-dim hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent-gradient px-5 py-2.5 text-center text-sm font-semibold text-bg"
          >
            Agenda una sesión
          </a>
        </div>
      )}
    </nav>
  );
}
