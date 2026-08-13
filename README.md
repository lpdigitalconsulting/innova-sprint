# INNOVA SPRINT — Sitio web

Consultoría en Project Management, PMO, Agile y Transformación Digital.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons.

## Concepto de marca

- **Nombre:** INNOVA SPRINT
- **Tagline:** "Transformamos la forma en que las organizaciones ejecutan sus proyectos."
- **Paleta:** fondo `#070A10`, paneles `#10141C` / `#151B26`, texto `#F3F5F9`, acento dual índigo→cian (`#5B6EF5` → `#22D3C7`).
- **Tipografía:** Space Grotesk (display), Inter (cuerpo), IBM Plex Mono (datos/labels).
- **Signature visual:** grafo de nodos en el Hero (Strategy → Portfolio → Programs → Projects → Teams → Results).

## Estructura del proyecto

```
innova-sprint/
├── app/
│   ├── layout.tsx        # Metadata, SEO, schema.org
│   ├── page.tsx           # Ensambla todas las secciones
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustSection.tsx       # "No capacitamos. Transformamos."
│   ├── Services.tsx / ServiceCard.tsx
│   ├── TrainingPrograms.tsx   # In-company + programas empaquetados
│   ├── Methodology.tsx        # Diagnóstico + proceso circular
│   ├── Metrics.tsx            # ⚠️ Placeholders — ver sección abajo
│   ├── Industries.tsx
│   ├── WhyUs.tsx
│   ├── TechnologyStack.tsx
│   ├── CTA.tsx
│   ├── ContactForm.tsx / ContactSection.tsx
│   ├── Footer.tsx
│   └── FloatingCTA.tsx        # Botón flotante, listo para WhatsApp Business
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── tailwind.config.ts
├── package.json
└── .env.example
```

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## ⚠️ Antes de publicar — datos placeholder

Este sitio se construyó **sin inventar clientes, cifras ni testimonios**, tal como se solicitó.
Busca estos marcadores y reemplázalos con información real antes de publicar:

- `components/Metrics.tsx` — cifras de impacto (`[XX]`)
- `app/layout.tsx` — dominio real (`siteUrl`), imagen Open Graph (`/og-image.jpg`)
- `components/FloatingCTA.tsx` — enlace real de WhatsApp Business
- `components/Footer.tsx` — datos fiscales / aviso de privacidad
- `components/TechnologyStack.tsx` — validar qué integraciones están realmente implementadas
- `public/sitemap.xml` y `public/robots.txt` — dominio real

## Conectar el formulario de contacto

`components/ContactForm.tsx` tiene el `handleSubmit` listo para conectarse a:
- Una API route propia (`app/api/contact/route.ts`)
- Un servicio de email transaccional (Resend, SendGrid)
- Un CRM (HubSpot, Salesforce) vía su API

## Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no requiere configuración adicional.
4. Agrega las variables de entorno de `.env.example` en el panel de Vercel (Settings → Environment Variables).
5. Deploy. Cada push a `main` genera un nuevo despliegue automáticamente.

## Próximos pasos sugeridos

- Reemplazar placeholders de métricas con datos reales validados.
- Conectar formulario a un CRM o servicio de email.
- Agregar imagen Open Graph (`public/og-image.jpg`, 1200×630px).
- Configurar dominio propio y actualizar `siteUrl` en `app/layout.tsx`.
- Integrar Google Analytics / Search Console una vez publicado.
