// Fotografías de Pexels (licencia libre para uso comercial: pexels.com/license).
// Son fotografía de stock genérica, no fotos reales de sesiones de Innova Sprint —
// reemplazar por fotografía propia en cuanto se tengan capacitaciones documentadas.
const photos = [
  {
    src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1",
    alt: "Equipo analizando indicadores de proyecto",
    tag: "Análisis de KPIs",
    tall: false,
  },
  {
    src: "https://images.pexels.com/photos/8636606/pexels-photo-8636606.jpeg?auto=compress&cs=tinysrgb&w=900&h=1150&dpr=1",
    alt: "Sesión de planeación con notas adhesivas",
    tag: "Taller de planeación",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1",
    alt: "Equipo colaborando en retrospectiva",
    tag: "Retrospectiva de equipo",
    tall: false,
  },
  {
    src: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1",
    alt: "Presentación ejecutiva de resultados",
    tag: "Presentación ejecutiva",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="section-eyebrow">Así trabajamos</span>
        <h2 className="mt-4 font-display text-3xl font-700 leading-tight md:text-4xl">
          Sesiones reales, no diapositivas leídas en voz alta.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-dim">
          Talleres prácticos con el equipo trabajando sobre sus propios proyectos, no ejercicios
          genéricos de salón de clases.
        </p>

        <div className="mt-11 grid grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[250px]">
          {photos.map((p, i) => (
            <div
              key={p.tag}
              className={`group relative overflow-hidden rounded-2xl border border-line ${
                p.tall ? "md:row-span-2" : ""
              } ${i === 3 ? "md:row-span-2" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover brightness-[0.85] saturate-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
              <span className="absolute bottom-3.5 left-3.5 rounded-full border border-line bg-bg/60 px-3 py-1.5 font-mono text-[11px] text-ink backdrop-blur-sm">
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
