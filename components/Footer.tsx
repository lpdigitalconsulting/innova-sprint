const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Capacitación", href: "#capacitacion" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Innova Sprint" className="h-8 w-8 rounded-full" />
              <p className="font-display text-lg font-700">
                INNOVA<span className="bg-accent-gradient bg-clip-text text-transparent">SPRINT</span>
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-dim">
              Innovamos · Agilizamos · Transformamos. Transformamos la forma en que las
              organizaciones ejecutan sus proyectos.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-dim hover:text-ink">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-dim md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} INNOVA SPRINT. Todos los derechos reservados.</span>
          <span>[REEMPLAZAR CON DATOS FISCALES / AVISO DE PRIVACIDAD REALES]</span>
        </div>
      </div>
    </footer>
  );
}
