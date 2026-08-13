import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const siteUrl = "https://www.innovasprint.com"; // [REEMPLAZAR CON DOMINIO REAL]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INNOVA SPRINT | Consultoría en Project Management, PMO y Transformación Digital",
    template: "%s | INNOVA SPRINT",
  },
  description:
    "Consultoría y capacitación empresarial en Project Management, PMO, Agile, Power BI y Transformación Digital. Programas in-company diseñados para equipos que necesitan convertir estrategia en resultados.",
  keywords: [
    "capacitación project management",
    "capacitación project manager",
    "cursos project management empresas",
    "capacitación Scrum empresarial",
    "capacitación Agile in company",
    "capacitación Power BI proyectos",
    "capacitación MS Project",
    "consultoría PMO",
    "implementación PMO",
    "transformación digital",
    "capacitación empresarial",
    "Project Management México",
  ],
  openGraph: {
    title: "INNOVA SPRINT | Transformamos la forma en que las organizaciones ejecutan sus proyectos",
    description:
      "Consultoría, capacitación y transformación para equipos que necesitan convertir estrategia en resultados.",
    url: siteUrl,
    siteName: "INNOVA SPRINT",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // [REEMPLAZAR CON IMAGEN OG REAL]
        width: 1200,
        height: 630,
        alt: "INNOVA SPRINT — Consultoría en Project Management y Transformación Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INNOVA SPRINT | Consultoría en Project Management y Transformación Digital",
    description: "Transformamos la forma en que las organizaciones ejecutan sus proyectos.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "INNOVA SPRINT",
  description:
    "Consultoría y capacitación empresarial en Project Management, PMO, Agile y Transformación Digital.",
  url: siteUrl,
  areaServed: "MX",
  serviceType: [
    "Project Management Consulting",
    "PMO Implementation",
    "Agile & Scrum Training",
    "Power BI for Project Managers",
    "Digital Transformation Consulting",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
